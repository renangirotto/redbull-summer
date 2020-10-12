import { Carousel3d, Slide } from 'vue-carousel-3d';
import TextField from './TextField.vue'

export default {
    components: {
        Carousel3d,
        Slide,
        TextField
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
        }
    },
}
