<!--
 * @Descripttion : 地图
 * @Autor        : 李晓超
 * @Date         : 2020-05-05 09:54:06
 * @LastEditTime : 2020-06-23 11:16:39
 * @FilePath     : \src\components\Map.vue
--> 
<template>
  <div class="map-content">
    <span
      v-for="item in listData"
      :key="item.id"
      class="spans"
      @click="goTO(item.countyCode)"
    >{{item.countyName}}</span>
    <div ref="map" id="map"></div>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";
export default {
  name: "MonitorMap",
  data() {
    return {
      map: null,
      mapView: null,
      listData: [
        { id: 0, countyCode: "410781000", countyName: "卫辉市" },
        { id: 1, countyCode: "410825000", countyName: "温县" },
        { id: 2, countyCode: "411523000", countyName: "新县" },
        { id: 3, countyCode: "410225000", countyName: "兰考县" },
        { id: 4, countyCode: "410423000", countyName: "鲁山县" }
      ]
    };
  },
  components: {},
  mounted() {
    this.mapInit();
  },
  methods: {
    mapInit() {
      loadModules([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/MapImageLayer"
      ])
        .then(([Map, MapView, MapImageLayer]) => {
          this.map = new Map({
            basemap: "satellite"
          });
          this.mapView = new MapView({
            //实例化地图视图
            container: "map",
            map: this.map,
            zoom: 7,
            center: [113.65, 34.76667]
          });
          this.mapView.ui.components = [];
          let baseLayer = new MapImageLayer(
            "http://1.119.5.181:7070/arcgis/rest/services/HeNanMap/MapServer",
            {
              id: "baseLayer"
            }
          );
          let clipLayer = new MapImageLayer(
            "http://1.119.5.181:7070/arcgis/rest/services/HeNanClicp/MapServer",
            {
              id: "clipLayer",
              opacity: 0.7
            }
          );
          this.map.add(baseLayer);
          this.map.add(clipLayer);

          setTimeout(() => {
            this.featureQuery("410781000");
          }, 1000);
        })
        .catch(err => {
          console.error(err);
        });
    },
    createSymbol(shape = "circle", color = "#77E70E", x = 0, y = 0) {
      return {
        type: "simple-marker",
        style: shape,
        color: color,

        size: "12px",
        outline: {
          color: color,
          width: 0
        },
        xoffset: x,
        yoffset: y
      };
    },
    featureQuery(num) {
      console.log(num);
      if (this.featureLayer) {
        this.map.remove(this.featureLayer);
      }
      //高亮
      loadModules(["esri/layers/FeatureLayer"])
        .then(([FeatureLayer]) => {
          this.featureLayer = new FeatureLayer({
            url: `http://1.119.5.181:7070/arcgis/rest/services/henan/地市县_高亮效果/MapServer/0`,
            definitionExpression: `XZQDM = '${num.substr(0, 6)}'`
          });
          this.map.add(this.featureLayer);
          //查询范围
          let query = this.featureLayer.createQuery();
          query.where = `XZQDM = '${num.substr(0, 6)}'`;
          query.outSpatialReference = this.mapView.spatialReference.isWGS84
            ? { wkid: 4326 }
            : { wkid: 3857 };
          this.featureLayer
            .queryFeatures(query)
            .then(res => {
              console.log(res, 'res')
              this.mapView.goTo(res.features[0]);
            })
            .catch(err => err);
        })
        .catch(err => {
          console.error(err);
        });
    },
    goTO(num) {
      this.featureQuery(num);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.map-content {
  position: relative;
  z-index: 3;
  height: 100%;
  width: 100%;
  #map {
    height: 100%;
    width: 100%;
  }
  .spans {
    cursor: pointer;
    font-size: 20px;
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
