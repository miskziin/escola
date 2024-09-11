    function submitQuiz() {
        var totalQuestions = 7;
        var score = 0;

        // Respostas corretas
        var correctAnswers = {
            q1: "c",
            q2: "b",
            q3: "d",
            q4: "d",
            q5: "a",
            q6: "c",
            q7: "c"
        };

        // Verificar respostas do usuário
        for (var i = 1; i <= totalQuestions; i++) {
            var question = document.querySelector('input[name="q' + i + '"]:checked');
            if (question && question.value === correctAnswers['q' + i]) {
                score++;
            }
        }

        // Exibir resultado
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "<h2>Você acertou " + score + " de " + totalQuestions + " questões!</h2>";
    }
