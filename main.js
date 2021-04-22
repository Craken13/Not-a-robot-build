const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

//disabled checkbox
checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");
// selectColor = document.querySelector("#SelectColor");

elements.forEach(function(element) {
    const color = getRandomColor();
});

function getRandomColor() {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(math.random() * 16)];
    }
    return color;
}