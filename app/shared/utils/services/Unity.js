function UnityClass() {
  this.unities = Array();
  this.BASE_URL = 'http://localhost:8000/';
  this.init = async function(idContainer) {
      this.unities = await this.loadUnidade();
      this.loadButtons(idContainer);
  };
  
  this.loadUnidade = async function (unity_id) {
    const BASE = this.BASE_URL;
    return new Promise(function resolvePromise(resolve, reject) {
        axios.get(
            `${BASE}unities/`
        ).then(function(response){
            return resolve(response.data)
        }).catch(function(e) {
            return reject(e);
        });
    });
  };

  this.loadButtons = function (idContainer) {
    const container = document.getElementById(idContainer);
    if(this.unities && container){
        for (const unidade of this.unities) {
         const button = document.createElement('button');
         button.classList.add('selecao_botao');
         button.setAttribute("onClick", `Unity.setUnity(${unidade.id})`);
         const buttonText = document.createTextNode(unidade.name);
         button.appendChild(buttonText)
         container.appendChild(button)
        }
    }
  };

  this.setUnity = function (unity) {
    localStorage.setItem('unity',unity)
    window.location = 'home-jogos.html';
  }

  this.getUnity = function () {
    return  localStorage.getItem('unity');
  }
}

const Unity = new UnityClass();
