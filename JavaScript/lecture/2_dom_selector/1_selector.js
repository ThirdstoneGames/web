console.log("-----This is 1_selector.js");

// 1 get method
var title = document.getElementById("title");
console.log(title);
title.textContent="헬스3대 운동";

let items = document.getElementsByClassName("item");
items[1].textContent = "신제품 벤치프레스";

document.getElementsByTagName("li")[0].textContent = "신제품 스쿼트";

// DOM. HTML 요소 쿼리
console.log("------------DOM----------");
let _title = document.querySelector("title");
console.log(_title);

let h2 = document.querySelector("#title");
console.log(h2);

let itemAll = document.querySelectorAll(".item");
console.log(itemAll[0]);
console.log(itemAll[1]);
console.log(itemAll[2]);

// HTML 요소 조작하기
//h2.textContent = "<span>Exercise!!!!</span>";
//h2.innerHTML = "<span>Exercise!!!!</span>";
//document.querySelector("body").textContent = "Exercise!!"; 


let input = document.querySelector("input");

input.setAttribute('placeholder', "좋아하는 운동을 입력해주세요");
input.removeAttribute('placeholder');

input.setAttribute('required', '');
input.removeAttribute('required');


// HTML 요소 스타일링
// 1. style 을 사용하는 방법
// let _hello = document.querySelector(".hello");
// _hello.style.color='white';
// _hello.style.backgroundColor='black';

// 2. CSS 를 활용해 classList 를 사용하는 방법
let _hello = document.querySelector(".hello");
_hello.classList.add('dark', 'yellow');
_hello.classList.remove('dark','yellow');