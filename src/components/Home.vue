<template>
  <main>
    <section>
      <div class="hero">
        <div class="hero-can"></div>
        <div class="hero-text">
          <h1 class="hero-title">PARABÉNS <br /><span>AOS VENCEDORES</span></h1>
        </div>
      </div>
    </section>
    <section>
      <div class="experiences">
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
                  <span class="winner">VITIENZO D. C.</span>
                  <span class="line">VAI SURFAR COM O</span
                  ><br />
                  <span class="large">LUCAS CHUMBO</span>
                </h3>
              </div>
            </slide3d>
            <slide3d :index="1">
              <div class="card sandro-dias">
                <h3 class="card-title">
                  <span class="winner">ELIZA M. S. M.</span>
                  <span class="line">VAI ANDAR DE SKATE COM O</span
                  ><br />
                  <span class="large">SANDRO DIAS</span>
                </h3>
              </div>
            </slide3d>
            <slide3d :index="2">
              <div class="card rafael-goberna">
                <h3 class="card-title">
                  <span class="winner">NASTASSJA A. F.</span>
                  <span class="line"
                    >VAI VOAR COM O</span
                  ><br />
                  <span class="large">RAFAEL GOBERNA</span>
                </h3>
              </div>
            </slide3d>
            <slide3d :index="3">
              <div class="card pelezinho">
                <h3 class="card-title">
                  <span class="winner">FILIPE V.</span>
                  <span class="line"
                    >VAI DANÇAR COM O</span
                  ><br />
                  <span class="large">B-BOY PELEZINHO</span>
                </h3>
              </div>
            </slide3d>
            <slide3d :index="4">
              <div class="card flakes-power">
                <h3 class="card-title">
                  <span class="winner">DENISE A. O. F.</span>
                  <span class="line"
                    >VAI JOGAR COM O</span
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
        <div class="experience-rules">
          <span>CONSULTE <a href="https://policies.redbull.com/custom/1a077808-65d7-475f-86b2-3e5867a2aadc/Regulamento+Aprovado_RB+Summer+Edition_2020.pdf" target="_blank">AQUI</a> O REGULAMENTO</span>
        </div>
        <div v-rellax="{speed: 2.2}" class="parallax can-1"></div>
      </div>
    </section>
    <section>
      <div class="videos">
        <h4 class="sub-title">
          QUER SABER MAIS SOBRE OS ATLETAS?
          <br />
          <span
            >DÁ O PLAY ABAIXO PRA ACESSAR <br class="only-mobile" />OS
            CONTEÚDOS.</span
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