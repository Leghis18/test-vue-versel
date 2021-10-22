<template>
  <div class="parent">
    <div class="enfant1 ">
      <Sidebar></Sidebar>
    </div>
    <div class="enfant2 ">
      <Header1></Header1>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Header1 from "../components/Header1";
export default {
  name: "index",
  data(){
    return{

    }
  },
  components:{
    Sidebar,
    Header1
  },
  mounted() {
    // this.$router.push({pa})
  }
}
</script>

<style scoped>
.parent{
  display: flex;
}

.enfant1{
  flex: 1;
  height: 100%;

}
.enfant2{
  flex: 4;
}
</style>
