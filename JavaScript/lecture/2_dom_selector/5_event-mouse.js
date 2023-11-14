// event.target.getBoundingClientRect()
// target : 대상 요소 자체
// getBoundingClientRect() : target 의 위치, 크기 등의 정보를 가져옴

let greenBox = document.querySelector('#rectangle');
greenBox.addEventListener('mousedown', function(event)
{
    console.log(event.target.getBoundingClientRect());
})

