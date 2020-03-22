const db = {
    authors: [
        {
            name: 'Габриэль Гарсиа Маркес',
            birthday: '06-03-1927',
            deathdate: '17-04-2014',
            country: 'Колумбия',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Gabriel_Garcia_Marquez.jpg',

        },
        {
            name: 'Дэниел Киз',
            birthday: '09-08-1927',
            deathdate: '15-06-2014',
            country: 'США',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/c/cd/%D0%94%D1%8D%D0%BD%D0%B8%D0%B5%D0%BB_%D0%9A%D0%B8%D0%B7.jpg',

        },
        {
            name: 'Грегори Дэвид Робертс',
            birthday: '21-06-1952',
            deathdate: '',
            country: 'Австралия',
            photo: 'http://www.cablook.com/wp-content/uploads/2014/08/GregLowRes03.jpg'},
        {
            name: 'Нелл Харпер Ли ',
            birthday: '28-04-1926',
            deathdate: '19-02-2016',
            country: 'США',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Photo_portrait_of_Harper_Lee_%28To_Kill_a_Mockingbird_dust_jacket%2C_1960%29.jpg'
        },
        {
            name: 'Джордж Оруэлл ',
            birthday: '25-06-1903',
            deathdate: '21-01-1950',
            country: 'Великобритания',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/274px-George_Orwell_press_photo.jpg',
        },
        {
            name: 'Михаил  Булгаков',
            birthday: '03-05-1891',
            deathdate: '10-03-1940',
            country: 'СССР',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bu%C5%82hakow.jpg/274px-Bu%C5%82hakow.jpg'
        },
        {
            name: 'Рэй Брэдбери',
            birthday: '22-08-1920',
            deathdate: '05-06-2012',
            country: 'США',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ray_Bradbury_%281975%29.jpg/260px-Ray_Bradbury_%281975%29.jpg'
        },
        {
            name: 'Айн Рэнд',
            birthday: '02-02-1905',
            deathdate: '05-03-1982',
            country: 'США',
            photo: 'https://www.wikireading.ru/img/372134_37_i_316.jpg'
        },
        {
            name: 'Оскар Уальд',
            birthday: '16-10-1854',
            deathdate: '30-11-1900',
            country: 'Великобритания',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Oscar_Wilde_portrait.jpg/266px-Oscar_Wilde_portrait.jpg'
        },
        {
            name: 'Фёдор Достоевский',
            birthday: '30-10-1821',
            deathdate: '09-02-1881',
            country: 'Российcкая империя',
            photo: 'https://img.labirint.ru/images/upl/descripts/pic_1531382235.jpg'
        },
        {
            name: 'Эрих Мария Ремарк',
            birthday: '22-06-1898',
            deathdate: '25-09-1970',
            country: 'Германия',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Erich_Maria_Remarque1.jpg'
        },
        {
            name: 'Маркус Зусак',
            birthday: '02-06-1975',
            deathdate: '',
            country: 'Австралия',
            photo: 'https://ru.citaty.net/media/authors/markus-zusak.jpg'
        },
        {
            name: 'Мариам Петросян',
            birthday: '10-08-1969',
            deathdate: '',
            country: 'Армения',
            photo: 'https://vignette.wikia.nocookie.net/domv/images/f/f2/202857_photo-1-.jpeg/revision/latest?cb=20161113175010&path-prefix=ru'
        },
        {
            name: 'Владимир Набоков',
            birthday: '10-04-1899',
            deathdate: '02-07-1977',
            country: 'Российска империя',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Vladimir_Nabokov_1973.jpg/262px-Vladimir_Nabokov_1973.jpg'
        },
        {
            name: 'Джейн Остен',
            birthday: '16-12-1775',
            deathdate: '18-07-1817',
            country: 'Великобритания',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jane_Austen_coloured_version.jpg/300px-Jane_Austen_coloured_version.jpg'
        },
        {
            name: 'Валентин Распутин',
            birthday: '15-03-1937',
            deathdate: '14-03-2013',
            country: 'Россия',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%D0%92%D0%B0%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D0%BD_%D0%A0%D0%B0%D1%81%D0%BF%D1%83%D1%82%D0%B8%D0%BD.jpg/290px-%D0%92%D0%B0%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D0%BD_%D0%A0%D0%B0%D1%81%D0%BF%D1%83%D1%82%D0%B8%D0%BD.jpg'
        },
        {
            name: 'Юваль Ной Харари',
            birthday: '24-02-1976',
            deathdate: '',
            country: 'Израиль',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Yuval_Noah_Harari_photo.jpg/274px-Yuval_Noah_Harari_photo.jpg'
        },




    ],
    books: [
        {
            name: 'Сто лет одиночества',
            published: 1967,
            cover: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/100years.jpg',
            genre: ['роман'],
            notes: '...',
            read: 2020,
            author: 0
        },
        {
            name: 'Любовь во время чумы',
            published: 1985,
            cover: 'https://i.livelib.ru/boocover/1002072601/200/6cf4/Gabriel_Garsia_Markes__Lyubov_vo_vremya_chumy.jpg',
            genre: ['роман'],
            notes: '...',
            author: 0
        },
        {
            name: 'Полковнику никто не пишет',
            published: 1961,
            cover: 'https://i.livelib.ru/boocover/1000318322/200/41f7/Gabriel_Garsia_Markes__Polkovniku_nikto_ne_pishet.jpg',
            genre: ['повесть'],
            notes:[ 'Самое плохое в бедности — это то, что она заставляет говорить неправду.',+
                'Я не ношу шляпы, чтобы ни перед кем её не снимать. ', +
                'Мы стали слишком взрослыми, чтобы верить в приход Мессии.\n', +
                'Женщина пришла в отчаяние.\n', +
                '— А что мы будем есть все это время? — Она схватила его за ворот рубашки и с силой тряхнула. — Скажи, что мы будем есть?\n', +
                'Полковнику понадобилось прожить семьдесят пять лет — ровно семьдесят пять лет, минута в минуту, — чтобы дожить до этого мгновения. И он почувствовал себя непобедимым, когда четко и ясно ответил:\n' +
            '— Дерьмо.'],
            author: 0

        },
        {
            name: 'Невероятная и печальная история о простодушной Эрендире и ее жестокосердной бабушке',
            published: 1972,
            cover: 'https://i1.mybook.io/p/512x852/book_covers/de/0e/de0e3af8-8cfa-45f9-aa70-c2408575e4f0.jpe?v2',
            genre: ['повесть'],
            notes: [],
            author: 0
        },
        {
            name: 'Цветы для Элджернона',
            published: 1966,
            cover: 'https://i3.mybook.io/p/512x852/book_covers/56/b3/56b3dc88-2981-4ec1-9118-49d800bc0bd7.jpg?v2',
            genre: ['роман'],
            notes:[ 'открыл, как человек может начать презирать самого себя. Это происходит, когда он сознает, что поступает неправильно, но не может остановиться.\n', +
                'Удивительно, как люди высоких моральных принципов и столь же высокой чувствительности, никогда не позволяющие себе воспользоваться преимуществом над.', +
                'человеком, рожденным без рук, ног или глаз, как они легко и бездумно потешаются над человеком, рожденным без разума.', +
                'Нельзя построить новый дом на месте старого, не разрушив его'],
            author: 1,

        },
        {
            name: 'Шантарам',
            published: 2003,
            cover: 'https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover/5815016-gregori-devid-roberts-shantaram.jpg',
            genre: ['роман'],
            author: 2,
        },
        {
            name: 'Тень горы',
            published: 2016,
            cover: 'https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_330/17042658-gregori-devid-roberts-ten-gory.jpg',
            genre: ['роман'],
            author: 2,
        },
        {
            name: 'Убить пересмешника',
            published: 1960,
            cover: 'https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_415/129770-harper-li-ubit-peresmeshnika.jpg',
            genre: ['роман'],
            notes: ['Мужество – это когда заранее знаешь, что ты проиграл, и все-таки берешься за дело и наперекор всему на свете идешь до конца. Побеждаешь очень редко, но иногда все-таки побеждаешь.',
                'Но чтобы я мог жить в мире с людьми, я прежде всего должен жить в мире с самим собой. Есть у человека нечто такое, что не подчиняется большинству, – это его совесть.',
                'ничего не надо страшиться, кроме страха.', 'Просто есть такие люди, они… они чересчур много думают о том свете и потому никак не научатся жить на этом'],
            author: 3,
        },
        {
            name: '1984',
            published: 1949,
            cover: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/1984-Big-Brother.jpg',
            genre: ['роман'],
            notes: ['Сущность войны — уничтожение не только человеческих жизней, но и плодов человеческого труда. Война — это способ разбивать вдребезги, распылять в стратосфере, топить в морской пучине материалы, которые могли бы улучшить народу жизнь и тем самым в конечном счёте сделать его разумнее. Даже когда оружие не уничтожается на поле боя, производство его — удобный способ истратить человеческий труд и не произвести ничего для потребления.',
                'Если ты в меньшинстве – и даже в единственном числе, – это не значит, что ты безумен. Есть правда и есть неправда, и, если ты держишься правды, пусть наперекор всему свету, ты не безумен.',
                'Привычка не показывать своих чувств въелась настолько, что стала инстинктом.',
                'Умный тот, кто нарушает правила и всё-таки остаётся жив.'],
            author: 4,
        },
        {
            name: 'Скотный двор',
            published: 1945,
            cover: 'https://all-the-books.ru/upload/resize_cache/iblock/d81/194_310_10b176f381c3f30412ac3fd7bace6d9c0/skotnyy_dvor.jpg',
            genre: ['притча','сатира'],
            notes: ['Все животные равны. Но некоторые животные более равны, чем другие.','Только старенький Вениамин настаивал, что помнит всю свою долгую жизнь до мельчайших деталей и знает: им никогда не жилось ни лучше, ни хуже – голод, непосильный труд и обманутые ожидания, таков, говорил он, нерушимый закон жизни.',
                'И днем и ночью мы работаем на ваше благо. И молоко пьем, и яблоки мы едим тоже ради вас же самих.'],
            author: 4,
        },
        {
            name: 'Мастер и Маргарита',
            published: 1967,
            cover: 'https://cdn.eksmo.ru/v2/ITD000000000912912/COVER/cover1__w600.jpg',
            genre: ['роман'],
            notes: ['Ну, что ж, тот, кто любит, должен разделять участь того, кого он любит.',
                'никогда и ничего не просите! Никогда и ничего, и в особенности у тех, кто сильнее вас. Сами предложат и сами все дадут!',
                'Кто сказал тебе, что нет на свете настоящей, верной, вечной любви? Да отрежут лгуну его гнусный язык!',
                'Да, человек смертен, но это было бы еще полбеды. Плохо то, что он иногда внезапно смертен, вот в чем фокус!'],
            author: 5,
        },
        {
            name: '451 градус по Фаренгейту',
            published: 1953,
            cover: 'https://img4.labirint.ru/rc/8ab110c62b6bf96e1fa51b5a9d46bee9/220x340/books72/712914/cover.jpg?1568626195',
            genre: ['роман'],
            notes: [],
            author: 6,
        },
        {
            name: 'Атлант расправил плечи',
            published: 1957,
            cover: 'https://www.alpinabook.ru/upload/iblock/841/8411c6f97bf15f2c7e827fc4591769ea.jpg',
            genre: ['роман-антиутопия'],
            notes: [],
            author: 7,
        },
        {
            name: 'Портрет Дориана Грея',
            published: 1890,
            cover: 'https://knigamir.com/upload/iblock/beb/bebe4753b5e06b64289469a91ba4c155.jpg',
            genre: ['роман'],
            notes: [],
            author: 8,
        },
        {
            name: 'Идиот',
            published: 1868,
            cover: 'https://s1.knigavuhe.org/1/covers/5858/1-2.jpg?1',
            genre: ['роман'],
            notes: [],
            author: 9,
        },
        {
            name: 'Преступление и наказание',
            published: 1866,
            cover: 'https://img2.labirint.ru/rcimg/04da874fdf4f114defb1c43f7a272b08/960x540/books66/656936/ph_001.jpg?1564125511',
            genre: ['роман'],
            notes: [],
            author: 9,
        },
        {
            name: 'Братья Карамазовы',
            published: 1880,
            cover: 'https://s1-goods.ozstatic.by/1000/821/899/10/10899821_0.jpg',
            genre: ['роман'],
            notes: [],
            author: 9,
        },
        {
            name: 'Триумфальная арка',
            published: 1945,
            cover: 'https://i.livelib.ru/boocover/1002792589/o/2947/Erih_Mariya_Remark__Triumfalnaya_arka.jpeg',
            genre: ['роман'],
            notes: [],
            author: 10,
        },
        {
            name: 'Жизнь взаймы',
            published: 1959,
            cover: 'https://img4.labirint.ru/rc/da61195c3159d891d9fb24d701e081f5/220x340/books43/427428/cover.jpg?1566211260',
            genre: ['роман'],
            notes: [],
            author: 10,
        },
        {
            name: 'Книжный вор',
            published: 2009,
            cover: 'https://cdn1.ozone.ru/multimedia/1022667269.jpg',
            genre: ['роман'],
            notes: ['Как и почти любое отчаяние, всё началось с видимого благополучия.',
                'Человеческое дитя иногда гораздо проницательнее до одури занудных взрослых.',
                'По-моему, людям нравится немного полюбоваться разрушением. Песочные замки, карточные домики – с этого и начинают.'
                ],
            author: 11,
        },
        {
            name: 'Дом, в котором…',
            published: 2009,
            cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c5/Dom%2C_v_kotorom..._%282009_cover%29.jpg/240px-Dom%2C_v_kotorom..._%282009_cover%29.jpg',
            genre: ['роман'],
            notes: ['Самая неприятная тишина там, где много людей молчат.',
                'Всякий раз, потакая своим желаниям, теряешь волю и становишься их рабом',
            'слова, которые сказаны, что-то означают, даже если ты ничего не имел в виду.',],
            author: 12,
        },
        {
            name: 'Лолита',
            published: 2009,
            cover: 'https://nemaloknig.com/picimg/398/3983/39835/398357/cover.jpg',
            genre: ['роман'],
            notes: ['Убить её, как некоторые ожидали, я, конечно, не мог. Я, видите ли, любил её.',
                'Я глядел, и не мог наглядеться, и знал — столь твердо, как то, что умру — что люблю её больше всего, что когда-либо видел или мог вообразить на этом свете, или мечтал увидеть на том.',
                'Туман нежности обволакивал горы тоски.',
                'Перемена обстановки — традиционное заблуждение, на которое возлагают надежды обречённая любовь и неизлечимая чахотка.'],
            author: 13,
        },
        {
            name: 'Гордость и предубеждение',
            published: 1813,
            cover: 'https://cdn.eksmo.ru/v2/430000000000006016/COVER/cover1__w600.jpg',
            genre: ['роман'],
            notes: ['Думайте о прошлом лишь тогда, когда оно будит одни приятные воспоминания.',
                'Когда сердце его будет завоевано, у нее останется сколько угодно времени для того, чтобы влюбиться в него самой.',
                'Это было бы самым большим несчастьем. Найти приятным человека, которого решила ненавидеть!',
                'Если вы начинаете с самопожертвования ради тех, кого любите, то закончите ненавистью к тем, кому принесли себя в жертву.'],
            author: 14,
        },
        {
            name: 'Живи и помни',
            published: 1974,
            cover: 'https://andronum.com/images-39/39956-rasputin-valentin-zhivi-i-pomni.jpg',
            genre: ['повесть'],
            notes: ['Когда все хорошо, легко быть вместе: это как сон, знай дыши, да и только. Надо быть вместе, когда плохо - вот для чего люди сходятся.',
            'Жизнь - не одежка, ее по десять раз не примеряют. Что есть - все твое, и открещиваться ни от чего, пускай и самого плохого, не годится.',
                'Нельзя на полном скаку заворачивать назад - сломаешься.'],
            author: 15,
        },
        {
            name: 'Уроки французского',
            published: 1973,
            cover: 'https://img4.labirint.ru/rc/0a58bd438588b7c853f86f4650cedb7e/220x340/books39/386024/cover.jpg?1366179916',
            genre: ['рассказ'],
            notes: ['Человек старее не тогда, когда он доживает до старости, а когда перестает быть ребенком.',
            'Странно: почему мы так же, как и перед родителями, всякий раз чувствуем свою вину перед учителями? И не за то вовсе, что было в школе, — нет, а за то, что сталось с нами после.'],
            author: 15,
        },
        {
            name: 'Sapiens: Краткая история человечества',
            published: 2011,
            cover: 'https://img4.labirint.ru/rc/0a58bd438588b7c853f86f4650cedb7e/220x340/books39/386024/cover.jpg?1366179916',
            genre: ['эссе','научно-популярная литература'],
            notes: ['Равенство можно обеспечить, только ограничив свободу тех, кому повезло больше, чем прочим. А если гарантировать каждому гражданину полную свободу поступать как вздумается, на том равенство и закончится.',
                'Человечество – не стая волков, завладевшая вдруг танками и атомными бомбами, скорее мы – стадо овец, которое в силу непонятной прихоти эволюции научилось делать и пускать в ход танки и ракеты. А вооруженные овцы гораздо опаснее вооруженных волков.',
                'Но все это существует лишь внутри тех историй, которые люди придумывают и рассказывают друг другу. В реальности нет богов, наций и корпораций, нет денег, прав человека и законов, и справедливость живет лишь в коллективном воображении людей.',
                'Религия – система человеческих норм и ценностей, основанная на вере в сверхчеловеческий порядок.',
                'Стабильность – это заповедник для тупиц.', 'Как говорит Ницше, тот, у кого есть зачем жить, легко выдержит любое как.'],
            author: 16,
        },
    ]
};
