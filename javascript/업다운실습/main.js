// 게임 규칙 설명
// 1. 사용자가 입력한 숫자가 컴퓨터가 생성한 랜덤값보다 크다면 down!
// 2. 사용자가 입력한 숫자가 컴퓨터가 생성한 랜덤값보다 작다면 up!
// 3. 입력한 숫자와 랜덤값이 같다면 커피쿠폰 당첨!
// 4. 단! 기회는 5번


// 프로그램 로직 순서

// Step1. 랜덤값을 생성하는 함수를 제작
let randomNumber = 0;   // 랜덤값 넣어주는 변수

function random(){
    randomNumber = Math.floor(Math.random()*100 + 1);
    console.log("랜덤값은?", randomNumber);
    
    // Math.random() = 0 ~ 1사이에 값을 랜덤으로 생성
    // Math.random()*100 = 0 ~ 99까지 출력 그래서 +1을 해줘야 1 ~ 100 출력됨
    // -> 하지만 소수점이 존재
    // -> Math.floor() = 소수점을 제거해주는 함수
}
random();



// Step2. 맞추기 버튼을 클릭했을 때 input 태그에 작성된 값을 conosole창에 출력
//      힌트) addEventListner, input태그는 값이 value에 저장, 익명함수
let inputData = "";
let chance = 5;
let check_btn = document.getElementById("check-btn");
let input_val = document.getElementById("input-area");
let result_area = document.getElementById("result-area");
let chance_area = document.getElementById("chance-area");
let reset_btn = document.getElementById("reset-btn");

check_btn.addEventListener("click", function(){
    // 맞추기 버튼을 클릭할 때마다 실행될 로직을 작성하는 공간
    inputData = input_val.value;
    console.log("인풋값 : ", inputData);


    // Step4. 맞추기를 누를 때 마다 남은 기회(찬스) 1식 감소해야 한다.
    //        그 변경된 값을 chance-area에 반영
    // chance값이 1씩 감소 = --
    // 감소된 값을 chance-area 공간에 출력

    chance--;
    chance_area.innerHTML = "남은 기회는 " + chance + "회";

    // Step5. 기회를 5번 다 썼거나 정답을 맞춘 경우에는 버튼을 비활성 (|| 연산자)
    // 버튼을 비활성화 하는 로직
    
    if(chance === 0 || inputData == randomNumber){
        check_btn.disabled = true;
    }

    // Step3. 사용자가 입력한 값과 랜덤값을 비교해서 result-area의 컨텐츠를 수정(up, down, 당첨)
    //      힌트) 1. 조건문, innerhtml or innertext

    if(inputData > randomNumber){
        result_area.innerHTML = "DOWN!"

    }else if(inputData < randomNumber){
        result_area.innerHTML = "UP!"

    }else{
        result_area.innerHTML = "당첨!"
    }
})

    // Step6. 리셋버튼을 클릭시 랜덤값 재생성, 남은 기회를 5로 변경, 버튼활성화
    //        result-area, chance-area도 처음 화면처럼 만들어주기!
    // 리셋버튼 기능 정의!
reset_btn.addEventListener("click", function(){
    random();
    chance = 5;
    check_btn.disabled = false;
    result_area.innerHTML = "업일까 다운일까";
    chance_area.innerHTML = "남은기회는 " +chance + "회"
})



