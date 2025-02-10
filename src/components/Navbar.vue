<template>
  <nav class="navbar">
    <div class="logo">
      <a>Think</a>
    </div>

    <ul class="nav-list">
      <li v-for="link in links" :key="link.name" class="nav-item">
        <a :href="link.url" class="nav-link">{{ link.name }}</a>
      </li>
    </ul>

  </nav>
</template>

<script setup>
import { ref } from 'vue';

// 使用 ref 定义导航链接列表，方便动态扩展和复用
const links = ref([
  { name: '首页', url: '/' },
  { name: '关于我们', url: '/about' },
  { name: '服务', url: '/services' },
  { name: '联系我们', url: '/contact' },
]);
</script>

<style scoped>
/* 导航栏整体样式 */
.navbar {
  display: flex;
  justify-content: space-between; /* 两端对齐：左侧 Logo，右侧导航项 */
  align-items: center;
  padding: 10px 20px;
  background-color: #20232a; /* 深色背景 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

/* 网站标题样式 */
.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #61dafb; /* React 蓝，为简约风格 */
  text-decoration: none;
}

.logo a:hover {
  color: #fff; /* 鼠标悬停变为白色 */
}

/* 导航项列表样式 */
.nav-list {
  display: flex; /* 水平排列导航项 */
  list-style: none; /* 移除默认列表样式 */
  margin: 0;
  padding: 0;
}

/* 单个导航项样式 */
.nav-item {
  margin: 0 15px; /* 为每个导航项添加间距 */
}

/* 导航链接样式 */
.nav-link {
  color: #ffffff; /* 默认文字颜色：白色 */
  text-decoration: none; /* 移除默认下划线 */
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease; /* 添加颜色渐变效果 */
}

.nav-link:hover {
  color: #61dafb; /* 鼠标悬停变为 React 蓝 */
}
</style>