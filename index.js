document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
  });

  const itemsToHover = document.querySelectorAll(".hover");

  for (let i = 0; i < itemsToHover.length; i++) {
    itemsToHover[i].addEventListener("mouseover", () => {
      cursor.classList.remove("shrink");
      cursor.classList.add("expand");
    });

    itemsToHover[i].addEventListener("mouseleave", () => {
      cursor.classList.remove("expand");
      cursor.classList.add("shrink");
    });
  }
});
