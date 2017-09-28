<template>
  <div class='menu-wrapper'>
    <template v-for="item in routes">

      <router-link v-if="!item.hidden && item.isSingle && item.children.length>0" :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path" class='single-item'>
          <v-image v-if="item.image" :source="item.image" />
          <icon v-else-if='item.icon' :name="item.icon"></icon>
          <span>{{item.children[0].name}}</span>
          <template v-if="item.labels && item.labels.length > 0">
            <span class="pull-right-container">
              <small v-for="label in item.labels" class="label pull-right" :class="label.classes">{{label.text}}</small>
            </span>
          </template>
        </el-menu-item>
      </router-link>

      <el-submenu :index="item.name" v-if="!item.isSingle && !item.isHidden">
        <template slot="title">
          <v-image v-if="item.image" :source="item.image"></v-image>
          <icon v-else-if='item.icon' :name="item.icon"></icon>
          <span>{{item.name}}</span>
          <template v-if="item.labels && item.labels.length > 0">
            <span class="pull-right-container pull-right" style="margin-right: 30px;">
              <small v-for="label in item.labels" class="label pull-right" :class="label.classes">{{label.text}}</small>
            </span>
          </template>
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>

          <sidebar-item class='nest-menu' v-if='child.children && child.children.length>0' :routes='[child]'> </sidebar-item>

          <router-link v-else :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              <v-image v-if="child.image" :source="child.image"></v-image>
              <icon v-else-if='child.icon' :name="child.icon"></icon>
              <span>{{child.name}}</span>
              <template v-if="child.labels && child.labels.length > 0">
                <span class="pull-right-container pull-right" style="margin-right: 30px;">
                  <small v-for="label in child.labels" class="label pull-right" :class="label.classes">{{label.text}}</small>
                </span>
              </template>
            </el-menu-item>
          </router-link>

        </template>

      </el-submenu>

    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  }
}
</script>

