
// plugin about
const console = window.console ? window.console : {}

/**
 * use jquery plugin slimScroll
 * @param el
 * @param options
 */
export function slimScroll (el, options) {
  /* eslint-disable no-undef */
  if (!el) {
    console.error('el should be null')
  }
  if (typeof $.fn.slimScroll !== 'undefined') {
    const $el = $(el)
    $el.slimScroll({destroy: true}).height('auto')
    $el.slimScroll(Object.assign({
      height: ($el.height() / 4 * 3) + 'px',
      color: 'rgba(0,0,0,0.2)',
      alwaysVisible: false,
      size: '3px'
    }, options || {}))
  } else if (typeof $.fn.slimScroll === 'undefined' && window.console) {
    console.error('Error: the fixed layout requires the slimscroll plugin!')
  }
}

export function nativeScroll (el) {
  console.log(el)
}
