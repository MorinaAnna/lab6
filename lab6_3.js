const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

// Функція для обробки масиву
const processFruits = (fruitsArray) => {
    return fruitsArray.map((fruit, index) => ({
        ...fruit,
        discountedPrice: fruit.price * 0.8, // Застосування знижки 20%
        id: index + 1, // Генерація унікального ID
    }));
};

// Функція для відображення фруктів на сторінці
const displayFruits = (fruitsArray) => {
    const fruitsList = document.getElementById("fruitsList");
    fruitsList.innerHTML = ""; // Очищення списку

    fruitsArray.forEach((fruit) => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${fruit.id}, Назва: ${fruit.name}, Початкова ціна: ${fruit.price.toFixed(2)} грн, Ціна зі знижкою: ${fruit.discountedPrice.toFixed(2)} грн`;
        fruitsList.appendChild(listItem);
    });
};

// Основна функція, яку викликає кнопка
const applyDiscount = () => {
    const discountedFruits = processFruits(fruits);
    console.log("Фрукти зі знижкою:", discountedFruits); // Виведення в консоль
    displayFruits(discountedFruits); // Відображення на сторінці
};
