import {
    Login,
    multiLevelMenu,
    NotFound,
    Home,
    changePwd,
    dashBoard,
    c2cOrder,
    c2cBuyOrder,
    c2cSellOrder,
    exchangeOrder,
    merchantList,
    merchantWallet,
    merchantWalletRecords,
    merchantChannel,
    currency,
    channel,
    apiDocs
} from "@/router/const.js";

let routes = [
    {
        path: "/",
        component: Home,
        name: "首页",
        iconCls: "el-icon-message", //图标样式class
        children: [
            //欢迎页
            {path: "/dashBoard", component: dashBoard, name: "欢迎页", hidden: true},
            {
                path: "/changePwd",
                component: changePwd,
                name: "修改密码",
                hidden: true,
            },
            //订单管理
            {
                path: "/order",
                component: multiLevelMenu,
                name: "订单管理",
                icon: 'el-icon-document-copy',
                children: [

                    {
                        path: "/c2cBuyOrder",
                        component: c2cBuyOrder,
                        name: "代收",
                    },
                    {
                        path: "/c2cSellOrder",
                        component: c2cSellOrder,
                        name: "代付",
                    },
                    // {
                    //   path: "/exchangeOrder",
                    //   component: exchangeOrder,
                    //   name: "兑换订单",
                    // },
                ],
            },
            //商户管理
            {
                path: "/merchant",
                component: multiLevelMenu,
                name: "商户管理",
                icon: 'el-icon-school',
                children: [
                    {path: "/merchantList", component: merchantList, name: "商户信息"},
                    {path: "/merchantChannel/:id", component: merchantChannel, name: "已开通通道"},
                    {path: "/merchantWallet/:id", component: merchantWallet, name: "商户钱包", hidden: true},
                    {
                        path: "/merchantWalletRecords/:id",
                        component: merchantWalletRecords,
                        name: "商户钱包记录",
                        hidden: true
                    },
                ],
            },
            //开放平台
            {
                path: "/api",
                component: multiLevelMenu,
                name: "开放平台",
                icon: 'el-icon-odometer',
                children: [
                    {path: "/channel", component: channel, name: "通道"},
                    {path: "/currency", component: currency, name: "币种"},
                    {path: "/merchantApi", component: apiDocs, name: "Api对接文档"},
                ],
            },
        ],
    },
    {
        path: "/login",
        component: Login,
        name: "",
    },
    {
        path: "/404",
        component: NotFound,
        name: "",
    },
    {
        path: "*",
        hidden: true,
        redirect: {path: "/404"},
    },
];

export default routes;
