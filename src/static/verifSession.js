import axios from "axios";
import Cookies from "js-cookie";

export default function VerifSession (apiToken, fonction){

    console.log('redirection2')
    if(apiToken !== undefined){

        console.log('redirection3')

        axios.post('https://paysup-api-preprod.nexah.net/api/v1/check_key', {api_token:apiToken})
            .then((response)=>{

                console.log('redirection4')
                let datas = response.data
                if(datas.errcode === 200 && datas.data !== null){
                    fonction()
                    console.log('redirection5')
                    return true
                }else{
                    Cookies.remove('pay-supplier')
                    Cookies.remove('secret-code')
                    window.location = 'https://myaccount-preprod.nexah.net?redirect_uri=http://3.142.175.91:8080'
                    return false
                }
            })
    }else {
        Cookies.remove('pay-supplier')
        Cookies.remove('secret-code')
        console.log('redirection')
        window.location = 'https://myaccount-preprod.nexah.net?redirect_uri=http://3.142.175.91:8080'
        return false
    }

}