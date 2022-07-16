"use-strict";

const counter = document.querySelector(".viewerCount");
const updateViews = async () => {
  const res = await fetch(
    "https://q2e4zs9v0c.execute-api.us-east-1.amazonaws.com/prod/count",
    {
      method: "GET",
    }
  );

  const result = await res.json();
  const count = result.Attributes.views;
  counter.innerHTML = `viewers : ${count || 0}`;
};
updateViews();
