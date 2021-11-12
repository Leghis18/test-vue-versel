<template>
  <div class="w-full h-full">
    <div class="parent">
      <div class="enfant1">
        <div
            class="
            bg-white
            rounded
            shadow-lg
            mt-4
            w-2/5
            mx-auto
          ">
          <div class="mx-auto px-4 py-8 sm:px-10">
            <div class="relative mt-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm leading-5">
                <span class="px-2 text-lg font-bold text-gray-500 bg-white">
                  Paiement Fournisseur
                </span>
              </div>
            </div>

            <div class="bg-red-100 mt-4" v-if="erreurSubmit.erreur">
              <Alert v-on:fermerAlerte="fermerAlerte(event)" :color="erreurSubmit.color" :message="erreurSubmit.message"></Alert>
            </div>
            <div class="mt-6">
              <div class="w-full space-y-6">
                <div>
                  <h3 class="text-gray-300 text-sm">
                    Selectionner un Fournisseur
                  </h3>
                  <v-select class="mt-2" v-model="data.supplier_id" :options="SupplierTable"></v-select>
                </div>

                <span v-bind:class="messageChargement.color" class="text-xs tracking-wider">
                    {{ messageChargement.message }}
                  </span>


                <div class="w-full">
                  <div class="relative">
                    <h3 class="text-gray-300 text-sm">
                      Inserer un Montant a payer
                    </h3>
                    <input
                        v-model="data.amount"
                        type="number"
                        id="search-form-price"
                        class="
                        rounded
                        border-transparent
                        flex-1
                        appearance-none
                        border border-gray-300
                        w-full
                        py-2
                        mt-2
                        px-4
                        bg-white
                        text-gray-700
                        placeholder-gray-400
                        shadow-sm
                        text-base
                        focus:outline-none
                        focus:ring-2 focus:ring-blue-600
                        focus:border-transparent
                      "
                        required
                        placeholder="Montant ex:23000"
                    />
                  </div>
                </div>

                <div>
                  <h3 class="text-gray-300 text-sm">
                    Inserer Un numero de téléphone
                  </h3>
                  <input
                      v-model="data.number"
                      type="number"
                      id="phone_number"
                      class="
                        rounded
                        border-transparent
                        flex-1
                        appearance-none
                        border border-gray-300
                        w-full
                        py-2
                        px-4
                        mt-2
                        bg-white
                        text-gray-700
                        placeholder-gray-400
                        shadow-sm
                        text-base
                        focus:outline-none
                        focus:ring-2 focus:ring-blue-600
                        focus:border-transparent
                      "
                      required
                      placeholder="numero ex: 694936707"
                  />
                </div>

                <div class="w-full">
                  <h3 class="text-gray-300 text-sm">
                    Inserer un commentaire
                  </h3>
                  <label class="text-gray-700" >
                    <textarea
                        id="commentaire"
                        v-model="data.description"
                        class="
                        flex-1
                        appearance-none
                        border border-gray-300
                        w-full
                        py-2
                        px-4
                        mt-2
                        bg-white
                        text-gray-700
                        placeholder-gray-400
                        rounded-sm
                        text-base
                        focus:outline-none
                        focus:ring-2 focus:ring-blue-600
                        focus:border-transparent
                      "
                        placeholder="Commentaire"
                        name="comment"
                        rows="5"
                        cols="40"
                        required
                    ></textarea>
                  </label>
                </div>
              </div>

              <div>
                <span class="block w-full rounded-md shadow-sm">
                  <button
                      type="button"
                      class="
                      py-2
                      px-4
                      mt-10
                      bg-indigo-500
                      hover:bg-indigo-700
                      focus:ring-indigo-500 focus:ring-offset-indigo-200
                      text-white
                      w-full
                      transition
                      ease-in
                      duration-200
                      text-center text-base
                      font-semibold
                      shadow-md
                      focus:outline-none
                      focus:ring-2 focus:ring-offset-2
                      rounded-lg
                    "
                      @click="paiment()"
                  >
                   PAYER
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<!--    footer-->
  </div>
