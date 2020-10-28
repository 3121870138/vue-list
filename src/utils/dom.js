/**
 * 获取元素相对于document左上角的距离
 * @param elem
 * @returns {{top: number, left: number}}
 */
export function offset (elem) {
  // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
  // Support: IE <=11+
  // Running getBoundingClientRect on a
  // disconnected node in IE throws an error
  if (!elem.getClientRects().length) {
    return { top: 0, left: 0 }
  }

  // Get document-relative position by adding viewport scroll to viewport-relative gBCR
  const rect = elem.getBoundingClientRect()
  const win = elem.ownerDocument.defaultView
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  }
}
