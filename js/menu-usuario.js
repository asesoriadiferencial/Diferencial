document.getElementById("user-icon").addEventListener("click", function () {
  document.getElementById("dropdown-menu").style.display = "block";
});

document.addEventListener("click", function (event) {
  var dropdownMenu = document.getElementById("dropdown-menu");
  var targetElement = event.target;

  if (
    !dropdownMenu.contains(targetElement) &&
    targetElement.id !== "user-icon"
  ) {
    dropdownMenu.style.display = "none";
  }
});
