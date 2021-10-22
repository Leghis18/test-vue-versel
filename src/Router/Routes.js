import accueil from "@/views/accueil";
import paiement from "@/views/paiement";
import historique from "@/views/historique";
import ListUser from "@/views/ListUser";
export default [
    {path:"/", component:accueil},
    {path:"/payment", component:paiement},
    {path:"/history", component:historique},
    {path:"/listuser", component:ListUser},

]

