const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

const processMedicines = () => {
    const currentDate = new Date(); // Поточна дата

    const validMedicines = Object.entries(medicines)
        .filter(([_, expiryDate]) => expiryDate > currentDate) // Фільтрація за строком придатності
        .sort(([, dateA], [, dateB]) => dateA - dateB) // Сортування за датою
        .map(([name]) => name); // Масив назв

    // Виведення в консоль
    console.log('Актуальні медикаменти:', validMedicines);

    // Виведення на сторінку
    const resultElement = document.createElement('p');
    resultElement.textContent = `Актуальні медикаменти: ${validMedicines.join(', ')}`;
    document.body.appendChild(resultElement);
};

// Виклик функції
processMedicines();
