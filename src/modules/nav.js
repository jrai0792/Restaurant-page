function addNavBar() {
  const content = document.getElementById("content");
  let div = document.createElement("div");
  div.classList.add = "flex";
  div.classList.add = "navbar";
  let anchor = document.createElement("a");
  anchor.href = "#";
  anchor.innerText = "Home";
  div.appendChild(anchor);

  let anchor1 = document.createElement("a");
  anchor1.href ="#";
  anchor1.innerText = "Menu";
  div.appendChild(anchor1);

  let anchor2 = document.createElement("a");
  anchor2.href = "#";
  anchor2.innerText = "Contact";
  div.appendChild(anchor2);
  content.appendChild(div);
}

addNavBar();