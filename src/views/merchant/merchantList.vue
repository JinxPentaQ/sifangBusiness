<template>
  <section class="page-container">
    <el-card class="box-card">
      <div class="infoOperate">
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-set-up"
          @click="handelResetPk()"
          >重置密钥</el-button
        >
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-wallet"
          @click="handleWallet(detail.id)"
          >查看钱包</el-button
        >
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-notebook-2"
          @click="handleWalletRecords(detail.id)"
          >钱包记录</el-button
        >
      </div>

      <div class="info-item">
        <div class="title">商户编号</div>
        <div class="content">{{ detail.business_no }}</div>
      </div>
      <div class="info-item">
        <div class="title">商户名称</div>
        <div class="content">{{ detail.name }}</div>
      </div>
      <div class="info-item">
        <div class="title">商户状态</div>
        <div class="content">
          <el-tag
            :type="detail.status === merchantStatus.open ? 'success' : 'info'"
            >{{ getOptionsText(merchantStatusOptions, detail.status) }}</el-tag
          >
        </div>
      </div>
      <div class="info-item">
        <div class="title">商户账号</div>
        <div class="content">{{ detail.account }}</div>
      </div>
      <div class="info-item">
        <div class="title">密钥</div>
        <div class="content">{{ detail.private_key }}</div>
      </div>
      <div class="info-item">
        <div class="title">备注</div>
        <div class="content">{{ detail.remark }}</div>
      </div>
      <div class="info-item">
        <div class="title">API白名单</div>
        <div class="content">
          <div v-if="apiWhiteListVisible" class="item-edit">
            <el-input v-model="detail.api_white_list"></el-input>
            <el-button
              type="primary"
              size="mini"
              @click="apiWhiteListVisible = false"
              >取消</el-button
            >
            <el-button type="primary" size="mini" @click="handleSaveApi"
              >保存</el-button
            >
          </div>
          <div v-else class="item-edit">
            <div>{{ detail.api_white_list }}</div>
            <el-button type="primary" size="mini" @click="apiWhiteList"
              >编辑</el-button
            >
          </div>
        </div>
      </div>
      <div class="info-item">
        <div class="title">商户后台登录白名单</div>
        <div class="content">
          <div v-if="loginWhiteListVisible" class="item-edit">
            <el-input v-model="detail.whitelist"></el-input>
            <el-button
              type="primary"
              size="mini"
              @click="loginWhiteListVisible = false"
              >取消</el-button
            >
            <el-button type="primary" size="mini" @click="handleSaveWhiteList"
              >保存</el-button
            >
          </div>
          <div v-else class="item-edit">
            <div>{{ detail.whitelist }}</div>
            <el-button type="primary" size="mini" @click="loginWhiteList"
              >编辑</el-button
            >
          </div>
        </div>
      </div>
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
    .infoOperate {
      margin-bottom: 20px;
    }
  }
  .info-item {
    display: flex;
    align-items: center;
    border: 1px solid #e2e2e2;
    border-bottom: none;
    color: #67757C;
    .title {
      display: inline-block;
      width: 140px;
      font-weight: 700;
      font-size: 14px;
      line-height: 40px;
      padding-left: 10px;
      border-right: 1px solid #e2e2e2;
    }
    .content {
      display: flex;
      align-items: center;
      padding-left: 10px;
      .item-edit {
        display: flex;
        align-items: center;
        .el-button--mini {
          margin-left: 10px;
        }
      }
    }
  }
  .info-item:last-child {
    border-bottom: 1px solid #e2e2e2;
  }
}
</style>