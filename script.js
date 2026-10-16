/* ========================================
   ГЛАВНЫЙ ФАЙЛ JAVASCRIPT
   Работает на всех трёх страницах сайта
   ======================================== */

// ========================================
// 1. МОБИЛЬНОЕ МЕНЮ (БУРГЕР)
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('header__burger--active');
            nav.classList.toggle('nav-list--mobile');
            
            const isExpanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', !isExpanded);
        });

        // Закрытие меню при клике на ссылку
        const navLinks = nav.querySelectorAll('.nav-list__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('header__burger--active');
                nav.classList.remove('nav-list--mobile');
                burger.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

// ========================================
// 2. ЛОГИКА ТЕСТА (test.html)
// ========================================

const quizData = [
    {
        question: 'Что вас больше обрадует после тяжёлого дня?',
        optionA: { text: 'Услышать: "Я горжусь тобой, ты справился отлично"', language: 'words' },
        optionB: { text: 'Получить небольшой сюрприз или подарок', language: 'gifts' }
    },
    {
        question: 'Что для вас важнее в отношениях?',
        optionA: { text: 'Проводить время вместе без отвлечений', language: 'time' },
        optionB: { text: 'Чувствовать заботу через конкретные действия', language: 'service' }
    },
    {
        question: 'Что вас больше расстроит?',
        optionA: { text: 'Партнёр забыл о важной для вас дате', language: 'gifts' },
        optionB: { text: 'Партнёр не помог, когда вы были уставшим', language: 'service' }
    },
    {
        question: 'Как вы предпочитаете выражать любовь?',
        optionA: { text: 'Говорить приятные слова и делать комплименты', language: 'words' },
        optionB: { text: 'Обнимать, держать за руку, прикасаться', language: 'touch' }
    },
    {
        question: 'Что сделает ваш день лучше?',
        optionA: { text: 'Долгий разговор по душам', language: 'time' },
        optionB: { text: 'Неожиданное сообщение с тёплыми словами', language: 'words' }
    },
    {
        question: 'Что для вас знак внимания?',
        optionA: { text: 'Когда партнёр берёт на себя домашние дела', language: 'service' },
        optionB: { text: 'Когда партнёр дарит что-то без повода', language: 'gifts' }
    },
    {
        question: 'Что вас больше всего трогает?',
        optionA: { text: 'Крепкие объятия после долгой разлуки', language: 'touch' },
        optionB: { text: 'Совместный вечер без телефонов', language: 'time' }
    },
    {
        question: 'Как вы понимаете, что вас любят?',
        optionA: { text: 'Когда слышите "Я тебя люблю" и комплименты', language: 'words' },
        optionB: { text: 'Когда чувствуете прикосновения и близость', language: 'touch' }
    },
    {
        question: 'Что важнее для вас в подарок?',
        optionA: { text: 'Чтобы партнёр потратил на вас своё время', language: 'time' },
        optionB: { text: 'Чтобы партнёр помог с тем, что вам тяжело', language: 'service' }
    },
    {
        question: 'Что сделает вас счастливым прямо сейчас?',
        optionA: { text: 'Получить продуманный подарок', language: 'gifts' },
        optionB: { text: 'Услышать искренние слова поддержки', language: 'words' }
    }
];

const languageDescriptions = {
    words: {
        title: 'Слова поощрения',
        description: 'Для вас любовь — это услышать приятные слова, комплименты и слова поддержки. Вы цените, когда партнёр выражает свои чувства вслух или в сообщениях. Искренние слова для вас важнее любых действий.'
    },
    time: {
        title: 'Время вместе',
        description: 'Вы чувствуете любовь, когда партнёр уделяет вам безраздельное внимание. Совместные прогулки, разговоры по душам и время без отвлечений — вот что наполняет вас счастьем.'
    },
    gifts: {
        title: 'Подарки',
        description: 'Для вас подарки — это визуальные символы любви и заботы. Не обязательно дорогие, но продуманные. Вы цените, когда партнёр помнит о важных датах и делает сюрпризы.'
    },
    service: {
        title: 'Помощь',
        description: 'Вы чувствуете любовь через действия. Когда партнёр помогает вам, берёт на себя заботы или облегчает вашу жизнь — это для вас высшее проявление чувств.'
    },
    touch: {
        title: 'Прикосновения',
        description: 'Физическая близость для вас — главный способ чувствовать любовь. Объятия, поцелуи, держание за руку и лёгкие касания наполняют вас теплом и уверенностью.'
    }
};

const languageIcons = {
    words: '<svg width="80" height="80" viewBox="0 0 64 64" fill="none"><path d="M32 52C32 52 12 40 12 26C12 19 17 15 23 15C27 15 30 17 32 21C34 17 37 15 41 15C47 15 52 19 52 26C52 40 32 52 32 52Z" fill="#D48C86" opacity="0.8"/></svg>',
    time: '<svg width="80" height="80" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="22" stroke="#8A9A86" stroke-width="3" fill="none"/><line x1="32" y1="32" x2="32" y2="20" stroke="#8A9A86" stroke-width="3" stroke-linecap="round"/><line x1="32" y1="32" x2="42" y2="32" stroke="#8A9A86" stroke-width="3" stroke-linecap="round"/></svg>',
    gifts: '<svg width="80" height="80" viewBox="0 0 64 64" fill="none"><rect x="16" y="28" width="32" height="24" rx="2" fill="#8A9A86" opacity="0.7"/><rect x="12" y="22" width="40" height="8" rx="2" fill="#8A9A86" opacity="0.7"/><line x1="32" y1="22" x2="32" y2="52" stroke="#D48C86" stroke-width="3"/><path d="M32 22C32 22 26 16 26 16C26 16 32 18 32 22Z" fill="#D48C86"/><path d="M32 22C32 22 38 16 38 16C38 16 32 18 32 22Z" fill="#D48C86"/></svg>',
    service: '<svg width="80" height="80" viewBox="0 0 64 64" fill="none"><path d="M32 14C32 14 20 22 20 32C20 38 25 42 32 42C39 42 44 38 44 32C44 22 32 14 32 14Z" fill="#D48C86" opacity="0.8"/><path d="M32 42V50" stroke="#D48C86" stroke-width="3" stroke-linecap="round"/><path d="M28 46H36" stroke="#D48C86" stroke-width="3" stroke-linecap="round"/></svg>',
    touch: '<svg width="80" height="80" viewBox="0 0 64 64" fill="none"><path d="M20 36C20 36 24 32 28 32C32 32 34 34 34 34" stroke="#8A9A86" stroke-width="3" stroke-linecap="round"/><path d="M44 36C44 36 40 32 36 32C32 32 30 34 30 34" stroke="#8A9A86" stroke-width="3" stroke-linecap="round"/><path d="M24 40C24 40 28 44 32 44C36 44 40 40 40 40" stroke="#8A9A86" stroke-width="3" stroke-linecap="round"/></svg>'
};

// Инициализация теста
const initQuiz = () => {
    const introSection = document.getElementById('introSection');
    const quizSection = document.getElementById('quizSection');
    const resultSection = document.getElementById('resultSection');
    const startBtn = document.getElementById('startQuizBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const restartBtn = document.getElementById('restartQuizBtn');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const questionText = document.getElementById('questionText');
    const optionA = document.getElementById('optionA');
    const optionB = document.getElementById('optionB');
    const optionAText = document.getElementById('optionAText');
    const optionBText = document.getElementById('optionBText');

    if (!introSection || !quizSection) return;

    let currentQuestion = 0;
    let answers = [];
    let scores = { words: 0, time: 0, gifts: 0, service: 0, touch: 0 };

    const updateProgress = () => {
        const progress = ((currentQuestion + 1) / quizData.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressFill.setAttribute('aria-valuenow', progress);
        progressText.textContent = `Вопрос ${currentQuestion + 1} из ${quizData.length}`;
    };

    const showQuestion = () => {
        const question = quizData[currentQuestion];
        questionText.textContent = question.question;
        optionAText.textContent = question.optionA.text;
        optionBText.textContent = question.optionB.text;
        optionA.dataset.language = question.optionA.language;
        optionB.dataset.language = question.optionB.language;

        // Восстановление выбранного ответа
        optionA.classList.remove('option-btn--selected');
        optionB.classList.remove('option-btn--selected');
        
        if (answers[currentQuestion] === 'A') {
            optionA.classList.add('option-btn--selected');
        } else if (answers[currentQuestion] === 'B') {
            optionB.classList.add('option-btn--selected');
        }

        prevBtn.disabled = currentQuestion === 0;
        nextBtn.textContent = currentQuestion === quizData.length - 1 ? 'Завершить' : 'Далее';
        
        updateProgress();
    };

    const calculateResult = () => {
        let maxLanguage = 'words';
        let maxScore = 0;

        for (const [language, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                maxLanguage = language;
            }
        }

        return maxLanguage;
    };

    const showResult = () => {
        const resultLanguage = calculateResult();
        const resultData = languageDescriptions[resultLanguage];

        document.getElementById('resultLanguage').textContent = resultData.title;
        document.getElementById('resultDescription').textContent = resultData.description;
        document.getElementById('resultIcon').innerHTML = languageIcons[resultLanguage];

        quizSection.style.display = 'none';
        resultSection.style.display = 'block';
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleOptionClick = (option) => {
        const selectedLanguage = option.dataset.language;
        const optionLetter = option.id === 'optionA' ? 'A' : 'B';

        // Убираем выделение с обоих вариантов
        optionA.classList.remove('option-btn--selected');
        optionB.classList.remove('option-btn--selected');
        
        // Добавляем выделение выбранному
        option.classList.add('option-btn--selected');
        
        // Сохраняем ответ
        answers[currentQuestion] = optionLetter;

        // Пересчитываем баллы
        scores = { words: 0, time: 0, gifts: 0, service: 0, touch: 0 };
        answers.forEach((answer, index) => {
            if (answer) {
                const language = answer === 'A' 
                    ? quizData[index].optionA.language 
                    : quizData[index].optionB.language;
                scores[language]++;
            }
        });
    };

    startBtn.addEventListener('click', () => {
        introSection.style.display = 'none';
        quizSection.style.display = 'block';
        showQuestion();
    });

    optionA.addEventListener('click', () => handleOptionClick(optionA));
    optionB.addEventListener('click', () => handleOptionClick(optionB));

    nextBtn.addEventListener('click', () => {
        if (!answers[currentQuestion]) {
            alert('Пожалуйста, выберите вариант ответа');
            return;
        }

        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            showResult();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion();
        }
    });

    restartBtn.addEventListener('click', () => {
        currentQuestion = 0;
        answers = [];
        scores = { words: 0, time: 0, gifts: 0, service: 0, touch: 0 };
        resultSection.style.display = 'none';
        introSection.style.display = 'block';
        introSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
};

// ========================================
// 3. ЛОГИКА ГЕНЕРАТОРА ИДЕЙ (ideas.html)
// ========================================

const ideasData = {
    words: [
        'Напишите партнёру длинное сообщение о том, что вы цените в нём',
        'Оставьте записку с комплиментом на подушке или в сумке',
        'Скажите вслух три вещи, которые вам нравятся в партнёре',
        'Запишите голосовое сообщение с тёплыми словами',
        'Напишите письмо от руки и отправьте по почте',
        'Публично похвалите партнёра в соцсетях или при друзьях',
        'Скажите "Я горжусь тобой" после того, как партнёр справился с чем-то сложным'
    ],
    time: [
        'Устройте вечер без телефонов и приготовьте ужин вместе',
        'Сходите на прогулку в новое место и просто разговаривайте',
        'Посмотрите фильм, обнявшись на диване',
        'Сыграйте в настольную игру вдвоём',
        'Сходите на мастер-класс или выставку вместе',
        'Устройте пикник в парке с любимыми закусками',
        'Проведите утро вместе, не спеша, с кофе и разговорами'
    ],
    gifts: [
        'Купите любимую сладость партнёра без повода',
        'Соберите небольшой бокс с вещами, которые напоминают о вас',
        'Подарите книгу, о которой партнёр давно говорил',
        'Закажите цветы или растение в горшке',
        'Сделайте фотоальбом с вашими совместными фотографиями',
        'Купите билет на концерт или мероприятие, которое интересует партнёра',
        'Подарите что-то handmade, сделанное своими руками'
    ],
    service: [
        'Возьмите на себя нелюбимую домашнюю обязанность партнёра',
        'Приготовьте завтрак и принесите в постель',
        'Сходите в магазин за продуктами без напоминания',
        'Помойте машину партнёра или уберите в его рабочем пространстве',
        'Сделайте массаж после тяжёлого дня',
        'Организуйте все дела, которые партнёр откладывал',
        'Приготовьте ужин, когда партнёр устаёт на работе'
    ],
    touch: [
        'Обнимите партнёра крепко и долго, без повода',
        'Подержитесь за руки во время прогулки',
        'Сделайте массаж плеч или стоп',
        'Поцелуйте в лоб перед сном',
        'Сядьте рядом на диване и просто будьте близко',
        'Погладьте по голове или спине, когда партнёр расстроен',
        'Танцуйте вместе на кухне под любимую музыку'
    ]
};

const initGenerator = () => {
    const tabs = document.querySelectorAll('.selector__tab');
    const generateBtn = document.getElementById('generateBtn');
    const ideaCard = document.getElementById('ideaCard');
    const ideaText = document.getElementById('ideaText');
    const saveBtn = document.getElementById('saveBtn');
    const savedIdeasGrid = document.getElementById('savedIdeasGrid');
    const emptyState = document.getElementById('emptyState');

    if (!generateBtn || !ideaCard) return;

    let currentLanguage = 'words';
    let currentIdea = '';
    let savedIdeas = JSON.parse(localStorage.getItem('savedIdeas')) || [];

    const updateTabs = () => {
        tabs.forEach(tab => {
            if (tab.dataset.language === currentLanguage) {
                tab.classList.add('selector__tab--active');
                tab.setAttribute('aria-selected', 'true');
            } else {
                tab.classList.remove('selector__tab--active');
                tab.setAttribute('aria-selected', 'false');
            }
        });
    };

    const renderSavedIdeas = () => {
        // Удаляем все карточки, кроме emptyState
        const cards = savedIdeasGrid.querySelectorAll('.saved-idea-card');
        cards.forEach(card => card.remove());

        if (savedIdeas.length === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
            
            savedIdeas.forEach((idea, index) => {
                const card = document.createElement('div');
                card.className = 'saved-idea-card';
                card.innerHTML = `
                    <p class="saved-idea-card__text">${idea.text}</p>
                    <button class="saved-idea-card__delete" data-index="${index}" aria-label="Удалить идею">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                `;
                savedIdeasGrid.appendChild(card);
            });

            // Добавляем обработчики удаления
            const deleteBtns = savedIdeasGrid.querySelectorAll('.saved-idea-card__delete');
            deleteBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.currentTarget.dataset.index);
                    savedIdeas.splice(index, 1);
                    localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
                    renderSavedIdeas();
                });
            });
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            currentLanguage = tab.dataset.language;
            updateTabs();
            
            // Скрываем текущую идею при смене языка
            ideaCard.style.display = 'none';
            currentIdea = '';
        });
    });

    generateBtn.addEventListener('click', () => {
        const ideas = ideasData[currentLanguage];
        const randomIndex = Math.floor(Math.random() * ideas.length);
        currentIdea = ideas[randomIndex];
        
        ideaText.textContent = currentIdea;
        ideaCard.style.display = 'block';
        
        // Проверяем, сохранена ли уже эта идея
        const isSaved = savedIdeas.some(idea => idea.text === currentIdea);
        if (isSaved) {
            saveBtn.classList.add('idea-card__save--active');
        } else {
            saveBtn.classList.remove('idea-card__save--active');
        }
        
        ideaCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    saveBtn.addEventListener('click', () => {
        if (!currentIdea) return;

        const isSaved = savedIdeas.some(idea => idea.text === currentIdea);
        
        if (isSaved) {
            // Удаляем из сохранённых
            savedIdeas = savedIdeas.filter(idea => idea.text !== currentIdea);
            saveBtn.classList.remove('idea-card__save--active');
        } else {
            // Добавляем в сохранённые
            savedIdeas.push({
                text: currentIdea,
                language: currentLanguage,
                timestamp: new Date().toISOString()
            });
            saveBtn.classList.add('idea-card__save--active');
        }

        localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
        renderSavedIdeas();
    });

    // Инициализация
    updateTabs();
    renderSavedIdeas();
};

// ========================================
// ЗАПУСК ФУНКЦИЙ
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    initGenerator();
});