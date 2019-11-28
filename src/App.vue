<template>
  <div id="app">
    <div class="app-title">
      <span>volkslift</span>
      <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </div>
    <div class="app-content">
      <div class="app-menu">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <router-link to="/">
          <el-menu-item  index="1">
            <i class="el-icon-document"></i>
            <span slot="title">招投标申请</span>
          </el-menu-item >
          </router-link>
          <router-link to="/VolBidManage">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">招投标管理</span>
          </el-menu-item>
          </router-link>
          <router-link to="/VolBidCommission">
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">待办列表</span>
          </el-menu-item>
          </router-link>
          <router-link to="/VolBidRecheck">
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">价格复核</span>
          </el-menu-item>
          </router-link>
        </el-menu>
      </div>
      <div class="app-view">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
  .el-menu{
    background-color: #002053 !important;
  }
  .el-menu-item{
    color:#fff !important;
  }
  .el-menu-item:hover, .el-menu-item:focus ,.el-menu-item:hover a, .el-menu-item:focus a{
    color: #303133 !important;
  }
  .el-menu-item>span>a{
    color:#fff;
  }
  .el-menu-vertical-demo{
    width: 200px;
    min-height: 600px;
  }
  .app-view{
    width: calc(100% - 220px);
    height: calc(100% - 20px);
    padding:10px;
    overflow: auto;
  }
  .app-menu{
    height: 100%;
  }
  .app-content{
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
  }
  .app-title{
    width: 100%;
    height: 60px;
    background: #002053;
    display: flex;
    align-items: center;
  }
  .app-title>span{
    color:#fff;
    margin:0 10px;
  }
  .app-view{
    flex:1 1 auto;
  }
  #app {
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background: #F0F0F0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
</style>
