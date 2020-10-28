<!--
 * @Descripttion : echats 图表
 * @Autor        : 李晓超
 * @Date         : 2020-06-05 09:37:29
 * @LastEditTime : 2020-06-19 16:33:18
 * @FilePath     : \src\components\Echarts.vue
--> 
<template>
  <div class="box">
    <div
      class="echarts"
      id="echarts"
      ref="echarts"
      style="width: 500px; height: 400px; border: 1px solid #ccc;"
    ></div>
    <div
      class="echarts"
      ref="echarts2"
      style="width: 500px; height: 400px; border: 1px solid #ccc;"
    ></div>
    <div
      class="echarts"
      ref="echarts3"
      style="width: 500px; height: 400px; border: 1px solid #ccc;"
    ></div>
    <div
      class="echarts"
      ref="echarts4"
      style="width: 500px; height: 400px; border: 1px solid #ccc;"
    ></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      xAxisData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      seriesData: [10, 52, 200, 334, 390, 330, 220],
      opt: {},
      activeModel: 1,

      option: {
        seriesD: [
          {
            name: "园地",
            type: "bar",
            stack: "2018",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "耕地",
            type: "bar",
            stack: "2018",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "草地",
            type: "bar",
            stack: "2018",
            data: [150, 232, 201, 154, 190, 330, 410]
          },

          {
            name: "园地",
            type: "bar",
            stack: "2019",
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: "耕地",
            type: "bar",
            stack: "2019",
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: "草地",
            type: "bar",
            stack: "2019",
            data: [60, 72, 71, 74, 190, 130, 110]
          }
        ]
      },

      data: [
        {
          data: [
            {
              data: [
                {
                  trqslx: "微度",
                  value: "103525.3665"
                },
                {
                  trqslx: "轻度",
                  value: "5903.1144"
                },
                {
                  trqslx: "中度",
                  value: "968.9346"
                },
                {
                  trqslx: "强烈",
                  value: "339.6096"
                },
                {
                  trqslx: "极强烈",
                  value: "141.0813"
                },
                {
                  trqslx: "剧烈",
                  value: "20.8062"
                }
              ],
              tdlylx: "耕地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "11859.7257"
                },
                {
                  trqslx: "轻度",
                  value: "541.7199"
                },
                {
                  trqslx: "中度",
                  value: "96.993"
                },
                {
                  trqslx: "强烈",
                  value: "39.8502"
                },
                {
                  trqslx: "极强烈",
                  value: "21.0024"
                },
                {
                  trqslx: "剧烈",
                  value: "9.0378"
                }
              ],
              tdlylx: "园地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "24486.0399"
                },
                {
                  trqslx: "轻度",
                  value: "7767.3717"
                },
                {
                  trqslx: "中度",
                  value: "1103.157"
                },
                {
                  trqslx: "强烈",
                  value: "316.8999"
                },
                {
                  trqslx: "极强烈",
                  value: "257.94"
                },
                {
                  trqslx: "剧烈",
                  value: "59.0418"
                }
              ],
              tdlylx: "林地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "4034.3697"
                },
                {
                  trqslx: "轻度",
                  value: "1933.3089"
                },
                {
                  trqslx: "中度",
                  value: "433.1187"
                },
                {
                  trqslx: "强烈",
                  value: "142.3998"
                },
                {
                  trqslx: "极强烈",
                  value: "79.0128"
                },
                {
                  trqslx: "剧烈",
                  value: "25.8318"
                }
              ],
              tdlylx: "草地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "建设用地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "交通运输用地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "水域及水利设施用地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "其它土地"
            }
          ],
          name: "2020年水土流失面积"
        },
        {
          data: [
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "耕地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "园地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "林地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "草地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "建设用地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "交通运输用地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "水域及水利设施用地"
            },
            {
              data: [
                {
                  trqslx: "微度",
                  value: "0"
                },
                {
                  trqslx: "轻度",
                  value: "0"
                },
                {
                  trqslx: "中度",
                  value: "0"
                },
                {
                  trqslx: "强烈",
                  value: "0"
                },
                {
                  trqslx: "极强烈",
                  value: "0"
                },
                {
                  trqslx: "剧烈",
                  value: "0"
                }
              ],
              tdlylx: "其它土地"
            }
          ],
          name: "2019年水土流失面积"
        }
      ]
    };
  },
  mounted() {
    console.log(this.data);
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs.echarts);
      var myChart2 = this.$echarts.init(this.$refs.echarts2);
      var myChart3 = this.$echarts.init(this.$refs.echarts3);
      // 绘制图表
      myChart.setOption(this.options);
      myChart2.setOption(this.options2);
      myChart3.setOption(this.options3);

      myChart.on("click", () => {
        if (this.activeModel % 2 != 0) {
          myChart.setOption(this.options2);
        } else {
          myChart.setOption(this.options);
        }
        this.activeModel = this.activeModel + 1;
      });
    }
  },
  computed: {
    options() {
      let opt = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["直接访问", "邮件营销", "联盟广告"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight"
            },
            data: [320, 302, 301]
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight"
            },
            data: [120, 132, 101]
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "insideRight"
            },
            data: [220, 182, 191]
          }
        ],
        color: ["#2EC7C9", "#B6A2DE", "#5AB1EF"]
      };
      return opt;
    },

    options2() {
      let opt = {
        legend: {
          data: ["0-0.2", "0.2-0.4", "0.4-0.6", "0.6-0.8", "0.8-1"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          data: ["耕地", "林地", "园地", "草地", "建设用地", "其他"]
        },
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "0-0.2",
            stack: "1",
            data: [120, 140, 130, 111, 222, 123, 40, 100],
            type: "bar",
            barMaxWidth: "30px",
            sdata: [
              {
                name: "0-0.2",
                data: [200, 100, 300],
                ty: "水田"
              },
              {
                name: "0.2-0.4",
                data: [200, 100, 300],
                ty: "水浇地"
              },
              {
                name: "0.2-0.4",
                data: [200, 100, 300],
                ty: "旱地"
              }
            ]
          },
          {
            name: "0.2-0.4",
            stack: "1",
            data: [150, 140, 130, 67, 89, 12, 12, 34],
            type: "bar",
            sdata: [
              {
                name: "0-0.2",
                data: [200, 100, 300],
                ty: "水田"
              },
              {
                name: "0.2-0.4",
                data: [200, 100, 300],
                ty: "水浇地"
              },
              {
                name: "0.2-0.4",
                data: [200, 100, 300],
                ty: "旱地"
              }
            ]
          },
          {
            name: "0.4-0.6",
            stack: "1",
            data: [110, 140, 130, 70, 112, 24, 102, 90],
            type: "bar",
            sdata: [
              {
                name: "0-0.2",
                data: [200, 100, 300],
                ty: "水田"
              },
              {
                name: "0.2-0.4",
                data: [200, 100, 300],
                ty: "水浇地"
              },
              {
                name: "0.2-0.4",
                data: [200, 100, 300],
                ty: "旱地"
              }
            ]
          },
          {
            name: "0.6-0.8",
            stack: "1",
            data: [150, 140, 130, 112, 56, 78, 90, 50],
            type: "bar",
            sdata: [
              {
                name: "0-0.2",
                data: [200, 100, 300],
                ty: "水田"
              },
              {
                name: "0.2-0.4",
                data: [200, 100, 300],
                ty: "水浇地"
              },
              {
                name: "0.2-0.4",
                data: [200, 100, 300],
                ty: "旱地"
              }
            ]
          },
          {
            name: "0.8-1",
            stack: "1",
            data: [110, 140, 130, 57, 112, 57, 120, 140],
            type: "bar",
            sdata: [
              {
                name: "0-0.2",
                data: [200, 100, 300],
                ty: "水田"
              },
              {
                name: "0.2-0.4",
                data: [200, 100, 300],
                ty: "水浇地"
              },
              {
                name: "0.2-0.4",
                data: [200, 100, 300],
                ty: "旱地"
              }
            ]
          }
        ],
        color: ["#2EC7C9", "#B6A2DE", "#5AB1EF", "#FFB980", "#D87A80"]
      };
      return opt;
    },

    options3() {
      let op = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["微度", "轻度", "中度", "强度", "极强烈", "剧烈"]
        },
        tooltip: {
          formatter: function(params) {
            let option = {
              seriesD: [
                {
                  name: "微度",
                  type: "bar",
                  year: "2019",
                  stack: "2018",
                  data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name: "轻度",
                  type: "bar",
                  stack: "2018",
                  data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name: "中度",
                  type: "bar",
                  stack: "2018",
                  data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                  name: "强度",
                  type: "bar",
                  stack: "2018",
                  data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name: "极强烈",
                  type: "bar",
                  stack: "2018",
                  data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name: "剧烈",
                  type: "bar",
                  stack: "2018",
                  data: [150, 232, 201, 154, 190, 330, 410]
                },

                {
                  name: "微度",
                  year: "2020",
                  type: "bar",
                  stack: "2019",
                  data: [620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                  name: "轻度",
                  type: "bar",
                  stack: "2019",
                  data: [120, 132, 101, 134, 290, 230, 220]
                },
                {
                  name: "中度",
                  type: "bar",
                  stack: "2019",
                  data: [60, 72, 71, 74, 190, 130, 110]
                },
                {
                  name: "强度",
                  type: "bar",
                  stack: "2019",
                  data: [620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                  name: "极强烈",
                  type: "bar",
                  stack: "2019",
                  data: [120, 132, 101, 134, 290, 230, 220]
                },
                {
                  name: "剧烈",
                  type: "bar",
                  stack: "2019",
                  data: [60, 72, 71, 74, 190, 130, 110]
                }
              ]
            };
            var num = params.seriesId.substr(params.seriesId.length - 1, 1);
            if (num == "0") {
              var aa = "2019年：\n";
              for (var i = 0; i < 6; i++) {
                aa += ` <br /> 
                      ${option.seriesD[i].name} : ${
                  option.seriesD[i].data[params.dataIndex]
                } km²
                  `;
              }
              return aa;
            } else {
              var aa = "2020年：\t";
              for (var i = 6; i < option.seriesD.length; i++) {
                aa += ` <br />
                  ${option.seriesD[i].name} 
                  :
                  ${option.seriesD[i].data[params.dataIndex]} km²`;
              }
              return aa;
            }
            for (var i = 0; i < option.seriesD[0].data.length; i++) {
              if (option.seriesD[0].data[i].name == params) {
                return params + ":" + option.seriesD[0].data[i].value + "起";
              }
            }
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        color: [
          "#5AB1EF",
          "#44C781",
          "#2EC7C9",
          "#FFB980",
          "#D87A80",
          "#B6A2DE"
        ],
        xAxis: [
          {
            type: "category",
            data: [
              "耕地",
              "园地",
              "林地",
              "草地",
              "建设用地",
              "交通运输用地",
              "其他"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "微度",
            type: "bar",
            year: "2019",
            stack: "2018",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "轻度",
            type: "bar",
            stack: "2018",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "中度",
            type: "bar",
            stack: "2018",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "强度",
            type: "bar",
            stack: "2018",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "极强烈",
            type: "bar",
            stack: "2018",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "剧烈",
            type: "bar",
            stack: "2018",
            data: [150, 232, 201, 154, 190, 330, 410]
          },

          {
            name: "微度",
            year: "2020",
            type: "bar",
            stack: "2019",
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: "轻度",
            type: "bar",
            stack: "2019",
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: "中度",
            type: "bar",
            stack: "2019",
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: "强度",
            type: "bar",
            stack: "2019",
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: "极强烈",
            type: "bar",
            stack: "2019",
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: "剧烈",
            type: "bar",
            stack: "2019",
            data: [60, 72, 71, 74, 190, 130, 110]
          }
        ]
      };
      return op;
    }
  },
  components: {},
  beforeDestroy() {}
};
</script>

<style scoped lang="scss">
.box {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .echarts {
    width: 50%;
  }
  .echarts:not(:first-child) {
    margin-top: 20px;
  }
}
</style>