const inp = document.getElementById("myInput");
const addBtn = document.querySelector(".addBtn");
const items = document.getElementById("myUL");

let check = false;

addBtn.addEventListener("click", () => {
  if (inp.value === "") {
    alert("Enter the title...");
  } else {
    const listItem = document.createElement("li");

    listItem.innerHTML = `${inp.value} <div class="close">\u00D7</div>`;

    listItem.querySelector(".close").addEventListener("click", () => {
      listItem.remove();
    });

    items.appendChild(listItem);
    inp.value = "";

    listItem.addEventListener("click", () => {
      check = !check;
      if (check) {
        listItem.className = "checked";
      } else {
        listItem.className = "";
      }
    });
  }
});
