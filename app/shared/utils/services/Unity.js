function UnityClass() {
  this.unity = '';
  this.BASE_URL = 'http://localhost:8000/';
  this.setUnity = function (unity) {
    localStorage.setItem('unity',unity)
  }
}

const Unity = new UnityClass();
