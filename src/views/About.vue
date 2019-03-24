<template>
  <div class="about">

    <h1>This is an about page</h1>

    <div>img标签</div>
    <img class="inline-blocker" src="../assets/images/ming-tian-shang-xian.jpg"   title="..相对路径（推荐）">
    <img class="inline-blocker" :src="`${require('@/assets/images/ming-tian-shang-xian.jpg')}`"    title="动态@相对路径">
    <img class="inline-blocker" :src="`${require('../assets/images/ming-tian-shang-xian.jpg')}`"    title="动态@相对路径">
    <img class="inline-blocker" src="@/assets/images/ming-tian-shang-xian.jpg"    title="@相对路径">
    <img class="inline-blocker" src="static/vue-images/vue2_6-Macross.jpg"        title="static资源">
    <img class="inline-blocker" :src="'./static/vue-images/vue2_6-Macross.jpg'"   title="动态属性访问static">
    <img class="inline-blocker" :src="'static/vue-images/vue2_6-Macross.jpg'"     title="动态属性访问static">

    <br>

    <div>
      内联css<br>
    </div>
    <div class="inline-blocker" :style="{backgroundImage: `url(${require('@/assets/images/ming-tian-shang-xian.jpg')})`}" title="动态@相对路径（推荐）"></div>
    <div class="inline-blocker" :style="{backgroundImage: `url(${require('../assets/images/ming-tian-shang-xian.jpg')})`}" title="动态..相对路径"></div>
    <div class="inline-blocker" :style="{backgroundImage: `url('static/vue-images/vue2_6-Macross.jpg')`}"></div>
    <div class="inline-blocker" style="background-image: url('static/vue-images/vue2_6-Macross.jpg');"></div>
    <div class="inline-blocker" style="background-image: url('./static/vue-images/vue2_6-Macross.jpg');"></div>

    <br>

    <div>
      style标签内css （局部/非静态全局样式不能使用static资源？）
    </div>
    <div class="inline-blocker blocker1"></div>
    <div class="inline-blocker blocker1-1"></div>
    <div class="inline-blocker blocker2"></div>
    <div class="inline-blocker blocker3"></div>
    <div class="inline-blocker blocker3-1"></div>
    <div class="inline-blocker blocker4" title="静态全局css"></div>

  </div>
</template>

<style scoped>
  .blocker1 { background-image: url("../assets/images/ming-tian-shang-xian.jpg"); }
  .blocker1-1 { background-image: url("~@/assets/images/ming-tian-shang-xian.jpg"); }
</style>

<style>
  .blocker3 { background-image: url("../assets/images/ming-tian-shang-xian.jpg"); }
  .blocker3-1 { background-image: url(~@/assets/images/ming-tian-shang-xian.jpg); }
</style>
