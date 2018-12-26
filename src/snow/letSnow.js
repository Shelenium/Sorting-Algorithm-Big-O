import SnowAnimation from './snowAnimation';
import SnowFlakes from './snowFlakes';


export default class LetSnow {
    constructor() {
        this.toggleSnow = this.toggleSnow.bind(this);
        this.init = this.init.bind(this);
        this.snowAnimation = null;
        this.snowFlakes = null;
        this.snowflakesContext = null;
    }

    init() {
        const resizeCanvasElements = () => {
            snowflakesCanvas.width = window.innerWidth;
            snowflakesCanvas.height = window.innerHeight;
        };
        const onDOMLoaded = () => {
            this.snowFlakes.generate(aaSnowConfig.snowflakes);
            this.snowAnimation.addFrameRenderer(this.snowFlakes.renderFrame, this.snowflakesContext);
            window.addEventListener('resize', resizeCanvasElements);
        }
        const aaSnowConfig = { snowflakes: '200' }; 
        let snowflakesCanvas = null;
        this.snowAnimation = new SnowAnimation();
        this.snowFlakes = new SnowFlakes();
        const element = document.createElement('canvas');
        element.id = 'snowflakesCanvas';
        document.querySelector('.snow__container').appendChild(element);
    
        snowflakesCanvas = document.getElementById('snowflakesCanvas');
        resizeCanvasElements();
        this.snowflakesContext = snowflakesCanvas.getContext('2d');

        document.addEventListener('DOMContentLoaded', onDOMLoaded);
    }

    toggleSnow() {
        this.snowFlakes.clearFrame(this.snowflakesContext);
        this.snowAnimation.toggle();
    };

}
