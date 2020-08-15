function fadeOutEffect(link) {
  let fadeTarget = document.getElementsByClassName("page__content")[0]
  var fadeEffect = setInterval(function() {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1
    } else {
      clearInterval(fadeEffect)
      window.location = link
    }
  }, 50)
}

document.addEventListener("DOMContentLoaded", function(event) {
  let elems = document.getElementsByClassName("menu__list__item__link")
  for (var i = 0; i < elems.length; i++) {
    let link = elems[i].href
    elems[i].addEventListener(
      "click",
      function(e) {
        e.preventDefault()
        fadeOutEffect(link)
      },
      true
    )
  }
})
