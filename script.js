"use-strict";

const counter = document.querySelector(".viewerCount");
//width of the media device
var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
let count;
const updateViews = async () => {
  const res = await fetch(
    "https://q2e4zs9v0c.execute-api.us-east-1.amazonaws.com/prod/count",
    {
      method: "GET",
    }
  );

  const result = await res.json();
  count = result.Attributes.views;
};
(async () => {
  await updateViews();
  counter.innerHTML = `viewers : ${count || 0}`;
})();

//changing the title when media query max width in 700px
const boardEL = document.querySelector(".board");
const headerEL = document.querySelector("header");
if (width < 700) {
  boardEL.innerHTML = "Board";

  //header changing the item
  const firstEL = headerEL.firstElementChild;
  headerEL.insertBefore(firstEL, headerEL.lastElementChild);
}
