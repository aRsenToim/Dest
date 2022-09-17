const Accounts = [
    {
        idAccount: 1,
        infoAccount: {
            phone: '1',
            password: 'error',
            phonePassword: '1error',
        },
        info: {
            name: 'Lorem ispum.',
            img: 'https://avatars.mds.yandex.net/i?id=32b28f1550c829804cdff7bf7866acb8-5886829-images-thumbs&n=13&exp=1',
            verifed: false,
            subscribers: [
                
            ],
            subscriptions: [
            ],
            friends: [
                
            ],
            isSubscribers: true,
            MyArticles: [
                {
                    title: 'Что выбрать? React, Vue или Angular?',
                    idAccount: '1',
                    idArticle: '1', 
                    imgBanner: 'https://yandex-images.clstorage.net/5cx2eD147/5039b0qMv/LAz7nFwdnbaqLgqvyO3QjsWNiQPE9UBulDq8XsrJHl-34_rnYmsBbq5flvFSGLF2NFzQ9_9u4W8qHOkYuiLTRmkdmp1sceSKgioKo_zJvKrZoak_5OUQcp1b4DOTrBp2-uei20aGnKNvjjZU39w51-woza_-H8UyLxlMtI_jinMkSM9cAHncMvp2d69s4dxO6eTt38z0YGc8drUn87g_Nq4T1wIKJiDnKz4a-N9ctcNoyG3Xyh8YlkcZ_GXHy4JzzIznKLjRCFre_qNTyDG0FmlclaPkLKTHOL6R4ydQ66L2T0s2PlZ8E_eOrownvBnrHMQZz36nnEY_LWTFG2OSu2hYd_DIeQTe3mJTW5zt9HZtrJlncDyo1zCOCYsnXM8CioN_vj5qpO8vVgoA31ytS5R07UtOhxTec0EomRNrhgfAEDt4QPFoFoqW94cgiWQy2TSN_2BgPBNkVj03zwBjzmpP_zpmLviDX64OuA_8kd-EDBG3toesTvNFrGXvyyZz_BQjjLzJdG7eAnsrNKHgCuE0le-4cJQb-F4dy0csG7o2F-eaan6AG3uamsSnwPW7nGxdA_oPGFLXmfSZnyeKg7AMw6j82djCrgYDT8jt5IJpVIE3ADTAA-CK7WervD8SwoPn-ipG1JM7Iv74n0ihIzRkUVuKQxwOtx1QbS_fWtfIBF9YfHUQUo6Cm1f0TaSy5XhRg_AQdHdEOjW_CzRT0v4br3Iu6vAH08qGgPOwGS9ggE0_Vit8YncdlOnDx7YLuIQn-PRBCAKmfpMzKCVcjv30-dscdLDz4LaRp89AE84-C2eKIl50R78e6lCfHD3b2HiBN44rhIYzfeRlo9vKS0AIuwT0HfyKQjLXQ6iB4Na1QGHbRCDkx7SGAQPbfAceMg_nzpJS3KuDUuYAB8zBk8hoHct-22S239VYCev_uptAdM_YBDX0Un7uJ9eESWzKaST1axQYTHO0SuFn3wSA',
                    autor: 'Lorem, ipsum.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, omnis sit autem quia ut veritatis ullam nobis fugit deleniti nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, omnis sit autem quia ut veritatis ullam nobis fugit deleniti nostrum!',
                    time: '00:00'
                },
            ]
        }
    },
    {
        idAccount: 2,
        infoAccount: {
            phone: '2',
            password: 'error',
            phonePassword: '2error',
        },
        info: {
            name: 'Типичный верстальщик',
            img: 'https://play-lh.googleusercontent.com/9svgfY3FNIyRb0edb-N1VuoHB1EnJIat6idFLMvw4dvO9g2Cmm-o1UVpLvRWeKMEgrs',
            verifed: false,
            subscribers: [
                
            ],
            subscriptions: [
            ],
            friends: [
                
            ],
            isSubscribers: true,
            MyArticles: [
                {
                    title: 'Nodejs наводит суету!',
                    idAccount: '2',
                    idArticle: '2', 
                    imgBanner: 'img/img-1.png',
                    autor: 'Типичный верстальщик',
                    description: 'Алсу негр и большая макака!',
                    time: '10:00'
                },
            ]
        }
    },
    {
        idAccount: 3,
        infoAccount: {
            phone: '3',
            password: 'error',
            phonePassword: '3error',
        },
        info: {
            name: 'it dev',
            img: 'https://avatars.mds.yandex.net/i?id=7729a4773af641e94452093a7b864b55-4303190-images-thumbs&n=13&exp=1',
            verifed: false,
            subscribers: [
                
            ],
            subscriptions: [
                `idAccount: 1`
            ],
            friends: [
                
            ],
            isSubscribers: true,
            MyArticles: [
                {
                    title: 'Как стать fullstackом за 3 месяца?',
                    idAccount: '3',
                    idArticle: '3', 
                    imgBanner: 'https://avatars.mds.yandex.net/i?id=7729a4773af641e94452093a7b864b55-4303190-images-thumbs&n=13&exp=1',
                    autor: 'it dev',
                    description: 'fullstack за три месяца = true!',
                    time: '13:00'
                },
                {
                    title: 'Почему не надо быть fullStackом',
                    idAccount: '3',
                    idArticle: '4', 
                    imgBanner: 'https://avatars.mds.yandex.net/i?id=7729a4773af641e94452093a7b864b55-4303190-images-thumbs&n=13&exp=1',
                    autor: 'it dev',
                    description: 'fullstack =не круто!',
                    time: '13:01'
                },
            ]
        }
    }
]

