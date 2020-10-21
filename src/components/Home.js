import { Carousel3d, Slide as Slide3d } from 'vue-carousel-3d';
import VueSlickCarousel from 'vue-slick-carousel'

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
            isMobile: true,
            carousel: {
                width: 283,
                height: 219,
                space: 100,
                index: 0,
                arrows: 26,
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
                slidesToScroll: 1,
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '20%',
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
                        url: "https://www.redbull.com/embed/rrn:content:videos:0c4a764d-a38b-4e2b-94f2-9658ad3acfdc:pt-BR"
                    },
                    {
                        url: "https://www.redbull.com/embed/rrn:content:videos:1fe7ccb3-e8cb-44fb-bef5-c98c559e9573:pt-BR"
                    },
                    {
                        url: "https://www.redbull.com/embed/rrn:content:videos:1331c4db-e19d-453b-90b1-166a67c3cb0e:pt-BR"
                    },
                    {
                        url: "https://www.redbull.com/embed/rrn:content:videos:04f4a34f-5614-4d1e-b44f-ea5c599921f5:pt-BR"
                    }
                ]
            }
        }
    },
    beforeMount() {
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
    mounted() {
        setTimeout(() => { this.$refs['expCarousel'].$el.style.height = 'auto'; }, 50);

        // Teste iframe
        // var iframe = this.$refs.testa;
        // setTimeout(() => {
        //     var iframe = document.getElementById('testa')
        //     iframe.addEventListener("load", function () {
        //         // console.log(iframe.contentWindow.document.getElementsByTagName("ul")[0])
        //     });
        // }, 1000)
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
        },
        // This will check if the device is a mobile
        checkDevice() {
            let check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);

            if (!check) {
                this.isMobile = false
            } else {
                window.open("https://www.w3schools.com");
            }

        }
    },
}
