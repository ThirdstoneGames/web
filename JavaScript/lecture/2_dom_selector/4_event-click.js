let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

btn1.onclick = function()
{
    alert('Property Listener');
};

btn2.addEventListener('click', function()
{
    alert('addEventListener1');
})

// 이렇게 하면 앞 pop up 에서 확인을 누르면 얘가 바로 실행된다.
btn2.addEventListener('click', function()
{
    alert('addEventListener2');
})

// remove 를 할때는 함수를 따로 빼야 한다. 
function removeTest1()
{
    alert("removeTest1");
};

function removeTest2()
{
    alert("removeTest2");
};

btn3.addEventListener('click',removeTest1);
btn3.addEventListener('click',removeTest2);
btn3.removeEventListener('click',removeTest1);