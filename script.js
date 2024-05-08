let score = 0;
const QA = [
    { q: 1, a: 3 },
    { q: 2, a: 2 },
];

updateScore();

let checkAnswer = 0;

function submitAnswer(question, answer) {

    let QASet = getQASet(question);

    const displayText = document.getElementById(`displayTextQ${question}`);
    displayText.style.display = "block";
    if (QASet.a === answer) {
        displayText.textContent = "คำตอบถูกต้อง";
        displayText.style.color = "rgb(0, 128, 0)";
        score++;
    } else {
        displayText.textContent = "ตอบผิด ลองใหม่อีกครั้ง";
        displayText.style.color = "rgb(180, 8, 8)";
    }
    for (let index = 0; index < 4; index++) {
        const displayButton = document.getElementById(`Q${question}A${index + 1}`);
        displayButton.style.display = "none";
    }
    checkAnswer++;
    updateScore();
    if (checkAnswer === QA.length) {
        const displayStartButton = document.getElementById('startButton');
        displayStartButton.style.display = "block";
    }
}
function getQASet(question) {

    for (let i = 0; i < QA.length; i++) {
        if (QA[i].q === question) {
            return QA[i];
        }
    }
}

function updateScore() {
    document.getElementById('score').innerHTML = score;
}

function start() {
    const displayCard = document.querySelectorAll("div.card");
    displayCard.forEach(element => {
        element.style.display = "block"
    });

    const displayStartButton = document.getElementById('startButton');
    displayStartButton.style.display = "none";

    for (let i = 0; i < QA.length; i++) {
        for (let j = 0; j < 4; j++) {
            const displayButton = document.getElementById(`Q${i + 1}A${j + 1}`);
            displayButton.style.display = "block";
        }
        const displayText = document.getElementById(`displayTextQ${i + 1}`);
        displayText.style.display = "none";
    }
    score = 0;
    checkAnswer = 0;
    updateScore();
}