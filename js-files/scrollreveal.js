// ScrollReveal().reveal('.revealContent');


let reveal = {
  duration: "2000",
  distance: "100%",
  opacity: "0"
};

let revealLeft = {
  duration: "2000",
  distance: "100%",
  opacity: "0",
  origin: 'left'
};

let revealRight = {
  duration: "2000",
  distance: "100%",
  opacity: "0",
  origin: 'right'
};

ScrollReveal().reveal('.revealContent', reveal);
ScrollReveal().reveal('.revealLeft', revealLeft);
ScrollReveal().reveal('.revealRight', revealRight);

