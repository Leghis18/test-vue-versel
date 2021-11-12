<template>
  <div>
    <div class="bg-white rounded-lg w-full shadow sm:max-w-xl sm:w-full sm:mx-auto sm:overflow-hidden">
      <div class="position relative bg-yellow-500 w-full">
        <button @click="closeModal()"
                class="bg-red-500 position absolute right-0 text-lg font-bold text-white  ring-0 pl-4 pr-4 pt-2 pb-2 ">X
        </button>
      </div>

      <div class="px-4 py-8 sm:px-10">
        <div class="">
          <div class="w-full space-y-3">
            <h2 class="text-md font-bold text-center text-blue-200">Ajouter un Fournisseur</h2>

            <!--            Espace formulaire-->

            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         for="grid-first-name">
                    Nom
                  </label>
                  <input v-model="data.name" class="appearance-none block w-full
                  bg-gray-200 text-gray-700 border
                  border-gray-200  focus:border-gray-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                   focus:bg-white " id="grid-first-name" type="text" placeholder="ex: Ayina">
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         for="grid-last-name">
                    Numero de télephone
                  </label>
                  <input v-model="data.phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border
                  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                  focus:border-gray-500" id="grid-last-name2" type="number" placeholder="ex: 694936708">
                </div>
              </div>
              <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         for="grid-first-name">
                    Ville
                  </label>
                  <input v-model="data.town" class="appearance-none block w-full border
                  border-gray-200  focus:border-gray-500 bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                   focus:bg-white" id="grid-first-name2" type="text" placeholder="ex: Douala">
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         for="grid-last-name">
                    PO BOX
                  </label>
                  <input v-model="data.po_box" class="appearance-none block w-full bg-gray-200 text-gray-700 border
                  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                  focus:border-gray-500" id="grid-last-name" type="number" placeholder="ex: 237">
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Email
                  </label>
                  <input v-model="data.email" class="appearance-none block w-full bg-gray-200
                  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3
                  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                         id="grid-password" type="email" placeholder="ex: maerik.nexah@nexah.net">
                </div>

                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Site web
                  </label>
                  <input v-model="data.web_site" class="appearance-none block w-full bg-gray-200
                  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3
                  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                         id="grid-password2" type="text" placeholder="ex: www.nexah.net">
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    NIU
                  </label>
                  <input v-model="data.niu" class="appearance-none block w-full bg-gray-200
                  text-gray-700 border border-gray-200 rounded py-3 px-4
                  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                         id="grid-city" type="number" placeholder="ex: 1234567">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    RCCM
                  </label>
                  <input v-model="data.rccm" class="appearance-none block w-full bg-gray-200
                  text-gray-700 border border-gray-200 rounded py-3 px-4
                  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                         id="grid-city2" type="text" placeholder="ex: RCCM">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Address
                  </label>
                  <input v-model="data.address" class="appearance-none block w-full bg-gray-200
                  text-gray-700 border border-gray-200 rounded py-3 px-4
                  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                         id="grid-zip" type="text" placeholder="ex: Rue Logbessou">
                </div>
              </div>
            </form>

            <!--            Fin espace Formulaire-->


            <!--            Loader-->
            <Loading v-if="startAddUser" class="mx-auto w-5 h-5"/>

<!--            <div v-if="startAddUser" class="container w-full">-->
<!--              <div style="border-top-color:transparent"-->
<!--                   class="mx-auto w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>-->
<!--            </div>-->

            <!--            Composant alerte-->
            <Alert v-on:fermerAlerte="fermerAlerte($event)" v-if="Alerte.afficher"
                   :message="Alerte.message" :color="Alerte.color"></Alert>

            <span class="block w-full rounded shadow-sm">
              <button @click="addSuppliers()" type="submit"
                      class="py-2 px-4 mt-4   bg-blue-500 hover:bg-blue-600
                      focus:ring-indigo-300 focus:ring-offset-indigo-200
                      text-white w-full transition ease-in duration-200
                      text-center text-base font-semibold shadow-md focus:outline-none
                      focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Ajouter
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "../components/Alert";
import VerifSession from "../static/verifSession";
import Cookies from "js-cookie";
import Loading from "../components/Loading";

