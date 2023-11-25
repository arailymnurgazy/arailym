var currentQuestion = 1;
    
        function nextQuestion() {
            var currentQuestionDiv = document.getElementById('question' + currentQuestion);
            currentQuestionDiv.style.display = 'none';
    
            currentQuestion++;
            var nextQuestionDiv = document.getElementById('question' + currentQuestion);
            if (nextQuestionDiv) {
                nextQuestionDiv.style.display = 'block';
                document.getElementById('nextBtn').style.display = 'block'; // Show Next button
            } else {
                showResults();
            }
        }
    
        function restartQuiz() {
            var questions = document.querySelectorAll('.question');
        
            questions.forEach(function (question) {
                var options = question.querySelectorAll('input[type="radio"]');
                var correctAnswer = question.querySelector('.correct-answer');
                var result = document.getElementById('result');
        
                correctAnswer.style.display = 'none'; // Hide the correct answer
        
                options.forEach(function (option) {
                    option.disabled = false; // Enable options for a new quiz
                    option.checked = false; // Uncheck options for a new quiz
                });
            });
        
            var result = document.getElementById('result');
            result.innerHTML = ''; // Clear the result area
        
            currentQuestion = 1; // Reset to the first question
            var firstQuestionDiv = document.getElementById('question1');
            firstQuestionDiv.style.display = 'block';
        
            document.getElementById('nextBtn').style.display = 'block'; // Show Next button
        
            var restartBtn = document.getElementById('restartBtn');
            if (restartBtn) {
                restartBtn.parentNode.removeChild(restartBtn); // Remove the Restart button if it exists
            }
        }
    
        function showResults() {
            var questions = document.querySelectorAll('.question');
            var result = document.getElementById('result');
            result.innerHTML = 'End of Quiz<br><br>';

            questions.forEach(function (question) {
                var options = question.querySelectorAll('input[type="radio"]');
                var selectedOption = Array.from(options).find(option => option.checked);
                var correctAnswer = question.querySelector('.correct-answer');

                correctAnswer.style.display = 'block'; // Display the correct answer

                if (selectedOption) {
                    if (selectedOption === correctAnswer.querySelector('input')) {
                        result.innerHTML += 'Question: ' + question.textContent.trim() + '<br> Your Answer: ' + selectedOption.parentElement.textContent.trim() + '<br> Correct Answer: ' + correctAnswer.textContent.trim() + '<br><br>';
                    } else {
                        result.innerHTML += 'Question: ' + question.textContent.trim() + '<br> Your Answer: ' + selectedOption.parentElement.textContent.trim() + '<br> Correct Answer: ' + correctAnswer.textContent.trim() + '<br><br>';
                    }
                }
            });

            document.getElementById('nextBtn').style.display = 'none'; // Hide Next button
            var restartBtn = document.createElement('button');
            restartBtn.innerHTML = 'Restart Quiz';
            restartBtn.id = 'restartBtn';
            restartBtn.onclick = restartQuiz;
            document.querySelector('.quiz-container').appendChild(restartBtn);
        }