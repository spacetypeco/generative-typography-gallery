document.addEventListener("DOMContentLoaded", function(event) {
  var ul = document.querySelector('.content-wrap.listing-wrap');
  if (ul) {
    for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
    }
  }

  var script = document.createElement('script');
  script.src="/assets/js/orange-mountain.js"
  document.head.appendChild(script)
});

