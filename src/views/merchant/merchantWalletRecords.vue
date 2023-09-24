<template>
    <section class="page-container">
        <!--工具条-->
        <el-col
                :span="24"
                class="toolbar"
                style="background: #fff; margin-bottom: 20px"
        >
            <div class="titleContent">
                <i class="el-icon-warning-outline"></i>
                筛选
            </div>
            <el-form ref="filters" :inline="true" :model="filters" size="medium">

                <el-form-item
                        prop="current_id"
                        label="货币"
                        :label-width="formLabelWidth"
                >
                    <el-select v-model="filters.current_id" placeholder="货币">
                        <el-option
                                v-for="item in currencyList"
                                :key="item.id"
                                :label="item.currency_name"
                                :value="item.id"
                        ></el-option>
                    </el-select>
                </el-form-item>

                <div style="margin: 0 auto; width: 210px; float: right">
                    <el-form-item>
                        <el-button type="primary" size="mini" @click="getData"
                        >搜索
                        </el-button
                        >
                    </el-form-item>
                    <el-form-item>
                        <el-button type size="mini" @click="resetForm">重置</el-button>
                    </el-form-item>
                </div>
            </el-form>
        </el-col>

        <div class="tableDivs">
            <!--列表-->
            <el-table
                    border
                    :data="tableData"
                    highlight-current-row
                    v-loading="listLoading"
            >
                <el-table-column prop="order_no" label="关联订单号"></el-table-column>
                <el-table-column prop="currency_name" label="货币名称"></el-table-column>
                <el-table-column prop="channel_currency_name" label="通道-货币"></el-table-column>
                <el-table-column prop="before_amount" label="变动前余额"></el-table-column>
                <el-table-column prop="change_amount" label="变动金额"></el-table-column>
                <el-table-column prop="result_amount" label="余额"></el-table-column>
                <el-table-column prop="create_time" label="操作时间"></el-table-column>
                <el-table-column prop="remark" label="备注"></el-table-column>
                <el-table-column label="操作" align="left">
                    <template slot-scope="scope">
                        <el-button type="text" @click="deleteHandle(scope.row.id)" size="mini">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-sizes="[10, 15, 20, 25]"
                    :page-size="10"
                    layout="total, prev, pager, next, sizes, jumper"
                    :total="total"
                    style="float:right;margin: 15px;"
            ></el-pagination>
        </div>
    </section>
</template>

<script>
import {getsBusinessWalletRecord} from "@/api/merchant";
import { getsCurrency } from "@/api/currency";

export default {
    data() {
        return {
            tableData: [],
            roleList: [],
            total: 0,
            page: 1,
            pageSize: 10,
            currencyList: [],
            listLoading: false,
            filters: {
                current_id: "",
            },
            formLabelWidth: "120px",
            LabelWidth: "140px",
            newsFormVisible: false,
        };
    },
    methods: {
        statusMethods(row) {
            for (var i in this.statusOptions) {
                switch (row.status) {
                    case this.statusOptions[i].value:
                        return this.statusOptions[i].label;
                        break;
                }
            }
        },
        // 分页
        handleCurrentChange(val) {
            this.page = val;
            this.getData();
        },
        // 分页N条
        handleSizeChange(val) {
            this.pageSize = val;
            this.getData();
        },
        // 获取用户列表
        getData() {
            this.listLoading = true;
            getsBusinessWalletRecord({
                currency_id: this.filters.current_id,
                page: this.page,
                limit: this.pageSize,
            })
                .then((res) => {
                    this.listLoading = false;
                    this.tableData = res.items;
                    this.total = res.total;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        // 获取货币列表
        getCurreny() {
            getsCurrency({
                page: 1,
                limit: 100
            })
                .then((res) => {
                    this.currencyList = res.items;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    created() {
        this.getData();
        this.getCurreny();
    },
};
</script>

<style scoped>
</style>