<style scoped></style>

<template>
  <div class="component-child">
    Child counter : {{ num }} <br />
    <button name="child" v-on:click="addCounter">+</button>
    <button name="child" v-on:click="subCounter">-</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: ['num'],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {};
  },
  //template: ``,
  methods: {
    addCounter(e) {
      console.log(e.target);
      this.$emit('addCounter', +1);
      // this.$data.num = this.$data.num + 1;
    },
    subCounter(e) {
      console.log(e.target);
      this.$emit('subCounter', -1);
      // this.$data.num = this.$data.num - 1;
    },
  },
};
</script>
