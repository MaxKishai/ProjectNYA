// Наша "база даних" (Mock Data)
const campaigns = [
    {
        id: 1,
        title: "Збір на FPV-дрони для земляків",
        description: "Терміновий збір на комплектуючі для збірки 5 FPV-дронів. Хлопці з нашого міста зараз на Донецькому напрямку і потребують очей.",
        category: "military",
        categoryName: "Військові",
        goal: "Потрібно: 60 000 грн",
        link: "#"
    },
    {
        id: 2,
        title: "Плетіння маскувальних сіток",
        description: "Запрошуємо всіх небайдужих долучитися до плетіння осінніх маскувальних сіток у місцевому Палаці Культури. Робочі руки потрібні завжди!",
        category: "social",
        categoryName: "Волонтерство",
        goal: "Потрібно: Робочі руки",
        link: "#"
    },
    {
        id: 3,
        title: "Корм для притулку тварин",
        description: "З настанням холодів місцевий притулок критично потребує сухого корму для собак та котів, а також старих теплих ковдр.",
        category: "animals",
        categoryName: "Тварини",
        goal: "Потрібно: Корм та речі",
        link: "#"
    }
];

// Функція для генерації карток і вставки їх на сторінку
function renderCampaigns() {
    const container = document.getElementById('campaigns-container');
    
    // Очищаємо контейнер перед рендером
    container.innerHTML = '';

    // Перебираємо масив з даними
    campaigns.forEach(item => {
        // Створюємо елемент div для картки
        const card = document.createElement('div');
        card.className = 'card';

        // Наповнюємо картку HTML розміткою
        card.innerHTML = `
            <span class="card-category category-${item.category}">${item.categoryName}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="goal">${item.goal}</div>
            <a href="${item.link}" class="btn">Допомогти</a>
        `;

        // Додаємо картку в контейнер на сторінці
        container.appendChild(card);
    });
}

// Запускаємо функцію після повного завантаження сторінки
document.addEventListener('DOMContentLoaded', renderCampaigns);