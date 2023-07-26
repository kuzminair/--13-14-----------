var power = 0;
document.getElementById('btn').addEventListener('click', ()=>{
    if (power!=0) {
        turnOff ();
        power = 0;
        document.getElementById('btn').textContent = 'OFF';        
        return;
    }
    else {
        power = 1;
        document.getElementById('btn').textContent = 'ON';
    }
});

document.getElementById('red').addEventListener('click', ()=>{
    if (power!=0) {
        turnOff ();
        document.getElementById('red').style.backgroundColor = `red`;
        return;
    }
});
document.getElementById('yellow').addEventListener('click', ()=>{
    if (power!=0) {
        turnOff ();
        document.getElementById('yellow').style.backgroundColor = `yellow`;
        return;
    }
});
document.getElementById('green').addEventListener('click', ()=>{
    if (power!=0) {
        turnOff ();
        document.getElementById('green').style.backgroundColor = `green`;
        return;
    }
});

function turnOff () {
    document.getElementById('red').style.backgroundColor = `rgb(255, 255, 255)`;
    document.getElementById('yellow').style.backgroundColor = `rgb(255, 255, 255)`;
    document.getElementById('green').style.backgroundColor = `rgb(255, 255, 255)`;
}
