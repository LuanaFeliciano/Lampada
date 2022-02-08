const turnON = document.getElementById ('turnON');
const turnOFF = document.getElementById ('turnOFF');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampON () {
    if ( !isLampBroken () ) {

    lamp.src = 'ligada.jpg'; 
    }
}

function lampOFF () {
    if ( !isLampBroken()) {
    lamp.src = 'desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = 'quebrada.jpg';
}

turnON.addEventListener ('click', lampON);
turnOFF.addEventListener('click',lampOFF);

lamp.addEventListener('mouseover', lampON);
lamp.addEventListener('mouseleave', lampOFF);
lamp.addEventListener ('dblclick', lampBroken);
