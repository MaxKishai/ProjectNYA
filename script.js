const campaigns = [
    {
        id: 1,
        title: "Збір на FPV-дрони для земляків",
        description: "Терміновий збір на комплектуючі для збірки 5 FPV-дронів. Хлопці з нашого міста зараз на Донецькому напрямку.",
        category: "military", categoryName: "Військові",
        goalText: "Потрібно: 60 000 грн",
        currentAmount: 45000, goalAmount: 60000, unit: "грн"
    },
    {
        id: 2,
        title: "Плетіння маскувальних сіток",
        description: "Запрошуємо долучитися до плетіння осінніх маскувальних сіток у місцевому Палаці Культури. Робочі руки потрібні завжди!",
        category: "social", categoryName: "Волонтерство",
        goalText: "Потрібні: волонтери",
        currentAmount: 12, goalAmount: 0, unit: "людей вже записалося"
    },
    {
        id: 3,
        title: "Корм для притулку тварин",
        description: "З настанням холодів місцевий притулок критично потребує сухого корму для собак та котів.",
        category: "animals", categoryName: "Тварини",
        goalText: "Потрібно: 15 000 грн",
        currentAmount: 2000, goalAmount: 15000, unit: "грн"
    }
];

function renderCampaigns() {
    const container = document.getElementById('campaigns-container');
    container.innerHTML = '';

    campaigns.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="card-category category-${item.category}">${item.categoryName}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="goal">${item.goalText}</div>
            <button class="btn" style="border: none; cursor: pointer; font-size: 16px; width: 100%;" onclick="openModal(${item.id})">Долучитися</button>
        `;
        container.appendChild(card);
    });
}

function openModal(id) {
    const campaign = campaigns.find(c => c.id === id);
    document.getElementById('modal-title').innerText = campaign.title;
    
    const financialBlock = document.getElementById('financial-block');
    const volunteerBlock = document.getElementById('volunteer-block');

    // Перевіряємо категорію: якщо це волонтерство (social), показуємо форму
    if (campaign.category === 'social') {
        financialBlock.style.display = 'none';
        volunteerBlock.style.display = 'block';
        document.getElementById('modal-status').innerText = `${campaign.currentAmount} ${campaign.unit}`;
    } else {
        // Якщо це фінанси/речі, показуємо прогрес-бар
        financialBlock.style.display = 'block';
        volunteerBlock.style.display = 'none';
        document.getElementById('modal-status').innerText = `Зібрано: ${campaign.currentAmount} з ${campaign.goalAmount} ${campaign.unit}`;
        
        let percent = (campaign.currentAmount / campaign.goalAmount) * 100;
        if (percent > 100) percent = 100;
        setTimeout(() => {
            document.getElementById('progress-bar').style.width = percent + '%';
        }, 100);
    }

    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('progress-bar').style.width = '0%';
    // Очищаємо поля вводу при закритті
    document.getElementById('volunteer-name').value = '';
    document.getElementById('volunteer-phone').value = '';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-overlay');
    if (event.target === modal) closeModal();
}

document.addEventListener('DOMContentLoaded', renderCampaigns);