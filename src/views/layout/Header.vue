<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <span class="logo-lg"><b>G</b>tland</span>
    </a>
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <toggle class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></toggle>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!--
          &lt;!&ndash; Messages: style can be found in dropdown.less&ndash;&gt;
          <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              &lt;!&ndash;<i class="fa fa-envelope-o"></i>&ndash;&gt;
              <icon name="envelope-o"></icon>
              <span class="label label-success">4</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 4 messages</li>
              <li>
                &lt;!&ndash; inner menu: contains the actual data &ndash;&gt;
                <ul class="menu" style="overflow: hidden; width: 100%; height: 200px;">
                  <li>&lt;!&ndash; start message &ndash;&gt;
                    <a href="#">
                      <div class="pull-left">
                        <img src="http://placehold.it/160x160" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Support Team
                        <small><icon name="clock-o"></icon> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  &lt;!&ndash; end message &ndash;&gt;
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="http://placehold.it/128x128" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        AdminLTE Design Team
                        <small><icon name="clock-o"></icon> 2 hours</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="http://placehold.it/128x128" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Developers
                        <small><icon name="clock-o"></icon> Today</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="http://placehold.it/128x128" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Sales Department
                        <small><icon name="clock-o"></icon> Yesterday</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="http://placehold.it/128x128" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Reviewers
                        <small><icon name="clock-o"></icon> 2 days</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">See All Messages</a></li>
            </ul>
          </li>
          -->
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <icon name="bell-o"></icon>
              <span class="label label-warning">10</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 10 notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu" style="overflow: hidden; width: 100%;">
                  <li>
                    <a href="#">
                      <icon name="users" class="text-aqua"></icon> 5 new members joined today
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <icon name="warning" class="text-yellow"></icon> Very long description here that may not fit into the
                      page and may cause design problems
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <icon name="users" class="text-red"></icon> 5 new members joined
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <icon name="shopping-cart" class="text-green"></icon> 25 sales made
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <icon name="user" class="text-red"></icon> You changed your username
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>
        <!--
          &lt;!&ndash; Tasks: style can be found in dropdown.less &ndash;&gt;
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <icon name="flag-o"></icon>
              <span class="label label-danger">9</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 9 tasks</li>
              <li>
                &lt;!&ndash; inner menu: contains the actual data &ndash;&gt;
                <ul class="menu" style="overflow: hidden; width: 100%; height: 200px;">
                  <li>&lt;!&ndash; Task item &ndash;&gt;
                    <a href="#">
                      <h3>
                        Design some buttons
                        <small class="pull-right">20%</small>
                      </h3>
                      <el-progress :percentage="20" :show-text="false"></el-progress>
                    </a>
                  </li>
                  &lt;!&ndash; end task item &ndash;&gt;
                  <li>&lt;!&ndash; Task item &ndash;&gt;
                    <a href="#">
                      <h3>
                        Create a nice theme
                        <small class="pull-right">40%</small>
                      </h3>
                      <el-progress :percentage="40" status="success" :show-text="false"></el-progress>
                    </a>
                  </li>
                  &lt;!&ndash; end task item &ndash;&gt;
                  <li>&lt;!&ndash; Task item &ndash;&gt;
                    <a href="#">
                      <h3>
                        Some task I need to do
                        <small class="pull-right">60%</small>
                      </h3>
                      <el-progress :percentage="60" status="exception" :show-text="false"></el-progress>
                    </a>
                  </li>
                  &lt;!&ndash; end task item &ndash;&gt;
                  <li>&lt;!&ndash; Task item &ndash;&gt;
                    <a href="#">
                      <h3>
                        Make beautiful transitions
                        <small class="pull-right">80%</small>
                      </h3>
                      <el-progress :percentage="80" status="exception" :show-text="false"></el-progress>
                    </a>
                  </li>
                  &lt;!&ndash; end task item &ndash;&gt;
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>
          -->
          <!-- User Account: style can be found in dropdown.less -->
          <li class="user user-menu">
            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
              <img :src="avatar" class="user-image" alt="User Image">
              <span class="hidden-xs">{{name}}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img :src="avatar" class="img-circle" alt="User Image">

                <p>
                  {{name}}
                  <small>2017.09.22 - 2022.09.22</small>
                </p>
              </li>
              <!-- Menu Body -->
              <!--<li class="user-body">-->
              <!--</li>-->
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <router-link class='inlineBlock' to="/">
                    <span class="btn btn-default btn-flat">首页</span>
                  </router-link>

                </div>
                <div class="pull-right">
                  <span @click="logout" class="btn btn-default btn-flat">退出登录</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style rel="stylesheet/scss" lang="scss">

</style>

<script>
  import { mapGetters } from 'vuex'
  import Toggle from '@/components/Toggle'
  import Dropdown from '@/components/Dropdown'
  import { slimScroll } from '@/utils/plug'

  export default {
    components: {
      Toggle,
      Dropdown
    },
    data () {
      return {
        openUserMenu: false
      }
    },
    props: {
      slimscroll: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'name',
        'avatar'
      ])
    },
    mounted () {
      if (this.slimscroll) {
        slimScroll('.navbar .menu', {
          height: '200px'
        })
      } else {
        document.querySelector('.navbar .menu').style.overflowY = 'auto'
      }
    },
    methods: {
      toggleSideBar () {
        this.$store.dispatch('ToggleSideBar')
      },
      logout () {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()// 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
</script>
