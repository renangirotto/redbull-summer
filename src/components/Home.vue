<template>
  <main>
    <section>
      <div class="hero">
        <div class="hero-can"></div>
        <div class="hero-text">
          <h1 class="hero-title">
            PARABÉNS AOS VENCEDORES
          </h1>
          <ul class="hero-list">
            <li>Lucas Chumbo - <span>Vitienzo D. C.</span></li>
            <li>Rafael Goberna - <span>Nastassja A. F.</span></li>
            <li>B-Boy Pelezinho - <span>Filipe V.</span></li>
            <li>Sandro Dias - <span>Eliza M. S. M.</span></li>
            <li>Flakes Power - <span>Checando documentação <br>para divulgação do resultado</span></li>
          </ul>
        </div>
        <div class="hero-anchor">
          <span>Role pra baixo</span>
          <div class="arrow"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="experiences">
        <h2 class="title">
          ROLE PRO LADO E SE <br class="only-mobile">LIGUE NAS EXPERIÊNCIAS <br>INESQUECÍVEIS QUE VOCÊ <br class="only-mobile">PODE VIVER NESSE VERÃO:
        </h2>
        <div class="experience-carousel">
          <carousel-3d
            ref="expCarousel"
            :controls-visible="true"
            :display="3"
            :perspective="0"
            :space="carousel.space"
            :width="carousel.width"
            :height="carousel.height"
            :controls-width="carousel.arrows"
            :controls-height="carousel.arrows"
            @before-slide-change="onBeforeSlideChange"
          >
            <slide3d :index="0">
              <div class="card lucas-chumbo">
                <h3 class="card-title">
                  <span class="line">SURF <span class="small">COM</span></span
                  ><br />
                  <span class="large">LUCAS CHUMBO</span>
                </h3>
              </div>
            </slide3d>
            <slide3d :index="1">
              <div class="card sandro-dias">
                <h3 class="card-title">
                  <span class="line">SKATE <span class="small">COM</span></span
                  ><br />
                  <span class="large">SANDRO DIAS</span>
                </h3>
              </div>
            </slide3d>
            <slide3d :index="2">
              <div class="card rafael-goberna">
                <h3 class="card-title">
                  <span class="line"
                    >PARAGLIDER <span class="small">COM</span></span
                  ><br />
                  <span class="large">RAFAEL GOBERNA</span>
                </h3>
              </div>
            </slide3d>
            <slide3d :index="3">
              <div class="card pelezinho">
                <h3 class="card-title">
                  <span class="line"
                    >AULA DE DANÇA <span class="small">COM</span></span
                  ><br />
                  <span class="large">B-BOY PELEZINHO</span>
                </h3>
              </div>
            </slide3d>
            <slide3d :index="4">
              <div class="card flakes-power">
                <h3 class="card-title">
                  <span class="line"
                    >FORTNITE <span class="small">COM</span></span
                  ><br />
                  <span class="large">FLAKES POWER</span>
                </h3>
              </div>
            </slide3d>
          </carousel-3d>
          <div class="bullets">
            <button
              v-on:click="goToSlide(0)"
              :class="carousel.index === 0 ? 'active' : ''"
            ></button>
            <button
              v-on:click="goToSlide(1)"
              :class="carousel.index === 1 ? 'active' : ''"
            ></button>
            <button
              v-on:click="goToSlide(2)"
              :class="carousel.index === 2 ? 'active' : ''"
            ></button>
            <button
              v-on:click="goToSlide(3)"
              :class="carousel.index === 3 ? 'active' : ''"
            ></button>
            <button
              v-on:click="goToSlide(4)"
              :class="carousel.index === 4 ? 'active' : ''"
            ></button>
          </div>
        </div>
        <div class="experiences-anchor">
          <h4 class="sub-title">
            ESTÁ EM DÚVIDA DE QUAL EXPERIÊNCIA <br>ESCOLHER? <span>RESPONDA O QUIZ E SE INSPIRE.</span>
          </h4>
          <div class="arrow"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="quiz">
        <h2 class="title">QUIZ ASAS PRO SEU VERÃO</h2>
        <div class="container">
          <div class="quiz-box">
            <div v-show="!quiz.done" class="quiz-content quiz-step">
              <div v-show="quiz.step === 0">
                <figure class="quiz-content-header">
                  <img
                    src="https://web02137.microsites02.redbull.com/summer/images/quiz/header/lucas-chumbo.png"
                    alt="Lucas Chumbo"
                  />
                </figure>
                <div class="quiz-content-body">
                  <p>
                    O verão em 2020 foi inesquecível pro Lucas Chumbo porque ele
                    levou um troféu importante pra casa. Qual foi esse troféu?
                  </p>
                  <ul>
                    <li>
                      <button
                        v-on:click="doQuest(0, 1)"
                        :class="[
                          quiz.quests[0].try ? 'try' : null,
                          quiz.quests[0].response === 1 ? 'hit' : null,
                          quiz.quests[0].correct === 1 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[0].try"
                      >
                        Gigantes de Nazaré
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(0, 2)"
                        :class="[
                          quiz.quests[0].try ? 'try' : null,
                          quiz.quests[0].response === 2 ? 'hit' : null,
                          quiz.quests[0].correct === 2 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[0].try"
                      >
                        WSL 2020
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(0, 3)"
                        :class="[
                          quiz.quests[0].try ? 'try' : null,
                          quiz.quests[0].response === 3 ? 'hit' : null,
                          quiz.quests[0].correct === 3 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[0].try"
                      >
                        Jaws Championship Pe’ahi
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(0, 4)"
                        :class="[
                          quiz.quests[0].try ? 'try' : null,
                          quiz.quests[0].response === 4 ? 'hit' : null,
                          quiz.quests[0].correct === 4 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[0].try"
                      >
                        Red Bull Airborne Gold Coast
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-show="quiz.step === 1">
                <figure class="quiz-content-header">
                  <img
                    src="https://web02137.microsites02.redbull.com/summer/images/quiz/header/sandro-dias.png"
                    alt="Sandro Dias"
                  />
                </figure>
                <div class="quiz-content-body">
                  <p>
                    O último verão do Sandro foi inesquecível porque ele fez uma
                    skate session...
                  </p>
                  <ul>
                    <li>
                      <button
                        v-on:click="doQuest(1, 1)"
                        :class="[
                          quiz.quests[1].try ? 'try' : null,
                          quiz.quests[1].response === 1 ? 'hit' : null,
                          quiz.quests[1].correct === 1 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[1].try"
                      >
                        Nas obras do Oscar Niemeyer
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(1, 2)"
                        :class="[
                          quiz.quests[1].try ? 'try' : null,
                          quiz.quests[1].response === 2 ? 'hit' : null,
                          quiz.quests[1].correct === 2 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[1].try"
                      >
                        Em cima da ponte Estaiadinha
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(1, 3)"
                        :class="[
                          quiz.quests[1].try ? 'try' : null,
                          quiz.quests[1].response === 3 ? 'hit' : null,
                          quiz.quests[1].correct === 3 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[1].try"
                      >
                        No Palácio dos Bandeirantes
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(1, 4)"
                        :class="[
                          quiz.quests[1].try ? 'try' : null,
                          quiz.quests[1].response === 4 ? 'hit' : null,
                          quiz.quests[1].correct === 4 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[1].try"
                      >
                        Ladeira da Baldwin Street no País de Gales
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-show="quiz.step === 2">
                <figure class="quiz-content-header">
                  <img
                    src="https://web02137.microsites02.redbull.com/summer/images/quiz/header/rafael-goberna.png"
                    alt="Rafael Goberna"
                  />
                </figure>
                <div class="quiz-content-body">
                  <p>
                    Em 2019, Rafael Goberna e o esloveno Matjaz Klemencic
                    fizeram algo inesquecível no verão. O que eles fizeram?
                  </p>
                  <ul>
                    <li>
                      <button
                        v-on:click="doQuest(2, 1)"
                        :class="[
                          quiz.quests[2].try ? 'try' : null,
                          quiz.quests[2].response === 1 ? 'hit' : null,
                          quiz.quests[2].correct === 1 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[2].try"
                      >
                        Voaram pelo bondinho do Pão de Açúcar
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(2, 2)"
                        :class="[
                          quiz.quests[2].try ? 'try' : null,
                          quiz.quests[2].response === 2 ? 'hit' : null,
                          quiz.quests[2].correct === 2 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[2].try"
                      >
                        Voo noturno na Espanha
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(2, 3)"
                        :class="[
                          quiz.quests[2].try ? 'try' : null,
                          quiz.quests[2].response === 3 ? 'hit' : null,
                          quiz.quests[2].correct === 3 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[2].try"
                      >
                        Sobrevoaram o The Red Pole na Austrália
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(2, 4)"
                        :class="[
                          quiz.quests[2].try ? 'try' : null,
                          quiz.quests[2].response === 4 ? 'hit' : null,
                          quiz.quests[2].correct === 4 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[2].try"
                      >
                        Voo com os pássaros em migração
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-show="quiz.step === 3">
                <figure class="quiz-content-header">
                  <img
                    src="https://web02137.microsites02.redbull.com/summer/images/quiz/header/pelezinho.png"
                    alt="Pelézinho"
                  />
                </figure>
                <div class="quiz-content-body">
                  <p>
                    O Pelézinho tá vivendo uma experiência inesquecível pra
                    impactar o verão dos melhores b-boys e b-girls do mundo.
                    Qual é?
                  </p>
                  <ul>
                    <li>
                      <button
                        v-on:click="doQuest(3, 1)"
                        :class="[
                          quiz.quests[3].try ? 'try' : null,
                          quiz.quests[3].response === 1 ? 'hit' : null,
                          quiz.quests[3].correct === 1 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[3].try"
                      >
                        Estreando um filme sobre breaking
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(3, 2)"
                        :class="[
                          quiz.quests[3].try ? 'try' : null,
                          quiz.quests[3].response === 2 ? 'hit' : null,
                          quiz.quests[3].correct === 2 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[3].try"
                      >
                        Lançando a sua marca de tênis
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(3, 3)"
                        :class="[
                          quiz.quests[3].try ? 'try' : null,
                          quiz.quests[3].response === 3 ? 'hit' : null,
                          quiz.quests[3].correct === 3 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[3].try"
                      >
                        Jurado dos maiores campeonatos
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(3, 4)"
                        :class="[
                          quiz.quests[3].try ? 'try' : null,
                          quiz.quests[3].response === 4 ? 'hit' : null,
                          quiz.quests[3].correct === 4 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[3].try"
                      >
                        Treinando a galera online
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-show="quiz.step === 4">
                <figure class="quiz-content-header">
                  <img
                    src="https://web02137.microsites02.redbull.com/summer/images/quiz/header/flakes-power.png"
                    alt="Flakes Power"
                  />
                </figure>
                <div class="quiz-content-body">
                  <p>
                    Flakes Power já traçou o desafio que vai tornar esse verão
                    inesquecível. <br>Sabe qual é?
                  </p>
                  <ul>
                    <li>
                      <button
                        v-on:click="doQuest(4, 1)"
                        :class="[
                          quiz.quests[4].try ? 'try' : null,
                          quiz.quests[4].response === 1 ? 'hit' : null,
                          quiz.quests[4].correct === 1 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[4].try"
                      >
                        Vai tentar ser o maior Youtuber de Fortnite do país
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(4, 2)"
                        :class="[
                          quiz.quests[4].try ? 'try' : null,
                          quiz.quests[4].response === 2 ? 'hit' : null,
                          quiz.quests[4].correct === 2 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[4].try"
                      >
                        Vai atrás do mundial de Clash Royale
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(4, 3)"
                        :class="[
                          quiz.quests[4].try ? 'try' : null,
                          quiz.quests[4].response === 3 ? 'hit' : null,
                          quiz.quests[4].correct === 3 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[4].try"
                      >
                        Vai se arriscar no LOL no Red Bull Solo Q
                      </button>
                    </li>
                    <li>
                      <button
                        v-on:click="doQuest(4, 4)"
                        :class="[
                          quiz.quests[4].try ? 'try' : null,
                          quiz.quests[4].response === 4 ? 'hit' : null,
                          quiz.quests[4].correct === 4 ? 'correct' : 'miss',
                        ]"
                        :disabled="quiz.quests[4].try"
                      >
                        Vai comemorar 1 bilhão de views
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="quiz-content-action">
                <div class="count">
                  <span>{{ `${quiz.step + 1}/${quiz.quests.length}` }}</span>
                </div>
                <button v-on:click="nextQuest" class="btn yellow-1">
                  Próxima
                </button>
              </div>
            </div>
            <div
              v-show="quiz.done && quiz.select"
              class="quiz-content quiz-person"
            >
              <div v-show="quiz.experience === 0" class="lucas-chumbo">
                <div class="quiz-content-header">
                  <h3>Esta experiência inesquecível <br />espera por você.</h3>
                </div>
                <div class="quiz-content-body">
                  <div class="quiz-content-text">
                    <h4>
                      <span class="line"
                        >SURF <span class="small">COM</span></span
                      ><br />
                      <span class="large">LUCAS CHUMBO</span>
                    </h4>
                  </div>
                  <div class="quiz-content-action">
                    <button v-on:click="openSelect()" class="btn pink-1">
                      Trocar experiência
                    </button>
                    <button
                      v-on:click="choose('questSection', 'Lucas Chumbo')"
                      class="btn yellow-2"
                    >
                      Topo!
                    </button>
                  </div>
                </div>
              </div>
              <div v-show="quiz.experience === 1" class="sandro-dias">
                <div class="quiz-content-header">
                  <h3>Esta experiência inesquecível <br />espera por você.</h3>
                </div>
                <div class="quiz-content-body">
                  <div class="quiz-content-text">
                    <h4>
                      <span class="line"
                        >SKATE <span class="small">COM</span></span
                      ><br />
                      <span class="large">SANDRO DIAS</span>
                    </h4>
                  </div>
                  <div class="quiz-content-action">
                    <button v-on:click="openSelect()" class="btn pink-1">
                      Trocar experiência
                    </button>
                    <button
                      v-on:click="choose('questSection', 'Sandro Dias')"
                      class="btn yellow-2"
                    >
                      Topo!
                    </button>
                  </div>
                </div>
              </div>
              <div v-show="quiz.experience === 2" class="rafael-goberna">
                <div class="quiz-content-header">
                  <h3>Esta experiência inesquecível <br />espera por você.</h3>
                </div>
                <div class="quiz-content-body">
                  <div class="quiz-content-text">
                    <h4>
                      <span class="line"
                        >PARAGLIDER <span class="small">COM</span></span
                      ><br />
                      <span class="large">RAFAEL GOBERNA</span>
                    </h4>
                  </div>
                  <div class="quiz-content-action">
                    <button v-on:click="openSelect()" class="btn pink-1">
                      Trocar experiência
                    </button>
                    <button
                      v-on:click="choose('questSection', 'Rafael Goberna')"
                      class="btn yellow-2"
                    >
                      Topo!
                    </button>
                  </div>
                </div>
              </div>
              <div v-show="quiz.experience === 3" class="pelezinho">
                <div class="quiz-content-header">
                  <h3>Esta experiência inesquecível <br />espera por você.</h3>
                </div>
                <div class="quiz-content-body">
                  <div class="quiz-content-text">
                    <h4>
                      <span class="line"
                        >AULA DE DANÇA <span class="small">COM</span></span
                      ><br />
                      <span class="large">B-BOY PELEZINHO</span>
                    </h4>
                  </div>
                  <div class="quiz-content-action">
                    <button v-on:click="openSelect()" class="btn pink-1">
                      Trocar experiência
                    </button>
                    <button
                      v-on:click="choose('questSection', 'Pelezinho')"
                      class="btn yellow-2"
                    >
                      Topo!
                    </button>
                  </div>
                </div>
              </div>
              <div v-show="quiz.experience === 4" class="flakes-power">
                <div class="quiz-content-header">
                  <h3>Esta experiência inesquecível <br />espera por você.</h3>
                </div>
                <div class="quiz-content-body">
                  <div class="quiz-content-text">
                    <h4>
                      <span class="line"
                        >FORTNITE <span class="small">COM</span></span
                      ><br />
                      <span class="large">FLAKES POWER</span>
                    </h4>
                  </div>
                  <div class="quiz-content-action">
                    <button v-on:click="openSelect()" class="btn pink-1">
                      Trocar experiência
                    </button>
                    <button
                      v-on:click="choose('questSection', 'Flakes Power')"
                      class="btn yellow-2"
                    >
                      Topo!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-show="quiz.done && !quiz.select"
              class="quiz-content quiz-select"
            >
              <div class="quiz-content-header">
                <h3>
                  Qual experiência você<br class="only-mobile" /> escolhe <br class="only-desktop">pro seu verão
                  <br class="only-mobile"> ser inesquecível?
                </h3>
              </div>
              <div class="quiz-content-body">
                <ul>
                  <li>
                    <button
                      v-on:click="changeExp(0)"
                      :class="quiz.experience === 0 ? 'selected' : null"
                    >
                      Surf com o Lucas Chumbo
                    </button>
                  </li>
                  <li>
                    <button
                      v-on:click="changeExp(1)"
                      :class="quiz.experience === 1 ? 'selected' : null"
                    >
                      Skate com Sandro Dias
                    </button>
                  </li>
                  <li>
                    <button
                      v-on:click="changeExp(2)"
                      :class="quiz.experience === 2 ? 'selected' : null"
                    >
                      Paraglider com Rafael Goberna
                    </button>
                  </li>
                  <li>
                    <button
                      v-on:click="changeExp(3)"
                      :class="quiz.experience === 3 ? 'selected' : null"
                    >
                      Aula de dança com o B-Boy Pelezinho
                    </button>
                  </li>
                  <li>
                    <button
                      v-on:click="changeExp(4)"
                      :class="quiz.experience === 4 ? 'selected' : null"
                    >
                      Fortnite com o Flakes Power
                    </button>
                  </li>
                </ul>
              </div>
              <div class="quiz-content-action">
                <button v-on:click="finishExp" class="btn yellow-1">
                  Pronto
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="arrow"></div>
        <div v-rellax="{speed: 2.2}" class="parallax can-1"></div>
      </div>
    </section>
    <section>
      <div class="videos">
        <h4 class="sub-title">
          QUER SABER MAIS SOBRE OS ATLETAS?
          <br />
          <span>DÁ O PLAY ABAIXO PRA ACESSAR <br class="only-mobile">OS CONTEÚDOS.</span
          >
        </h4>
        <div class="video-track">
          <div class="video-container">
            <VueSlickCarousel v-bind="settings">
              <div>
                <div v-on:click="playVideo(1)" class="video-thumb sandro-dias">
                  <div class="video-info">
                    <h6 class="video-title">Skate na Estaiada</h6>
                    <span class="video-persona">Sandro Dias</span>
                    <div class="video-desc">
                      <span class="video-type">Skate</span>
                      <span class="video-time">4 min</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="https://www.redbull.com/br-pt/games-flakes-power-fortnite-temporada-3"
                  target="_blank"
                  class="video-thumb article flakes-power"
                >
                  <div class="video-info">
                    <h6 class="video-title">
                      Flakes Power conta o melhor da Temporada 3 do Fortnite
                    </h6>
                    <span class="video-persona">Flakes Power</span>
                    <div class="video-desc">
                      <span class="video-type">Gaming</span>
                      <span class="video-time">Artigo</span>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <div
                  v-on:click="playVideo(2)"
                  class="video-thumb rafael-goberna"
                >
                  <div class="video-info">
                    <h6 class="video-title">Paraglider Goberna</h6>
                    <span class="video-persona">Rafael Goberna</span>
                    <div class="video-desc">
                      <span class="video-type">Paraglider</span>
                      <span class="video-time">2 min</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div v-on:click="playVideo(3)" class="video-thumb pelezinho">
                  <div class="video-info">
                    <h6 class="video-title">Dançando com Pelezinho</h6>
                    <span class="video-persona">B-Boy Pelezinho</span>
                    <div class="video-desc">
                      <span class="video-type">Dance</span>
                      <span class="video-time">5 min</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div v-on:click="playVideo(0)" class="video-thumb lucas-chumbo">
                  <div class="video-info">
                    <h6 class="video-title">Ondas de Nazaré</h6>
                    <span class="video-persona">Lucas Chumbo</span>
                    <div class="video-desc">
                      <span class="video-type">Surf</span>
                      <span class="video-time">5 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </section>
    <div v-show="videos.play" class="video-modal">
      <button v-on:click="closeVideo" class="video-modal-close"></button>
      <div class="video-box">
        <div class="video-iframe">
          <iframe
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            :src="videos.selected"
            allowfullscreen
            webkitallowfullscreen
            mozallowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<script src="./Home.js"></script>