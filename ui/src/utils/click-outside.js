import { listenOpts } from './event.js'

let timer

const
  { notPassiveCapture } = listenOpts,
  vmList = []

function globalHandler (evt) {
  clearTimeout(timer)

  const target = evt.target

  if (
    target === void 0 ||
    target.nodeType === 8 ||
    // directives that prevent click by using pointer-events:none generate click on html element
    target === document.documentElement ||
    target.classList.contains('no-pointer-events') === true
  ) {
    return
  }

  for (let i = vmList.length - 1; i >= 0; i--) {
    const vm = vmList[i]()

    if (
      (
        vm.anchorEl === void 0 ||
        vm.anchorEl.contains(target) === false
      ) &&
      (
        target === document.body ||
        vm.$refs.inner.contains(target) === false
      )
    ) {
      // mark the event as being processed by clickOutside
      // used to prevent refocus after menu close
      evt.qClickOutside = true
      vm.__onClickOutside(evt)
    }
    else {
      return
    }
  }
}

export function addClickOutside (getVm) {
  vmList.push(getVm)

  if (vmList.length === 1) {
    document.addEventListener('mousedown', globalHandler, notPassiveCapture)
    document.addEventListener('touchstart', globalHandler, notPassiveCapture)
  }
}

export function removeClickOutside (getVm) {
  const index = vmList.findIndex(h => h === getVm)

  if (index > -1) {
    vmList.splice(index, 1)

    if (vmList.length === 0) {
      clearTimeout(timer)
      document.removeEventListener('mousedown', globalHandler, notPassiveCapture)
      document.removeEventListener('touchstart', globalHandler, notPassiveCapture)
    }
  }
}