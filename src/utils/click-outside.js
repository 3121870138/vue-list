/**
 * Created by Sandon on 2019-04-25.
 */
const ctx = '@@feClickOutside'
export default {
  bind (el, binding, vnode) {
    el[ctx] = function (e) {
      if (el.contains(e.target)) {
        binding.value && binding.value.inside && binding.value.inside()
      } else {
        binding.value && binding.value.outside && binding.value.outside()
      }
    }
    window.addEventListener('click', el[ctx])
  },
  unbind (el, binding, vnode) {
    window.removeEventListener('click', el[ctx])
  }
}
