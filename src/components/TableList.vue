<template>
  <div class="center">
    <vs-table>
      <template #header>
        <vs-input v-model="search" border placeholder="Search" />
      </template>
      <template #thead>
        <vs-tr>
          <vs-th>
            Select
          </vs-th>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">
            Nom
          </vs-th>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'email')">
            Email
          </vs-th>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'phone')">
            Phone
          </vs-th>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'montant')">
            Montant
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getSearch(users, search)"
            :data="tr"
         class="line">
          <vs-td>
            <vs-checkbox v-model="tr.option1">
            </vs-checkbox>
          </vs-td>
          <vs-td background="primary">
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>
          <vs-td>
            {{ tr.phone }}
          </vs-td>
          <vs-td>
            {{ tr.montant }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>

<!--    //Button submit-->
    <vs-button
        class="btn-submit"
        flat
        :active="active == 1"
        @click="active = 0">
      Payer
    </vs-button>
<!--    button submit-->
  </div>
</template>
<script>
export default {
  name: "TableList",
  data:() => ({
    search: '',
    active: 0,
    users: [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
        "option1":false,
        "phone":"694924562",
        "montant":"23100",
        "status":false
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
        "option1":false,
        "phone":"694936892",
        "montant":"31000",
        "status":false
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
        "option1":false,
        "phone":"65684492",
        "montant":"443000",
        "status":false
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
        "option1":false,
        "phone":"694925892",
        "montant":"76000",
        "status":false
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
        "option1":false,
        "phone":"655426892",
        "montant":"21300",
        "status":false
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
        "option1":false,
        "phone":"657836892",
        "montant":"63000",
        "status":false
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
        "option1":false,
        "phone":"694936672",
        "montant":"90000",
        "status":false
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
        "option1":false,
        "phone":"698936862",
        "montant":"212000",
        "status":false
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
        "option1":false,
        "phone":"64636892",
        "montant":"67000",
        "status":false
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
        "option1":false,
        "phone":"656536892",
        "montant":"3000",
        "status":false
      }
    ]
  })
}
</script>


<style scoped>
.line{

}
.center{
  position: relative;
  margin-bottom: 100px;
}
.btn-submit{
  width: 175px;
  height: 40px;
  position: absolute;
  right: 0;
}
</style>

