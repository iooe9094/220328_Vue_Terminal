<template>
    <div>
        <h3>{{ title }}</h3>
        <ul class="white">
            <li>
                <router-link to="/admin/list">
                    제품리스트(Product List)
                </router-link>
            </li>
            <li>
                <router-link to="/admin/insert">
                    제품추가(New product)
                </router-link>
            </li>
                <!-- 자식 라우터 -->
                <router-view></router-view>
    </ul>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      title: "admin 입니다."
    }
  },
    beforeRouteEnter (to, from, next) {
    next()
  }
}
</script>

<style>
    li {
        display: inline-block;
        padding: 5px;
    }

    li a {
        font-weight: bold;
        color: black;
    }
</style>
