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
      </div>
    </section>
    <section>
      <div class="quest">
        <h2 class="title">
          AGORA QUE VOCÊ ESCOLHEU, <br />É SÓ RESPONDER ABAIXO:
        </h2>
        <form action="" class="form">
          <div class="form-box">
            <h3 class="form-title">
              Porque Red Bull deve dar asas <br />pra tornar seu verão
              inesquecível?
            </h3>
            <div class="form-row">
              <text-field
                inputType="textarea"
                inputName="message"
                inputId="message"
                inputPlaceholder="Digite aqui"
              />
            </div>
            <div class="form-row">
              <text-field
                inputType="text"
                inputName="name"
                inputId="name"
                inputPlaceholder="Nome Completo:"
              />
            </div>
            <div class="form-row">
              <text-field
                inputType="text"
                inputName="doc"
                inputId="doc"
                inputPlaceholder="CPF: 000.000.000-00"
              />
              <text-field
                inputType="text"
                inputName="email"
                inputId="email"
                inputPlaceholder="Email: redbull@redbull.com.br"
              />
            </div>
            <div class="form-row">
              <text-field
                inputType="text"
                inputName="address"
                inputId="address"
                inputPlaceholder="Endereço:"
              />
            </div>
            <div class="form-tems">
              <p>
                Ao criar uma conta (por meio de registro de e-mail ou via login
                das redes sociais), aceito que meus dados pessoais possam ser
                usados pela Red Bull e suas
                <a href="#" target="_blank">empresas afiliadas</a> como
                declarodo na <a href="#">Política de Privacidade</a> (por ex.,
                ajustar os conteúdos de acordo com suas preferências).
              </p>
              <input type="checkbox" id="scales" name="scales" checked />
              <label for="scales">Scales</label>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script src="./Home.js"></script>