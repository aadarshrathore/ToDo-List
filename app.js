let btn = document.getElementById('btn');
let input = document.getElementById('input');



function clickHandler(){
let paragraph = document.createElement('p');
paragraph.classList.add('paragraph-styling');
paragraph.innerText = input.value;
output.appendChild(paragraph);
input.value = "";
paragraph.addEventListener('dblclick',()=>
output.removeChild(paragraph))
};
btn.addEventListener('click',clickHandler);
