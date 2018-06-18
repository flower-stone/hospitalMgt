<template>
  <div id="app">
    <header id="header" class="mdl-layout__header">
      <div class="main">
        <h2>医院后台管理系统</h2>
      </div>
    </header>
    <div class="main">
      <!-- 左边菜单 -->
      <el-menu default-active="1" router class="el-menu-vertical-demo appMenu">
        <el-submenu index="/home">
          <template slot="title">预约挂号</template>
          <el-menu-item-group>
            <el-menu-item v-for="item in home" :index="'/home?doctorId='+item.id">{{item.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/reports">
          <template slot="title">数据统计</template>
          <el-menu-item-group>
            <el-menu-item index="/reports?type=1">床位</el-menu-item>
            <el-menu-item index="/reports?type=2">手术</el-menu-item>
            <el-menu-item index="/reports?type=3">门诊VS住院</el-menu-item>
            <el-menu-item index="/reports?type=4">挂号渠道</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/blackListMgmt">黑名单管理</el-menu-item>
        <el-menu-item index="/authMgmt">后台权限管理</el-menu-item>
        <el-menu-item index="/reservationList">预约病人列表</el-menu-item>
        <el-menu-item index="/timeSet">时间设置</el-menu-item>

      </el-menu>
      <!-- 右边内容 -->
      <div class="content">
        <router-view/>
      </div>
    </div>

  </div>
</template>
<script src="./index.js"></script>

<style src="./index.scss" lang="scss"></style>