export default {
  name: "addSupplier",
  data() {
    return {
      data: {
        org_id: null,
        sso_user_id: null,
        name: null,
        phone: null,
        email: null,
        po_box: null,
        web_site: null,
        town: null,
        address: null,
        rccm: null,
        niu: null
      },
      Alerte: {
        message: "Veillez remplir tous les champs ",
        messageRemplirLesChamp: "Veillez remplir tous les champs ",
        messageerrorajoutsupplier: "Erreur ",
        messageChargementFournisseur : "Chargement de Fournisseur en cours...",
        colorChargement : "bg-blue-300",
        colorErreur : "bg-red-500",
        color: "bg-red-500",
        afficher: false
      },
      startAddUser: false
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false)
    },
    addSuppliers() {
      //si l'id est null effectuer un traitement
      //sinon effectuer un autre traitement
      //l'id comporte l'id de l'élément qu'on souhaite modifier
      if(this.id == null){
        this.data.org_id = Cookies.get('org_id')
        this.data.sso_user_id = Cookies.get('sso_user_id')
        console.log("voici mon id meme meme "+this.id)
        console.log("La valeur de ORG ID "+this.data.org_id)
        console.log("La valeur de sso user id "+this.data.sso_user_id)


        if (this.data.org_id != null && this.data.sso_user_id != null && this.data.name != null
            && this.data.phone != null && this.data.email != null && this.data.po_box != null
            && this.data.web_site != null && this.data.town != null && this.data.address != null
            && this.data.rccm != null && this.data.niu != null) {
          //Lancer le loader
          this.startAddUser = true

          VerifSession(Cookies.get('pay-supplier'), ()=>{
            axios.post("https://paysup-api-preprod.nexah.net/api/v1/Supplier", this.data, {
              headers: {
                Authorization: Cookies.get('pay-supplier')
              }
            }).then((response) => {
              //fermer le loader
              this.startAddUser = false
              console.log(response.data)
              this.closeModal()
            }).catch((error) => {
              //fermer le loader
              this.startAddUser = false
              this.Alerte.message = this.Alerte.messageerrorajoutsupplier + " " + error.message
              this.Alerte.color = this.Alerte.colorErreur
              this.Alerte.afficher = true

            })
          })

        }else {
          this.Alerte.afficher = true
        }
      }else {
        //Si l'id n'est pas égal a null
        this.startAddUser = true

        console.log("data org id "+ this.data.org_id)
        console.log("data sso user id "+this.data.sso_user_id)
        console.log("data name "+this.data.name)
        console.log("data phone "+this.data.phone)
        console.log("data email "+this.data.email)
        console.log("data web site "+this.data.web_site)
        console.log("data town "+this.data.town)
        console.log("data address "+this.data.address)
        console.log("data rccm "+this.data.rccm)
        console.log("data niu "+this.data.niu)

        if (this.data.org_id != null && this.data.sso_user_id != null && this.data.name != null
            && this.data.phone != null && this.data.email != null && this.data.po_box != null
            && this.data.web_site != null && this.data.town != null && this.data.address != null
            && this.data.rccm != null && this.data.niu != null) {
          //Lancer le loader
          console.log("tout est remplie")

          VerifSession(Cookies.get('pay-supplier'), ()=>{
            axios.put("https://paysup-api-preprod.nexah.net/api/v1/Supplier/"+this.id, this.data, {
              headers: {
                Authorization: Cookies.get('pay-supplier')
              }
            }).then((response) => {
              //fermer le loader
              this.startAddUser = false
              console.log("reussie avec succès "+response.data)
              this.closeModal()
            }).catch((error) => {
              //fermer le loader
              console.log("erreur avec succès")
              this.startAddUser = false
              this.Alerte.message = this.Alerte.messageerrorajoutsupplier + " " + error.message
              this.Alerte.color = this.Alerte.colorErreur
              this.Alerte.afficher = true})
          })
        } else {
          this.Alerte.message = this.Alerte.messageRemplirLesChamp
          this.Alerte.color = this.Alerte.colorErreur
          this.Alerte.afficher = true
        }
      }

    },
    fermerAlerte(event) {
      this.Alerte.afficher = event
    }
  },
  components: {
    Alert,
    Loading
  },
  props: ["id"],
  mounted() {

    console.log("voici donc mon id "+this.id)

    VerifSession(Cookies.get('pay-supplier'), ()=>{
      if (this.id != null) {
        this.Alerte.message = this.Alerte.messageChargementFournisseur
        this.Alerte.color = this.Alerte.colorChargement
        this.Alerte.afficher = true
        this.startAddUser = true
        axios
            .get("https://paysup-api-preprod.nexah.net/api/v1/Supplier/" + this.id, {
              headers: {
                Authorization: Cookies.get('pay-supplier'),
              },
            }).then((response) => {
          this.data.org_id = response.data[0].org_id
          this.data.sso_user_id = response.data[0].sso_user_id
          this.data.name = response.data[0].name
          this.data.phone = response.data[0].phone
          this.data.email = response.data[0].email
          this.data.po_box = response.data[0].po_box
          this.data.web_site = response.data[0].web_site
          this.data.town = response.data[0].town
          this.data.address = response.data[0].address
          this.data.rccm = response.data[0].rccm
          this.data.niu = response.data[0].niu

          //Retirer le loader et le alert
          this.startAddUser = false
          this.Alerte.afficher = false
        })
      }else{
        this.Alerte.afficher = false
        this.startAddUser = false
      }
    })

  }
}
</script>

<style scoped>

</style>
