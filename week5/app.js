const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

rockBtn.addEventListener("click", displayMychoice);
scissorsBtn.addEventListener("click", displayMychoice);
paperBtn.addEventListener("click", displayMychoice);

// 선언한 dom 요소에 이벤트 생성
function displayMychoice(e){
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;
    start(clickedBtn);
}

function getComChoice(){
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

//컴퓨터 선택 출력하기
function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

//점수판 기능 구현
let MyScore = 0;
let ComScore = 0;

function updateScore(result) {
    if (result === "Win") {
        MyScore += 1;
    } else if (result ==="Lose") {
        ComScore += 1;
    }
    const MyScoreText = document.getElementById("score-my-score");
    const ComScoreText = document.getElementById("score-computer-score");
    
    MyScoreText.innerText = MyScore;
    ComScoreText.innerText = ComScore;
}

//게임 시작하기
function start(Mychoice){
    let resultArray = getComChoice();
         displayComChoice(resultArray);
//승패 결과
    let ComChoice = resultArray[0];
    let result;
    if (Mychoice === ComChoice) {
        result = "Draw";
    } else if (
        (Mychoice === "rock" && ComChoice === "scissors") ||
        (Mychoice === "scissors" && ComChoice === "paper") ||
        (Mychoice === "paper" && ComChoice === "rock")
    ) {
        result = "Win";
    } else {
        result = "Lose";
    }

    const resultText = document.getElementById("display-result");
    resultText.innerText = result;

    updateScore(result);
}

//다크모드
const DarkMode = document.querySelector("body");
//체크박스 별칭
const checkbox = document.querySelector("input");
//체크박스 클릭시 동작 수행
function darkmode() {
    //바디에서 classlist조회하고 darkmode 
    DarkMode.classList.toggle("dark-mode");
}
checkbox.addEventListener("change", darkmode);