const CatalogArticle = [
    {
        idCatalog: 'recommendations',
        mode: 'IT и прогроммирование',
        type: 'catalog',
        articles: [
            {
                title: 'Что выбрать? React, Vue или Angular?',
                idAccount: '1',
                idArticle: '1', 
                imgBanner: 'https://yandex-images.clstorage.net/5cx2eD147/5039b0qMv/LAz7nFwdnbaqLgqvyO3QjsWNiQPE9UBulDq8XsrJHl-34_rnYmsBbq5flvFSGLF2NFzQ9_9u4W8qHOkYuiLTRmkdmp1sceSKgioKo_zJvKrZoak_5OUQcp1b4DOTrBp2-uei20aGnKNvjjZU39w51-woza_-H8UyLxlMtI_jinMkSM9cAHncMvp2d69s4dxO6eTt38z0YGc8drUn87g_Nq4T1wIKJiDnKz4a-N9ctcNoyG3Xyh8YlkcZ_GXHy4JzzIznKLjRCFre_qNTyDG0FmlclaPkLKTHOL6R4ydQ66L2T0s2PlZ8E_eOrownvBnrHMQZz36nnEY_LWTFG2OSu2hYd_DIeQTe3mJTW5zt9HZtrJlncDyo1zCOCYsnXM8CioN_vj5qpO8vVgoA31ytS5R07UtOhxTec0EomRNrhgfAEDt4QPFoFoqW94cgiWQy2TSN_2BgPBNkVj03zwBjzmpP_zpmLviDX64OuA_8kd-EDBG3toesTvNFrGXvyyZz_BQjjLzJdG7eAnsrNKHgCuE0le-4cJQb-F4dy0csG7o2F-eaan6AG3uamsSnwPW7nGxdA_oPGFLXmfSZnyeKg7AMw6j82djCrgYDT8jt5IJpVIE3ADTAA-CK7WervD8SwoPn-ipG1JM7Iv74n0ihIzRkUVuKQxwOtx1QbS_fWtfIBF9YfHUQUo6Cm1f0TaSy5XhRg_AQdHdEOjW_CzRT0v4br3Iu6vAH08qGgPOwGS9ggE0_Vit8YncdlOnDx7YLuIQn-PRBCAKmfpMzKCVcjv30-dscdLDz4LaRp89AE84-C2eKIl50R78e6lCfHD3b2HiBN44rhIYzfeRlo9vKS0AIuwT0HfyKQjLXQ6iB4Na1QGHbRCDkx7SGAQPbfAceMg_nzpJS3KuDUuYAB8zBk8hoHct-22S239VYCev_uptAdM_YBDX0Un7uJ9eESWzKaST1axQYTHO0SuFn3wSA',
                autor: 'Lorem, ipsum.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, omnis sit autem quia ut veritatis ullam nobis fugit deleniti nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, omnis sit autem quia ut veritatis ullam nobis fugit deleniti nostrum!',
                time: '00:00'
            },
            {
                title: 'Nodejs наводит суету!',
                idAccount: '2',
                idArticle: '2', 
                imgBanner: 'img/img-1.png',
                autor: 'Типичный верстальщик',
                description: 'Алсу негр и большая макака!',
                time: '10:00'
            },
            {
                title: 'Как стать fullstackом за 3 месяца?',
                idAccount: '3',
                idArticle: '3', 
                imgBanner: 'https://avatars.mds.yandex.net/i?id=7729a4773af641e94452093a7b864b55-4303190-images-thumbs&n=13&exp=1',
                autor: 'it dev',
                description: 'fullstack за три месяца = true!',
                time: '13:00'
            },
            {
                title: 'Почему не надо быть fullStackом',
                idAccount: '3',
                idArticle: '4', 
                imgBanner: 'https://avatars.mds.yandex.net/i?id=7729a4773af641e94452093a7b864b55-4303190-images-thumbs&n=13&exp=1',
                autor: 'it dev',
                description: 'fullstack =не круто!',
                time: '13:01'
            },
        ]
    },

]

