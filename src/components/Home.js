import { Carousel3d, Slide as Slide3d } from 'vue-carousel-3d';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    components: {
        Carousel3d,
        Slide3d,
        VueSlickCarousel
    },
    data() {
        return {
            cdn: 'https://web02137.microsites02.redbull.com',
            windowWidth: window.innerWidth,
            carousel: {
                width: '',
                height: '',
                space: '',
                index: 0,
                arrows: ''
            },
            quiz: {
                step: 0,
                done: false,
                select: true,
                quests: [
                    {
                        try: false,
                        correct: 1,
                        respose: null
                    },
                    {
                        try: false,
                        correct: 2,
                        respose: null
                    },
                    {
                        try: false,
                        correct: 1,
                        respose: null
                    },
                    {
                        try: false,
                        correct: 3,
                        respose: null
                    },
                    {
                        try: false,
                        correct: 4,
                        respose: null
                    }
                ],
                experience: null,
            },
            questForm: {
                message: {
                    val: null,
                    error: null
                },
                name: {
                    val: null,
                    error: null
                },
                doc: {
                    val: null,
                    error: null
                },
                email: {
                    val: null,
                    error: null
                },
                address: {
                    val: null,
                    error: null
                },
                terms: {
                    val: null,
                    error: null
                },
                experience: {
                    val: ''
                }
            },
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                speed: 500,
                centerMode: true,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 439,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            centerMode: true,
                        }
                    },
                    {
                        breakpoint: 10000,
                        settings: "unslick"
                    }
                ]
            },
            videos: {
                play: false,
                selected: null,
                urls: [
                    {
                        url: "https://www.redbull.com/embed/rrn:content:videos:1fe7ccb3-e8cb-44fb-bef5-c98c559e9573:pt-BR"
                    },
                    {
                        url: "https://www.redbull.com/embed/rrn:content:videos:1fe7ccb3-e8cb-44fb-bef5-c98c559e9573:pt-BR"
                    },
                    {
                        url: "https://www.redbull.com/embed/rrn:content:videos:1331c4db-e19d-453b-90b1-166a67c3cb0e:pt-BR"
                    },
                    {
                        url: "https://www.redbull.com/embed/rrn:content:videos:04f4a34f-5614-4d1e-b44f-ea5c599921f5:pt-BR"
                    },
                    {
                        url: "https://www.redbull.com/embed/rrn:content:videos:1fe7ccb3-e8cb-44fb-bef5-c98c559e9573:pt-BR"
                    },
                ]
            }
        }
    },
    mounted() {
        // Experiences carrousel
        // There isn't a responsive support in the carousel-3d library
        // This will check the viewport size and will set the styles
        if (this.windowWidth < 768) {
            this.carousel.width = 283
            this.carousel.height = 219
            this.carousel.space = 100
            this.carousel.arrows = 26
        } else {
            this.carousel.width = 693
            this.carousel.height = 538
            this.carousel.space = 410
            this.carousel.arrows = 62
        }
    },
    methods: {
        // There isn't a bullet support in the carousel-3d library
        // This will change the state of the index reference to control in the new component
        onBeforeSlideChange(index) {
            this.carousel.index = index
        },
        // This will controll the bullet call to change slides
        goToSlide(index) {
            this.$refs.expCarousel.goSlide(index)
        },
        // Form validation
        validateForm() {
            // validate message
            if (!this.questForm.message.val) {
                this.questForm.message.error = "Informe sua mensagem!"
            } else {
                this.questForm.message.error = null
            }
            // validate name
            if (!this.questForm.name.val || !this.checkLastName(this.questForm.name.val)) {
                this.questForm.name.error = "Informe seu nome completo!"
            } else {
                this.questForm.name.error = null
            }
            // validate doc (cpf)
            if (!this.questForm.doc.val) {
                this.questForm.doc.error = "Informe seu CPF!"
            } else if (!this.checkDoc(this.questForm.doc.val)) {
                this.questForm.doc.error = "CPF inválido"
            } else {
                this.questForm.doc.error = null
            }
            // validate email 
            if (!this.questForm.email.val || !this.checkEmail(this.questForm.email.val)) {
                this.questForm.email.error = "Informe um email válido!"
            } else {
                this.questForm.email.error = null
            }
            // validate address
            if (!this.questForm.address.val) {
                this.questForm.address.error = "Informe seu edereço!"
            } else {
                this.questForm.address.error = null
            }
            // Verify terms checkbox
            if (!this.$refs.terms.checked) {
                this.questForm.terms.error = 'Confirme os termos de condições de participação!'
            } else {
                this.questForm.terms.error = null
            }
        },
        // Check if has a last ame
        checkLastName(input) {
            let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
            return regName.test(input);
        },
        // Check if doc is a CPF
        checkDoc(input) {
            let Sum;
            let Rest;

            let docString = input.replace(/\.|-/gm, '');

            Sum = 0;
            if (docString == "00000000000") return false;

            for (let i = 1; i <= 9; i++) Sum = Sum + parseInt(docString.substring(i - 1, i)) * (11 - i);
            Rest = (Sum * 10) % 11;

            if ((Rest == 10) || (Rest == 11)) Rest = 0;
            if (Rest != parseInt(docString.substring(9, 10))) return false;

            Sum = 0;
            for (let i = 1; i <= 10; i++) Sum = Sum + parseInt(docString.substring(i - 1, i)) * (12 - i);
            Rest = (Sum * 10) % 11;

            if ((Rest == 10) || (Rest == 11)) Rest = 0;
            if (Rest != parseInt(docString.substring(10, 11))) return false;

            return true;
        },
        // Check if is a email
        checkEmail(input) {
            let regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regEmail.test(input);
        },
        // Controll quiz quest awnser
        doQuest(questNumber, responseNumber) {
            // Add clicked option to data response
            this.quiz.quests[questNumber].response = responseNumber
            // Chagne quest state to "tryed"
            this.quiz.quests[questNumber].try = true
        },
        // Change quiz quest
        nextQuest() {
            if (this.quiz.quests.length != (this.quiz.step + 1)) {
                if (this.quiz.quests[this.quiz.step].try) {
                    this.quiz.step++
                }
            } else {
                // Set that the quiz is finished
                this.quiz.done = true
                // Random select one persona 
                this.quiz.experience = ((Math.floor(Math.random() * 5) + 1) - 1)
            }
        },
        // Change experience selected in the list
        changeExp(expNumber) {
            this.quiz.experience = expNumber
        },
        // Open select
        openSelect() {
            this.quiz.select = false
            this.quiz.experience = null
        },
        // Back to experience decision
        finishExp() {
            if (this.quiz.experience != null) {
                this.quiz.select = true
            }
        },
        // "Anchor" click because redbull could use hash in router
        choose(refName, expName) {
            // Set persona name in the form data experience
            this.questForm.experience.val = expName
            // Scroll to ref elment
            let element = this.$refs[refName];
            let top = element.offsetTop;
            window.scrollTo(0, top);
        },
        // Open video modal selecting the video url
        playVideo(urlRef) {
            // Select based on the persona
            this.videos.selected = this.videos.urls[urlRef].url
            // Open modal
            this.videos.play = true
            // Hide body scroll
            document.getElementsByTagName("BODY")[0].style.overflowY = "hidden"
        },
        // Close video
        closeVideo() {
            // Select based on the persona
            this.videos.selected = null
            // Open modal
            this.videos.play = false
            // Hide body scroll
            document.getElementsByTagName("BODY")[0].style.overflowY = "auto"
        }
    },
}
