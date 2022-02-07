// 자바 스크립트에는 기본적으로 변수 하나하나에 메소드를 지원함

const todoForm = document.getElementById("todoFrom"); //html에서 고유 id로 불러오기
// querySelector()로 사용할 수 있음. id를 불러올때는 #, 클래스를 불러올때는 .을 이용
const list = document.querySelector("ul"); //id나 클래스가 없으면 태그 그래도 불러올 수 있음

todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); //새로고침을 막아준다.

  const input = todoForm.querySelector("input");

  /*
    list.innerText =input.value;
        //기존 텍스트를 변경시킴!
    */

  if (input.value.trim()) {
    //공백이랑 예외처리 해주는 메소드
    const li = document.createElement("li");
    //document은 html을 가지고도 있지만 html규칙도 가지고 있어서 괄호안에 있는 태그를 가져올수 있음
    li.innerText = input.value;

    list.append(li);
    //추가하는 기능을 가짐
  }

  input, (value = "");
});
