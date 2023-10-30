// console.log
// 변수

console.log("Hello World");
console.log('Hello@@@');
console.log('hello@@@','world','javascript');

let str='Hello Javascript';
let number=30;
console.log("문자열" + str);
console.log("숫자" + number);
console.log("문자열" ,str);
console.log("숫자" , number);


// function
function sayHello()
{
    alert("Say!! Hello");
    console.log("normal result");
}


// object type
let obj = {
    number:30, // property
    sayHello: function() {
        console.log('obj->Hello1');
        console.log('obj->Hello2');
        console.log('obj->Hello3');
    },
};

console.log("object type", obj);


// DOM
// 1. "운동" 을 "헬스3대운동" 으로 변경
// 2. 클래스 네임이 item 인 요소를 모두출력
// 3. HTML 태그가 "li" 인 것을 모두 출력

let titleName = document.getElementById("title");
titleName.textContent="헬스3대운동";
let items=document.getElementsByClassName("item");
console.log(items);
console.log("벤치프레스: " + items[2]);