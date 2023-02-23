<template>
<div class="setting-container">
    <div class="app-container">
        <!-- 卡片组件 -->
   <el-card class="box-card">
        <!-- 使用 Tabs 组件完成标签页布局 -->
        <el-tabs v-model="activeName">
            <!-- 左边内容 -->
          <el-tab-pane label="角色管理" name="first" class="tab-pane">
            <!-- 新增角色按钮 -->
            <el-row style="height:60px">
              <el-button
                icon="el-icon-plus"
                size="small"
                type="primary"
                @click="addRoleBtnFn"
              >新增角色</el-button>
            </el-row>

            <!-- 使用 Table 组件实现用户角色的渲染  表格绑定数据-->
            <el-table :data="rolesList" border style="width: 100%">
              <el-table-column type="index" label="序号" width="120" />
              <el-table-column prop="name" label="角色名" width="240" />
              <el-table-column prop="description" label="描述" />
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="small" type="success" @click="setRoles(scope.row)">分配权限</el-button>
                  <el-button size="small" type="primary" @click="editRoles(scope.row)">编辑</el-button>
                  <el-button size="small" type="danger" @click="delRoles(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>

            <!-- 分页区域 -->
            <el-row type="flex" justify="center" align="middle" style="hight:60px">
              <!-- 1.当前页码 2.每页条数 3.总数 -->
                <el-pagination 
                :current-page="page.page"
                :page-size="page.pagesize" 
                :total="page.total" 
                 layout="prev, pager, next"
                 />
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="公司信息">

            <!-- 右边内容 -->

            <!-- 提示警告内容 -->
            <el-alert
              title="您好！贵公司名称欢迎您的来电，贵公司经营范围，我们本着以诚为根，以信为本的经营方针，真诚为您服务，恭候您的莅临！"
              type="info"
              :show-icon="true"
              :closable="false"
            />
            <el-form label-width="120px" style="margin-top:50px">
              <el-form-item label="公司名称">
                <el-input disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="公司地址">
                <el-input disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="公司电话">
                <el-input disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="公司邮箱">
                <el-input disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="备注">
                <el-input disabled style="width:400px" />
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
</div>
</template>

<script>
import {getRoleList} from "@/api/setting"
    export default {
           data(){
          return{
            list:[],//承接数组
             page: {
              //放置页码和相关数据
                 page: 1,
                 pageSize: 10,
                 total: 0//总数
              }
         }
       },
        created(){
              this.getRoleList()//获取角色列表
        },
        methods:{
         async getRoleList(){
           const{total,rows }= await getRoleList(this.page)
           this.page.total=total
           this.list=rows
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>