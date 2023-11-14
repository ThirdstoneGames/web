let _inputBox = document.querySelector('#input-box');

// _inputBox.addEventListener('keypress', function(event)
// {
//     console.log('keypress');
// })

// _inputBox.addEventListener('keydown', function(event)
// {
//     console.log('keydown');
// })

// _inputBox.addEventListener('keyup', function(event)
// {
//     console.log('keyup');
//     console.log('event.key: ', event.key);
//     console.log('event.keyCode: ', event.keyCode);
// })

// focus 
// _inputBox.addEventListener('focus', function(event)
// {
//     alert("Focused!");
// })

// // blur : focus 가 사라졌을 때 발생하는 이벤트
// _inputBox.addEventListener('blur', function(event)
// {
//     alert("blur");
// })

// _inputBox.addEventListener('change', function()
// {
//     console.log("Changed");
// })

let _img = document.querySelector('img');
_img.addEventListener('error',function(event)
{
    console.log('error');
    event.target.src = '../../img/apple.jpg';
})