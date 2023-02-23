<template>
  <div v-loading="loading" class="dashboard-container">
    <div class="app-container">
      <!-- 工具栏 -->
      <page-tools>
        <template></template>
        <template>
          <el-button size="mini" type="danger">历史归档</el-button>
          <el-button size="mini" type="primary">报表</el-button>
        </template>
      </page-tools>
      <!-- 筛选组件 -->
      <social-tool />
      <el-card class="hr-block">
        <el-table :data="list" style="width: 100%">
          <el-table-column type="index" width="50" label="序号" />
          <el-table-column prop="username" label="姓名" sortable />
          <el-table-column prop="mobile" label="手机" sortable />
          <el-table-column prop="workNumber" label="工号" sortable />
          <el-table-column prop="departmentName" label="部门" sortable width="100" />
          <el-table-column prop="timeOfEntry" label="入职时间" sortable />
          <el-table-column prop="leaveTime" label="离职时间" sortable />
          <el-table-column prop="participatingInTheCity" label="社保城市" width="150" />
          <el-table-column prop="providentFundCity" label="公积金城市" width="150" />
          <el-table-column prop="socialSecurityBase" label="社保基数" />
          <el-table-column prop="providentFundBase" label="公积金基数" />
          <el-table-column label="操作">
            <template>
              <el-button type="text" size="mini">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" align="middle" justify="center" style="height: 60px">
          <el-pagination layout="prev, pager, next"/>
        </el-row>
      </el-card>

    </div>
  </div>
</template>

<script>

    export default {
     
    }
</script>

<style lang="scss" scoped>

</style>