<template>
  <section class="page-container">
    <el-card class="box-card">
      <div class="info-item">
        <span>商户编号</span>
        <span>{{ detail.business_no }}</span>
      </div>
      <div class="info-item">
        <span>商户名称</span>
        <span>{{ detail.name }}</span>
      </div>
      <div class="info-item">
        <span>商户状态</span>
        <el-tag
          :type="detail.status === merchantStatus.open ? 'success' : 'info'"
          >{{ getOptionsText(merchantStatusOptions, detail.status) }}</el-tag
        >
      </div>
      <div class="info-item">
        <span>商户账号</span>
        <span>{{ detail.account }}</span>
      </div>
      <div class="info-item">
        <span>密钥</span>
        <span>{{ detail.private_key }}</span>
      </div>
      <div class="info-item">
        <span>备注</span>
        <span>{{ detail.remark }}</span>
      </div>
      <el-button
        type="text"
        size="mini"
        icon="el-icon-wallet"
        @click="handleWallet(detail.id)"
        >查看钱包</el-button
      >
      <el-button
        type="text"
        size="mini"
        icon="el-icon-notebook-2"
        @click="handleWalletRecords(detail.id)"
        >钱包记录</el-button
      >
      <el-button
        type="text"
        size="mini"
        icon="el-icon-s-shop"
        @click="handleCurrenyChannel(detail.id)"
        >通道配置</el-button
      >
    </el-card>
  </section>
</template>

<script>
// import posAdmin from "./components/posAdmin.vue";
import { getInfo } from "@/api/admin";
import { getOptionsText } from "@/utils/func";
import { merchantStatusOptions, merchantStatus } from "@/utils/const";
export default {
  components: {
    // posAdmin,
  },
  data() {
    return {
      labelWidth: "100px",
      formLabelWidth: "120px",
      formLabelWidthLong: "200px",
      detail: {}, //商户基本信息
      bindFormVisible: false,
      merchantStatusOptions,
      merchantStatus,
    };
  },
  methods: {
    //获取列表
    getData() {
      getInfo()
        .then((res) => {
          this.listLoading = false;
          this.detail = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 查看钱包
    handleWallet(id) {
      this.$router.push(`/merchantWallet/${id}`);
    },
    handleWalletRecords(id) {
      this.$router.push(`/merchantWalletRecords/${id}`);
    },
    // 通道设置
    handleCurrenyChannel(id) {
      this.$router.push(`/merchantChannel/${id}`);
    },
    getOptionsText,
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  .box-card {
  padding: 20px;
}
.info-item {
  display: flex;
  padding: 10px 0;
    span:nth-child(1) {
      width: 80px;
      color: #888;
    }
   
  }
}

</style>