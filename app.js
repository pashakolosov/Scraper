const readline = require('readline')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let calculate = () => input.question('enter first number', data => {
    let num1 = Number(data)
    input.question('enter second number', data => {
        let num2 = Number(data)
        input.question('What will doing?', operator => {
            switch (operator) {
                case '+':
                    console.log(num1 + num2)
                    break
                case '-':
                    console.log(num1 - num2)
                    break
                case '*':
                    console.log(num1 * num2)
                    break
                case '/':
                    console.log(num1 / num2)
                    break
            }
            calculate()
        })
        }
    )
})


calculate()