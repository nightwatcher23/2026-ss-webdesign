const errorBtn = document.getElementsByClassName('container yellow')

errorBtn.addEventListener('click', function() {
    changeColor()
});

function changeColor() {
    console.log("hit");
    errorBtn.classList.remove('yellow');
    errorBtn.classList.add('green');
}