// handle drawer and hamburger
const clickAway = document.querySelector("#click-away");
clickAway.addEventListener("click", (event) => {
  hamburger.classList.remove("is-active");
  header.classList.remove("active");
  drawer.classList.remove("active");
  clickAway.classList.remove("active");
});

const header = document.querySelector("#header");
const navigation = document.querySelector("#navigation");
const drawer = document.querySelector("#drawer");
const hamburger = document.querySelector("#hamburger");

function toggleDrawer() {
  hamburger.classList.toggle("is-active");
  header.classList.toggle("active");
  drawer.classList.toggle("active");
  clickAway.classList.toggle("active");
  navigation.addEventListener("click", (event) => {
    hamburger.classList.remove("is-active");
    header.classList.remove("active");
    drawer.classList.remove("active");
    clickAway.classList.remove("active");
  });
}
