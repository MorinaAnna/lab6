// Масив твітів із тегами
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Функція для підрахунку тегів
const countTags = (tweetsArray) => {
    return tweetsArray
        .flatMap(tweet => tweet.tags) // Створюємо масив усіх тегів
        .reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1; // Підраховуємо кількість тегів
            return acc;
        }, {}); // Початкове значення - порожній об'єкт
};

// Функція для відображення результату на сторінці
const displayTagCounts = () => {
    const tagCounts = countTags(tweets);

    // Виведення результату у консоль
    console.log("Кількість тегів:", tagCounts);

    // Відображення результату на сторінці
    const resultElement = document.getElementById("result");
    resultElement.textContent = JSON.stringify(tagCounts, null, 2);
};
