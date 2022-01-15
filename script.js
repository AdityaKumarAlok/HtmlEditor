const first = document.querySelector(".editor");
const iframe = document.querySelector("iframe");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});
