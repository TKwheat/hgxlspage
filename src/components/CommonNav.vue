<template>
  <div>
    <nav
      class="
        navbar navbar-expand-lg
        bg-white
        navbar-light
        shadow
        border-top border-5 border-primary
        sticky-top
        p-0
      "
    >
      <router-link
        to="/home"
        class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5"
      >
        <h2 class="mb-2 text-white">鸿光科技</h2> </router-link>
      <button
        type="button"
        class="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <router-link to="/home" class="nav-item nav-link active">首页</router-link>
          <router-link to="/team" class="nav-item nav-link">关于</router-link>
          <router-link to="/service" class="nav-item nav-link">服务</router-link>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >更多</a>
            <div class="dropdown-menu fade-up m-0">
              <a class="dropdown-item" href="http://43.138.21.133/" target="view_window">系统</a>
              <!-- <router-link to="/permission" class="dropdown-item">授权</router-link> -->
              <router-link to="/price" class="dropdown-item">订购</router-link>
              <router-link to="/quote" class="dropdown-item">申请试用</router-link>
              <router-link to="/team" class="dropdown-item">我们的团队</router-link>
            </div>
          </div>
          <router-link to="/build" class="nav-item nav-link">联系我们</router-link>
          <!-- <router-link to="/build" class="nav-item nav-link">登录/注册</router-link> -->
        </div>
        <h4 class="m-0 pe-lg-5 d-none d-lg-block">
          <i class="fa fa-headphones text-primary me-3"></i>157 3518 4939
        </h4>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
</style>