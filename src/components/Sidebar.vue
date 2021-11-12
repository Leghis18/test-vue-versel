<template>
  <div class="relative bg-blue-900 w-full dark:bg-gray-800">
    <div class="flex flex-col sm:flex-row sm:justify-around">
      <div class="w-60 h-screen">
        <div class="flex items-center justify-start mx-6 mt-10">
          <!--          <img class="h-10" src="./src/assets/img/svg/nexah.svg"/>-->
          <span class="text-white dark:text-gray-300 ml-4 text-2xl font-bold">
                    {{ Titre }}
                </span>
        </div>
        <nav class="mt-10 px-6 ">

          <!--          Bouton menu Paiement-->
          <RouterLink :to="'/'+' '">
            <a @click="clickMenu(1)" v-bind:class="effect[0].active?clickClass:''"
               class="hover:text-gray-800 hover:bg-gray-100 flex items-center
               p-2 my-6 transition-colors dark:hover:text-white
               dark:hover:bg-gray-600 duration-200  dark:border-gray-300
               text-white dark:text-gray-100   dark:bg-gray-600"
               href="#">
              <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z">
                </path>
              </svg>
              <span class="mx-4 text-lg font-normal">
                        Paiement
                    </span>
              <span class="flex-grow text-right">
                    </span>
            </a>
          </RouterLink>
          <!--          Bouton menu Paiement-->


          <!--          menu Historiqque-->
          <RouterLink to="/history">
            <a @click="clickMenu(2)" v-bind:class="effect[1].active?clickClass:''"
               class="hover:text-gray-800 hover:bg-gray-100 flex items-center
                p-2 my-6 transition-colors dark:hover:text-white
                dark:hover:bg-gray-600 duration-200  text-white dark:text-gray-400  "
               href="#">
              <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z">
                </path>
              </svg>
              <span class="mx-4 text-lg font-normal">
                        Historique
                    </span>
              <span class="flex-grow text-right">

                    </span>
            </a>
          </RouterLink>
          <!--          menu Historiqque-->

          <!--          Liste d'utilisateur-->
          <RouterLink to="/listuser">
            <a @click="clickMenu(3)" v-bind:class="effect[2].active?clickClass:''"
               class="hover:text-gray-800 hover:bg-gray-100 flex items-center
               p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600
                duration-200 text-white dark:text-gray-400  "
               href="#">
              <svg width="20" height="20" class="m-auto" fill="currentColor" viewBox="0 0 2048 1792"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                </path>
              </svg>
              <span class="mx-4 text-lg font-normal">
                        Fournisseurs
                    </span>
              <span class="flex-grow text-right">
                    </span>
            </a>
          </RouterLink>
          <!--          Liste d'utilisateur-->

        </nav>
      </div>
    </div>
  </div>
</template>

<script>
// import Cookies from "js-cookie";

export default {
  name: "Sidebar",
  data() {
    return {
      icon: './src/assets/img/svg/nexah.svg',
      Titre: "Supplier Pay",
      clickClass: "border-r-4  border-white ",
      position: 0,
      // routeIndex : '',
      effect: [
        {position: 1, active: false},
        {position: 2, active: false},
        {position: 3, active: false},
        {position: 4, active: false}
      ],


    }
  },
  methods: {

    //Methode pour detecter sur quel page on a cliquer afin de mettre
    //la barre vertical de droite
    clickMenu(position) {
      let i = 0
      //Parcourir la liste effect pour la mettre a jour
      //pour l'element sur lequel on a cliquer on change sa valeur active a true charge
      //la variable position par la valeur de sa position
      //Ce qui permet a notre template de détecté l'élément sur lequel il doit mettre la barre vertical
      // de droite.
      //Pour les elements qui n'ont pas été cliquer on met leur active a false de tel sorte que
      // la barre vertical se retire sur l'élement précédent
      for (i; i < this.effect.length; i++) {
        if (position === this.effect[i].position) {
          this.effect[i].active = true
          this.position = this.effect[i].position

          let j = 0
          for (j; j < this.effect.length; j++) {
            if (this.effect[j].position !== position) {
              this.effect[j].active = false
            }
          }
        }
      }
      //
      //
      // this.effect.map(data => {
      //   if (position === data.position) {
      //     data.active = true
      //     this.position = data.position
      //     this.effect.map(d => {
      //       if (d.position !== position) {
      //         d.active = false;
      //       }
      //     })
      //   }
      // })
    }
  },
  // git remote add origin  https://USERNAME:PASSWORD@github.com/username/reponame.git
  mounted() {
    // this.routeIndex = this.$route.params.code !== undefined?this.$route.params.code:Cookies.get('secret-code')
      switch (this.$route.path) {
      case '/':
        this.effect[0].active = true
        // this.$router.push('/' + Cookies.get('secret-code'))
        break
      case "/history":
        this.effect[1].active = true
        break
      case "/listuser":
        this.effect[2].active = true
        break
        default:
          this.effect[0].active = true
          // this.$router.push('/' + Cookies.get('secret-code'))
          break
    }
  }
}
</script>


<style scoped>

</style>


