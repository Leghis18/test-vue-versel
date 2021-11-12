<template>
  <div class="container position relative  w-full px-4 sm:px-8">

    <!--      Afficher la modale-->
    <addSupplier v-on:closeModal="closeModal($event)" v-if="addsupper.show"
                 class="container z-30 position absolute inset-0"></addSupplier>

    <div v-bind:class="addsupper.show?addsupper.InjectClass:''" class="flex z-0 flex-col py-8">
      <!--        debut entete avec zone de recherche-->
      <div class="flex justify-between pl-2 pr-4 mb-1 sm:mb-0 ">
        <h2 class="text-2xl leading-tight font-bold">Historique de paiement</h2>
      </div>
      <div class="pl-2 mt-4">
        <p>
            <span class="shadow rounded-full bg-blue-400 pl-3
            pr-3 pt-1 pb-1 text-center text-white">
            Fournisseur Total
                <span class="font-bold pl-1">{{ this.datas.length }}</span>
            </span>

        </p>
      </div>


      <!--        debut du tableau-->
      <div class="container w-full mt-10 flex-shrink">
        <div class="shadow rounded-lg overflow-hidden">
          <!-- Alert page en cours de chargement -->
          <Alert v-if="Alerte.afficher" v-on:fermerAlerte="fermerAlerte($event)" :message="Alerte.message"
                 :color="Alerte.color"></Alert>

          <table class="">
            <thead>
            <tr>
              <th
                  scope="col"
                  class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-left text-sm
                      uppercase
                      font-normal
                    "
              >
                Nom du fournisseur
              </th>
              <th
                  scope="col"
                  class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-left text-sm
                      uppercase
                      font-normal
                    "
              >
                Méthode de paiement
              </th>
              <th
                  scope="col"
                  class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-left text-sm
                      uppercase
                      font-normal
                    "
              >
                description
              </th>
              <th
                  scope="col"
                  class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-left text-sm
                      uppercase
                      font-normal
                    "
              >
                Montant
              </th>
              <th
                  scope="col"
                  class="
                        px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-left text-sm
                      uppercase
                      font-normal
                    "
              >
                Numero
              </th>
              <th
                  scope="col"
                  class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-left text-sm
                      uppercase
                      font-normal
                    "
              >
                Status
              </th>
              <th
                  scope="col"
                  class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-left text-sm
                      uppercase
                      font-normal
                    "
              >
                Date de paiement
              </th>
            </tr>
            </thead>

            <!-- Corp du tableau avec le parcours des element contenu dans le tableau -->
            <!-- pour les afficher sur la vue -->
            <tbody v-for="(data, index) in datas" :key="index">
            <tr class="border-b border-blue-200">
              <td
                  class="
                        px-2
                        py-5
                        bg-white
                        text-sm"
              >
                <div class="ml-3">
                  <p v-bind:class="data.nameSupplier == null?'text-green-400':'text-gray-900'" class=" whitespace-no-wrap">
                    {{ data.nameSupplier == null?'Chargement...':data.nameSupplier }}
                  </p>
                </div>
              </td>

              <td
                  class="
                        px-5
                        py-5
                        bg-white
                        text-sm
                      "
              >
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ data.payment_method_id }}
                </p>
              </td>
              <td
                  class="
                        px-5
                        py-5
                        bg-white
                        text-sm
                      "
              >
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ data.description }}
                </p>
              </td>
              <td
                  class="
                        px-5
                        py-5
                        bg-white
                        text-sm
                      "
              >
                <p>
                  {{ data.amount }}
                </p>
              </td>
              <td
                  class="
                        px-5
                        py-5
                        bg-white
                        text-sm
                      "
              >
                <p>
                  {{ data.number }}
                </p>
              </td>

              <td
                  class="
                        px-5
                        py-5
                        bg-white
                        text-sm
                      "
              >
                <p>
                  {{ data.status }}
                </p>
              </td>

              <td
                  class="
                        px-5
                        py-5
                        bg-white
                        text-sm
                      "
              >
                <p>
                  {{ data.created_at }}
                </p>
              </td>
            </tr>
            </tbody>
          </table>
          <!--            INSERER UNE PAGINATION A CE NIVEAU -->

          <!--          Loader de chargement-->
          <Loading v-if="Alerte.afficher" class="mx-auto"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "../components/Alert";
