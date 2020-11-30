function WaitClass() {
  this.espera = [];
  this.jogando = [];
  let jogador;
  let esparaLista = [];
  const BASE_URL = "http://localhost:8000/";

  this.init = async function (unity_id, game_id, infoJogador) {
    // jogador = name
    esparaLista = await this.loadWait(unity_id, game_id);
    jogador = infoJogador;
    this.espera = esparaLista.filter(function (espera) {
      return (espera.status = 0);
    });
    this.jogando = esparaLista.filter(function (espera) {
      return (espera.status = 1);
    });
    this.setHTMLWait();
    // console.log('wait', esparaLista, this.espera, this.jogando);
  };

  this.loadWait = async function (unity_id, game_id) {
    return new Promise(function resolvePromise(resolve, reject) {
      axios
        .get(`${BASE_URL}waits/${game_id}/${unity_id}`)
        .then(function (response) {
          // console.log(response)
          return resolve(response.data);
        })
        .catch(function (e) {
          return reject(e);
        });
    });
  };

  this.setHTMLWait = async function () {
    const container = document.getElementById("area-fila");
    
    const jogando = document.createElement("ul");
    jogando.classList.add("fila", "ja");
    const liJogandoT = document.createElement("li");
    const liJogandoTText = document.createTextNode("Jogando Agora");
    liJogandoT.appendChild(liJogandoTText);
    jogando.appendChild(liJogandoT);

    if (this.jogando.length >= 1) {
      for (const jog of this.jogando) {
        const li = document.createElement("li");
        const liText = document.createTextNode(checkUser(jog.user.email));
        const span = document.createElement("span");
        span.classList.add("material-icons", "position-player");
        const spanText = document.createTextNode("sports_esports ");
        span.appendChild(spanText);
        li.appendChild(span);
        li.appendChild(liText);
        jogando.appendChild(li);
      }
    }

    const espera = document.createElement("ul");
    espera.classList.add("fila", "es");
    const liEsperaT = document.createElement("li");
    const liEsperaTText = document.createTextNode("Espera");
    liEsperaT.appendChild(liEsperaTText);
    espera.appendChild(liEsperaT);
    if (this.espera.length >= 1) {
      let i = 1;
      for (const esp of this.espera) {
        const userEmail = checkUser(esp.user.email);
        const li = document.createElement("li");
        userEmail === "me" && li.classList.add("user");
        const liText = document.createTextNode(userEmail);
        const span = document.createElement("span");
        span.classList.add("position-player");
        const spanText = document.createTextNode(`#${i}`);
        span.appendChild(spanText);
        li.appendChild(span);
        li.appendChild(liText);
        espera.appendChild(li);
        i++;
      }
    }

    container.appendChild(jogando);
    container.appendChild(espera);
  };

  const checkUser = function (email) {
    return email === jogador ? "me" : email.split("@")[0];
  };

  this.buttonsUser = function (user) {
    const container = document.getElementById('area-buttons');
    const button = document.createElement('button');
    button.classList.add('home_botao_fila');
    button.setAttribute('type','button');
    button.setAttribute('name','button_entrar')
    const buttonText = document.createTextNode('Iniciar');
    button.appendChild(buttonText);
    const span = document.createElement('span');
    span.classList.add('material-icons');
    const spanText = document.createTextNode('east');
    span.appendChild(spanText);
    button.appendChild(span);
    container.appendChild(button);
  }
}

const Wait = new WaitClass();
