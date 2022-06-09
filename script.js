function inputChanged() {
    let value = document.getElementById('input').value;
    let fontSize = document.getElementById('fontSize').value;
    let fontColor = document.getElementById('fontColor').value;
    let accentColor = document.getElementById('accentColor').value;
    
    value = value.replaceAll(/గ/g, 'j').replaceAll(/\n/g, ' ').replaceAll(/ǳ/g, 'dz');

    let words = value.split(' ');
    result = "";
    words.forEach(element => {
        let splitIndex = element.length / 2;
        let outputWord = `<span class="bold" style="color: ${accentColor}">${element.slice(0, splitIndex)}</span>${element.slice(splitIndex, element.length)}`;
        result += outputWord + ' ';
    });
    document.getElementById('output').innerHTML = result;
    document.getElementById('output').style.fontSize = fontSize + 'pt';
    document.getElementById('output').style.color = fontColor;
}