// 게임 규칙 설명
// - 사용자가 입력한 숫자가 랜덤으로 생성된 숫자보다 크다면 down
// - 사용자가 입력한 숫자가 랜덤으로 생성된 숫자보다 작다면 up
// - 사용자가 입력한 숫자가 랜덤으로 생성된 숫자와 일치하다면 커피쿠폰 당첨
// - 단! 기회는 5번

// 프로그램 로직 작성 순서
// 1. 랜덤값을 생성하는 함수를 작성
// 2. 맞추기 버튼을 클릭시 사용자가 입력한 input의 value값을 console창에 출력
// 3. 사용자가 입력한 값과 랜덤값을 비교를 하여 출력부분의 내용변경(up,down,커피당첨)
// 4. 맞추기를 누를때마다 남은기회를 1씩 차감하고 변경된 값을 출력
// 5. 기회를 5번 다썼거나, 정답을 맞추면 맞추기 버튼을 비활성화
// 6. 리셋버튼을 클릭시 랜덤값 재생성, 기회를 5번,버튼은 사용가능으로 초기화

let randomNumber = 0;
let chance = 5;
let checkBtn = document.getElementById("check-btn");
let resetBtn = document.getElementById("reset-btn");
let inputArea = document.getElementById("input-area");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");

function random() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("생성된 랜덤값 :", randomNumber);
  // Math.random() = 0~1사이의 랜덤값을 만들어주는 함수
  // Math.floor() = 소수점을 다 버리는 함수
  // *100을 하는 이유 = 0부터 99까지의 값을 만들기 위해
  // +1을 하는 이유 = 1부터 100까지 숫자를 사용하기 위해
}

random();

checkBtn.addEventListener("click", function () {
  let input_val = inputArea.value;
  console.log("입력값 : ", input_val);
  chance--;
  console.log("남은기회 : ", chance);
  chanceArea.innerHTML = "남은기회는 " + chance + "회";

  if (chance == 0 || input_val == randomNumber) {
    checkBtn.disabled = true;
  }

  if (input_val > randomNumber) {
    resultArea.innerHTML = "Down!!!!";
  } else if (input_val < randomNumber) {
    resultArea.innerHTML = "Up!!!!";
  } else {
    resultArea.innerHTML = "커피쿠폰 당첨!!";
  }
});

resetBtn.addEventListener("click", function () {
  random();
  chance = 5;
  chanceArea.innerHTML = `남은기회는 ${chance}회`;
  resultArea.innerHTML = "업일까 다운일까";
  checkBtn.disabled = false;
});
