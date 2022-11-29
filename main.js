let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  //add color to div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  //remove active class for all Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  //add active class to li
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    //remove active class for all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    //Add active class to current element
    e.currentTarget.classList.add("active");
    //Add current color to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    //Change div's color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});


