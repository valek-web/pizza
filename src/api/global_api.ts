import axios from 'axios'
// https://eda.yandex.ru/api/v2/menu/retrieve/allopicca_tulskaya?regionId=1&autoTranslate=false
const instance = axios.create({
    baseURL: 'https://eda.yandex.ru/api/v2/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  })


export const globalAPI = {
    getMenu: () => {
        return instance.get('menu/retrieve/allopicca_tulskaya?regionId=1&autoTranslate=false').then((res) => {
            return res
        })
    }
}

// {
//     "categories": {
//         "popular_dishes": {
//             "name": "Популярные блюда",
//             "available": true,
//             "items": [
//                 {
//                     "id": 1226679684,
//                     "name": "Пицца Четыре сыра",
//                     "description": "Классическая пицца со сливочным соусом Ранч и четырьмя сортами сыров: моцарелла, пармезан, дорблю и брынза",
//                     "available": true,
//                     "inStock": null,
//                     "price": 535,
//                     "decimalPrice": "535",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574834,
//                             "name": "Четыре сыра",
//                             "options": [
//                                 {
//                                     "id": 2053594644,
//                                     "name": "Четыре сыра Маленькая Традиционное тесто (360 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594649,
//                                     "name": "Четыре сыра Средняя Тонкое тесто (475 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594654,
//                                     "name": "Четыре сыра Средняя Традиционное тесто (665 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594659,
//                                     "name": "Четыре сыра Большая Тонкое тесто (740 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594664,
//                                     "name": "Четыре сыра Большая Традиционное тесто (925 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3541746/7e350a158ce8adf0bb1581010497358e-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "360 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "360", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679734,
//                     "name": "Картофель фри",
//                     "description": "Обжаренные во фритюре и слегка подсоленные палочки картофеля",
//                     "available": true,
//                     "inStock": null,
//                     "price": 285,
//                     "decimalPrice": "285",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3772831/5e1817163a1c6cd57ce262899d2819fc-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679644,
//                     "name": "Пицца Пепперони",
//                     "description": "Пикантная классика в мире пиццы - томатный соус, шампиньоны, колбаса Пепперони и сыр Моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 435,
//                     "decimalPrice": "435",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574794,
//                             "name": "Пепперони",
//                             "options": [
//                                 {
//                                     "id": 2053594444,
//                                     "name": "Пепперони Маленькая Традиционное тесто (395 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594449,
//                                     "name": "Пепперони Средняя Тонкое тесто (550 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594454,
//                                     "name": "Пепперони Средняя Традиционное тесто (760 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594459,
//                                     "name": "Пепперони Большая Тонкое тесто (865 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594464,
//                                     "name": "Пепперони Большая Традиционное тесто (1075 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3439767/5d09d75ce0ba2554b7e64ed694b820e7-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "395 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "395", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679589,
//                     "name": "Пицца Ветчина и грибы",
//                     "description": "Нежная пицца с ветчиной, шампиньонами и сыром моцарелла на сливочном соусе со шпинатом",
//                     "available": true,
//                     "inStock": null,
//                     "price": 345,
//                     "decimalPrice": "345",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574739,
//                             "name": "Ветчина и грибы",
//                             "options": [
//                                 {
//                                     "id": 2053594169,
//                                     "name": "Ветчина и грибы Маленькая Традиционное тесто (340 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594174,
//                                     "name": "Ветчина и грибы Средняя Тонкое тесто (410 г, 31 см)",
//                                     "price": 200,
//                                     "decimalPrice": "200",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594179,
//                                     "name": "Ветчина и грибы Средняя Традиционное тесто (640 г, 31 см)",
//                                     "price": 200,
//                                     "decimalPrice": "200",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594184,
//                                     "name": "Ветчина и грибы Большая Тонкое тесто (700 г, 36 см)",
//                                     "price": 380,
//                                     "decimalPrice": "380",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594189,
//                                     "name": "Ветчина и грибы Большая Традиционное тесто (875 г, 36 см)",
//                                     "price": 380,
//                                     "decimalPrice": "380",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3525661/3e5fb42eaca7f20c715e74ce099e22a6-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "340 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "340", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679619,
//                     "name": "Пицца Маргарита",
//                     "description": "Пицца без мяса, включает в себя томатный соус и сыр моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 345,
//                     "decimalPrice": "345",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574769,
//                             "name": "Маргарита",
//                             "options": [
//                                 {
//                                     "id": 2053594319,
//                                     "name": "Маргарита Большая Тонкое тесто (755 г, 36 см)",
//                                     "price": 380,
//                                     "decimalPrice": "380",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594324,
//                                     "name": "Маргарита Большая Традиционное тесто (955 г, 36 см)",
//                                     "price": 380,
//                                     "decimalPrice": "380",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594329,
//                                     "name": "Маргарита Маленькая Традиционное тесто (380 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594334,
//                                     "name": "Маргарита Средняя Традиционное тесто (655 г, 31 см)",
//                                     "price": 200,
//                                     "decimalPrice": "200",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594339,
//                                     "name": "Маргарита Средняя Тонкое тесто (460 г, 31 см)",
//                                     "price": 200,
//                                     "decimalPrice": "200",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3541746/503b6d50946da7241fb6c9013012d942-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "380 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "380", "measure_unit": "g"}
//                 }
//             ],
//             "gallery": [],
//             "categories": [],
//             "dynamicId": "popular"
//         },
//         "hot_appetizers": {
//             "id": 60418079,
//             "name": "Горячие закуски",
//             "available": true,
//             "items": [
//                 {
//                     "id": 1226679714,
//                     "name": "Гренки ржаные",
//                     "description": "Жареные ржаные гренки со сливочным маслом, зеленью и чесноком",
//                     "available": true,
//                     "inStock": null,
//                     "price": 225,
//                     "decimalPrice": "225",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/2796335/22c0b709b0c64de4cdfd4bd234889d30-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "70 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "70", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679719,
//                     "name": "Гренки чесночные",
//                     "description": "Невероятно хрустящие, ароматные гренки с сыром моцарелла, чесноком и петрушкой (3 шт.)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 240,
//                     "decimalPrice": "240",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3807432/e4cd95ed17598722d05d16a4b507d9ce-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "125 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "125", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679724,
//                     "name": "Жюльен с грибами",
//                     "description": "Классический грибной жюльен, шампиньоны, запечённые в сливках с сыром Моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 200,
//                     "decimalPrice": "200",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3547279/92f6bc3740731aee20ccd32f18ffe09b-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "120 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "120", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679729,
//                     "name": "Картофель по-деревенски",
//                     "description": "Горячие дольки картофеля, приготовленного во фритюре, с солью",
//                     "available": true,
//                     "inStock": null,
//                     "price": 285,
//                     "decimalPrice": "285",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3502800/6c8187251de54da192a04e0e83a936ff-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "300 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "300", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679734,
//                     "name": "Картофель фри",
//                     "description": "Обжаренные во фритюре и слегка подсоленные палочки картофеля",
//                     "available": true,
//                     "inStock": null,
//                     "price": 285,
//                     "decimalPrice": "285",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3772831/5e1817163a1c6cd57ce262899d2819fc-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679739,
//                     "name": "Крылья фри",
//                     "description": "Куриные крылья фри с острым красным перцем",
//                     "available": true,
//                     "inStock": null,
//                     "price": 365,
//                     "decimalPrice": "365",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574849,
//                             "name": "Крылья фри",
//                             "options": [
//                                 {
//                                     "id": 2053594719,
//                                     "name": "Крылья фри (18 шт., 660 г)",
//                                     "price": 580,
//                                     "decimalPrice": "580",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594724,
//                                     "name": "Крылья фри (9 шт., 330 г)",
//                                     "price": 130,
//                                     "decimalPrice": "130",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594729,
//                                     "name": "Крылья фри (6 шт., 220 г)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3518584/c02c3fae1e4da539e1e9d74dae37b2f6-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "220 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "220", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679744,
//                     "name": "Куриные стрипсы",
//                     "description": "Куриная грудка, соевый соус, кляр, соус Сладкий Чили, кунжут, кинза",
//                     "available": true,
//                     "inStock": null,
//                     "price": 300,
//                     "decimalPrice": "300",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3724421/a31aa28960639ca9f522683ac19326a0-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679749,
//                     "name": "Наггетсы",
//                     "description": "Куриное филе в панировке",
//                     "available": true,
//                     "inStock": null,
//                     "price": 295,
//                     "decimalPrice": "295",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574854,
//                             "name": "Наггетсы",
//                             "options": [
//                                 {
//                                     "id": 2053594734,
//                                     "name": "Наггетсы (10 шт., 180 г)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594739,
//                                     "name": "Наггетсы (20 шт., 360 г)",
//                                     "price": 290,
//                                     "decimalPrice": "290",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3534679/5d0eff7ded8202e9f095fe4136094822-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "180 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "180", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679754,
//                     "name": "Сырные палочки с беконом",
//                     "description": "Фирменное тесто с оригинальным чесночным соусом, сыром моцарелла и беконом",
//                     "available": true,
//                     "inStock": null,
//                     "price": 335,
//                     "decimalPrice": "335",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3506707/4b6169ec0126e1f5d78c6fa5078bd234-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "320 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "320", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679759,
//                     "name": "Сырные палочки с креветками",
//                     "description": "Фирменное тесто с оригинальным чесночным соусом, сыром моцарелла, креветками и зеленью",
//                     "available": true,
//                     "inStock": null,
//                     "price": 495,
//                     "decimalPrice": "495",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3506707/5c53288f627467fbeb25d83e2d0af00b-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "320 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "320", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679764,
//                     "name": "Сырные палочки",
//                     "description": "Хрустящее фирменное тесто с оригинальным чесночным соусом, сыром моцарелла и зеленью",
//                     "available": true,
//                     "inStock": null,
//                     "price": 275,
//                     "decimalPrice": "275",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3208959/49427d5fb0365da5b235a591c7faf64d-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "280 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "280", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679769,
//                     "name": "Твистер Пикник",
//                     "description": "Хрустящие куриные наггетсы, свежие помидоры, огурцы, салат айсберг и картофель фри в пшеничной лепешке с горчичным соусом",
//                     "available": true,
//                     "inStock": null,
//                     "price": 205,
//                     "decimalPrice": "205",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3735503/d9a40a0d4f2aa9db43c6c4139c98171e-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "210 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "210", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679774,
//                     "name": "Чикен бокс",
//                     "description": "Крылышки острые фри (6 шт.), куриные наггетсы (10 шт.)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 625,
//                     "decimalPrice": "625",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3191933/0693e126b5332921ac0cdbb846e0699c-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "490 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "490", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679779,
//                     "name": "Чикен Твистер",
//                     "description": "Хрустящие куриные наггетсы, свежие помидоры, салат айсберг, лук красный и маринованные корнишоны в пшеничной лепешке с майонезом и томатным соусом",
//                     "available": true,
//                     "inStock": null,
//                     "price": 205,
//                     "decimalPrice": "205",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3512182/917c30bc351988e1861584d504189d1d-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "210 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "210", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679784,
//                     "name": "Блины с ветчиной и сыром",
//                     "description": "Блины (2 шт.), ветчина, сыр моцарелла, петрушка",
//                     "available": true,
//                     "inStock": null,
//                     "price": 215,
//                     "decimalPrice": "215",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3790679/128a084d3653d17804d1a0a3400aa686-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "160 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "160", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679789,
//                     "name": "Блины с курицей яйцом и сыром",
//                     "description": "Блины (2 шт.), курица, яйцо, майонез, сыр моцарелла, петрушка",
//                     "available": true,
//                     "inStock": null,
//                     "price": 215,
//                     "decimalPrice": "215",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3508859/0d19727f72d2b7761b9d734ebde88eb7-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "180 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "180", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679794,
//                     "name": "Твистер Цезарь",
//                     "description": "Жареное куриное филе, помидоры черри и салат айсберг в пшеничной лепешке с соусом Цезарь",
//                     "available": true,
//                     "inStock": null,
//                     "price": 235,
//                     "decimalPrice": "235",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3682162/d7466cde2b40f0c694d0f4a84bdbbe6a-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1346193864,
//                     "name": "Луковые кольца",
//                     "description": "Луковые кольца в панировке, обжаренные во фритюре",
//                     "available": true,
//                     "inStock": null,
//                     "price": 195,
//                     "decimalPrice": "195",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3454897/723acd0159afe8458e05a1925e4129e7-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "145 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "145", "measure_unit": "g"}
//                 }
//             ],
//             "gallery": [],
//             "categories": []
//         },
//         "salads": {
//             "id": 60418084,
//             "name": "Салаты",
//             "available": true,
//             "items": [
//                 {
//                     "id": 1226679799,
//                     "name": "Салат Греческий",
//                     "description": "Классический салат: помидоры, огурцы, перец болгарский, красный лук, маслины, брынза, салат зеленый, зелень, оливковая заправка",
//                     "available": true,
//                     "inStock": null,
//                     "price": 295,
//                     "decimalPrice": "295",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3529621/c735bf92682907c5866e2b67f1542f3c-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679804,
//                     "name": "Салат Столичный",
//                     "description": "Цыплёнок, огурец соленый, картофель, зеленый горошек, морковь, яйцо куриное, огурец свежий, яйцо перепелиное, укроп, майонез",
//                     "available": true,
//                     "inStock": null,
//                     "price": 295,
//                     "decimalPrice": "295",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3507285/e0cae85fae00239ad2aa951de3364142-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679809,
//                     "name": "Салат Цезарь с креветками",
//                     "description": "Жареные тигровые креветки, крутоны, соус Цезарь с добавлением анчоусов и чеснока, сыр пармезан, микс салатов Айсберг и Романо",
//                     "available": true,
//                     "inStock": null,
//                     "price": 565,
//                     "decimalPrice": "565",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3806023/0ff6fc94f74029f70fca73db53f6e185-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679814,
//                     "name": "Салат Цезарь с курицей",
//                     "description": "Зеленый салат, куриные ломтики, крутоны и сыр Пармезан. Заправляется соусом, приготовленным на основе Анчоусов, сыра Пармезан и майонеза",
//                     "available": true,
//                     "inStock": null,
//                     "price": 385,
//                     "decimalPrice": "385",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3806315/8750ff87c1634a0c76e1b896fa75b458-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679819,
//                     "name": "Салат Хрустящий баклажан",
//                     "description": "Баклажаны жареные, огурцы, помидоры, салат айсберг, соус Сладкий Чили с Кимчи, кинза, кунжут",
//                     "available": true,
//                     "inStock": null,
//                     "price": 365,
//                     "decimalPrice": "365",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3525402/645b16bdc45ddbb4a747ba729c3982fd-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 }
//             ],
//             "gallery": [],
//             "categories": []
//         },
//         "soups": {
//             "id": 60418089,
//             "name": "Супы",
//             "available": true,
//             "items": [
//                 {
//                     "id": 1226679824,
//                     "name": "Крем-суп Томатный с чесночной гренкой",
//                     "description": "Томаты в собственном соку, куриный бульон, лук, морковь, пряные травы, сливки, кинза, гренки с сыром, чеснок, петрушка",
//                     "available": true,
//                     "inStock": null,
//                     "price": 295,
//                     "decimalPrice": "295",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574859,
//                             "name": "Опции",
//                             "options": [
//                                 {
//                                     "id": 2053594744,
//                                     "name": "Чесночная гренка",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": false,
//                             "minSelected": 0,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3709189/82661d12ddaf2190ccd9fc37ffb8aa9f-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "290 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "290", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679829,
//                     "name": "Солянка мясная",
//                     "description": "Говядина, свинина, ветчина, бекон, лук, огурцы солёные, томатная паста, каперсы, маслины, оливки, сметана, лимон, петрушка",
//                     "available": true,
//                     "inStock": null,
//                     "price": 395,
//                     "decimalPrice": "395",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/2796335/0697ce09450bb9c50d00191915d3d6be-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "250 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "250", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679834,
//                     "name": "Суп-лапша куриная",
//                     "description": "Домашняя лапша, курица, морковь, лук, зелень",
//                     "available": true,
//                     "inStock": null,
//                     "price": 260,
//                     "decimalPrice": "260",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3809330/4752edcdff3bc908378fbac79412dea7-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "250 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "250", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679839,
//                     "name": "Крем-суп из шампиньонов",
//                     "description": "Шампиньоны, репчатый лук, куриный бульон, сливки",
//                     "available": true,
//                     "inStock": null,
//                     "price": 295,
//                     "decimalPrice": "295",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3106738/890ab9128ebf02e1fc3b0f6bb07b7c6f-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "250 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "250", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679844,
//                     "name": "Суп Том Ям",
//                     "description": "Бульон, паста Том Ям, креветки, шампиньоны, помидоры, кокосовое молоко, кинза. Подается с отварным рисом",
//                     "available": true,
//                     "inStock": null,
//                     "price": 415,
//                     "decimalPrice": "415",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3454897/f52653882c7288a06c414734498b0f81-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "300 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "300", "measure_unit": "g"}
//                 }
//             ],
//             "gallery": [],
//             "categories": []
//         },
//         "pizza": {
//             "id": 60418074,
//             "name": "Пицца",
//             "available": true,
//             "items": [
//                 {
//                     "id": 1226679539,
//                     "name": "Пицца Альфредо с беконом и Ветчина и грибы",
//                     "description": "На Традиционном тесте со сливочным соусом со шпинатом и сыром моцарелла! Альфредо с беконом (ветчина, помидоры, шампиньоны, бекон) и Ветчина и Грибы (ветчина, шампиньоны) (36 см)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 945,
//                     "decimalPrice": "945",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3790679/e1e8128864fc7b82d2c678933b005632-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "985 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "985", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679544,
//                     "name": "Пицца Куриный жюльен и Римские каникулы",
//                     "description": "На Традиционном тесте с фирменным горчичным соусом и сыром моцарелла! Куриный жюльен (куриное филе, шампиньоны, красный лук, чеснок, петрушка) и Римские каникулы (салат айсберг, помидоры, пепперони, бекон, соус Барбекю) (36 см)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 995,
//                     "decimalPrice": "995",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3528285/427a5a1f1009c77e62fb8b960de53c51-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "1,085 кг",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "1.085", "measure_unit": "kg"}
//                 },
//                 {
//                     "id": 1226679549,
//                     "name": "Пицца Мясной пир и Чикен Барбекю",
//                     "description": "На Традиционном тесте с томатным соусом и сыром моцарелла! Мясной пир (говядина, свинина, пепперони, ветчина, бекон, помидоры, петрушка) и Чикен Барбекю (куриное филе, бекон, перец болгарский, лук репчатый, соус Барбекю) (36 см)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 995,
//                     "decimalPrice": "995",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3512182/5e2c3db7d5cde8db4976c3f7c249e3d8-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "1,12 кг",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "1.12", "measure_unit": "kg"}
//                 },
//                 {
//                     "id": 1226679554,
//                     "name": "Пицца Пепперони и Маргарита",
//                     "description": "На Традиционном тесте с томатным соусом и сыром моцарелла! Пепперони (колбаса пепперони, шампиньоны) и Маргарита (увеличенная порция сыра моцарелла) (36 см)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 835,
//                     "decimalPrice": "835",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3806315/2fb78679b1f1d2003e07be8ed097a730-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "1,015 кг",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "1.015", "measure_unit": "kg"}
//                 },
//                 {
//                     "id": 1226679559,
//                     "name": "Пицца Пепперони Лайт и Деревенская",
//                     "description": "На Традиционном тесте с томатным соусом и сыром моцарелла! Пепперони Лайт (колбаса пепперони) и Деревенская (куриное филе, помидоры, перец болгарский, лук красный, петрушка, чеснок) (36 см)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 835,
//                     "decimalPrice": "835",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3377781/72340cfaf1484b64514fba0a15593028-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "965 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "965", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679564,
//                     "name": "Пицца Сочный бургер и Мехико",
//                     "description": "На Традиционном тесте с фирменным соусом Бургер и сыром моцарелла! Сочный бургер (говядина, бекон, корнишоны маринованные, салат айсберг, лук красный, помидоры) и Мехико (говядина, колбаса пепперони, перец халапеньо, помидоры, перец болгарский, лук красный, петрушка, чеснок) (36 см)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 995,
//                     "decimalPrice": "995",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/2783965/9f0b99a14f27d7b7651894561deb552c-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "1,12 кг",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "1.12", "measure_unit": "kg"}
//                 },
//                 {
//                     "id": 1226679569,
//                     "name": "Пицца Чоризо на римском тесте",
//                     "description": "Колбаса чоризо, сыр моцарелла, перец болгарский, лук красный, соус томатный (20 х 30)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 615,
//                     "decimalPrice": "615",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3770794/4775d3a8a323be110cd67f37f769d835-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "400 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "400", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679574,
//                     "name": "Пицца Четыре сыра и Цыпленок ранч",
//                     "description": "На Традиционном тесте со сливочным соусом Ранч и сыром моцарелла! Четыре сыра (сыры: моцарелла, пармезан, дорблю, брынза) и Цыпленок Ранч (нежное куриное филе, свежие томаты) (36 см)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 985,
//                     "decimalPrice": "985",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3514991/7c70c61ec6ba78bb33b5764237ac3618-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "935 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "935", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679579,
//                     "name": "Пицца Альфредо с беконом",
//                     "description": "Соус сливочный со шпинатом, ветчина, помидоры, шампиньоны, сыр моцарелла, бекон",
//                     "available": true,
//                     "inStock": null,
//                     "price": 495,
//                     "decimalPrice": "495",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574734,
//                             "name": "Альфредо с беконом",
//                             "options": [
//                                 {
//                                     "id": 2053594144,
//                                     "name": "Альфредо с беконом Маленькая Традиционное тесто (410 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594149,
//                                     "name": "Альфредо с беконом Средняя Тонкое тесто (555 г, 31 см)",
//                                     "price": 280,
//                                     "decimalPrice": "280",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594154,
//                                     "name": "Альфредо с беконом Средняя Традиционное тесто (765 г, 31 см)",
//                                     "price": 280,
//                                     "decimalPrice": "280",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594159,
//                                     "name": "Альфредо с беконом Большая Тонкое тесто (910 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594164,
//                                     "name": "Альфредо с беконом Большая Традиционное тесто (1095 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/1370147/28d7621613d9c02a72bd3d44e7798ff2-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "410 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "410", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679584,
//                     "name": "Пицца с грушей и горгонзолой на римском тесте",
//                     "description": "Груша, сыр моцарелла, сыр горгонзола, соус медово-горчичный (20 х 30 см)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 615,
//                     "decimalPrice": "615",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3472725/3e0dc2ac27e84d1d734dbbe255efac0d-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "380 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "380", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679589,
//                     "name": "Пицца Ветчина и грибы",
//                     "description": "Нежная пицца с ветчиной, шампиньонами и сыром моцарелла на сливочном соусе со шпинатом",
//                     "available": true,
//                     "inStock": null,
//                     "price": 345,
//                     "decimalPrice": "345",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574739,
//                             "name": "Ветчина и грибы",
//                             "options": [
//                                 {
//                                     "id": 2053594169,
//                                     "name": "Ветчина и грибы Маленькая Традиционное тесто (340 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594174,
//                                     "name": "Ветчина и грибы Средняя Тонкое тесто (410 г, 31 см)",
//                                     "price": 200,
//                                     "decimalPrice": "200",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594179,
//                                     "name": "Ветчина и грибы Средняя Традиционное тесто (640 г, 31 см)",
//                                     "price": 200,
//                                     "decimalPrice": "200",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594184,
//                                     "name": "Ветчина и грибы Большая Тонкое тесто (700 г, 36 см)",
//                                     "price": 380,
//                                     "decimalPrice": "380",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594189,
//                                     "name": "Ветчина и грибы Большая Традиционное тесто (875 г, 36 см)",
//                                     "price": 380,
//                                     "decimalPrice": "380",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3525661/3e5fb42eaca7f20c715e74ce099e22a6-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "340 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "340", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679594,
//                     "name": "Пицца Гавайская",
//                     "description": "Пицца для гурманов, сочетает в себе томатный соус, ветчину, ананасы и сыр моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 395,
//                     "decimalPrice": "395",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574744,
//                             "name": "Гавайская",
//                             "options": [
//                                 {
//                                     "id": 2053594194,
//                                     "name": "Гавайская Маленькая Традиционное тесто (405 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594199,
//                                     "name": "Гавайская Средняя Тонкое тесто (550 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594204,
//                                     "name": "Гавайская Средняя Традиционное тесто (750 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594209,
//                                     "name": "Гавайская Большая Тонкое тесто (880 г, 36 см)",
//                                     "price": 430,
//                                     "decimalPrice": "430",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594214,
//                                     "name": "Гавайская Большая Традиционное тесто (1085 г, 36 см)",
//                                     "price": 430,
//                                     "decimalPrice": "430",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3709189/5857a04f387b79a876fbd067150d2ffe-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "405 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "405", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679599,
//                     "name": "Пицца Деревенская",
//                     "description": "В меру острая пицца с удачным сочетанием белого куриного мяса и овощей - томатный соус, куриное филе, красный лук, свежие томаты, болгарский перец, чеснок, петрушка и сыр моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 435,
//                     "decimalPrice": "435",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574749,
//                             "name": "Деревенская",
//                             "options": [
//                                 {
//                                     "id": 2053594219,
//                                     "name": "Деревенская Маленькая Традиционное тесто (440 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594224,
//                                     "name": "Деревенская Средняя Тонкое тесто (565 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594229,
//                                     "name": "Деревенская Средняя Традиционное тесто (755 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594234,
//                                     "name": "Деревенская Большая Тонкое тесто (960 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594239,
//                                     "name": "Деревенская Большая Традиционное тесто (1100 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3808326/1945d4a501709ba0bb00928ffd4c20b5-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "440 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "440", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679604,
//                     "name": "Пицца Европейская",
//                     "description": "Сбалансированное сочетание томатного соуса, шампиньонов, ветчины, говядины и сыра моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 435,
//                     "decimalPrice": "435",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574754,
//                             "name": "Европейская",
//                             "options": [
//                                 {
//                                     "id": 2053594244,
//                                     "name": "Европейская Маленькая Традиционное тесто (415 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594249,
//                                     "name": "Европейская Средняя Тонкое тесто (555 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594254,
//                                     "name": "Европейская Средняя Традиционное тесто (775 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594259,
//                                     "name": "Европейская Большая Тонкое тесто (915 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594264,
//                                     "name": "Европейская Большая Традиционнное тесто (1130 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3805444/f338c9490ef5b1cf2f63413042495375-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "415 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "415", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679609,
//                     "name": "Пицца Карбонара",
//                     "description": "Классический сливочный соус карбонара, ветчина, бекон, петрушка, чеснок, красный лук, сыр пармезан и сыр моцарелла. Популярная итальянская паста в виде пиццы",
//                     "available": true,
//                     "inStock": null,
//                     "price": 495,
//                     "decimalPrice": "495",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574759,
//                             "name": "Карбонара",
//                             "options": [
//                                 {
//                                     "id": 2053594269,
//                                     "name": "Карбонара Маленькая Традиционное тесто (370 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594274,
//                                     "name": "Карбонара Средняя Тонкое тесто (500 г, 31 см)",
//                                     "price": 280,
//                                     "decimalPrice": "280",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594279,
//                                     "name": "Карбонара Средняя Традиционное тесто (690 г, 31 см)",
//                                     "price": 280,
//                                     "decimalPrice": "280",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594284,
//                                     "name": "Карбонара Большая Тонкое тесто (845 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594289,
//                                     "name": "Карбонара Большая Традиционное тесто (1005 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3106738/be3c3b5e513f35b06c1c9d844a09b820-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "370 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "370", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679614,
//                     "name": "Пицца Куриный жюльен",
//                     "description": "Неповторимое сочетание куриного филе, шампиньонов, красного лука, чеснока и петрушки на фирменном горчичном соусе, запеченное под сыром моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 535,
//                     "decimalPrice": "535",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574764,
//                             "name": "Куриный жюльен",
//                             "options": [
//                                 {
//                                     "id": 2053594294,
//                                     "name": "Куриный жюльен Маленькая Традиционное тесто (420 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594299,
//                                     "name": "Куриный жюльен Средняя Тонкое тесто (540 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594304,
//                                     "name": "Куриный жюльен Средняя Традиционное тесто (725 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594309,
//                                     "name": "Куриный жюльен Большая Тонкое тесто (880 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594314,
//                                     "name": "Куриный жюльен Большая Традиционное тесто (1060 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3798638/bdb6fdde210cf65431ab591c87f32037-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "420 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "420", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679619,
//                     "name": "Пицца Маргарита",
//                     "description": "Пицца без мяса, включает в себя томатный соус и сыр моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 345,
//                     "decimalPrice": "345",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574769,
//                             "name": "Маргарита",
//                             "options": [
//                                 {
//                                     "id": 2053594319,
//                                     "name": "Маргарита Большая Тонкое тесто (755 г, 36 см)",
//                                     "price": 380,
//                                     "decimalPrice": "380",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594324,
//                                     "name": "Маргарита Большая Традиционное тесто (955 г, 36 см)",
//                                     "price": 380,
//                                     "decimalPrice": "380",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594329,
//                                     "name": "Маргарита Маленькая Традиционное тесто (380 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594334,
//                                     "name": "Маргарита Средняя Традиционное тесто (655 г, 31 см)",
//                                     "price": 200,
//                                     "decimalPrice": "200",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594339,
//                                     "name": "Маргарита Средняя Тонкое тесто (460 г, 31 см)",
//                                     "price": 200,
//                                     "decimalPrice": "200",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3541746/503b6d50946da7241fb6c9013012d942-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "380 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "380", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679624,
//                     "name": "Пицца Маргарита Ранч",
//                     "description": "Сочетание сливочного соуса Ранч, свежих томатов и сыра моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 275,
//                     "decimalPrice": "275",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574774,
//                             "name": "Маргарита Ранч",
//                             "options": [
//                                 {
//                                     "id": 2053594344,
//                                     "name": "Маргарита Ранч Маленькая Традиционное тесто (330 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594349,
//                                     "name": "Маргарита Ранч Средняя Тонкое тесто (385 г, 31 см)",
//                                     "price": 190,
//                                     "decimalPrice": "190",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594354,
//                                     "name": "Маргарита Ранч Средняя Традиционное тесто (590 г, 31 см)",
//                                     "price": 190,
//                                     "decimalPrice": "190",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594359,
//                                     "name": "Маргарита Ранч Большая Тонкое тесто (645 г, 36 см)",
//                                     "price": 350,
//                                     "decimalPrice": "350",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594364,
//                                     "name": "Маргарита Ранч Большая Традиционное тесто (820 г, 36 см)",
//                                     "price": 350,
//                                     "decimalPrice": "350",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3772784/bbffacbb41c181646a728f0240a030c5-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "330 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "330", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679629,
//                     "name": "Пицца Мехико",
//                     "description": "Соус Коньячный, колбаса пепперони, овощной микс, говядина, сыр моцарелла, перец халапеньо. Обжигающий вкус пиццы для любителей острого",
//                     "available": true,
//                     "inStock": null,
//                     "price": 495,
//                     "decimalPrice": "495",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574779,
//                             "name": "Мехико",
//                             "options": [
//                                 {
//                                     "id": 2053594369,
//                                     "name": "Мехико Маленькая Традиционное тесто (425 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594374,
//                                     "name": "Мехико Средняя Традиционное тесто (780г, 31 см)",
//                                     "price": 280,
//                                     "decimalPrice": "280",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594379,
//                                     "name": "Мехико Большая Тонкое тесто (915 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594384,
//                                     "name": "Мехико Большая Традиционное тесто (1075 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594389,
//                                     "name": "Мехико Средняя Тонкое тесто ( 595 г, 31 см)",
//                                     "price": 280,
//                                     "decimalPrice": "280",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/2415806/7fb79b7a1fbee5e3af62702dcdca51b6-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "425 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "425", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679634,
//                     "name": "Пицца Мясная",
//                     "description": "Пицца для голодных парней, включает в себя: томатный соус, колбасу пепперони, ветчину, репчатый лук, свинину, говядину и сыр моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 435,
//                     "decimalPrice": "435",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574784,
//                             "name": "Мясная",
//                             "options": [
//                                 {
//                                     "id": 2053594394,
//                                     "name": "Мясная Маленькая Традиционное тест (430 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594399,
//                                     "name": "Мясная Средняя Тонкое тесто (575 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594404,
//                                     "name": "Мясная Средняя Традиционное тесто (785 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594409,
//                                     "name": "Мясная Большая Тонкое тесто (925 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594414,
//                                     "name": "Мясная Большая Традиционное тесто (1095 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3512182/a8793478c3966e500abe33a6fc672c27-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "430 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "430", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679639,
//                     "name": "Пицца Мясной пир",
//                     "description": "Ветчина, говядина, свинина, колбаса пепперони, бекон в сочетании с томатным соусом, свежими томатами и сыр моцарелла. Максимальное число наших мясных ингредиентов",
//                     "available": true,
//                     "inStock": null,
//                     "price": 535,
//                     "decimalPrice": "535",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574789,
//                             "name": "Мясной пир",
//                             "options": [
//                                 {
//                                     "id": 2053594419,
//                                     "name": "Мясной пир Маленькая Традиционное тесто (450 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594424,
//                                     "name": "Мясной пир Средняя Тонкое тесто (610 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594429,
//                                     "name": "Мясной пир Средняя Традиционное тесто (800 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594434,
//                                     "name": "Мясной пир Большая Тонкое тесто (950 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594439,
//                                     "name": "Мясной пир Большая Традиционное тесто (1150 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3506804/854b566d48c2967222f61155b4ff57d6-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "450 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "450", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679644,
//                     "name": "Пицца Пепперони",
//                     "description": "Пикантная классика в мире пиццы - томатный соус, шампиньоны, колбаса Пепперони и сыр Моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 435,
//                     "decimalPrice": "435",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574794,
//                             "name": "Пепперони",
//                             "options": [
//                                 {
//                                     "id": 2053594444,
//                                     "name": "Пепперони Маленькая Традиционное тесто (395 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594449,
//                                     "name": "Пепперони Средняя Тонкое тесто (550 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594454,
//                                     "name": "Пепперони Средняя Традиционное тесто (760 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594459,
//                                     "name": "Пепперони Большая Тонкое тесто (865 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594464,
//                                     "name": "Пепперони Большая Традиционное тесто (1075 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3439767/5d09d75ce0ba2554b7e64ed694b820e7-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "395 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "395", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679649,
//                     "name": "Пицца Пепперони Лайт",
//                     "description": "Сбалансированный состав из сыра Моцарелла, томатного соуса и пикантной колбасы пепперони",
//                     "available": true,
//                     "inStock": null,
//                     "price": 345,
//                     "decimalPrice": "345",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574799,
//                             "name": "Пепперони Лайт",
//                             "options": [
//                                 {
//                                     "id": 2053594469,
//                                     "name": "Пепперони Лайт Маленькая Традиционное тесто (325 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594474,
//                                     "name": "Пепперони Средняя Тонкое тесто (380 г, 31 см)",
//                                     "price": 200,
//                                     "decimalPrice": "200",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594479,
//                                     "name": "Пепперони Лайт Средняя Традиционное тесто (585 г, 31 см)",
//                                     "price": 200,
//                                     "decimalPrice": "200",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594484,
//                                     "name": "Пепперони Лайт Большая Тонкое тесто (635 г, 36 см)",
//                                     "price": 380,
//                                     "decimalPrice": "380",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594489,
//                                     "name": "Пепперони Лайт Большая Традиционное тесто (825 г, 36 см)",
//                                     "price": 380,
//                                     "decimalPrice": "380",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3525402/645bd0654c720d5fb6b9cabec768ded1-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "325 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "325", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679654,
//                     "name": "Пицца Ранчо",
//                     "description": "Нежный сливочный соус Ранч, куриное филе, красный лук, свежие томаты, бекон, чеснок, петрушка и сыр Моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 495,
//                     "decimalPrice": "495",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574804,
//                             "name": "Ранчо",
//                             "options": [
//                                 {
//                                     "id": 2053594494,
//                                     "name": "Ранчо Маленькая Традиционное тесто (410 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594499,
//                                     "name": "Ранчо Средняя Тонкое тесто (590 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594504,
//                                     "name": "Ранчо Средняя Традиционное тесто (775 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594509,
//                                     "name": "Ранчо Большая Тонкое тесто (955 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594514,
//                                     "name": "Ранчо Большая Традиционное тесто (1150 г,36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3798638/78d25616e88c6bc57f04492d0af4e165-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "410 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "410", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679659,
//                     "name": "Пицца Римские каникулы",
//                     "description": "Удивительное сочетание нашего фирменного горчичного соуса, салата Айсберг, свежих томатов, колбасы пепперони, бекона и сыра моцареллы, дополнено соусом барбекю",
//                     "available": true,
//                     "inStock": null,
//                     "price": 495,
//                     "decimalPrice": "495",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574809,
//                             "name": "Римские каникулы",
//                             "options": [
//                                 {
//                                     "id": 2053594519,
//                                     "name": "Римские каникулы Маленькая Традиционное тесто (465 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594524,
//                                     "name": "Римские каникулы Средняя Тонкое тесто (590 г, 31 см)",
//                                     "price": 280,
//                                     "decimalPrice": "280",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594529,
//                                     "name": "Римские каникулы Средняя Традиционное тесто (780 г, 31 см)",
//                                     "price": 280,
//                                     "decimalPrice": "280",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594534,
//                                     "name": "Римские каникулы Большая Тонкое тесто (940 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594539,
//                                     "name": "Римские каникулы Большая Традиционное тесто (1105 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3337779/247826529c8e5287b24e206a0bb4f7cb-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "465 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "465", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679664,
//                     "name": "Пицца Сочный бургер",
//                     "description": "Cоус Бургер, салат Айсберг, красный лук, свежие томаты, говядина, бекон, маринованные огурцы и сыр моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 495,
//                     "decimalPrice": "495",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574814,
//                             "name": "Сочный бургер",
//                             "options": [
//                                 {
//                                     "id": 2053594544,
//                                     "name": "Сочный бургер Большая Традиционное тесто (1140 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594549,
//                                     "name": "Сочный бургер Большая Тонкое тесто (950 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594554,
//                                     "name": "Сочный бургер Средняя Тонкое тесто (610 г, 31 см)",
//                                     "price": 280,
//                                     "decimalPrice": "280",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594559,
//                                     "name": "Сочный бургер Средняя Традиционное тесто (800 г, 31 см)",
//                                     "price": 280,
//                                     "decimalPrice": "280",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594564,
//                                     "name": "Сочный бургер Маленькая Традиционное тесто (460 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/2353725/6108c025fdafaa4b350669b789716c0d-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "460 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "460", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679669,
//                     "name": "Пицца Суприм",
//                     "description": "Сочетает в себе томатный соус, колбасу пепперони, ветчину, репчатый лук, зеленый болгарский перец, шампиньоны, свинину, говядину, маслины и сыр моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 535,
//                     "decimalPrice": "535",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574819,
//                             "name": "Суприм",
//                             "options": [
//                                 {
//                                     "id": 2053594569,
//                                     "name": "Суприм Большая Традиционное тесто (1150 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594574,
//                                     "name": "Суприм Большая Тонкое тесто (950 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594579,
//                                     "name": "Суприм Средняя Традиционное тесто (805 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594584,
//                                     "name": "Суприм Средняя Тонкое тесто (605 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594589,
//                                     "name": "Суприм Маленькая Традиционное тесто (465 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/2796335/610e0b12ee13cfc89bcb279cc0d7477e-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "465 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "465", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679674,
//                     "name": "Пицца Цезарь",
//                     "description": "Сочетание соуса цезарь, с добавлением анчоусов и чеснока, а также куриное филе, свежие томаты, салат Айсберг, сыр моцарелла и сыр пармезан",
//                     "available": true,
//                     "inStock": null,
//                     "price": 535,
//                     "decimalPrice": "535",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574824,
//                             "name": "Цезарь",
//                             "options": [
//                                 {
//                                     "id": 2053594594,
//                                     "name": "Цезарь Маленькая Традиционное тесто (435 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594599,
//                                     "name": "Цезарь Средняя Тонкое тесто (570 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594604,
//                                     "name": "Цезарь Средняя Традиционное тесто (785 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594609,
//                                     "name": "Цезарь Большая Тонкое тесто (915 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594614,
//                                     "name": "Цезарь Большая Традиционное тесто (1105 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3790679/5866aaab506b0228b470fd1c0df564a0-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "435 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "435", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679679,
//                     "name": "Пицца Цыпленок Ранч",
//                     "description": "Специально для наших маленьких любителей пиццы мы добавили на основу со сливочным соусом Ранч нежное куриное филе, свежие томаты и сыр моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 395,
//                     "decimalPrice": "395",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574829,
//                             "name": "Цыпленок Ранч",
//                             "options": [
//                                 {
//                                     "id": 2053594619,
//                                     "name": "Цыпленок Ранч Маленькая Традиционное тесто (365 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594624,
//                                     "name": "Цыпленок Ранч Средняя Тонкое тесто (470 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594629,
//                                     "name": "Цыпленок Ранч Средняя Традиционное тесто (645 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594634,
//                                     "name": "Цыпленок Ранч Большая Тонкое тесто (735 г, 36 см)",
//                                     "price": 430,
//                                     "decimalPrice": "430",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594639,
//                                     "name": "Цыпленок Ранч Большая Традиционное тесто (945 г, 36 см)",
//                                     "price": 430,
//                                     "decimalPrice": "430",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3502490/7e8ae163a27d9499d6ea6c12b03b9f2f-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "365 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "365", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679684,
//                     "name": "Пицца Четыре сыра",
//                     "description": "Классическая пицца со сливочным соусом Ранч и четырьмя сортами сыров: моцарелла, пармезан, дорблю и брынза",
//                     "available": true,
//                     "inStock": null,
//                     "price": 535,
//                     "decimalPrice": "535",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574834,
//                             "name": "Четыре сыра",
//                             "options": [
//                                 {
//                                     "id": 2053594644,
//                                     "name": "Четыре сыра Маленькая Традиционное тесто (360 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594649,
//                                     "name": "Четыре сыра Средняя Тонкое тесто (475 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594654,
//                                     "name": "Четыре сыра Средняя Традиционное тесто (665 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594659,
//                                     "name": "Четыре сыра Большая Тонкое тесто (740 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594664,
//                                     "name": "Четыре сыра Большая Традиционное тесто (925 г, 36 см)",
//                                     "price": 450,
//                                     "decimalPrice": "450",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3541746/7e350a158ce8adf0bb1581010497358e-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "360 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "360", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679689,
//                     "name": "Пицца Чикен барбекю",
//                     "description": "Соус томатный, куриное филе, бекон, репчатый лук, перец зеленый болгарский, соус барбекю, сыр моцарелла",
//                     "available": true,
//                     "inStock": null,
//                     "price": 435,
//                     "decimalPrice": "435",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574839,
//                             "name": "Чикен барбекю",
//                             "options": [
//                                 {
//                                     "id": 2053594669,
//                                     "name": "Чикен барбекю Маленькая Традиционное тесто (400 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594674,
//                                     "name": "Чикен барбекю Средняя Тонкое тесто (610 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594679,
//                                     "name": "Чикен барбекю Средняя Традиционное тесто (760 г, 31 см)",
//                                     "price": 270,
//                                     "decimalPrice": "270",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594684,
//                                     "name": "Чикен барбекю Большая Тонкое тесто (910 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594689,
//                                     "name": "Чикен барбекю Большая Традиционное тесто (1095 г, 36 см)",
//                                     "price": 460,
//                                     "decimalPrice": "460",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3513074/8715fbad898396f4675436ebef976fdb-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "400 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "400", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679694,
//                     "name": "Пицца Ветчина и сыр",
//                     "description": "Фирменный чесночный соус, сыр моцарелла и ветчина",
//                     "available": true,
//                     "inStock": null,
//                     "price": 275,
//                     "decimalPrice": "275",
//                     "promoTypes": [],
//                     "optionsGroups": [
//                         {
//                             "id": 181574844,
//                             "name": "Ветчина и сыр",
//                             "options": [
//                                 {
//                                     "id": 2053594694,
//                                     "name": "Ветчина и сыр Маленькая Традиционное тесто (325 г, 23 см)",
//                                     "price": 0,
//                                     "decimalPrice": "0",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594699,
//                                     "name": "Ветчина и сыр Большая Традиционное тесто (830 г, 36 см)",
//                                     "price": 350,
//                                     "decimalPrice": "350",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594704,
//                                     "name": "Ветчина и сыр Большая Тонкое тесто (650 г, 36 см)",
//                                     "price": 350,
//                                     "decimalPrice": "350",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594709,
//                                     "name": "Ветчина и сыр Средняя Тонкое тесто (410 г, 31 см)",
//                                     "price": 190,
//                                     "decimalPrice": "190",
//                                     "multiplier": 1
//                                 },
//                                 {
//                                     "id": 2053594714,
//                                     "name": "Ветчина и сыр Средняя Традиционное тесто (620 г, 31 см)",
//                                     "price": 190,
//                                     "decimalPrice": "190",
//                                     "multiplier": 1
//                                 }
//                             ],
//                             "required": true,
//                             "minSelected": 1,
//                             "maxSelected": 1
//                         }
//                     ],
//                     "picture": {
//                         "uri": "/images/3774488/5b7b9c50184ce113977a199dd8b21a4e-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "410 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "410", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679709,
//                     "name": "Пицца Чеддер на римском тесте",
//                     "description": "Сыр чеддер, сыр моцарелла, сыр дорблю, сыр брынза, сыр пармезан, сырный соус (20х30 см)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 615,
//                     "decimalPrice": "615",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3435765/f928950b892cf96ffed7f794a6b9010e-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "400 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "400", "measure_unit": "g"}
//                 }
//             ],
//             "gallery": [],
//             "categories": []
//         },
//         "paste": {
//             "id": 60418094,
//             "name": "Паста",
//             "available": true,
//             "items": [
//                 {
//                     "id": 1226679849,
//                     "name": "Спагетти Карбонара",
//                     "description": "Cпагетти со сливочным соусом, беконом, яйцом, репчатым луком и сыром Пармезан",
//                     "available": true,
//                     "inStock": null,
//                     "price": 445,
//                     "decimalPrice": "445",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/2806911/4707e1332c8b001bf31d8a213a4b37ba-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "250 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "250", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679854,
//                     "name": "Спагетти с цыпленком и грибами",
//                     "description": "Спагетти со сливочным соусом, грибами, цыпленком и сыром Пармезан",
//                     "available": true,
//                     "inStock": null,
//                     "price": 405,
//                     "decimalPrice": "405",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3538649/77284b31c62209d7ae3b849e88359496-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "265 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "265", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679859,
//                     "name": "Удон с креветками в устричном соусе",
//                     "description": "Лапша домашняя, креветки тигровые, цукини, перец болгарский, капуста, морковь, лук красный, фасоль стручковая, чеснок, имбирь, куриный бульон, соус Устричный, кунжут, лук зелёный",
//                     "available": true,
//                     "inStock": null,
//                     "price": 565,
//                     "decimalPrice": "565",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3490335/b8bb93c66a22c54668373b0c6870a162-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "280 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "280", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679864,
//                     "name": "Удон с курицей в соусе Терияки",
//                     "description": "",
//                     "available": true,
//                     "inStock": null,
//                     "price": 385,
//                     "decimalPrice": "385",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3667559/8148ee7057efbd386019681721a90a4e-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "280 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "280", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679869,
//                     "name": "Тальятелле с говядиной в сливочно-перечном соусе",
//                     "description": "Тальятелле, сливки, говядина, шампиньоны, лук репчатый, соус Чёрный перец, сыр пармезан, петрушка",
//                     "available": true,
//                     "inStock": null,
//                     "price": 445,
//                     "decimalPrice": "445",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3735503/7cbefb9de70f8a2c71e92d411f511f06-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "260 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "260", "measure_unit": "g"}
//                 }
//             ],
//             "gallery": [],
//             "categories": []
//         },
//         "desserts": {
//             "id": 60418104,
//             "name": "Десерты",
//             "available": true,
//             "items": [
//                 {
//                     "id": 1226679894,
//                     "name": "Бельгийская вафля Банан и Нутелла",
//                     "description": "Бельгийская вафля собственного приготовления с бананом (мягкий сдобный десерт, банан, орехово-шоколадный сироп)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 255,
//                     "decimalPrice": "255",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3513074/1175835d5de298a095f63d5968968226-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "130 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "130", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679899,
//                     "name": "Бельгийская вафля Мороженое и клубника",
//                     "description": "Бельгийская вафля собственного приготовления с мороженным (мягкий сдобный десерт, мороженое, клубничный сироп)",
//                     "available": true,
//                     "inStock": null,
//                     "price": 255,
//                     "decimalPrice": "255",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3805444/9a7a450220c0742e6bf55dae37dcf8b9-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "120 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "120", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679904,
//                     "name": "Блины с вишневым джемом",
//                     "description": "Приготовленные по-домашнему горячие блины с вишневым джемом",
//                     "available": true,
//                     "inStock": null,
//                     "price": 195,
//                     "decimalPrice": "195",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3337779/e45a0af3d2ad2a755f914430abf769d3-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679909,
//                     "name": "Блины со сгущенным молоком",
//                     "description": "Приготовленные по-домашнему горячие блины со сгушенкой",
//                     "available": true,
//                     "inStock": null,
//                     "price": 195,
//                     "decimalPrice": "195",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3667559/e9ed0d2930035db548b09c5206eb8328-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679914,
//                     "name": "Блины со сметаной",
//                     "description": "Приготовленные по-домашнему горячие блины со сметаной",
//                     "available": true,
//                     "inStock": null,
//                     "price": 195,
//                     "decimalPrice": "195",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3547279/2799c98cb0bdc31251540bd866e7146d-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679919,
//                     "name": "Шоколадная лава",
//                     "description": "Горячее шоколадное пирожное с хрустящей оболочкой и жидкой очень шоколадной начинкой",
//                     "available": true,
//                     "inStock": null,
//                     "price": 175,
//                     "decimalPrice": "175",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/2796335/1fd8e0f0f5eb30c4e94362ae20e3853d-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "75 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "75", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679924,
//                     "name": "Чизкейк Нью-Йорк",
//                     "description": "Сырно-творожный торт. Подается с клубничным сиропом и мятой",
//                     "available": true,
//                     "inStock": null,
//                     "price": 215,
//                     "decimalPrice": "215",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3191933/d3a1ecb19acb0e06206315de643adc96-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "110 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "110", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679929,
//                     "name": "Блины с яблоком и корицей с карамельным соусом",
//                     "description": "Блины (2 шт.), яблоко, сахар, корица, масло сливочное, топпинг карамельный, мята",
//                     "available": true,
//                     "inStock": null,
//                     "price": 205,
//                     "decimalPrice": "205",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3529621/956b8097d93c5f548211c5f6a89e6cbd-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "170 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "170", "measure_unit": "g"}
//                 }
//             ],
//             "gallery": [],
//             "categories": []
//         },
//         "beverages": {
//             "id": 60418109,
//             "name": "Напитки",
//             "available": true,
//             "items": [
//                 {
//                     "id": 1226679939,
//                     "name": "Морс клюквенный натуральный",
//                     "description": "Клюква, сахар, вода. Морс собственного приготовления",
//                     "available": true,
//                     "inStock": null,
//                     "price": 155,
//                     "decimalPrice": "155",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3439767/082f4ee7216b690025b97b9d2d23974e-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "500 мл",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "500", "measure_unit": "ml"}
//                 },
//                 {
//                     "id": 1226679944,
//                     "name": "Сок Rich вишня",
//                     "description": "",
//                     "available": true,
//                     "inStock": null,
//                     "price": 145,
//                     "decimalPrice": "145",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3709189/92bd11913b27643511bd4541c0a138da-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 мл",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "ml"}
//                 },
//                 {
//                     "id": 1226679949,
//                     "name": "Сок Rich апельсин",
//                     "description": "",
//                     "available": true,
//                     "inStock": null,
//                     "price": 220,
//                     "decimalPrice": "220",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3682162/79b918aab89266901bb368b0745b0f5c-{w}x{h}.jpeg",
//                         "ratio": 1.33,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "1 л",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "1", "measure_unit": "l"}
//                 },
//                 {
//                     "id": 1226679954,
//                     "name": "Сок Rich апельсин",
//                     "description": "",
//                     "available": true,
//                     "inStock": null,
//                     "price": 145,
//                     "decimalPrice": "145",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3420935/80a5ee6f346dc09195feb240f46afcce-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 мл",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "ml"}
//                 },
//                 {
//                     "id": 1226679959,
//                     "name": "Сок Rich вишневый",
//                     "description": "",
//                     "available": true,
//                     "inStock": null,
//                     "price": 220,
//                     "decimalPrice": "220",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3378693/ba3ae8425398ee09ce96b618ac5e3096-{w}x{h}.jpeg",
//                         "ratio": 1.33,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "1 л",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "1", "measure_unit": "l"}
//                 },
//                 {
//                     "id": 1226679964,
//                     "name": "Сок Rich яблоко",
//                     "description": "",
//                     "available": true,
//                     "inStock": null,
//                     "price": 220,
//                     "decimalPrice": "220",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3378693/ba3ae8425398ee09ce96b618ac5e3096-{w}x{h}.jpeg",
//                         "ratio": 1.33,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "1 л",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "1", "measure_unit": "l"}
//                 },
//                 {
//                     "id": 1226679969,
//                     "name": "Сок Rich яблоко",
//                     "description": "",
//                     "available": true,
//                     "inStock": null,
//                     "price": 145,
//                     "decimalPrice": "145",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3807631/54826e332381b4854a330d3e63bd51ba-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "200 мл",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "200", "measure_unit": "ml"}
//                 },
//                 {
//                     "id": 1226679974,
//                     "name": "Морс облепиха-апельсин",
//                     "description": "Облепиха, апельсин, сахар, вода. Морс собственного приготовления",
//                     "available": true,
//                     "inStock": null,
//                     "price": 155,
//                     "decimalPrice": "155",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3454897/3338d1f3b261557c539e6da9c5cdb72c-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "500 мл",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "500", "measure_unit": "ml"}
//                 },
//                 {
//                     "id": 1226679979,
//                     "name": "Лимонад Грейпфрут",
//                     "description": "Сироп грейпфрутовый, сироп лимонный, вода газированная, грейпфрут, мята. Напиток собственного приготовления",
//                     "available": true,
//                     "inStock": null,
//                     "price": 205,
//                     "decimalPrice": "205",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3208959/783a9f8b72d41acf7adf76ea073761ff-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "500 мл",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "500", "measure_unit": "ml"}
//                 },
//                 {
//                     "id": 1226679984,
//                     "name": "Лимонад Яблоко",
//                     "description": "Сироп яблочный, сироп лимонный, вода газированная, яблоко, лимон, мята. Напиток собственного приготовления",
//                     "available": true,
//                     "inStock": null,
//                     "price": 205,
//                     "decimalPrice": "205",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3595381/2ef750658265c60006cebec7835d8c36-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "500 мл",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "500", "measure_unit": "ml"}
//                 },
//                 {
//                     "id": 1243084344,
//                     "name": "BonAqua",
//                     "description": "",
//                     "available": true,
//                     "inStock": null,
//                     "price": 75,
//                     "decimalPrice": "75",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3808326/828f4c69782fa0d9b277336bd6a1a456-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "500 мл",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "500", "measure_unit": "ml"}
//                 },
//                 {
//                     "id": 1243084349,
//                     "name": "BonAqua газированная",
//                     "description": "",
//                     "available": true,
//                     "inStock": null,
//                     "price": 75,
//                     "decimalPrice": "75",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3377781/1e6d23f42433365aafe9cd3a07d038d1-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "500 мл",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "500", "measure_unit": "ml"}
//                 },
//                 {
//                     "id": 1270364309,
//                     "name": "Burn Gold Rush",
//                     "description": "",
//                     "available": false,
//                     "inStock": null,
//                     "price": 205,
//                     "decimalPrice": "205",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3770794/0ac77bfba2c8a980ace7171a3c7292cf-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "449 мл",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "449", "measure_unit": "ml"}
//                 }
//             ],
//             "gallery": [],
//             "categories": []
//         },
//         "sauces": {
//             "id": 60418099,
//             "name": "Соусы",
//             "available": true,
//             "items": [
//                 {
//                     "id": 1226679874,
//                     "name": "Соус Томатный",
//                     "description": "Соус томатный, густой соус из перетертых томатов",
//                     "available": true,
//                     "inStock": null,
//                     "price": 50,
//                     "decimalPrice": "50",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3806466/343ed9d3216f64047004208998aa1ca2-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "45 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "45", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679879,
//                     "name": "Соус Чесночный",
//                     "description": "Масло подсолнечное, яичный желток, сахар, уксус, чеснок, лук, соль",
//                     "available": true,
//                     "inStock": null,
//                     "price": 50,
//                     "decimalPrice": "50",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3790679/4e371c26d8e93a5bd20dc0ac4e133daf-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "45 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "45", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679884,
//                     "name": "Соус Сырный",
//                     "description": "Сыр, растительный жир, яичный желток, масло подсолнечное, сахар, соль",
//                     "available": true,
//                     "inStock": null,
//                     "price": 50,
//                     "decimalPrice": "50",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3456802/0fac590f6dd4707c004b73962a9134d4-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "45 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "45", "measure_unit": "g"}
//                 },
//                 {
//                     "id": 1226679889,
//                     "name": "Соус Барбекю",
//                     "description": "Томатная паста, соевый соус, сахар, уксус, соль, смесь перцев, чеснок, специи",
//                     "available": true,
//                     "inStock": null,
//                     "price": 50,
//                     "decimalPrice": "50",
//                     "promoTypes": [],
//                     "optionsGroups": [],
//                     "picture": {
//                         "uri": "/images/3807432/ad6f09680a38f82f48dd41d30ba3b3ca-{w}x{h}.jpeg",
//                         "ratio": 1.0,
//                         "scale": "aspect_fill"
//                     },
//                     "weight": "45 г",
//                     "adult": false,
//                     "shippingType": "all",
//                     "measure": {"value": "45", "measure_unit": "g"}
//                 }
//             ],
//             "gallery": [],
//             "categories": []
//         }
//     }
// }