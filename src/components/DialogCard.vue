<template>
<div class="container w-full">
  <div class="w-1/3 mx-auto">
    <div class="bg-white rounded-lg ring-1 ring-pink-400 shadow-lg">
      <div class="w-auto border-t-8 border-pink-600 rounded-lg flex">
        <div class="w-1/3 pt-6 flex justify-center">
          <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" class="fill-current text-pink-600" ><path  d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path><path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path></svg>
        </div>
        <div class="w-full pt-9 pr-4">
          <h3 class="font-bold text-pink-700">{{ message }}</h3>
          <p class="py-4 text-sm text-gray-400">{{description}}</p>
        </div>
      </div>

      <div class="p-4 flex space-x-4">
        <a @click="clikPos()" href="#" class="w-1/2 px-4 py-3 text-center bg-gray-100
         text-gray-400 hover:bg-gray-200 hover:text-black font-bold
          rounded-lg text-sm focus:bg-gray-200 focus:ring-2 focus:ring-pink-300">{{ clickPositif }}</a>

        <a @click="clickNeg()" href="#" class="w-1/2 px-4 py-3 text-center text-pink-100
        bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white
        font-bold text-sm focus:ring-2 focus:ring-pink-600">{{ clickNegatif }}</a>
      </div>
    </div>
  </div>

  <!--Loader-->

    <Loading v-if="loading" class="mx-auto w-16 h-16"/>
</div>


</template>

<script>
import Loading from "./Loading";
export default {
  name: "DialogCard",
  data(){
    return{
      loading : false
    }
  },
  components:{
    Loading
  },
  props : ["message","description", "clickPositif", "clickNegatif"],
  methods:{
    clikPos(){
      this.$emit("clikPos")
      this.loading = true
    },
    clickNeg(){
      this.$emit("clickNeg", false)
    }
  }
}
</script>

<style scoped>

</style>
