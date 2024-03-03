//!code for count down
//targeting the elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("Hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Set the date we're counting down to
let countDownDate = new Date("Mar 30, 2024 16:20:00").getTime();
// Update the count down every 1 second
let interVale = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // fucntion to formate number if it is single digit
  let addZeros = num => {
    return num < 10 ? `0${num}` : num;
  };

  // Display the result in the element
  daysEl.innerHTML = addZeros(days);
  hoursEl.innerHTML = addZeros(hours);
  minutesEl.innerHTML = addZeros(minutes);
  secondsEl.innerHTML = addZeros(seconds);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(interVale);
    document.getElementById("expired").innerHTML = "EXPIRED";
  }
}, 1000);

//!code for swiper slider
var swiper = new Swiper(".swiper.is-testimonial", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1380: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
