const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

//disabled checkbox
checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");
// selectColor = document.querySelector("#SelectColor");

//Assign color to elements
elements.forEach(function(element) {
    const color = getRandomColor();

    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectColor.innerHTML = color;
});

//Generate Random color func
function getRandomColor() {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Check if right color
elements.forEach(function(element) {
    element.addEventListener("click", function() {
        if (element.innerHTML === selectColor.innerHTML) {
            alert("You are human!");
        } else {}
    });
});