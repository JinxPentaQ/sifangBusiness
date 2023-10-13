import Login from "@/views/Login.vue";
import NotFound from "@/views/404.vue";
import Home from "@/views/Home.vue";
import multiLevelMenu from "@/views/layout/multiLevelMenu.vue";
import changePwd from "@/views/changePwd.vue";
//欢迎页
import dashBoard from "@/views/dashBoard/index.vue";

//订单
import c2cOrder from "@/views/order/c2cOrder.vue";
import c2cBuyOrder from "@/views/order/c2cBuyOrder.vue";
import c2cSellOrder from "@/views/order/c2cSellOrder.vue";
import exchangeOrder from "@/views/order/exchangeOrder.vue";

//商户
import merchantList from "@/views/merchant/merchantList.vue";
import merchantWallet from "@/views/merchant/merchantWallet.vue";
import merchantWalletRecords from "@/views/merchant/merchantWalletRecords.vue"
import apiDocs from '@/views/merchant/apiDocs.vue'
//通道 币种
import merchantChannel from '@/views/merchant/merchantChannel.vue'
import channel from '@/views/setting/channel.vue'
import currency from '@/views/setting/currency.vue'


export {
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
    channel,
    currency,
    apiDocs
};
