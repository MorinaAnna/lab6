// Функція створення продукту
function createProduct(obj, callback) {
    const product = { ...obj, id: Date.now() }; // Додаємо унікальний id
    console.log("Створено продукт:", product); // Вивід у консоль
    callback(product); // Викликаємо колбек із створеним продуктом
}

// Колбек для логування продукту
function logProduct(product) {
    console.log("Деталі продукту:", product);
    displayProduct(product); // Виводимо продукт у список на сторінці
}

// Колбек для логування загальної вартості продукту
function logTotalPrice(product) {
    console.log(`Загальна вартість продукту "${product.name}": ${product.price * product.quantity} грн`);
}

// Функція для додавання продукту в список на сторінці
function displayProduct(product) {
    const productList = document.getElementById("productList");
    const productItem = document.createElement("li");
    productItem.textContent = `Назва: ${product.name}, Ціна: ${product.price} грн, Кількість: ${product.quantity}, Загальна вартість: ${product.price * product.quantity} грн, ID: ${product.id}`;
    productList.appendChild(productItem);
}

// Функція для взаємодії з HTML
function createExampleProduct() {
    // Зчитуємо значення з полів введення
    const name = document.getElementById("productName").value;
    const price = Number(document.getElementById("productPrice").value);
    const quantity = Number(document.getElementById("productQuantity").value);

    // Перевіряємо коректність введення
    if (!name || isNaN(price) || price <= 0 || isNaN(quantity) || quantity <= 0) {
        document.getElementById("result").textContent = "Будь ласка, введіть коректні дані.";
        document.getElementById("result").style.color = "red";
        console.error("Помилка: некоректні дані для створення продукту.");
        return;
    }

    // Створюємо об'єкт продукту
    const newProduct = { name, price, quantity };

    // Викликаємо createProduct з різними колбеками
    createProduct(newProduct, logProduct);
    createProduct(newProduct, logTotalPrice);

    // Виводимо повідомлення про успіх
    document.getElementById("result").textContent = `Продукт "${name}" успішно створено!`;
    document.getElementById("result").style.color = "green";

    // Логування успішного створення
    console.log(`Продукт "${name}" додано до списку.`);
}
