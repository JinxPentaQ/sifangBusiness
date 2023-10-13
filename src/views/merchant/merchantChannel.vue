<template>
  <section class="page-container">
    <div class="tableDivs">
      <!--列表-->
      <el-table
        border
        :data="tableData"
        highlight-current-row
        v-loading="listLoading"
      >
        <el-table-column
          prop="channel_currency_name"
          label="通道_币种"
          align="left"
          min-width="150"
        />
        <el-table-column
          prop="channel_name"
          label="通道"
          align="left"
          min-width="130"
        />
        <el-table-column
          prop="currency_name"
          label="币种"
          align="left"
          min-width="80"
        />
        <el-table-column
          prop="buy_rate"
          label="代收费率"
          align="left"
          min-width="80"
        >
          <template slot-scope="scope">
            {{ filterNumber(scope.row.buy_rate) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="buy_is_open"
          label="代收通道状态"
          align="left"
          min-width="60"
        >
          <template slot-scope="scope">
            <el-switch
              :inactive-value="0"
              :active-value="1"
              v-model="scope.row.buy_is_open"
              @change="handleBuyStatusChange($event, scope.row)"
            ></el-switch>
          </template>
        </el-table-column>

        <el-table-column
          prop="buy_max_amount"
          label="代收最大金额"
          align="left"
          min-width="80"
        >
          <template slot-scope="scope">
            {{ filterNumber(scope.row.buy_max_amount) }}
          </template>
        </el-table-column>

        <el-table-column
          prop="buy_min_amount"
          label="代收最小金额"
          align="left"
          min-width="60"
        >
          <template slot-scope="scope">
            {{ filterNumber(scope.row.buy_min_amount) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="sell_rate"
          label="代付费率"
          align="left"
          min-width="60"
        >
          <template slot-scope="scope">
            {{ filterNumber(scope.row.sell_rate) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="sell_is_open"
          label="代付通道"
          align="left"
          min-width="60"
        >
          <template slot-scope="scope">
            <el-switch
              :inactive-value="0"
              :active-value="1"
              v-model="scope.row.sell_is_open"
              @change="handleSellStatusChange($event, scope.row)"
            ></el-switch>
          </template>
        </el-table-column>

        <el-table-column
          prop="sell_max_amount"
          label="代付最大金额"
          align="left"
          min-width="80"
        >
          <template slot-scope="scope">
            {{ filterNumber(scope.row.sell_max_amount) }}
          </template>
        </el-table-column>
        <el-table-column
          prop="sell_min_amount"
          label="代付最小金额"
          align="left"
          min-width="60"
        >
          <template slot-scope="scope">
            {{ filterNumber(scope.row.sell_min_amount) }}
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 15, 20, 25]"
        :page-size="10"
        layout="total, prev, pager, next, sizes, jumper"
        :total="total"
        style="float: right; margin: 15px"
      ></el-pagination>
    </div>
  </section>
</template>

<script>
import {
  getsBusinessChannelConfig,
  modBusinessChannelConfig,
} from "@/api/merchantChannel";
import {
  channelOpen,
  bySellType,
  channelOpenOptions,
  bySellTypeOptions,
} from "@/utils/const";
import { getOptionsText, filterNumber } from "@/utils/func";
export default {
  data() {
    return {
      filters: {
        current_id: "",
      },
      tableData: [],
      total: 0,
      page: 1,
      pageSize: 10,
      listLoading: false,
      labelWidth: "100px",
      channelOpen,
      bySellType,
      channelOpenOptions,
      bySellTypeOptions,
    };
  },
  methods: {
    getOptionsText,
    filterNumber,
    //分页
    handleCurrentChange(val) {
      this.page = val;
      this.getData();
    },
    // 分页N条
    handleSizeChange(val) {
      this.pageSize = val;
      this.getData();
    },
    // 重置
    resetForm() {
      this.$refs.filters.resetFields();
      this.getUsers();
    },
    //获取列表
    getData() {
      getsBusinessChannelConfig({
        business_id: this.$route.params.id,
        page: this.page,
        limit: this.pageSize,
      })
        .then((res) => {
          console.log(res, "ddd");
          this.listLoading = false;
          this.tableData = res.items;
          this.total = res.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 修改代付通道状态
    handleSellStatusChange(status, row) {
      modBusinessChannelConfig({ id: row.id, sell_is_open: status }).then(
        () => {
          this.$message({
            message: "修改成功",
            type: "success",
          });
        }
      );
    },
    // 修改代收通道状态
    handleBuyStatusChange(status, row) {
      modBusinessChannelConfig({ id: row.id, buy_is_open: status }).then(() => {
        this.$message({
          message: "修改成功",
          type: "success",
        });
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 130px;
  margin-left: 10px;
  vertical-align: bottom;
}
.el-dialog__body {
  .info-item {
    span:nth-child(1) {
      width: 80px;
      display: inline-block;
      font-weight: 700;
      font-size: 14px;
      color: #606266;
      line-height: 50px;
      text-align: right;
      padding-right: 20px;
    }
  }
}
</style>