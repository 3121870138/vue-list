// 接受一个 api 对象
export default function (axios, Api, parameter) {
  return axios(Api.type, Api.url, parameter || {})
}
