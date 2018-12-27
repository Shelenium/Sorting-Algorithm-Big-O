export default class SnowAnimation {
    constructor() {

        this.frameRenderersCollection = [];
        this.renderContextesCollection = [];
        this.isRunning = false;
    	
        this.animationCallback;
        this.minInterval = 16.7;

        // fps tracking
        this.avgTime = 0;
        this.trackFrames = 60;
        this.frameCounter = 0;

        this.addFrameRenderer = this.addFrameRenderer.bind(this);
        this.getRequestAnimationFrame = this.getRequestAnimationFrame.bind(this);
        this.frameRenderCore = this.frameRenderCore.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    // register new renderer and corresponding context
    addFrameRenderer(frameRender, renderContext) {
        if (frameRender && typeof (frameRender) === "function") {
            this.frameRenderersCollection.push(frameRender);
            this.renderContextesCollection.push(renderContext);
        }
    }

    // detecting requestAnimationFrame feature
    getRequestAnimationFrame(code) {
        switch(code) {
            case window.requestAnimationFrame:
                return window.requestAnimationFrame(code);
            case window.msRequestAnimationFrame:
                return window.msRequestAnimationFrame(code);
            case window.webkitRequestAnimationFrame:
                return window.webkitRequestAnimationFrame(code);
            case window.mozRequestAnimationFrame:
                return window.mozRequestAnimationFrame(code);
            default:
                return setTimeout(code, this.minInterval);
        }
    }

    // iterate and render all registered renderers
    frameRenderCore() {

        let startDate = new Date();

        this.frameRenderersCollection.map((item, i) => item(this.renderContextesCollection[i]));

        if (this.isRunning) {
            this.animationCallback = this.getRequestAnimationFrame(this.frameRenderCore);
        }

        let endDate = new Date();
        let duration = (endDate - startDate);
        this.avgTime += duration;

        // we count fps every trackFrames frame
        this.frameCounter++;
        if (this.frameCounter >= this.trackFrames) {
            this.avgTime = this.avgTime / this.trackFrames;
            let avgFps = Math.floor(1000 / this.avgTime);
            if (avgFps > 60) avgFps = 60;

            this.avgTime = 0;
            this.frameCounter = 0;
        }
    }

    // playback control: play, pause, toggle
    start(handler) {
        if (this.isRunning) return;
        this.animationCallback = this.getRequestAnimationFrame(this.frameRenderCore);
        window.addEventListener('resize', handler);
        this.isRunning = true;
    }

    stop(handler) {
        if (!this.isRunning) return;
        clearInterval(this.animationCallback);
        window.removeEventListener('resize', handler);
        this.isRunning = false;
    }

    toggle(handler) {
        let playbackControl = (this.isRunning) ? this.stop : this.start;
        playbackControl(handler);
    }
}