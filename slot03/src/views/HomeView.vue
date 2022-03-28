<template>
  <div class="home">

    <!-- 랜덤하게 객체 하나를 자식 컴포넌트에게 데이터 전달 -->
    <!-- 1. props 이용하여 데이터 전달 : ran_city = "randomCity" -->

    <ChildComp :ran_city="randomCity">
      <!-- 2. slot 이름 : best -->
      <!-- 추천하는 관광지 -->
      <div slot="best">
        <figure>
          <img src="@/assets/img/vienna.jpg" alt="">
          <figcaption>비엔나(Vienna)</figcaption>
        </figure>
      </div>

      <!-- 3. slot 이름 : footer -->
      <!-- 꼬리말 관광지 -->
      <div slot="footer">
        <footer>
          <p>&copy; All right reserved</p>
        </footer>
      </div>
    </ChildComp>

  </div>
</template>

<script>
// @ is an alias to /src
// 자식 컴포넌트 가져오기
import ChildComp from "@/components/ChildComp.vue"

export default {
  name: 'HomeView',
  components: {
    "ChildComp" : ChildComp
  },
  data() {
    return {
      cities: [
        {
          cityname: "paris", pic:require("@/assets/img/paris.jpg")
        },
        {
          cityname: "amsterdam", pic:require("@/assets/img/amsterdam.jpg")
        },
        {
          cityname: "dresden", pic:require("@/assets/img/dresden.jpg")
        }
      ]
    }
  },
  computed: {
    randomCity() {
      // 랜덤하게 고를 수 있는 정형화된 식
      return this.cities[Math.floor(Math.random() * this.cities.length)];
    }
  }
}
</script>
