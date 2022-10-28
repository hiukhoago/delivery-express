export const navs = [{
        name: 'Giới thiệu',
        to: '/about'
    },
    {
        name: 'Khách hàng',
        to: '/customer'
    },
    {
        name: 'Tài xế',
        to: '/driver'
    },
    {
        name: 'Dịch vụ',
        children: [{
                name: 'Giao hàng',
                to: '/services/delivery'
            },
            {
                name: 'Trung tâm thương mại',
                to: '/services/mart'
            },
            {
                name: 'Xe tải',
                to: '/services/truck'
            },
        ]
    },
    { name: 'Tin tức', to: '/news' },
    { name: 'Liên hệ', to: '/contact' },
]


export const navsAdmin = [{
        name: 'Trang chủ',
        to: '/'
    },
    {
        name: 'Quản lý tài khoản',
        to: '/admin/account'
    },
    {
        name: 'Quản lý dòng tiền',
        to: '/admin/activities'
    },
    {
        name: 'Quản lý đơn hàng',
        to: '/admin/orders'
    },
    {
        name: 'Lịch sử đánh giá',
        to: '/admin/rate'
    },
    {
        name: 'Biểu phí dịch vụ bưu chính',
        to: '/admin/help'
    }
]
export const navsManage = [{
        name: 'Quản lý tài khoản ',
        to: '/manage/accounts'
    },
    {
        name: 'Quản lý đơn hàng',
        to: '/manage/orders'
    },
    {
        name: 'Quản lý dòng tiền',
        to: '/manage/activities'
    },
    {
        name: 'Quản lý đối soát COD',
        to: '/manage/COD'
    },
    // {
    //     name: 'Quản lý đánh giá',
    //     to: '/manage/rates'
    // },
    // {
    //     name: 'Quản lý tin tức',
    //     to: '/manage/news'
    // },
    {
        name: 'Quản lý dịch vụ',
        to: '/manage/services'
    }
]