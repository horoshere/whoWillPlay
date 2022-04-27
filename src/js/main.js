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

    //Game - корень для всего приложения. Создаем внутри него элемент который будет сеткой.

    const game = document.querySelector('#game');

    const wrapper = document.createElement('section');
    wrapper.classList.add('wrapper');

    game.appendChild(wrapper);

    // Для каждого объекта внутри cardsArr
    cardsArr.forEach(item => {
        // Создаем div для каждого объекта в массиве и добавляем ему класс card
        const card = document.createElement('div');
        card.classList.add('card');

        // Добавляем каждому созданному div'у data-аттрибут
        card.dataset.name = item.name;

        // Добавляем div'у с объектом фон из значения этого объекта
        card.style.backgroundImage = `url(${item.img})`;

        // Добавляем div в сетку
        wrapper.appendChild(card);
    });






});