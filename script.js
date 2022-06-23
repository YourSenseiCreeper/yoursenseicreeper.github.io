descriptionsMap = {
    "c#8": "test",
    "c#9": "test 9"
};

selectedElement = null;

function changeDescription(element, key) {
    if (selectedElement !==  null) {
        selectedElement.classList.remove('selected');
    }
    element.classList.add('selected');
    selectedElement = element;
    document.getElementById("description").innerText = !descriptionsMap[key] ? '' : descriptionsMap[key];
}