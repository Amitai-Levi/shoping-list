const ul = document.querySelector("ul");
const input = document.querySelector("#item");
const add = document.querySelector("button");
add.setAttribute("onclick", "addClick()");
function addClick() {
  newItem = input.value;
  input.value = "";
  const li = document.createElement("li");
  const spn = document.createElement("span");
  const rem = document.createElement("button");
  li.appendChild(spn);
  li.appendChild(rem);
  spn.textContent = newItem;
  rem.textContent = "Delete";
  ul.appendChild(li);
  rem.setAttribute("onclick", "remove(this)");

  ul.appendChild(li);
  input.focus();
}
function remove(rem) {
  rem.parentNode.remove();
}
