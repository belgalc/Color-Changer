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

//<------------------------------------------------------------------------------->
//<------------------------------------------------------------------------------->
// let cont = document.createElement("div");
// let p = 7;
// cont.append(p);
// document.body.appendChild(cont);
// let countDown = () => {
//   cont.innerHTML -= 1;
//   if (cont.innerHTML === "5") {
//     window.open("https://elzero.org", "_blank", "width=500,height=500");
//   } else if (cont.innerHTML === "0") clearInterval(counter);
// };
// let counter = setInterval(countDown, 1000);
//<------------------------------------------------------------------------------->
//<------------------------------------------------------------------------------->
// let cont = document.createElement("div");
// let p = 3;
// cont.append(p);
// document.body.appendChild(cont);
// let countDown = () => {
//   cont.innerHTML -= 1;
//   if (cont.innerHTML === "0") {
//     clearInterval(counter);
//   }
// };
// let counter = setInterval(countDown, 1000);
