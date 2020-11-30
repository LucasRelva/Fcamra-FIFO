function JogosClass() {
  this.jogo = Array();
  this.jogos = Array();
  let BASE_URL = "http://localhost:8000/";

  this.init = async function (unity_id, idContainer) {
    this.jogos = await this.loadJogos(unity_id);
    this.loadBoxes(idContainer);
    this.loadSlick();
  };

  this.loadJogos = function (unity_id) {
    return new Promise(function resolvePromise(resolve, reject) {
      axios
        .get(`${BASE_URL}games/${unity_id}`)
        .then(function (response) {
          return resolve(response.data);
        })
        .catch(function (e) {
          return reject(e);
        });
    });
  };

  this.loadBoxes = function (idContainer) {
    const container = document.getElementById(idContainer);
    // console.log(this.jogos)
    if (this.jogos && container) {
      for (const game of this.jogos) {
        /**
         * cria o container do item slide
         */
        const divContainer = document.createElement("div"); // div container que o slick define as infos
        const divContainerWthClass = document.createElement("div"); // div continaer que manipulamos
        divContainerWthClass.classList.add("j-area-items");
        const article = document.createElement("article"); // box branco do itemslide
        article.classList.add("j-carrossel__slide");
        divContainer.appendChild(divContainerWthClass); // adiciona a div que manipulamos para a div do slick
        divContainerWthClass.appendChild(article); // adiciona a div do box no nosso container

        const h2Titulo = document.createElement("h2"); //  titulo do jogo
        h2Titulo.classList.add("j-carrossel__titulo");
        let carrosselTitulo = document.createTextNode(game.name); // cria o texto do título
        h2Titulo.appendChild(carrosselTitulo);
        const divImg = document.createElement("div"); // cria a container do img
        divImg.classList.add("j-carrossel__img");
        const img = document.createElement("img"); // cria a img
        img.classList.add("j-carrossel__img__img");
        img.setAttribute("src", `../styles/imagens/${game.slug}.png`); // adiciona o atributo src(caminho da imagem a ser renderizada) a tag img
        divImg.appendChild(img); // adiciona a img ao seu container
        article.appendChild(h2Titulo); // adicionao titulo ao box
        article.appendChild(divImg); // adiciona a imagem ao box

        const spanWait = document.createElement("span"); // cria o span onde fica os usuários na fila de espera
        const spanWaitText = document.createTextNode(game.total_waits); // adiciona o texto que vem do back
        spanWait.appendChild(spanWaitText); // adiciona o texto ao span
        article.appendChild(spanWait); // adiciona o span ao box

        const divContainerBotao = document.createElement("div"); // cria o container do botão
        divContainerBotao.classList.add("j-carrossel__caixa-botao");
        const link = document.createElement("a"); // cria o botão
        link.classList.add("j-carrossel__botao");
        link.setAttribute("href", `jogos.html?game_id=${game.id}`); // adiciona ao botão o link do game
        const linkText = document.createTextNode("entrar na fila"); // cria o tempo do bostão
        link.appendChild(linkText); // adiciona o texto ao botão
        const span = document.createElement("span"); // cria o span que seria o icone
        span.classList.add("material-icons", "j-carrossel__seta");
        const spanText = document.createTextNode("east"); // cria o texto do icone
        span.appendChild(spanText); // adiciona o texto ao icone
        link.appendChild(span); // adiciona o icone ao link
        divContainerBotao.appendChild(link); // adiciona o botão ao container
        divContainerWthClass.appendChild(divContainerBotao); // adiciona o container do botão ao container que manipulamos

        container.appendChild(divContainer); // adiciona item slide ao container do slide
      }
    }
  };

  this.loadSlick = function () {
    $(".js-carrossel").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
      prevArrow:
        '<span class="material-icons j-carrossel__seta-voltar">arrow_back_ios</span>',
      nextArrow:
        '<span class="material-icons j-carrossel__seta-avancar">arrow_forward_ios</span>',
    });
  };
}

const Jogos = new JogosClass();