import addSupplier from "./addSupplier";
import VerifSession from "../static/verifSession";
import Cookies from "js-cookie";
import Loading from "../components/Loading";

export default {
  name: "historique",
  data() {
    return {
      datas: [],
      datas2: [],
      ListOfsupplier: [],
      research: "",
      Alerte: {
        message: "cours de chargement...",
        messageerrorChargement: "Erreur ",
        messageAucunFournisseurTrouver: "Aucun historique Trouver",
        color: "bg-blue-400",
        colorSucces: "bg-blue-400",
        colorError: "bg-red-400",
        colorTableVide: "bg-yellow-400",
        afficher: true
      },
      addsupper: {
        show: false,
        InjectClass: "filter blur-sm"
      },
    };
  },
  mounted() {
    VerifSession(Cookies.get('pay-supplier'), ()=>{
      axios
          .get("https://paysup-api-preprod.nexah.net/api/v1/Payment", {
            headers: {
              Authorization: Cookies.get('pay-supplier'),
            },
          })
          .then((response) => {
            //Chargeent des données dans datas2
            this.datas2 = response.data;
            // console.log(this.datas2[0])


            // Chargement de la liste de s
            for (let i = 0; i < this.datas2.length; i++) {
              axios.get("https://paysup-api-preprod.nexah.net/api/v1/Supplier/" + this.datas2[i].supplier_id, {
                headers: {
                  Authorization: Cookies.get('pay-supplier'),
                },
              }).then((response) => {
                this.datas2[i].nameSupplier = response.data[0].name
                this.$forceUpdate()
              })

              //Charger la liste a afficher lorsque le parcours de Fournisseur est terminer
              if (i === this.datas2.length - 1) {
                this.Alerte.afficher = false
                this.datas = this.datas2
              }
            }

            // console.log(this.datas[0])
          }).catch((error) => {
        this.Alerte.afficher = true
        this.Alerte.message = this.Alerte.messageerrorChargement + ":" + error.message
      });
    })

  },
  methods: {
    //Methode permettant d'effectuer la recherche de fournisseur
    search() {
      this.datas = []
      this.datas2.map((data) => {
        if (data.name.includes(this.research)) {
          this.datas.push(data)
        }
      })
      if (this.datas.length < 1) {
        //Afficher un alerte avec ses différentes informations
        this.Alerte.afficher = true
        this.Alerte.color = this.Alerte.colorTableVide
        this.Alerte.message = this.Alerte.messageAucunFournisseurTrouver
      }
    },

    //Fonction pour recharger la liste
    reloadList() {
      axios
          .get("https://paysup-api-preprod.nexah.net/api/v1/Supplier", {
            headers: {
              Authorization: Cookies.get('pay-supplier'),
            },
          })
          .then((response) => {
            this.datas = response.data;
            this.datas2 = response.data;

            //Supprimer l'alerte de chargement

            this.Alerte.afficher = false
          }).catch((error) => {
        this.Alerte.afficher = true
        this.Alerte.message = this.Alerte.messageerrorChargement + ":" + error.message
      });
    },

    //Methode permettant de remplir de nouveau la table permettant d'afficher les founisseurs
    //sur la vue une fois qu'on click sur la touche delete
    reset() {
      this.datas = this.datas2
      this.Alerte.afficher = false;
    },

    //Methode permettant de ferme l'alerte de chargement grace a l'emiteur configurer
    //dans le composant Alerte
    fermerAlerte(event) {
      this.Alerte.afficher = event
    },
    showModal() {
      this.addsupper.show = true
    },
    closeModal(event) {
      this.reloadList()
      this.addsupper.show = event

    }
  },
  components: {
    Alert,
    addSupplier,
    Loading
  },
}
</script>

<style scoped>

</style>
