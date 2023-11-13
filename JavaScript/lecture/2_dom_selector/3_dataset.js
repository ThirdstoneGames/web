let h2=document.querySelector('h2');
h2.dataset.test = "Changed Text";
console.log(h2.dataset.test);

let liList = document.querySelectorAll('li');

let item = document.querySelector('img');
let selected = document.querySelector('.selectedItem');

liList[0].addEventListener('click', selectItem);
liList[1].addEventListener('click', selectItem);
liList[2].addEventListener('click', selectItem);

function selectItem(event)
{
    selected.textContent = event.target.textContent;
    item.setAttribute('src',event.target.dataset.img);
}