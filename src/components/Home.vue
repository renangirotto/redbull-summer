<template>
  <main>
    <section>
      <div class="hero">
        <div class="hero-can"></div>
        <div class="hero-text">
          <h1 class="hero-title">
            QUER VIVER<br />UMA EXPERIÊNCIA<br /><span
              >INESQUECÍVEL<br />NESSE VERÃO?</span
            >
          </h1>
          <ul class="hero-list">
            <li>PARTICIPE DO QUIZ</li>
            <li>RESPONDA A FRASE</li>
            <li>
              ESCOLHA UMA EXPERIÊNCIA <br />
              DE VERÃO
            </li>
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
          AS EXPERIÊNCIAS <br class="only-mobile" />INESQUECÍVEIS
          <br class="only-mobile" />QUE <br class="only-desktop" />VÃO DAR ASAS
          <br class="only-mobile" />PRO SEU VERÃO SÃO:
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
            <slide :index="0">
              <div class="card lucas-chumbo">
                <h3 class="card-title">
                  <span class="line">SURF <span class="small">COM</span></span
                  ><br />
                  <span class="large">LUCAS CHUMBO</span>
                </h3>
              </div>
            </slide>
            <slide :index="1">
              <div class="card flakes-power">
                <h3 class="card-title">
                  <span class="line"
                    >FORTNITE <span class="small">COM</span></span
                  ><br />
                  <span class="large">FLAKES POWER</span>
                </h3>
              </div>
            </slide>
            <slide :index="2">
              <div class="card rafael-goberna">
                <h3 class="card-title">
                  <span class="line"
                    >PARAGLINDER <span class="small">COM</span></span
                  ><br />
                  <span class="large">RAFAEL GOBERNA</span>
                </h3>
              </div>
            </slide>
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
          </div>
        </div>
        <div class="experiences-anchor">
          <h4 class="sub-title">
            PRA PARTICIPAR É SÓ ROLAR PRA BAIXO, <br />
            <span>RESPONDER O QUIZ E SE CADASTRAR.</span>
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
                    :src="
                      require('@/assets/images/quiz/header/lucas-chumbo.png')
                    "
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
                    :src="
                      require('@/assets/images/quiz/header/sandro-dias.png')
                    "
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
                    :src="
                      require('@/assets/images/quiz/header/rafael-goberna.png')
                    "
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
                    :src="require('@/assets/images/quiz/header/pelezinho.png')"
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
                    :src="
                      require('@/assets/images/quiz/header/flakes-power.png')
                    "
                    alt="Flakes Power"
                  />
                </figure>
                <div class="quiz-content-body">
                  <p>
                    Flakes Power já traçou o desafio que vai tornar esse verão
                    inesquecível. Sabe qual é?
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
                  {{ `${quiz.step + 1}/${quiz.quests.length}` }}
                </div>
                <button v-on:click="nextQuest" class="btn yellow-1">
                  Próxima
                </button>
              </div>
            </div>
            <div v-show="quiz.done && quiz.select" class="quiz-content quiz-person">
              <div v-show="quiz.experience === 0" class="lucas-chumbo">
                <div class="quiz-content-header">
                  <h3>Esta experiência inesquecível <br>espera por você.</h3>
                </div>
                <div class="quiz-content-body">
                    <div class="quiz-content-text">
                      <h4>
                        <span class="line">SURF <span class="small">COM</span></span><br>
                        <span class="large">LUCAS CHUMBO</span>
                      </h4>
                    </div>
                    <div class="quiz-content-action">
                      <button class="btn pink-1">Trocar experiência</button>
                      <button v-on:click="choose('questSection', 'Lucas Chumbo')" class="btn yellow-2">Topo!</button>
                    </div>
                </div>
              </div>
              <div v-show="quiz.experience === 1" class="sandro-dias">
                <div class="quiz-content-header">
                  <h3>Esta experiência inesquecível <br>espera por você.</h3>
                </div>
                <div class="quiz-content-body">
                    <div class="quiz-content-text">
                      <h4>
                        <span class="line">SKATE <span class="small">COM</span></span><br>
                        <span class="large">SANDRO DIAS</span>
                      </h4>
                    </div>
                    <div class="quiz-content-action">
                      <button class="btn pink-1">Trocar experiência</button>
                      <button v-on:click="choose('questSection', 'Sandro Dias')" class="btn yellow-2">Topo!</button>
                    </div>
                </div>
              </div>
              <div v-show="quiz.experience === 2" class="rafael-goberna">
                <div class="quiz-content-header">
                  <h3>Esta experiência inesquecível <br>espera por você.</h3>
                </div>
                <div class="quiz-content-body">
                    <div class="quiz-content-text">
                      <h4>
                        <span class="line">PARAGLINDER <span class="small">COM</span></span><br>
                        <span class="large">RAFAEL GOBERNA</span>
                      </h4>
                    </div>
                    <div class="quiz-content-action">
                      <button class="btn pink-1">Trocar experiência</button>
                      <button v-on:click="choose('questSection', 'Rafael Goberna')" class="btn yellow-2">Topo!</button>
                    </div>
                </div>
              </div>
              <div v-show="quiz.experience === 3" class="pelezinho">
                <div class="quiz-content-header">
                  <h3>Esta experiência inesquecível <br>espera por você.</h3>
                </div>
                <div class="quiz-content-body">
                    <div class="quiz-content-text">
                      <h4>
                        <span class="line">AULA DE DANÇA <span class="small">COM</span></span><br>
                        <span class="large">B-BOY PELEZINHO</span>
                      </h4>
                    </div>
                    <div class="quiz-content-action">
                      <button class="btn pink-1">Trocar experiência</button>
                      <button v-on:click="choose('questSection', 'Pelezinho')" class="btn yellow-2">Topo!</button>
                    </div>
                </div>
              </div>
              <div v-show="quiz.experience === 4" class="flakes-power">
                <div class="quiz-content-header">
                  <h3>Esta experiência inesquecível <br>espera por você.</h3>
                </div>
                <div class="quiz-content-body">
                    <div class="quiz-content-text">
                      <h4>
                        <span class="line">FORTNITE <span class="small">COM</span></span><br>
                        <span class="large">FLAKES POWER</span>
                      </h4>
                    </div>
                    <div class="quiz-content-action">
                      <button class="btn pink-1">Trocar experiência</button>
                      <button v-on:click="choose('questSection', 'Flakes Power')" class="btn yellow-2">Topo!</button>
                    </div>
                </div>
              </div>
            </div>
            <div v-show="quiz.done && !quiz.select" class="quiz-content quiz-select">
              <div class="quiz-content-header">
                <h3>Qual experiência <br class="only-mobile">você escolhe <br class="only-desktop">pro seu <br class="only-mobile">verão ser inesquecível?</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section ref="questSection">
      <div class="quest">
        <h2 class="title">
          AGORA QUE VOCÊ ESCOLHEU, <br />É SÓ RESPONDER ABAIXO:
        </h2>
        <form v-on:submit.prevent action="" class="form">
          <div class="form-box">
            <h3 class="form-title">
              Porque Red Bull deve dar asas <br />pra tornar seu verão
              inesquecível?
            </h3>
            <div class="form-body">
              <div class="form-row">
                <div class="form-control">
                  <textarea
                    v-model="questForm.message.val"
                    class="input textarea"
                    name="message"
                    id="message"
                  ></textarea>
                  <span v-show="!questForm.message.val" class="placeholder"
                    >Digite aqui</span
                  >
                  <label
                    class="error"
                    v-show="questForm.message.error"
                    for="name"
                    >{{ questForm.message.error }}</label
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-control">
                  <input
                    class="input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome Completo:"
                    v-model="questForm.name.val"
                  />
                  <label
                    class="error"
                    v-show="questForm.name.error"
                    for="name"
                    >{{ questForm.name.error }}</label
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-control">
                  <input
                    class="input"
                    type="text"
                    name="doc"
                    id="doc"
                    placeholder="CPF: 000.000.000-00"
                    v-model="questForm.doc.val"
                  />
                  <label class="error" v-show="questForm.doc.error" for="doc">{{
                    questForm.doc.error
                  }}</label>
                </div>
                <div class="form-control">
                  <input
                    class="input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email: redbull@redbull.com.br"
                    v-model="questForm.email.val"
                  />
                  <label
                    class="error"
                    v-show="questForm.email.error"
                    for="email"
                    >{{ questForm.email.error }}</label
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-control">
                  <input
                    class="input"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Endereço:"
                    v-model="questForm.address.val"
                  />
                  <label
                    class="error"
                    v-show="questForm.address.error"
                    for="address"
                    >{{ questForm.address.error }}</label
                  >
                </div>
              </div>
              <input
                    style="display:none;"
                    type="text"
                    name="experience"
                    id="experience"
                    v-model="questForm.experience.val"
                  />
            </div>
            <div class="form-terms">
              <p>
                Ao criar uma conta (por meio de registro de e-mail ou via login
                das redes sociais), aceito que meus dados pessoais possam ser
                usados pela Red Bull e suas
                <a href="#" target="_blank">empresas afiliadas</a> como
                declarodo na <a href="#">Política de Privacidade</a> (por ex.,
                ajustar os conteúdos de acordo com suas preferências).
              </p>
              <input type="checkbox" id="terms" name="terms" ref="terms" />
              <label for="terms"
                >Declaro que tenho 18 anos ou mais e Li e Aceitei os
                <a href="#" target="_blank"
                  >termos de condições de participação.*</a
                ></label
              >
            </div>
            <div class="form-action">
              <div v-show="questForm.terms.error" class="form-control">
                <br />
                <label class="error" for="terms">{{
                  questForm.terms.error
                }}</label>
                <br />
              </div>
              <button v-on:click="validateForm()" class="btn yellow-1">
                Enviar
              </button>
            </div>
          </div>
        </form>
        <div class="arrow"></div>
      </div>
    </section>
  </main>
</template>

<script src="./Home.js"></script>