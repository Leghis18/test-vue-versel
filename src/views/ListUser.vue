<template>
  <div class="container position relative  w-full px-4">

    <DialogCard v-if="blur" v-on:clikPos="clikPos()" v-on:clickNeg="clickNeg($event)" class="z-40 position absolute"
                :message="messageDialog" :description="descriptionDialog" :clickNegatif="clickNegatif"
                :clickPositif="clickPositif"></DialogCard>

    <!--      Afficher la modale-->
    <addSupplier v-on:closeModal="closeModal($event)" :id="id" v-if="addsupper.show"
                 class="container z-20 position absolute inset-0"></addSupplier>

    <div v-bind:class="addsupper.show || blur==true?addsupper.InjectClass:''" class="flex z-0 flex-col py-8">
      <!--        debut entete avec zone de recherche-->
      <div class="flex justify-between pl-2 pr-4 mb-1 sm:mb-0 ">
        <h2 class="text-2xl leading-tight font-bold">Liste de Fournisseurs</h2>
        <div class="text-end">
          <div
              class="
                flex
                w-full
                md:w-full
                md:space-x-3
                space-y-3
                md:space-y-0
                justify-center
              "
          >

            <div class="relative focus-within:ring-2 focus-within:ring-blue-400 focus-within:focus:outline-none
                    focus-within:focus:border-transparent flex justify-center items-center
            rounded-full bg-gray-200  w-72">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass"
                   class="svg-inline--fa fa-magnifying-glass w-4 ml-4 fill-current text-blue-700" role="img"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512">
                <path fill="currentColor"
                      d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z">
                </path>
              </svg>
              <input
                  type="text"
                  id='"form-subscribe-Filter'
                  class="bg-gray-200 border-transparent
                    flex-1
                    appearance-none
                    w-full
                     rounded-full
                    py-2
                    px-4
                    bg-white
                    text-gray-700
                    placeholder-gray-400
                    shadow-sm
                    text-base
                    focus:outline-none
                    focus:border-transparent"
                  v-on:input="search()"
                  v-model="research"
                  placeholder="Rechercher un Fournisseur"
              />
            </div>
            <div>
              <button
                  class="
                  flex-shrink
                  flex
                  justify-center
                  items-center
                  px-4
                  py-2
                  text-sm
                  h-10
                  font-semibold
                  text-white
                  bg-indigo-500
                  rounded-lg
                  shadow-md
                  hover:bg-indigo-600
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indogo-300
                  focus:ring-offset-2
                  focus:ring-offset-indigo-200
                "
                  @click="showModal()">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus"
                     class="svg-inline--fa fa-user-plus w-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 640 512">
                  <path fill="currentColor"
                        d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z">
                  </path>
                </svg>
                Fournisseurs
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="pl-2">
        <p>
            <span class="shadow rounded-full bg-blue-400 pl-3 
            pr-3 pt-1 pb-1 text-center text-white">
            Fournisseur Total
                <span class="font-bold pl-1">{{ this.datas2.length }}</span>
            </span>

        </p>
      </div>


      <!--        debut du tableau-->
      <div class="container w-full mt-10 flex-shrink">
        <div
            class="shadow rounded-lg overflow-hidden"
        >
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
                Name
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
                PHONE
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
                EMAIL
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
                POBOX
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
                WEBSITE
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
                Town
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
                Address
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
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ data.name }}
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
                  {{ data.phone }}
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
                  {{ data.email }}
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
                  {{ data.po_box }}
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
                  {{ data.web_site }}
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
                  {{ data.town }}
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
                  {{ data.address }}
                </p>
              </td>

              <td
                  class="
                        px-5
                        py-5
                        bg-white
                        text-sm
                        sm:hidden
                      "
              >
                <p>
                  {{ data.rccm }}
                </p>
              </td>

              <td
                  class="
                        px-5
                        py-5
                        bg-white
                        text-sm
                        sm:hidden
                      "
              >
                <p>
                  {{ data.niu }}
                </p>
              </td>

              <td
                  class="
                        px-2
                        py-5
                        bg-white
                        text-sm
                      "
              >
                <p>
                  <button @click="updateSupplier(data.supplier_id)"
                          type="button"
                          class="py-2 flex justify-center items-center px-4 text-xs  bg-yellow-400 hover:bg-yellow-600 focus:ring-yellow-500
                            focus:ring-offset-yellow-200 text-white w-full transition ease-in
                            duration-200 text-center font-semibold shadow-md focus:outline-none
                            focus:ring-1 focus:ring-offset-2  rounded ">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square"
                         class="svg-inline--fa fa-pen-to-square mr-2 w-3" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">
                      <path fill="currentColor"
                            d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z">
                      </path>
                    </svg>
                    Modifier
                  </button>
                </p>
              </td>

              <td
                  class="
                        px-2
                        py-5
                        bg-white
                        text-sm
                      ">
                <p>
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
import Alert from '../components/Alert'
import addSupplier from "./addSupplier";
import DialogCard from "../components/DialogCard";
import axios from "axios";
import VerifSession from "../static/verifSession";
import Cookies from "js-cookie";
import Loading from "../components/Loading";

