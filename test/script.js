// alert("Bienvenue dans ma calculatrice ");
theme();

function theme() {
    document.addEventListener('DOMContentLoaded', function() {
        const switchElement = document.getElementById('flexSwitchCheckDefault');

        switchElement.addEventListener('change', function() {
            if (this.checked) {
                document.querySelector("body").style.backgroundColor = "black";
                document.querySelector("body").style.color = "white";
            } else {
                document.querySelector("body").style.backgroundColor = "white";
                document.querySelector("body").style.color = "black";
            }
        });
    });
}

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('resultat');
    const buttons = document.querySelectorAll('.btn');
    let currentExpression = '';
    let res = 0;
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const action = this.getAttribute('data-action');

            if (action === 'clear') {
                currentExpression = '';
                res = 0;
                operator = null;
                inputElement.value = '';
            } else if (action === 'calculate') {
                if (operator && currentExpression) {
                    res = performOperation(res, parseFloat(currentExpression), operator);
                    inputElement.value = res;
                    currentExpression = '';
                    operator = null;
                }
            } else if (action === 'del') {
                currentExpression = currentExpression.slice(0, -1);
                inputElement.value = currentExpression;
            } else if (value) {
                if (['+', '-', '*', '/'].includes(value)) {
                    if (currentExpression) {
                        res = performOperation(res, parseFloat(currentExpression), operator);
                        operator = value;
                        currentExpression = '';
                    } else {
                        operator = value;
                    }
                } else {
                    currentExpression += value;
                    inputElement.value = currentExpression;
                }
            }
        });
    });

    function performOperation(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
});

