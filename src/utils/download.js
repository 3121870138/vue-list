
/**
 * Created by Sandon on 2019-04-03.
 */
export default function download (method, url, param) {
  method = method.toUpperCase()
  const body = document.getElementsByTagName('body')[0]

  if (method === 'POST') {
    const form = document.createElement('form')
    form.setAttribute('style', 'display:none;')
    form.setAttribute('target', '_blank')
    form.setAttribute('method', method)
    form.setAttribute('action', url)
    form.setAttribute('enctype', 'multipart/form-data')

    for (let key in param) {
      if (param.hasOwnProperty(key) && param[key] !== null) {
        const input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', key)
        input.setAttribute('value', param[key])
        form.appendChild(input)
      }
    }
    body.appendChild(form)
    form.submit()
    body.removeChild(form)
  } else if (method === 'GET') {
    let query = ''
    for (let key in param) {
      if (param.hasOwnProperty(key)) {
        query += query ? '&' : ''
        query += `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`
      }
    }

    const link = document.createElement('a')
    link.setAttribute('style', 'display:none;')
    link.setAttribute('target', '_blank')
    link.setAttribute('href', `${url}?${query}`)

    body.appendChild(link)
    link.click()
    body.removeChild(link)
  }
}
