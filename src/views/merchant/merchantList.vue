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
      <div class="info-item">
        <span>API白名单</span>
        <div v-if="apiWhiteListVisible" class="item-edit">
          <el-input v-model="detail.api_white_list"></el-input>
          <el-button type="primary" size="mini" @click="handleSaveApi"
            >保存</el-button
          >
        </div>
        <div v-else class="item-edit">
          <span>{{ detail.api_white_list }}</span>
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="apiWhiteList"
          ></el-button>
        </div>
      </div>
      <div class="info-item">
        <span>商户后台登录白名单</span>
        <div v-if="loginWhiteListVisible" class="item-edit">
          <el-input v-model="detail.whitelist"></el-input>
          <el-button type="primary" size="mini" @click="handleSaveWhiteList"
            >保存</el-button
          >
        </div>
        <div v-else class="item-edit">
          <span>{{ detail.whitelist }}</span>
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="loginWhiteList"
          ></el-button>
        </div>
      </div>
      <el-button
        type="text"
        size="mini"
        icon="el-icon-set-up"
        @click="handelResetPk()"
        >重置密钥</el-button
      >
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
import {
  getInfo,
  resetBusinessPK,
  modBusiness,
  modBusinessAPIConfig,
} from "@/api/admin";
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
      apiWhiteListVisible: false,
      loginWhiteListVisible: false,
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
    // 重置密钥
    handelResetPk() {
      resetBusinessPK().then((res) => {
        this.$message({
          message: "操作成功",
          type: "success",
        });
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
    apiWhiteList() {
      this.apiWhiteListVisible = true;
    },
    loginWhiteList() {
      this.loginWhiteListVisible = true;
    },
    handleSaveApi() {
      modBusinessAPIConfig({
        white_list: this.detail.api_white_list,
      }).then((res) => {
        this.apiWhiteListVisible = false;
        this.$message({
          message: "操作成功",
          type: "success",
        });
      });
    },
    handleSaveWhiteList() {
      modBusiness({
        white_list: this.detail.whitelist,
      }).then((res) => {
        this.loginWhiteListVisible = false;
        this.$message({
          message: "操作成功",
          type: "success",
        });
      });
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
      width: 140px;
      color: #888;
    }
    .item-edit {
      display: flex;
      .el-button--mini {
        margin-left: 10px;
      }
    }
  }
}
</style>