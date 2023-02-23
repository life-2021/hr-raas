<template>
 <div>
    <!-- 组织架构 -->
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1">
        <strong>江苏传智播客教育科技股份有限公司</strong>
        <span class="person">负责人</span>
        <span
          ><el-select
            v-model="value"
            size="mini"
            placeholder="操作"
            class="ctrl"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option> </el-select
        ></span>
      </el-menu-item>
    </el-menu>

    <div class="custom-tree-container">
      <div class="block">
        <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <el-button type="text" size="mini">
                孙财
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)"
              >
                <el-dropdown>
                  <span class="el-dropdown-link">
                    操作<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click="addFn">添加子部门</el-dropdown-item>
                    <el-dropdown-item>查看部门</el-dropdown-item>
                    <el-dropdown-item>删除部门</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value:'',
      options: [
        {
          value: "选项1",
          label: "添加子部门",
        },
      ],
      data: [
        {
          label: "总裁办",
        },
        {
          label: "行政部",
        },
        {
          label: "人事部",
        },
        {
          label: "财务部",
          children: [
            {
              label: "财务核算部",
            },
            {
              label: "税务管理部",
            },
            {
              label: "薪资管理部",
            },
          ],
        },
        {
          label: "技术部",
          children: [
            {
              label: "Java研发部",
            },
            {
              label: "Python研发部",
            },
            {
              label: "Php研发部",
            },
          ],
        },
        {
          label: "运营部",
        },
        {
          label: "市场部",
          children: [
            {
              label: "北京事业部",
            },
            {
              label: "上海事业部",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    addFn(){

    },
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu-demo {
  position: relative;
}
.block {
  padding: 10px 25px 0;
}
.person {
  position: absolute;
  right: -920px;
}
.ctrl {
  position: absolute;
  right: -1000px;
  width: 70px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right:200px;
}
</style>