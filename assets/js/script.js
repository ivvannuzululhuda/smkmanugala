// Nav Hover

document.querySelectorAll('.navbar-nav .nav-item').forEach(function (everyitem) {

  everyitem.addEventListener('mouseover', function (e) {

    let el_link = this.querySelector('a[data-bs-toggle]');

    if (el_link != null) {
      let nextEl = el_link.nextElementSibling;
      el_link.classList.add('show');
      nextEl.classList.add('show');
    }

  });
  everyitem.addEventListener('mouseleave', function (e) {
    let el_link = this.querySelector('a[data-bs-toggle]');

    if (el_link != null) {
      let nextEl = el_link.nextElementSibling;
      el_link.classList.remove('show');
      nextEl.classList.remove('show');
    }


  })
});

// Scroll

let mybutton = document.getElementById("return-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "inline";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// End Scroll