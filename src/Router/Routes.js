import paiement from "@/views/paiement";
import historique from "@/views/historique";
import ListUser from "@/views/ListUser";
export default [
    {path:"/history", component:historique},
    {path:"/listuser", component:ListUser},
    {path:"/:code", component:paiement},
]

