import Login from "@/views/Login.vue";
import NotFound from "@/views/404.vue";
import Home from "@/views/Home.vue";
import multiLevelMenu from "@/views/layout/multiLevelMenu.vue";
import changePwd from "@/views/changePwd.vue";
//欢迎页
import welcome from "@/views/welcome.vue";

//订单
import c2cOrder from "@/views/order/c2cOrder.vue";
import exchangeOrder from "@/views/order/exchangeOrder.vue";

//商户
import merchantList from "@/views/merchant/merchantList.vue";
import merchantWallet from "@/views/merchant/merchantWallet.vue";
import merchantWalletRecords from "@/views/merchant/merchantWalletRecords.vue"
import merchantChannel from '@/views/merchant/merchantChannel.vue'


export {
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
};
