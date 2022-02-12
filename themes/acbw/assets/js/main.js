(function () {
  window.addEventListener("DOMContentLoaded", () => {
    scrollTopInit("js-btn-top")
  })

  function scrollTopInit(bstr) {
    const btn = document.getElementById(bstr);
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    const scrollPos = debounce(function() {
      const pos = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      if(pos !== 0 && pos > 120 ) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    }, 250);

    if (btn) {
      btn.addEventListener("click", function(e) {
        document.body.scrollTop = doc.scrollTop = 0;
      }, false);
      window.addEventListener("scroll", scrollPos);
    }
  }

  // UTILITY FUNCTIONS
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }
})()

