function addSnackBar(message, variant) {
  const snackbar = document.querySelector("#snackbar");

  snackbar.classList.add("show");
  snackbar.classList.add(variant);
  snackbar.innerHTML = message;

  setTimeout(() => {
    snackbar.classList.remove("show");
    snackbar.classList.remove(variant);
    snackbar.innerHTML = "";
  }, 3000);
}
