class Login {
    static mat=null
    static pas=null
    static logado = false;
    static matlogado = null
    static nomelogado = null
    static acessologado = null
    static estilocss = null
    static callback_ok=null
    static callback_naook=null
    static config = {
        cor:"#048",
        img:"./logo.png",
        endpoint: null //
    };
   

    static login = (callback_ok,callback_naook,config=null) => {
        sessionStorage.setItem("logado","false")
        sessionStorage.setItem("matlogado","")
        sessionStorage.setItem("nomelogado","")
        sessionStorage.setItem("acessologado","")
    if(config!=null){
        this.config = config
    }
    this.callback_ok=()=>{callback_ok()}
    this.callback_naook=()=>{callback_naook()}

    //this.endpoint += `?matricula=${mat}&senha=${pas}`
    //fetch(this.endpoint)

    this.estilocss = `
.fundoLogin { display: flex; align-items: center; justify-content: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box; }
.baseLogin { display: flex; align-items: stretch; justify-content: center; width: 50%; box-sizing: inherit; }
.elementosLogin { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit; }
.campoLogin { display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 10px; }
.campoLogin label { font-size: 18px; }
.campoLogin input { font-size: 18px; padding: 5px; background-color: white; border-radius: 5px; }
.botoesLogin { display: flex; width: 100%; justify-content: space-around; align-items: center; box-sizing: inherit; }
.botoesLogin button { cursor: pointer; background-color: ${this.config.cor}; color: white; border-radius: 5px; padding: 10px 20px; width: 100px; box-sizing: inherit; }
.logoLogin { display: flex; align-items: center; justify-content: center; width: 50%; background-color: #bbb; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit; }
.logoLogin img { width: 90%; box-sizing: inherit; }
`;

const styleEstilo=document.createElement("style")
styleEstilo.setAttribute("id","id_estilolog")
styleEstilo.innerHTML=this.estilocss
document.head.appendChild(styleEstilo)


const corpo =document.body

const fundoLogin=document.createElement("div")
fundoLogin.setAttribute("id", "fundoLogin")
fundoLogin.setAttribute("class", "fundoLogin")
corpo.prepend(fundoLogin)


const baseLogin=document.createElement("div")
baseLogin.setAttribute("id", "baseLogin")
baseLogin.setAttribute("class", "baseLogin")
fundoLogin.appendChild(baseLogin)

const elementosLogin=document.createElement("div")
elementosLogin.setAttribute("id", "elementosLogin")
elementosLogin.setAttribute("class", "elementosLogin")
baseLogin.appendChild(elementosLogin)

const campoLoginUsename =document.createElement("div")
campoLoginUsename.setAttribute("id", "campoLoginUsename")
campoLoginUsename.setAttribute("class", "campoLogin")
elementosLogin.appendChild(campoLoginUsename)

const labelUsername =document.createElement("label")
labelUsername.innerHTML = "Username"
campoLoginUsename.appendChild(labelUsername)

const inputUsername =document.createElement("input")
inputUsername.setAttribute("id", "f_username")
inputUsername.setAttribute("type","text")
inputUsername.setAttribute("name", "f_username")
campoLoginUsename.appendChild(inputUsername)

const campoLoginSenha =document.createElement("div")
campoLoginSenha.setAttribute("id", "campoLoginSenha")
campoLoginSenha.setAttribute("class", "campoLogin")
elementosLogin.appendChild(campoLoginSenha)

const labelSenha =document.createElement("label")
labelSenha.innerHTML = "Senha"
campoLoginSenha.appendChild(labelSenha)

const inputSenha =document.createElement("input")
inputSenha.setAttribute("id", "f_senha")
inputSenha.setAttribute("type","password")
inputSenha.setAttribute("name", "f_senha")
campoLoginSenha.appendChild(inputSenha)

const botoesLogin =document.createElement("div")
botoesLogin.setAttribute("id", "botoesLogin")
botoesLogin.setAttribute("class", "botoesLogin")
elementosLogin.appendChild(botoesLogin)

const btn_login =document.createElement("button")
btn_login.setAttribute("id","btn_login")
btn_login.innerHTML = "Login"
btn_login.addEventListener("click", (evt)=>{
    this.verificaLogin()     
})
botoesLogin.appendChild(btn_login)

const btn_cancelar =document.createElement("button")
btn_cancelar.setAttribute("id", "btn_cancelar")
btn_cancelar.innerHTML="Cancelar"
btn_cancelar.addEventListener("click",(event)=>{
                sessionStorage.setItem("logado","false")
                sessionStorage.setItem("matlogado","")
                sessionStorage.setItem("nomelogado","")
                sessionStorage.setItem("acessologado","")
this.fechar()
})
botoesLogin.appendChild(btn_cancelar)

const logoLogin =document.createElement("div")
logoLogin.setAttribute("id", "logoLogin")
logoLogin.setAttribute("class", "logoLogin")
baseLogin.appendChild(logoLogin)

const imglogoLogin =document.createElement("img")
imglogoLogin.setAttribute("src", this.config.img)
imglogoLogin.setAttribute("alt","CFB cursos")
imglogoLogin.setAttribute("title", "CFB cursos")
logoLogin.appendChild(imglogoLogin)




   /*  <div id="fundoLogin" class="fundoLogin">
        <div id="baseLogin" class="baseLogin">
            <div id="elementosLogin" class="elementosLogin">
                <div class="campoLogin">
                    <label for="">Username</label>
                    <input type="text" name="f_username" id="f_username">
                </div>
                <div class="campoLogin">
                    <label for="">Senha</label>
                    <input type="password" name="f_senha" id="f_senha">
                </div>
                <div id="botoesLogin" class="botoesLogin">
                    <button id="btn_login">Login</button>
                    <button id="btn_cancelar">Cancelar</button>
                </div>
            </div>
             <div id="logoLogin" class="logoLogin">
                <img src="./logo.png" alt="CFB cursos" title="CFBCursos">
            </div>
        </div>
    </div> */
    


        /*.then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado=true
                this.matlogado=mat
                this.nomelogado=res.nome
                this.acessologado=res.acesso
                console.log(res)
            }else{
                console.log("usuario não encontrado ")
            }
        
        })*/
    }

    static verificaLogin=()=>{
        const mat =document.getElementById("f_username").value
        const pas = document.getElementById("f_senha").value
        /* const endpoint = `https://8cd5aea3-fda7-4a1a-8029-61e32d3aa228-00-zhgbt789webt.riker.replit.dev/api/login?matricula=${mat}&senha=${pas}` */
        const endpoint =  `${this.config.endpoint}/?matricula=${mat}&senha=${pas}`

    fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
           if(res){
                sessionStorage.setItem("logado","true")
                sessionStorage.setItem("matlogado",mat)
                sessionStorage.setItem("nomelogado",res.nome)
                sessionStorage.setItem("acessologado",res.acesso)
                this.callback_ok()
                this.fechar()
                
            }else{
                sessionStorage.setItem("logado","false")
                sessionStorage.setItem("matlogado","")
                sessionStorage.setItem("nomelogado","")
                sessionStorage.setItem("acessologado","")
                this.callback_naook()
            } 
        
        })
       /*  if(mat=="123" && pas=="321"){
            return true
        }else{
            return false
        }
         */
        
    }

      static fechar=()=>{
            const fundoLogin=document.getElementById("fundoLogin")
            fundoLogin.remove()
            const id_estiloLogin=document.getElementById("id_estilolog")
            id_estiloLogin.remove()

        }

}

//export { Login }
