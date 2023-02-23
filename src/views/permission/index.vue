<template>
    <div>
        <!-- 权限管理 -->
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="名称"
      width="350">
    </el-table-column>
    <el-table-column
      prop="name"
      label="标识"
      width="350">
    </el-table-column>
    <el-table-column
      prop="province"
      label="描述"
      width="350">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="250">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">添加</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
        
    </div>
</template>

<script>
    export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    created(){
      
    },
    data() {
      return {
        tableData: [{
          date: 'SAAS企业管理',
          name: 'saas-clients',
          province: '',
        }, {
          date: '员工管理',
          name: 'employees',
          province: '用户管理菜单',
        }, {
          date: '组织架构',
          name: 'departments',
          province: '组织架构菜单',
        }, {
          date: '公司设置',
          name: 'settings',
          province: '公司设置菜单',
        },{
          date: '权限管理',
          name: 'permissions',
          province: '权限菜单',
        }, {
          date: '社保',
          name: 'social_securitys',
          province: '社保菜单',
        }, {
          date: '考勤',
          name: 'attendances',
          province: '考勤',
        }, {
          date: '工资',
          name: 'salarys',
          province: '工资模块',
        },{
          date: '员工自助',
          name: 'user12345',
          province: '员工自助',
        }, {
          date: '审批',
          name: 'approvals',
          province: '审批',
        }, ]      
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>