<template>
  <div>
    <div class="parent">
      <div class="enfant1">
        <div
          class="
            bg-white
            rounded
            shadow-lg
            sm:ml-10
            sm:max-w-lg
            sm:w-full
            sm:overflow-hidden
          "
        >
          <div class="px-4 py-8 sm:px-10">
            <div class="relative mt-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm leading-5">
                <span class="px-2 text-gray-500 bg-white">
                  Paiement salaire
                </span>
              </div>
            </div>

            <div class="mt-6">
              <div class="w-full space-y-6">
                <div>
                  <h3 class="text-gray-300 text-sm">
                    Selectionner un Employée
                  </h3>
                  <v-select :options="SupplierTable"></v-select>
                </div>

                <div class="w-full">
                  <div class="relative">
                    <h3 class="text-gray-300 text-sm">
                      Inserer un Montant a payer
                    </h3>
                    <input
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
                        px-4
                        bg-white
                        text-gray-700
                        placeholder-gray-400
                        shadow-sm
                        text-base
                        focus:outline-none
                        focus:ring-2 focus:ring-purple-600
                        focus:border-transparent
                      "
                      required
                      placeholder="Montant ex:23000"
                    />
                  </div>
                </div>

                <div class="w-full">
                  <h3 class="text-gray-300 text-sm">
                    Inserer un commentaire
                  </h3>
                  <label class="text-gray-700" for="name">
                    <textarea
                      class="
                        flex-1
                        appearance-none
                        border border-gray-300
                        w-full
                        py-2
                        px-4
                        bg-white
                        text-gray-700
                        placeholder-gray-400
                        rounded-sm
                        text-base
                        focus:outline-none
                        focus:ring-2 focus:ring-purple-600
                        focus:border-transparent
                      "
                      id="comment"
                      placeholder="Commentaire"
                      name="comment"
                      rows="5"
                      cols="40"
                      required
                    >
                    </textarea>
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
                      bg-indigo-600
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
                  >
                   PAYER
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 py-6 border-t-2 border-gray-200 mt-10 bg-gray-50 sm:px-10 ">
          <p class="text-xs leading-5 text-gray-500">
            Paiement Simple et efficace avec Nexah Pay Employee
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "paiement",
  data() {
    return {
      SupplierTable: [
        "Ayina Maerik",
        "Freddy hyvan",
        "marc olivier",
        "Arthur henri",
        "Ekatta armand",
        "yve kam",
        "madame kopper",
        "kamga topiko",
        "Antoine girou",
        "Manager eddy",
        "Firecteur Joseph"
      ],
    };
  },
  components: {},
};
</script>


<style scoped>
.parent {
  margin-top: 2em;
  width: 100%;
}

.enfant1 {
  width: 100%;
}
</style>