export default {
  name: "ListUser",
  data() {
    return {
      datas: [],
      datas2: [],
      research: "",
      Alerte: {
        message: "Liste en cours de chargement...",
        messageerrorChargement: "Erreur Lors du chargement des fournisseur ",
        messageAucunFournisseurTrouver: "Aucun fournisseur Trouver",
        messageSuppressionSucces: "Element supprimer avec succès",
        messageSuppressionEnCour: "La suppression est en cours",
        color: "bg-blue-400",
        colorSucces: "bg-blue-400",
        colorError: "bg-red-400",
        colorTableVide: "bg-yellow-400",
        colorSuppresionEnCours: "bg-pink-300",
        afficher: true
      },
      addsupper: {
        show: false,
        InjectClass: "filter blur-sm"
      },
      messageDialog: "Confirmer la suppression",
      descriptionDialog: "Cette action est irrévocable et les données suppresion ne seront pas récupérer",
      clickPositif: "Supprimer",
      clickNegatif: "Annuler",
      blur: false,
      idSupplierDelete: null,
      id: null
    };
  },
  mounted() {
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
  methods: {
    //Méthode permettant de supprimer un utilisateur
    deleteSupplier(id) {
      this.blur = true
      this.idSupplierDelete = id

    },
    //Méthode permettant de confirmer la suppresion. Elle s'active ue=ne fois la première méthode activer
    confirmDelete(id) {
      //Afficher un alerte avec ses différentes informations
      //Lorsque qu'on clic sur suppresion sa marque que la suppresion est en cours
      this.Alerte.afficher = true
      this.Alerte.color = this.Alerte.colorSuppresionEnCours
      this.Alerte.message = this.Alerte.messageSuppressionEnCour

      VerifSession(Cookies.get('pay-supplier'), () => {
        axios.delete("https://paysup-api-preprod.nexah.net/api/v1/Supplier/" + id, {
          headers: {
            Authorization: Cookies.get('pay-supplier'),
          },
        }).then((response) => {
          //vider le tableau qui affiche les donné sur la vue
          //parcourir la tableau qui possède toutes les données
          //ajouter dans le datas les elements qui n'ont pas été supprimer
          //ensuit faire ensorte que la valeur de datas soit egale a datas2 a la fin de la boucle
          this.datas = []
          this.datas2.map(value => {
            if (value.supplier_id != id) {
              this.datas.push(value)
            }
          })
          this.datas2 = this.datas

          console.log(response.data)
          //Afficher un alerte avec ses différentes informations
          this.Alerte.afficher = true
          this.Alerte.color = this.Alerte.colorSucces
          this.Alerte.message = this.Alerte.messageSuppressionSucces

          //Fermer le dialog
          //remettre idSupplierDelete a null
          this.blur = false
          this.idSupplierDelete = null


        })
            .catch((error) => {
              //Afficher un alerte avec ses différentes informations fyth
              this.Alerte.afficher = true
              this.Alerte.color = this.Alerte.colorError
              this.Alerte.message = error.message

              //Fermer le dialog
              //remettre idSupplierDelete a null
              this.blur = false
              this.idSupplierDelete = null
            })
      })
    },

    //MMethode pour ferme le dialog modal
    clickNeg(event) {
      this.idSupplierDelete = null
      this.blur = event
    },

    clikPos() {
      this.confirmDelete(this.idSupplierDelete)
    },

    //Methode permettant d'effectuer la recherche de fournisseur
    search() {
      this.datas = []
      this.datas2.filter((data) => {
        console.log(data.name.toLowerCase())
        if (data.name.toLowerCase().includes(this.research.toLowerCase())) {
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

    //Methode pour mettre a jour les informations d'un fournisseur
    updateSupplier(id) {
      this.id = id
      this.addsupper.show = true
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
      this.id = null

    }
  },
  components: {
    Alert,
    addSupplier,
    DialogCard,
    Loading
  },
};
</script>

<style scoped>
th {
  font-weight: bold;
}

td {
  width: 1000px;
}

</style>
