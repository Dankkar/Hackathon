document.addEventListener('DOMContentLoaded', function () {
    const correctButton = document.getElementById('correct-answer');
    const wrongButton = document.getElementById('wrong-answer');

    correctButton.addEventListener('click', function() {
        alert("Chúc mừng bạn đã hoàn thành thử thách !!!");
        correctButton.style.backgroundColor = 'green';
        window.location.href = '/index.html';
    });

    wrongButton.addEventListener('click', function() {
        alert("Rất tiếc, đó là câu trả lời sai.");
        wrongButton.style.backgroundColor = 'red';
        window.location.href = '/index.html';
    });
});
