document.addEventListener('DOMContentLoaded', function () {
    const correctButton = document.getElementById('correct-answer');
    const wrongButton = document.getElementById('wrong-answer');

    correctButton.addEventListener('click', function() {
        alert("Chính xác! Đó là câu trả lời đúng.");
        correctButton.style.backgroundColor = 'green';
        window.location.href = '/Game2.4.html';
    });

    wrongButton.addEventListener('click', function() {
        wrongButton.style.backgroundColor = 'red';
        alert("Rất tiếc, đó là câu trả lời sai.");
        
        window.location.href = '/index.html';
    });
});
