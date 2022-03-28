<template>
  <div class="home">
    <!-- 연습2. slot 만들기 -->
    <!-- 2-1 자식 컴포넌트 태그 추가 -->
    <!-- 2-2 자식 컴포넌트 태그 사이 도시 이름과 설명을 출려하는 부분을 생성 -->
    <ChildComp>
      <div v-for="(city, index) in cities" :key="index">
        <h4>{{ city.name }}</h4>
        <p>{{ city.text }}</p>
      </div>
    </ChildComp>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ChildComp from "@/components/ChildComp.vue"

export default {
  name: 'HomeView',
  components: {
    "ChildComp" : ChildComp
  },
  data() {
    return {
      cities: [
        { name: "비엔나", text: "비엔나는 구경할 곳이 참 많은 도시 중 하나이다."},
        { name: "파리", text: "파리행 고속 열차 속에서 친절한 사람들을 만났다."},
        { name: "암스테르담", text: "암스테르담은 자전거가 많다."}
      ],
      // city: {
      //   name: "비엔나",
      //   text: "비엔나는 구경할 곳이 참 많은 도시 중 하나이다."
      // }
    }
  }
}
</script>
