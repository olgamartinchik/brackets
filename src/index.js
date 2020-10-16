module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let simmetricalBrackets = [];
    let openBrackets = [];
    let closeBrackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        let open = bracketsConfig[i][0];
        let close = bracketsConfig[i][1];
        if (open === close) {
            simmetricalBrackets.push(open);
        } else {
            openBrackets.push(open);
            closeBrackets.push(close);
        }
    }
    for (let bracket of str) {
        if (simmetricalBrackets.includes(bracket)) {
            if (stack[stack.length - 1] === bracket) {
                stack.pop()
            } else {
                stack.push(bracket)
            }
        } else if (openBrackets.includes(bracket)) {
            stack.push(bracket)
        } else if (closeBrackets.includes(bracket)) {
            let pair = openBrackets[closeBrackets.indexOf(bracket)];
            if (stack[stack.length - 1] === pair) {
                stack.pop()
            } else {
                stack.push(bracket);
            }
        }
    }

    return (stack.length === 0)

}
