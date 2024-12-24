var dynamotoolbarmodule

function pageOnloadEvent (func) {
  var currentOnload = window.onload
  if (typeof window.onload != 'function') {
    window.onload = func
  } else {
    window.onload = function () {
      if (currentOnload) {
        currentOnload()
      }
      func()
    }
  }
}
function dinermenu() {
	dynamomenu()
}
pageOnloadEvent(dinermenu)