</template>

<script>
import axios from "axios";
import Alert from "../components/Alert";
import VerifSession from '../static/verifSession'
import Cookies from "js-cookie";

export default {
  name: "paiement",
  data() {
    return {
      SupplierTable: [],
      listOfSupplier: [], //List total de supplier
      messageChargement:{
        message:"Liste fournisseur en cours de chargement...",
        color:"text-blue-400"
      },
      data: {
        supplier_id: null,
        amount: null,
        number: null,
        description: null
      },
      data2: {
        supplier_id: null,
        amount: null,
        number: null,
        description: null
      },
      erreurSubmit:{
        message : "Ne laissez aucun champ vide",
        erreur : false,
        color:"bg-red-500"
      },
      responseRequest : null
    };
  },
  components: {
    Alert
  },
  mounted() {
    //Utiliser axios pour exécuter la requette HTTP
    //Mettre un parametre dans le headers pour autoriser l'utilisateur a utiliser les api
    axios.get("https://paysup-api-preprod.nexah.net/api/v1/Supplier", {
      headers: {
        Authorization: Cookies.get('pay-supplier')
      }
    }).then((response) => {
      //Récuperer et traiter le résultat obtenu
      this.listOfSupplier = response.data;

      //Verifier si il y'a des elements dans la liste pour changer
      //son message d'attente
      if (this.listOfSupplier == null || this.listOfSupplier === "") {
        this.messageChargement = "Votre liste est vide"
      } else {
        this.messageChargement = ""
      }


      //Parcourir la liste de fournisseur qu'on va afficher dans un tableau plus leger qui sera afficher dans notre
      //select directement sur la vue
      this.listOfSupplier.map((data) => {
        this.SupplierTable.push({label: data.name, supplier_id: data.supplier_id, org_id: data.org_id})
      })

    }).catch((error)=>{
      this.messageChargement.message = `Erreur chargement de la liste => ${error.message}`
      this.messageChargement.color = 'text-red-500'

    })
  },
  methods: {
    //methode lorsque qu'on clich sur le bouton payer
    paiment() {

        //Verification que tous les champs sont bien remplis
        //si cela est ok effectuer le paiement
        if (this.data.supplier_id != null &&
            this.data.number != null &&
            this.data.amount != null &&
            this.data.description != null) {
          this.erreurSubmit.erreur = false
          this.erreurSubmit.color = "bg-purple-500"
          this.erreurSubmit.message = "paiement en cours"
          this.erreurSubmit.erreur = true

          //Verification de la session
          VerifSession(Cookies.get('pay-supplier'), ()=>{
            //Conversion de tous les champs en chaine7
            //Que nous allons stocker dans un deuxieme object appelé data2
            this.data2.supplier_id = this.data.supplier_id.supplier_id.toString();
            this.data2.amount = this.data.amount.toString();
            this.data2.number = this.data.number.toString();
            this.data2.description =  this.data.description.toString();

            axios.post("https://paysup-api-preprod.nexah.net/api/v1/Payment",this.data2,{
              headers: {
                Authorization: Cookies.get('pay-supplier')
              }
            }).then((response)=>{
              this.responseRequest = response.data
              this.erreurSubmit.message = "paiement effectuer avec succès"
              this.erreurSubmit.color = "bg-blue-500"
              this.erreurSubmit.erreur = true

              //Vider de nouveau les champs
              this.data.number = null
              this.data.amount = null
              this.data.description = null

              // console.log(response.data)


            }).catch((erreur)=>{
              console.log(erreur)
              this.erreurSubmit.message = erreur
              this.erreurSubmit.erreur = true
            })
          })

        } else {
          this.erreurSubmit.message = "Ne laissez aucun champ vide"
          this.erreurSubmit.color = "bg-red-500"
          this.erreurSubmit.erreur = true
        }


    },



    fermerAlerte(event) {
      this.erreurSubmit.erreur = event
    }
  }
};

</script>


<style scoped>

</style>
