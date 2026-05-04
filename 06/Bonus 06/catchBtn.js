const btn = document.getElementById('clickBtn')

let mouseX = 0;
let mouseY = 0;

let x = 0;
let y = 0;

let targetX = 0;
let targetY = 0;

let speed = 0.001;
let distance = 0;
const maxDistance = 20;

let didMouseTouch = false;

let isMouseMoving = false;
let stopTimeout;

//saves mouse position + calculates distance between btn and mouse
document.addEventListener('mousemove', (e) => {
    console.log('stop moving')
    isMouseMoving = true;
    btn.classList.remove('curious');

    mouseX = e.clientX;
    mouseY = e.clientY;

    clearTimeout(stopTimeout);
    //if mouse has stopped moving for a certain time, saves target position for movement
    stopTimeout = setTimeout(() => {
        if (!didMouseTouch) {
            console.log('coming closer')
            isMouseMoving = false;
            btn.classList.remove('frightened');
            btn.classList.add('curious');

            targetX = mouseX;
            targetY = mouseY;

            speed = 0.001;
        }
    }, 500);
})

//sends signal if mouse touches btn + sets target position to a random position on screen
//within a certain distance of the element
btn.addEventListener('mouseover', function() {
    flyYouFool();
}) 

function flyYouFool () {
    console.log('it TOUCHED');
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    didMouseTouch = true;
    btn.classList.remove('curious');
    btn.classList.add('frightened');

    targetX = Math.random() * maxX;
    targetY = Math.random() * maxY;

    speed = 0.5;

    const rect = btn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const dX = btnCenterX - mouseX;
    const dY = btnCenterY - mouseY;

    distance = Math.sqrt(dX * dX + dY * dY);

    return distance;
}

//moves btn towards target position if mouse has stopped moving or has touched btn
function animate () {
    if(!isMouseMoving || didMouseTouch) {
        x += (targetX - x) * speed;
        y += (targetY - y) * speed;

        if( distance >= maxDistance) {
            console.log('far enough')
            didMouseTouch = false;
        }
        
    } else {
        x += 0;
        y += 0;
        
        didMouseTouch = false;
    }

    btn.style.transform = `translate(${x}px, ${y}px)`

    requestAnimationFrame(animate);
}

animate();