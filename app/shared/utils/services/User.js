function UserClass() {
  this.user = {};

  const BASE_URL = "http://localhost:8000/";

  this.init = async function () {
    this.checkNotUser();
    this.user = this.getUser();
    this.setHeaderUser();
  };

  this.loadUser = function (email) {
    return new Promise(function resolvePromise(resolve, reject) {
      axios
        .post(`${BASE_URL}users/infos/`,{email})
        .then(function (response) {
            console.log('loadUser',response)
          return resolve(response.data);
        })
        .catch(function (e) {
          return reject(e);
        });
    });
  };

  this.createUser = function (email) {
    return new Promise(function resolvePromise(resolve, reject) {
      axios
        .post(`${BASE_URL}users/`,{email})
        .then(function (response) {
          return resolve(response.data);
        })
        .catch(function (e) {
          return reject(e);
        });
    });
  };

  this.submitForm = async function(idEmail){
    const email = document.getElementById(idEmail).value;
    let response = await this.loadUser(email)
    if(!!response===false){
    console.log('ifsubmit',response)
    response = await this.createUser(email);
    }
    if(!!response){
        this.setUser({id: response.id, email: response.email})
    }else{
        alert('Erro ao realizar cadastro')
    }
  }

  this.newUser = async function () {
    response = await this.createUser(`visitante${Math.random()}@fcamara.com.br`);
    if(!!response){
        this.setUser({id: response.id, email: response.email})
    }else{
        alert('Erro ao realizar cadastro')
    }
  };

  this.loadButtons = function () {
  };

  this.setUser = function (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location = "home-jogos.html";
  };

  this.getUser = function () {
    return JSON.parse(localStorage.getItem("user"));
  };

  this.getUserName = function () {
    return this.user.email.split('@')[0];
  };

  this.setHeaderUser =  function() {
    const userName = User.getUserName();
    document.querySelector('.navegacao__usuario').innerHTML = `oi, ${userName}`;
    document.querySelector('.jm-navegacao__usuario').innerHTML = `oi, ${userName}`;
  }

  this.checkNotUser = function () {
    const user = this.getUser();
    if (!user) {
        window.location = "login.html";
    }
  };

  this.checkHasHasUser = function () {
    const user = this.getUser();
    if (user) {
        window.location = 'home-jogos.html';
    }
  };
}

const User = new UserClass();
