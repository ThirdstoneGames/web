console.log("Hello World");

// 1. "운동" 을 "헬스3대운동" 으로 변경
// 2. 클래스 네임이 item 인 요소를 모두출력
// 3. HTML 태그가 "li" 인 것을 모두 출력

let titleName = document.getElementById("title");
titleName.textContent="헬스3대운동";
let items=document.getElementsByClassName("item");
console.log(items);
console.log("벤치프레스: " + items[2]);