import SnowAnimation from './snowAnimation';
import SnowFlakes from './snowFlakes';


export default class LetSnow {
    constructor() {
        this.toggleSnow = this.toggleSnow.bind(this);
        this.init = this.init.bind(this);
        this.resizeCanvasElements = this.resizeCanvasElements.bind(this);
        this.snowAnimation = null;
        this.snowFlakes = null;
        this.snowflakesContext = null;
        this.snowflakesCanvas = null;
        this.aaSnowConfig = { snowflakes: '200' }; 
    }

    init() {
        this.snowAnimation = new SnowAnimation();
        this.snowFlakes = new SnowFlakes();
        const element = document.createElement('canvas');
        element.id = 'snowflakesCanvas';
        document.querySelector('.snow__container').appendChild(element);
    
        this.snowflakesCanvas = document.getElementById('snowflakesCanvas');
        this.snowflakesContext = snowflakesCanvas.getContext('2d');
        this.snowFlakes.generate(this.aaSnowConfig.snowflakes);
        this.snowAnimation.addFrameRenderer(this.snowFlakes.renderFrame, this.snowflakesContext);
    }

    resizeCanvasElements() {
        this.snowflakesCanvas.width = window.innerWidth;
        this.snowflakesCanvas.height = window.innerHeight;
        this.snowFlakes.updateBounds();
    };

    toggleSnow() {
        this.resizeCanvasElements();
        this.snowFlakes.clearFrame(this.snowflakesContext);
        this.snowAnimation.toggle(this.resizeCanvasElements);

    };

}
