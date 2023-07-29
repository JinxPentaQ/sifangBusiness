import {
  Login,
  multiLevelMenu,
  NotFound,
  Home,
  changePwd,
  welcome,
  c2cOrder,
  exchangeOrder,
  merchantList,
  merchantWallet,
  merchantWalletRecords,
  merchantChannel,
} from "@/router/const.js";

let routes = [
  {
    path: "/",
    component: Home,
    name: "首页",
    iconCls: "el-icon-message", //图标样式class
    children: [
      //欢迎页
      { path: "/welcome", component: welcome, name: "欢迎页",  hidden: true },
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
            path: "/c2cOrder",
            component: c2cOrder,
            name: "C2C订单",
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
          { path: "/merchantList", component: merchantList, name: "商户信息" },
          { path: "/merchantWallet/:id", component: merchantWallet, name: "商户钱包",  hidden: true },
          { path: "/merchantWalletRecords/:id", component: merchantWalletRecords, name: "商户钱包记录",  hidden: true },
          { path: "/merchantChannel/:id", component: merchantChannel, name: "商户通道配置", hidden: true },
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
    redirect: { path: "/404" },
  },
];

export default routes;
