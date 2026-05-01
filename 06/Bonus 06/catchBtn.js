const btn = document.getElementById('clickBtn')

let mouseX = 0;
let mouseY = 0;

let x = 0;
let y = 0;

let targetX = 0;
let targetY = 0;

const speed = 0.001;
const distance;

let didMouseTouch = false;

let isMouseMoving = false;
let stopTimeout;

//saves mouse position + calculates distance between btn and mouse
document.addEventListener('mousemove', (e) => {
    isMouseMoving = true;

    mouseX = e.clientX;
    mouseY = e.clientY;

    const rect = btn.getBoundingClientRect();
    const btnMiddleX = rect.left + rect.width / 2;
    const btnMiddleY = rect.top + rect.height / 2;

    const dX = mouseX - btnMiddleX;
    const dY = mouseY - btnMiddleY;

    const distance = Math.hypot(dX, dY);

    clearTimeout(stopTimeout);
    //if mouse has stopped moving for a certain time, saves target position for movement
    stopTimeout = setTimeout(() => {
        if (!didMouseTouch) {
            isMouseMoving = false;

            targetX = mouseX;
            targetY = mouseY;

            speed = 0.001;
        }
    }, 500);
})

//sends signal if mouse touches btn + sets target position to a random position on screen
btn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    didMouseTouch = true;
    speed = 0.5;

    targetX = Math.random() * maxX;
    targetY = Math.random() * maxY;
})

//moves btn towards target position if mouse has stopped moving or has touched btn
function animate () {
    if(!isMouseMoving || didMouseTouch) {
        x += (targetX - x) * speed;
        y += (targetY - y) * speed;

        //PROBLEM! has to be checked again 
        // -> Goal: resets mouse touch, so that element might move closer again
        if(distance > 10) {
            didMouseTouch = false;
        }
    }

    btn.style.transform = `translate(${x}px, ${y}px)`

    requestAnimationFrame(animate);
}

animate();