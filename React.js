const input = document.querySelector(".agend-text");
const agregarButton = document.querySelector(".submit");
const list = document.querySelector("ul");

agregarButton.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    li.className = "liCreated";
    const p = document.createElement("p");
    if(text.length > 20) {
        alert("El texto es muy grande...");
    } else {
        p.textContent = text;

        const miInput = document.createElement("input");
        miInput.setAttribute("type", "checkbox");
        miInput.className = "miInput";
        
        li.appendChild(p);
        li.appendChild(miInput);
        li.appendChild(addDeleteBtn());
        list.appendChild(li);

        input.value = "";
    }
  }
});

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
  
    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "btn-delete";
  
    deleteBtn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      list.removeChild(item);
  
    });
  
    return deleteBtn;
  }
