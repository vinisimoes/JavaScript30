const pressed = [];
const secretCode = "vini";

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(- secretCode.length - 1, pressed.length - secretCode.length);
    currentCode = pressed.join("");
    console.log(currentCode);
    if (currentCode === secretCode) {
        console.log("You got it!");
        cornify_add();
    }
})