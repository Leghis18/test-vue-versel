<template>
  <div>
    <div v-if="startAddUser" class="flex flex-col justify-center items-center h-screen container w-full">

      <Loading class=" w-24 h-24 hidden" v-bind:class="InfoALert.show===true?'hidden':''"/>

      <Alert class="mx-auto" v-on:fermerAlerte="fermerAlerte()" v-if="InfoALert.show"
             :message="InfoALert.messageAlert" :color="InfoALert.colorAlert"/>
    </div>

    <div v-if="!startAddUser" class="flex w-full">
      <div class="h-screen fixed w-1/5">
        <Sidebar class=""></Sidebar>
      </div>
      <div class="w-1/5 ">

      </div>
      <div class="w-4/5">
        <Header1 class=""></Header1>
        <RouterView class=""></RouterView>
      </div>
    </div>


  </div>

</template>


<script>
import Sidebar from "../components/Sidebar"
import Header1 from "../components/Header1"
import Axios from 'axios'
import Alert from "../components/Alert";
import Cookies from 'js-cookie'
import Loading from "../components/Loading";

export default {
  name: "index",
  data() {
    return {
      startAddUser: true,
      InfoALert: {
        messageAlert: '',
        colorAlert: 'bg-red-500',
        show: false,
      },
      routeCode: {
        code: this.$route.params.code != undefined ? this.$route.params.code : Cookies.get('secret-code')
      },
    }
  },
  components: {
    Sidebar,
    Header1,
    Alert,
    Loading,
  },
  mounted() {
    console.log(Cookies.get())
    switch (this.$route.path) {
      case '/':
        if (Cookies.get('secret-code') !== undefined && this.$route.params.code === undefined) {
          this.$router.push("/" + Cookies.get('secret-code'))
        }
        break
    }
    console.log(Cookies.get())

    Axios.post('https://paysup-api-preprod.nexah.net/api/v1/login', this.routeCode)
        .then((response) => {
          console.log(response.data.data)
          //Enregistrer le cookies
          if (Cookies.get('secret-code') === undefined) {
            if (this.$route.params.code !== undefined && response.data.data !== undefined) {
              Cookies.set('secret-code', this.$route.params.code, {sameSite: 'Lax'})
            }
          }

          console.log(`Connexion réussite avec succès ${response.data.errcode}`)
          //Sauvegarder API_TOKEN
          Cookies.set('pay-supplier', response.data.data.user.api_token, {sameSite: 'Lax', expires: 1})
          Cookies.set('org_id', response.data.data.user.curr_org_id, {sameSite: 'Lax', expires: 350})
          Cookies.set('sso_user_id', response.data.data.user.sso_user_id, {sameSite: 'Lax', expires: 350})

          this.startAddUser = false
          // Cookies.remove('pay-supplier')
          console.log(Cookies.get())
          console.log(`voici ce que j'ai fais ${this.$route.params.code}`)

          console.log(`ma route ${this.$route.path.length}`)
          if (this.$route.path === '/history') {
            this.$router.push("/history")
          } else if (this.$route.path === '/listuser') {
            this.$router.push("/listuser")
          } else {
            this.$router.push(" ")
          }

          console.log(Cookies.get('secret-code'))
          // console.log(api_token)
          // console.log(response.data.data.user){

        }).catch((error) => {
      this.InfoALert.show = true
      this.InfoALert.messageAlert = error.message
    })

  },
  methods: {
    fermerAlerte() {
      alert('Contacter votre administrateur')
    }
  }
}
</script>

<style scoped>

</style>
