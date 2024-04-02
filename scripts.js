document.addEventListener('DOMContentLoaded', (event) => {
    const moveBox = document.querySelector('.moveBox');
    if (!moveBox) return;

    const boundingClientRect = moveBox.getBoundingClientRect();

    moveBox.onmousemove = function(e) {
        const x = e.clientX - boundingClientRect.left;
        const y = e.clientY - boundingClientRect.top;

        const xc = boundingClientRect.width / 2;
        const yc = boundingClientRect.height / 2;

        const dx = x - xc;
        const dy = y - yc;

        moveBox.style.setProperty("--rx", `${dy / -3}deg`);
        moveBox.style.setProperty('--ry', `${dx /15}deg`);
    };

    moveBox.onmouseleave = function(e) {
        moveBox.style.setProperty('--rx', '0');
        moveBox.style.setProperty('--ry', '0');
        moveBox.style.setProperty('--tz', '-12px');
    };

    moveBox.onmousedown = function(e) {
        moveBox.style.setProperty('--tz', '-25px');
    };

    document.body.onmouseup = function(e) {
        moveBox.style.setProperty('--tz', '-12px');
    };
});

function printPage(){
    window.print();
}