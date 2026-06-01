class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = ["+", "-", "*", "/"];
        // tokens.reverse();
        for (let i = 0; i < tokens.length; i++) {
            if (operators.includes(tokens[i])) {
                const operand1 = stack.pop();
                const operand2 = stack.pop();
                switch (tokens[i]) {
                    case "+":
                        stack.push(operand2 + operand1);
                        break;
                    case "-":
                        stack.push(operand2 - operand1);
                        break;
                    case "*":
                        stack.push(operand2 * operand1);
                        break;
                    case "/":
                        stack.push(Math.trunc(operand2 / operand1));
                        break;
                }
            } else {
                stack.push(parseInt(tokens[i]));
            }
        }
        return stack.pop();
    }
}