const Articles = [
    {
        idArticle: '1',
        article: {
            title: 'Что выбрать? React, Vue или Angular?',
            autor: {
                idAccount: '1',
                name: 'Lorem ispum.',
                img: 'https://avatars.mds.yandex.net/i?id=32b28f1550c829804cdff7bf7866acb8-5886829-images-thumbs&n=13&exp=1',
                verifed: false,
                isSubscribers: true,
            },
            textHtml: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores possimus accusantium ipsam, minima, exercitationem corrupti sunt eum quam repudiandae optio officia. Eum perferendis temporibus vero earum ratione, consectetur dolorem nemo dignissimos ut molestiae quam debitis doloribus a eveniet omnis. Vitae iste nulla, quaerat ex consequatur minima deleniti sapiente recusandae quam magni optio voluptatum exercitationem. Laboriosam pariatur iure eaque laborum dolorum corporis eius sequi quisquam perferendis unde, sint expedita consectetur vero magnam illo ea. Quod, assumenda, suscipit quasi consectetur laboriosam officia error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores possimus accusantium ipsam, minima, exercitationem corrupti sunt eum quam repudiandae optio officia. Eum perferendis temporibus vero earum ratione, consectetur dolorem nemo dignissimos ut molestiae quam debitis doloribus a eveniet omnis. Vitae iste nulla, quaerat ex consequatur minima deleniti sapiente recusandae quam magni optio voluptatum exercitationem. Laboriosam pariatur iure eaque laborum dolorum corporis eius sequi quisquam perferendis unde, sint expedita consectetur vero magnam illo ea. Quod, assumenda, suscipit quasi consectetur laboriosam officia error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum. error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum. error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.'

        }         
    },
    {
        idArticle: '2',
        article: {
            title: 'Nodejs наводит суету!',
            autor: {
                idAccount: '2',
                name: 'Типичный верстальщик',
                img: 'https://play-lh.googleusercontent.com/9svgfY3FNIyRb0edb-N1VuoHB1EnJIat6idFLMvw4dvO9g2Cmm-o1UVpLvRWeKMEgrs',
                verifed: false,
                isSubscribers: true,
            },
            textHtml: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores possimus accusantium ipsam, minima, exercitationem corrupti sunt eum quam repudiandae optio officia. Eum perferendis temporibus vero earum ratione, consectetur dolorem nemo dignissimos ut molestiae quam debitis doloribus a eveniet omnis. Vitae iste nulla, quaerat ex consequatur minima deleniti sapiente recusandae quam magni optio voluptatum exercitationem. Laboriosam pariatur iure eaque laborum dolorum corporis eius sequi quisquam perferendis unde, sint expedita consectetur vero magnam illo ea. Quod, assumenda, suscipit quasi consectetur laboriosam officia error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores possimus accusantium ipsam, minima, exercitationem corrupti sunt eum quam repudiandae optio officia. Eum perferendis temporibus vero earum ratione, consectetur dolorem nemo dignissimos ut molestiae quam debitis doloribus a eveniet omnis. Vitae iste nulla, quaerat ex consequatur minima deleniti sapiente recusandae quam magni optio voluptatum exercitationem. Laboriosam pariatur iure eaque laborum dolorum corporis eius sequi quisquam perferendis unde, sint expedita consectetur vero magnam illo ea. Quod, assumenda, suscipit quasi consectetur laboriosam officia error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum. error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum. error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.'
        }         
    },
    {
        idArticle: '3',
        article: {
            title: 'Как стать fullstackом за 3 месяца?',
            autor: {
                idAccount: '3',
                name: 'it dev',
                img: 'https://avatars.mds.yandex.net/i?id=7729a4773af641e94452093a7b864b55-4303190-images-thumbs&n=13&exp=1',
                verifed: false,
                isSubscribers: true,
            },
            textHtml: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores possimus accusantium ipsam, minima, exercitationem corrupti sunt eum quam repudiandae optio officia. Eum perferendis temporibus vero earum ratione, consectetur dolorem nemo dignissimos ut molestiae quam debitis doloribus a eveniet omnis. Vitae iste nulla, quaerat ex consequatur minima deleniti sapiente recusandae quam magni optio voluptatum exercitationem. Laboriosam pariatur iure eaque laborum dolorum corporis eius sequi quisquam perferendis unde, sint expedita consectetur vero magnam illo ea. Quod, assumenda, suscipit quasi consectetur laboriosam officia error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores possimus accusantium ipsam, minima, exercitationem corrupti sunt eum quam repudiandae optio officia. Eum perferendis temporibus vero earum ratione, consectetur dolorem nemo dignissimos ut molestiae quam debitis doloribus a eveniet omnis. Vitae iste nulla, quaerat ex consequatur minima deleniti sapiente recusandae quam magni optio voluptatum exercitationem. Laboriosam pariatur iure eaque laborum dolorum corporis eius sequi quisquam perferendis unde, sint expedita consectetur vero magnam illo ea. Quod, assumenda, suscipit quasi consectetur laboriosam officia error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum. error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum. error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.'
        }         
    },
    {
        idArticle: '4',
        article: {
            title: 'Почему не надо быть fullStackом',
            autor: {
                idAccount: '3',
                name: 'it dev',
                img: 'https://avatars.mds.yandex.net/i?id=7729a4773af641e94452093a7b864b55-4303190-images-thumbs&n=13&exp=1',
                verifed: false,
                isSubscribers: true,
            },
            textHtml: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores possimus accusantium ipsam, minima, exercitationem corrupti sunt eum quam repudiandae optio officia. Eum perferendis temporibus vero earum ratione, consectetur dolorem nemo dignissimos ut molestiae quam debitis doloribus a eveniet omnis. Vitae iste nulla, quaerat ex consequatur minima deleniti sapiente recusandae quam magni optio voluptatum exercitationem. Laboriosam pariatur iure eaque laborum dolorum corporis eius sequi quisquam perferendis unde, sint expedita consectetur vero magnam illo ea. Quod, assumenda, suscipit quasi consectetur laboriosam officia error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores possimus accusantium ipsam, minima, exercitationem corrupti sunt eum quam repudiandae optio officia. Eum perferendis temporibus vero earum ratione, consectetur dolorem nemo dignissimos ut molestiae quam debitis doloribus a eveniet omnis. Vitae iste nulla, quaerat ex consequatur minima deleniti sapiente recusandae quam magni optio voluptatum exercitationem. Laboriosam pariatur iure eaque laborum dolorum corporis eius sequi quisquam perferendis unde, sint expedita consectetur vero magnam illo ea. Quod, assumenda, suscipit quasi consectetur laboriosam officia error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum. error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum. error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.error excepturi asperiores quis adipisci rerum temporibus deleniti qui ipsa deserunt ex ea sunt repudiandae cumque perspiciatis, placeat eum.'
        }         
    },
]