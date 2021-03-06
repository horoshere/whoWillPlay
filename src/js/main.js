'use strict'

document.addEventListener('DOMContentLoaded', () => {
    // Card data
    const cardsArr = [
        {
            name: 'mancity',
            stars: 5,
            img: '../img/mancity.png',
        },
        {
            name: 'liverpool',
            stars: 5,
            img: '../img/liverpool.png',
        },
        {
            name: 'chelsea',
            stars: 5,
            img: '../img/chelsea.png',
        },
        {
            name: 'arsenal',
            stars: 5,
            img: '../img/arsenal.png',
        },
        {
            name: 'spurs',
            stars: 5,
            img: '../img/spurs.png',
        },
        {
            name: 'manunited',
            stars: 5,
            img: '../img/manunited.png',
        },
        {
            name: 'westham',
            stars: 4,
            img: '../img/westham.png',
        },
        {
            name: 'wolves',
            stars: 4,
            img: '../img/wolves.png',
        },
        {
            name: 'newcastle',
            stars: 4,
            img: '../img/newcastle.png',
        },
        {
            name: 'leicester',
            stars: 4,
            img: '../img/leicester.png',
        },
        {
            name: 'astonvilla',
            stars: 4,
            img: '../img/astonvilla.png',
        },
        {
            name: 'leeds',
            stars: 4,
            img: '../img/leeds.png',
        },
        {
            name: 'crystalpalace',
            stars: 4,
            img: '../img/crystalpalace.png',
        },
        {
            name: 'everton',
            stars: 3,
            img: '../img/everton.png',
        },
        {
            name: 'bayern',
            stars: 5,
            img: '../img/bayern.png',
        },
        {
            name: 'dortmund',
            stars: 5,
            img: '../img/dortmund.png',
        },
        {
            name: 'bayer04',
            stars: 4,
            img: '../img/bayer04.png',
        },
        {
            name: 'leipzig',
            stars: 4,
            img: '../img/leipzig.png',
        },
        {
            name: 'real',
            stars: 5,
            img: '../img/real.png',
        },
        {
            name: 'barca',
            stars: 5,
            img: '../img/barca.png',
        },
        {
            name: 'sevilla',
            stars: 4,
            img: '../img/sevilla.png',
        },
        {
            name: 'atm',
            stars: 5,
            img: '../img/atm.png',
        },
        {
            name: 'betis',
            stars: 4,
            img: '../img/betis.png',
        },
        {
            name: 'sociedad',
            stars: 4,
            img: '../img/sociedad.png',
        },
        {
            name: 'villarreal',
            stars: 4,
            img: '../img/villarreal.png',
        },
        {
            name: 'valencia',
            stars: 3,
            img: '../img/valencia.png',
        },
        {
            name: 'milan',
            stars: 4,
            img: '../img/milan.png',
        },
        {
            name: 'inter',
            stars: 5,
            img: '../img/inter.png',
        },
        {
            name: 'napoli',
            stars: 5,
            img: '../img/napoli.png',
        },
        {
            name: 'juve',
            stars: 5,
            img: '../img/juve.png',
        },
        {
            name: 'roma',
            stars: 4,
            img: '../img/roma.png',
        },
        {
            name: 'lazio',
            stars: 4,
            img: '../img/lazio.png',
        },
        {
            name: 'fio',
            stars: 3,
            img: '../img/fio.png',
        },
        {
            name: 'atalanta',
            stars: 4,
            img: '../img/atalanta.png',
        },
        {
            name: 'paris',
            stars: 5,
            img: '../img/paris.png',
        },
        {
            name: 'monaco',
            stars: 4,
            img: '../img/monaco.png',
        },
        {
            name: 'marseille',
            stars: 4,
            img: '../img/marseille.png',
        },
        {
            name: 'lille',
            stars: 3,
            img: '../img/lille.png',
        },
        {
            name: 'lyon',
            stars: 3,
            img: '../img/lyon.png',
        },
        {
            name: 'ajax',
            stars: 5,
            img: '../img/ajax.png',
        },
        {
            name: 'psv',
            stars: 4,
            img: '../img/psv.png',
        },
        {
            name: 'feyenoord',
            stars: 3,
            img: '../img/feyenoord.png',
        },
        {
            name: 'porto',
            stars: 4,
            img: '../img/porto.png',
        },
        {
            name: 'sporting',
            stars: 3,
            img: '../img/sporting.png',
        },
        {
            name: 'benfica',
            stars: 4,
            img: '../img/benfica.png',
        },
        {
            name: 'celtic',
            stars: 3,
            img: '../img/celtic.png',
        },
        {
            name: 'rangers',
            stars: 4,
            img: '../img/rangers.png',
        },
        {
            name: 'borussiaM',
            stars: 3,
            img: '../img/borussiaM.png',
        },
    ];

    // Рандомизировать сетку при каждой загрузки
    function shuffle(arr) {
        let j, temp;
        for (let i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    shuffle(cardsArr);

    // Счетчик для выбора не более 2 карт
    let count = 0;

    let previousTarget = null;

    //Game - корень для всего приложения. Создаем внутри него элемент который будет сеткой.

    const game = document.querySelector('#game');
    const wrapper = document.createElement('section');
    wrapper.classList.add('wrapper');

    game.appendChild(wrapper);


    // Для каждого объекта внутри cardsArr
    cardsArr.forEach(item => {
        // Создаем div для каждого объекта в массиве, добавляем ему класс card и атрибут из dataset stars
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.stars = item.stars;
        card.style.cursor = 'pointer';

        // Создаем лицевую сторону карточки
        const front = document.createElement('div');
        front.classList.add('front');

        // Создаем обратную сторону карты, с содержанием
        const back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = `url(${item.img})`;

        // Добавляем в сетку карту а также переднюю и заднюю часть каждой карты
        wrapper.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });


    // Добавляем обработчик события для каждого дочернего элемента сетки, чтобы отметить выбранную карту
    const allCards = wrapper.childNodes;
    let selectedCards = [];

    allCards.forEach(card => {
        card.addEventListener('click', () => {

            // Анимация для всех карт
            allCards.forEach(item => {
                item.classList.add('animation');
            });


            const cardStars = card.dataset.stars; // Вычисляем значение stars у 'кликнутой' карты

            // Получаем новый массив с картами, значения stars которых равно stars 'кликнутой' карты
            selectedCards = [...allCards].filter(item => item.dataset.stars === cardStars);


            setTimeout(function () {

                // Удаляем все дочерние элементы из wrapper
                while (wrapper.firstChild) {
                    wrapper.removeChild(wrapper.firstChild);
                }

                // Создаем новые карты на основе полученного массива selectedCards
                selectedCards.forEach(item => {
                    // Создаем div для каждого объекта в массиве, добавляем ему класс card и атрибут из dataset stars
                    const card = document.createElement('div');
                    card.classList.add('card');
                    card.style.cursor = 'pointer';

                    // Создаем лицевую сторону карточки
                    const front = document.createElement('div');
                    front.classList.add('front');

                    // Создаем обратную сторону карты, с содержанием
                    const back = document.createElement('div');
                    back.classList.add('back');
                    back.style.backgroundImage = item.lastChild.style.backgroundImage;


                    // Добавляем в сетку карту а также переднюю и заднюю часть каждой карты
                    wrapper.appendChild(card);
                    card.appendChild(front);
                    card.appendChild(back);

                    // Работаем с получившимися картами. Добавляем обработчик событий на оставшиеся карты
                    allCards.forEach(card => {
                        card.addEventListener('click', (e) => {
                            // Элемент события
                            let clicked = e.target;

                            // Чтобы не выбиралось ничего кроме карт; и чтобы нельзя было выбрать одну и ту же карту
                            if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
                                return
                            }

                            if (count < 2) {
                                count++;
                                // Добавляем класс выбранным картам
                                clicked.parentNode.classList.add('selected');

                                // Назначаем значение clicked previousTarget после первого щелчка.
                                previousTarget = clicked;
                                console.log(previousTarget)
                            }
                        });
                    });
                });
            }, 500);
        });
    });


    // Modal
    const modal = document.querySelector('.modal'),
        modalOverlay = document.querySelector('.modal__overlay'),
        triggerModal = document.querySelector('.nav__info'),
        cross = document.querySelector('.modal__close');

    function showModal() {
        modal.classList.add('modal__active');
        document.body.style.overflow = 'hidden';
    }

    triggerModal.addEventListener('click', showModal);

    function closeModal() {
        modal.classList.remove('modal__active');
        document.body.style.overflow = '';
    }

    cross.addEventListener('click', closeModal);


    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('modal__active')) {
            closeModal();
        }
    });


    // Hamburger

    const ham = document.querySelector('.hamburger'),
        nav = document.querySelector('.nav'),
        navLinks = nav.childNodes;

    function toggleHam() {
        ham.classList.toggle('hamburger__active');
        nav.classList.toggle('nav__active');
    }

    ham.addEventListener('click', toggleHam);

    navLinks.forEach(item => {
        item.addEventListener('click', toggleHam);
    });


});