// Клас Client
class Client {
    // Приватні властивості
    #login;
    #email;

    // Конструктор
    constructor(login, email) {
        this.#login = login; // Встановлення значення для #login
        this.#email = email; // Встановлення значення для #email
    }

    // Геттер для login
    get login() {
        return this.#login;
    }

    // Сеттер для login
    set login(newLogin) {
        if (newLogin.trim() === "") {
            console.error("Логін не може бути порожнім!");
            return;
        }
        this.#login = newLogin;
    }

    // Геттер для email
    get email() {
        return this.#email;
    }

    // Сеттер для email
    set email(newEmail) {
        if (!newEmail.includes("@")) {
            console.error("Некоректний email!");
            return;
        }
        this.#email = newEmail;
    }
}

// Функція для створення клієнта
const createClient = () => {
    const loginInput = document.getElementById("login").value;
    const emailInput = document.getElementById("email").value;

    if (!loginInput || !emailInput) {
        document.getElementById("result").textContent = "Будь ласка, заповніть усі поля.";
        document.getElementById("result").style.color = "red";
        return;
    }

    const client = new Client(loginInput, emailInput);
    console.log("Створений клієнт:", client);

    // Відображення результату
    document.getElementById("result").textContent = `Логін: ${client.login}, Email: ${client.email}`;
    document.getElementById("result").style.color = "green";
};
