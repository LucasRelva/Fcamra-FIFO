function WaitGameClass() {
  this.jogo = {};
  this.next = {};
  this.prev = {};
  let BASE_URL = "http://localhost:8000/";
  let allInfos = Array();

  this.init = async function (unity_id,game_id) {
    allInfos = await this.getGameById(unity_id, game_id);
    this.jogo = allInfos.infos;
    this.next = allInfos.next;
    this.prev = allInfos.prev;
    this.setHTMLHeader();
  };
 
  this.getGameById = async function (unity_id, game_id) {
    return new Promise(function resolvePromise(resolve, reject) {
      axios
        .get(`${BASE_URL}games/infos/${unity_id}/${game_id}/`)
        .then(function (response) {
          // console.log(response)
          return resolve(response.data);
        })
        .catch(function (error) {
          return reject(e);
        });
    });
  };
  
  this.setHTMLHeader = function () {
    const h1 = document.querySelector(".home_instrucao_grande");
    h1.innerHTML = this.jogo.name;
  };
  
  this.setHTMLNext = function () {};
  
  this.setHTMLPrev = function () {};
}

const WaitGame = new WaitGameClass();
