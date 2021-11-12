<template>
  <div v-bind:class="color" class="container  flex items-center text-white text-sm font-bold px-4 py-3 relative" role="alert">
    <span>
      <i class='bx bxs-comment'></i>
    </span>
    <p>
      {{ message }}
    </p>
    <button @click="fermerAlerte" class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-6 w-6 text-white" viewBox="0 0 1792 1792">
        <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
        </path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "Alert",
  data(){
    return{

    }
  },
  props: ['color', 'message'],
  methods:{
    fermerAlerte : function (){
      this.$emit("fermerAlerte", false)
    }
  }
}
</script>

<style scoped>

</style>