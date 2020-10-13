import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    components: {
        Carousel3d,
        Slide
    },
    data() {
        return {
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
                done: true,
                select: false,
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
                experience: 0,
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
            }
        }
    },
    mounted() {
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
        changeExp(expNumber) {
            this.quiz.experience = expNumber
        },
        // "Anchor" click because redbull could use hash in router
        choose(refName, expName) {
            // Set persona name in the form data experience
            this.questForm.experience.val = expName
            // Scroll to ref elment
            let element = this.$refs[refName];
            let top = element.offsetTop;
            window.scrollTo(0, top);
        }
    },
}
