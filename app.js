function generateColor (){
    const colorsChoose = document.getElementById('select').value;

    if(colorsChoose === 'blue')document.getElementById('colorChoose').style.background = '#00bfff';
    if(colorsChoose === 'red')document.getElementById('colorChoose').style.background = '#ff0000';
    if(colorsChoose === 'green')document.getElementById('colorChoose').style.background = '#3cb371';
    if(colorsChoose === 'yellow')document.getElementById('colorChoose').style.background = '#ffff00';
    if(colorsChoose === 'hotpink')document.getElementById('colorChoose').style.background = '#ff69b4';
    if(colorsChoose === 'purple')document.getElementById('colorChoose').style.background = '#9370db';
}
document.getElementById('select').addEventListener('change', generateColor);