<template>
    <div class="app">
        <div class="tab">
            <div v-bind:class="{'active':item.select}" v-for="item in tabList0" @click="handle(item)">
          <span class="tab-icon">
            <i class="el-icon-arrow-right" v-show="!item.select"></i>
            <i class="el-icon-check" v-show="item.select"></i>
          </span>
                {{item.name}}
            </div>
        </div>
        <div class="tab-content">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="code"
                        label="项目编号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="项目名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="pro_name"
                        label="方案名称">
                </el-table-column>
                <el-table-column
                        prop="price_code"
                        label="报价单编号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="apply_code"
                        label="招投标申请编号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="company"
                        label="所属分公司">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="报价单创建日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="person"
                        label="办理人"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="node_name"
                        label="流程节点名称">
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="办理状态"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="solder"
                        label="销售员">
                </el-table-column>
            </el-table>
        </div>

        <br/>

        <div class="tab">
            <div v-bind:class="{'active':item.select}" v-for="item in tabList" @click="handle(item)">
                {{item.name}}
            </div>
        </div>
        <div class="tab-content">
            <div class="eom-title">评审结论</div>
            <div class="eom-content">
                <div class="eom-content-option">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="工程"></el-checkbox>
                        <el-checkbox label="法务"></el-checkbox>
                        <el-checkbox label="财务"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="eom-content-feature"><div>工程</div><div>法务</div><div>财务</div></div>
                <div class="eom-content-rec-top">
                    <div class="eom-content-rec">合同评审</div>
                    <div class="eom-content-rec">分总</div>
                </div>
                <div class="eom-content-title">工程条款共享总监评审意见</div>
                <div class="eom-content-rec-bottom">
                    <div class="eom-content-rec">
                        <textarea v-model="message" placeholder="add multiple lines"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <br/>

        <div class="eom-accessory">
            <div class="eom-accessory-title">
                <div><i class="el-icon-paperclip"></i>附件列表</div>
                <div><i class="el-icon-paperclip"></i>上传附件</div>
            </div>
            <div class="eom-accessory-content">
                <el-table
                        :data="accessoryData"
                        style="width: 100%">
                    <el-table-column
                            prop="index"
                            label="序号"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="文件名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="size"
                            label="文件大小"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="上传日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="user"
                            label="上传用户"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <br/>

        <div class="eom-btn">
            <div><i class="el-icon-s-promotion"></i>提交</div>
            <div><i class="el-icon-success"></i>同意</div>
            <div><i class="el-icon-error"></i>返回</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                tableData: [{
                    code: 'VSK1900042',
                    name: '投标项目',
                    pro_name: '投标方案',
                    price_code: 'VSK201909NM0042',
                    apply_code: 'VSK20190945612',
                    company: '辽宁分公司',
                    date: '2019/6/11 10:38:31',
                    person: '袁小明',
                    node_name: '编辑价格审批表',
                    state: '待办理',
                    solder: '袁小明'
                }],
                accessoryData:[],
                message:'1234567',
                checkList: ['法务'],
                activeName: '合同评审',
                tabList:[{name:'合同评审',select:true},{name:'分总',select:false},{name:'共享总监',select:false}],
                tabList0:[{name:'报备',select:false},{name:'报价',select:false},{name:'招标',select:true}]
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handle(item){
                this.tabList.forEach(function(items){
                    items.select=false;
                    if(items.name==item.name){
                        items.select=true;
                    }
                });
            },
        }
    }
</script>

<style>
    .eom-accessory{}
    .eom-accessory-title{
        height: 50px;
        padding:0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        border-bottom:2px solid #ccc;
    }
    .eom-accessory-title>div:nth-of-type(1){
        font-weight: bold;
        font-size: 16px;
    }
    .eom-accessory-title>div:nth-of-type(2){
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        padding:0 10px;
        border-radius: 5px;
        background: #0281F4;
        color:#fff;
        cursor:pointer;
    }
    .eom-accessory-title>div:nth-of-type(2):hover{
        opacity:.6;
    }
    .eom-accessory-content{}

    .eom-btn{
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: #fff;
    }
    .eom-btn div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 30px;
        margin:0 10px;
        border-radius: 5px;
        background: #0281F4;
        color:#fff;
        cursor:pointer;
    }
    .eom-btn div:hover{
        opacity:.6;
    }

    .eom-title{
        height:40px;
        line-height: 40px;
        padding-left:20px;
        color:#6E8DBF;
        font-weight:bold;
        font-size:16px;
        border-bottom:2px solid #ccc;
        background: #fff;
    }
    .eom-content{
        background: #F7F7F7;
    }
    .eom-content-feature{
        display: flex;
        padding-left:20px;
    }
    .eom-content-feature>div{
        width:100px;
        height:40px;
        line-height: 40px;
    }
    .eom-content-option{
        display: flex;
        padding-left:20px;
        background: #fff;
    }
    .eom-content-option>div{
        display: flex;
        width:100px;
        height:40px;
        line-height: 40px;
    }
    .eom-content-rec-top{
        background: #fff;
        padding:10px 20px;
    }
    .eom-content-rec-top>div:nth-of-type(1){
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .eom-content-rec-top>div:nth-last-of-type(1){
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .eom-content-rec-bottom{
        padding:0 20px;
        padding-bottom: 10px;
    }
    .eom-content-rec-bottom>div{
        border-radius: 5px;
    }
    .eom-content-rec{
        height:140px;
        background: #fff;
        border:1px solid #286AFF;
        /*padding:10px;*/
        display: flex;
    }
    .eom-content-rec textarea{
        flex: 1 1 auto;
        border-radius: 5px;
        padding:10px;
        border: none;
    }
    .eom-content-title{
        height:40px;
        line-height: 40px;
        padding-left:20px;
    }

    .tab{
        display: flex;
    }
    .tab>div{
        width:80px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-right: 2px;
        color:#88A8FF;
        background: #FFF;
        cursor:pointer;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .active{
        font-weight:bold;
        color:#2467FF !important;
        border-bottom:2px solid #2467FF;
    }
    .tab-icon{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width:18px;
        height: 18px;
        border-radius: 50%;
        background: #3B76FF;
    }
    .tab-icon>i{
        color:#fff;
    }

    .app {
        width: 100% ;
        height: 100% ;
        background: #F0F0F0;
        color:#333;
        overflow: auto;
    }
</style>
