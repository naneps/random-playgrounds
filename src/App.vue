<template >
  <div class="container mx-auto">
    <Navbar />
    <div v-auto-animate>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import TicTacToe from "./pages/TicTacToe.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: { TicTacToe, Navbar },
};
</script>
<style >
</style>