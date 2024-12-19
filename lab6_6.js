// Функція для перевірки правильності закриття дужок
const checkBrackets = (str) => {
    const stack = [];
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (const char of str) {
        if (brackets[char]) {
            // Якщо це відкрита дужка, додаємо її в стек
            stack.push(char);
        } else if (Object.values(brackets).includes(char)) {
            // Якщо це закрита дужка
            const last = stack.pop(); // Виймаємо останню відкриту дужку
            if (brackets[last] !== char) {
                return false; // Невідповідність відкритої та закритої дужки
            }
        }
    }

    // Якщо стек порожній, всі дужки закриті правильно
    return stack.length === 0;
};

// Функція для обробки введеного тексту
const validateBrackets = () => {
    const code = document.getElementById("code").value;
    const resultElement = document.getElementById("result");

    if (!code.trim()) {
        resultElement.textContent = "Введіть текст для перевірки.";
        resultElement.style.color = "red";
        return;
    }

    const isValid = checkBrackets(code);
    resultElement.textContent = isValid
        ? "Дужки розставлені правильно!"
        : "Помилка у розстановці дужок!";
    resultElement.style.color = isValid ? "green" : "red";

    console.log(`Результат перевірки для "${code}":`, isValid);
};
