import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
    
} from '@iconscout/react-unicons'


import {images} from '../constans'

// SIDEBAR DATA
export const SidebarData = [
    {
        icon: UilEstate,
        heading: 'Dashboard'
    },
    {
        icon: UilClipboardAlt,
        heading: 'order'
    },
    {
        icon: UilUsersAlt,
        heading: 'customers'
    },
    {
        icon: UilPackage,
        heading: 'products'
    },
    {
        icon: UilChart,
        heading: 'analytics'
    },
    {
        icon: UilSignOutAlt,
        heading: ''
    },
]

export const CardsData = [
    {
        title: 'sales',
        color: {
            backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShadow:'0px 10px 20px 0px #e0c6f5',
        },
        barValue: 70,
        value: '25,970',
        png: UilUsdSquare,
        series: [
            {
                name: 'sales',
                data:[31,40,28,51,42,109,100],
            }
        ]
    },
    {
        title: 'revenue',
        color: {
            backGround: 'linear-gradient(180deg, #ff919d 0%, #fc929d 100%)',
            boxShadow:'0px 10px 20px 0px #fdc0c7',
        },
        barValue: 80,
        value: '14,970',
        png: UilMoneyWithdrawal,
        series: [
            {
                name: 'revenue',
                data:[10,100,50,70,80,30,40],
            }
        ]
    },
    {
        title: 'expenses',
        color: {
            backGround: 'linear-gradient(rgba(248,212,154) -146.42%, rgba(255,202,113) -46.42%)',
            boxShadow:'0px 10px 20px 0px #f9d59b',
        },
        barValue: 60,
        value: '4,270',
        png: UilClipboardAlt,
        series: [
            {
                name: 'expenses',
                data:[10,25,15,30,12,15,20],
            }
        ]
    },
]


// RECENT UPDATE CARD DATA

export const UpdatesData = [
    {
        img: images['list-img-01.png'],
        name: 'Andrew Thomas',
        noti: 'has ordered Apple smart watch 2500mh battery.',
        time: '25 seconds age',
    },
    {
        img:images['list-img-02.png'],
        name: 'James Bond',
        noti: 'has received samsung gadget for charging battery.',
        time: '30 minutes age',
    },
    {
        img: images['list-img-03.png'],
        name: 'Iron Man',
        noti: 'has ordered Apple smart watch, Samsung Gear 2500mh battery.',
        time: '2 hours ago',
    },
] 