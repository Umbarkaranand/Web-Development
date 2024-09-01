const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addToDo(this.value);
        this.value = "";
    }
});

const addToDo = (itemName) => {
    const radioItem1 = document.createElement("input");
    radioItem1.type = "radio";

    const list = document.createElement("li");
    list.innerHTML = `
        <input type="radio">
        <label>
        
            ${itemName}
            
            <i class="fas fa-times"></i>
        </label>
    `;

    const radioInput = list.querySelector("input[type='radio']");
    radioInput.addEventListener("click", function () {
        this.parentNode.classList.toggle("done");
    });

    const deleteButton = list.querySelector("i");
    deleteButton.addEventListener("click", function () {
        list.remove();
    });

    toDoBox.appendChild(list);
};