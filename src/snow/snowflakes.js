export default class SnowFlakes {
    constructor() {
        this.snowflakes = [];
        this.snowflakesDefaultCount = 1000;
        this.snowflakeCountIncrement = 0.1;
        this.snowflakeRemoveFactor = 2;
        this.snowflakeSprites = [];
        this.spritesCount = 5;
        this.spriteWidth = 20;
        this.spriteHeight = 20;
        this.snowflakeSpritesLocation = './images/snowFlakes.png';
        this.bounds = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        this.minVerticalVelocity = 1;
        this.maxVerticalVelocity = 4;
        this.minHorizontalVelocity = -1;
        this.maxHorizontalVelocity = 3;
        this.minScale = 0.2;
        this.maxScale = 1.25;
        this.minHorizontalDelta = 2;
        this.maxHorizontalDelta = 3;
        this.minOpacity = 0.2;
        this.maxOpacity = 0.9;
        this.maxOpacityIncrement = 50;
        this.speedCorrectionFrames = 60;
        this.currentSpeedCorrectionFrame = 0;
        this.speedFactor = 0.6;

        this.generate = this.generate.bind(this);
        this.generateSnowflake = this.generateSnowflake.bind(this);
        this.advanceSnowFlakes = this.advanceSnowFlakes.bind(this);
        this.renderFrame = this.renderFrame.bind(this);
        this.updateBounds = this.updateBounds.bind(this);
        this.count = this.count.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.clearFrame = this.clearFrame.bind(this);
    }

    generateSnowflake() {
        let scale = Math.random() * (this.maxScale - this.minScale) + this.minScale;
        return {
            x: Math.random() * this.bounds.width,
            y: Math.random() * this.bounds.height,
            vv: Math.random() * (this.maxVerticalVelocity - this.minVerticalVelocity) + this.minVerticalVelocity,
            hv: Math.random() * (this.maxHorizontalVelocity - this.minHorizontalVelocity) + this.minHorizontalVelocity,
            sw: scale * this.spriteWidth,
            sh: scale * this.spriteHeight,
            mhd: Math.random() * (this.maxHorizontalDelta - this.minHorizontalDelta) + this.minHorizontalDelta,
            hd: 0,
            hdi: Math.random() / (this.maxHorizontalVelocity * this.minHorizontalDelta),
            o: Math.random() * (this.maxOpacity - this.minOpacity) + this.minOpacity,
            oi: Math.random() / this.maxOpacityIncrement,
            si: Math.ceil(Math.random() * (this.spritesCount - 1)),
            nl: false,
        }
    }

    advanceSnowFlakes() {
        this.snowflakes.forEach(sf => {
            sf.y += sf.vv * this.speedFactor;
            sf.x += (sf.hd + sf.hv) * this.speedFactor;
            sf.hd += sf.hdi;
            sf.hdi = (sf.hd < -sf.mhd || sf.hd > sf.mhd) ? -sf.hdi : sf.hdi;
            sf.o += sf.oi;
            sf.oi = (sf.o > this.maxOpacity || sf.o < this.minOpacity) ? -sf.oi : sf.oi;
            sf.o = sf.o > this.maxOpacity
                ? this.maxOpacity
                : sf.o < this.minOpacity
                    ? this.minOpacity
                    : sf.o;

            let resetNotLanding = (sf.y > this.bounds.height + this.spriteHeight / 2) ||
                (sf.y < 0) || (sf.x > this.bounds.width + this.spriteWidth / 2) || (sf.x < 0);

            sf.y = (sf.y > this.bounds.height + this.spriteHeight / 2)
                ? 0
                : sf.y < 0
                    ? this.bounds.height 
                    : sf.y;

            sf.x = (sf.x > this.bounds.width + this.spriteWidth / 2)
                ? 0
                : sf.x < 0
                    ? this.bounds.width 
                    : sf.x;

            if (resetNotLanding) { sf.nl = false; }

        });
    }

    renderFrame(context) {            
        this.advanceSnowFlakes();
        this.clearFrame(context);
        this.snowflakes.map(sf => {
            context.globalAlpha = sf.o;
            context.drawImage(
                this.snowflakeSprites[sf.si],
                0,
                0,
                this.spriteWidth,
                this.spriteHeight,
                sf.x,
                sf.y,
                sf.sw,
                sf.sh);
        });
    }

    generate(number, add) {
        const image = new Image();
        image.onload = function () {
            for (let i = 0; i < this.spritesCount; i++) {
                const sprite = document.createElement("canvas");
                sprite.width = this.spriteWidth;
                sprite.height = this.spriteHeight;
                const context = sprite.getContext("2d");
                context.drawImage(
                    image,
                    i * this.spriteWidth,
                    0,
                    this.spriteWidth,
                    this.spriteHeight,
                    0,
                    0,
                    this.spriteWidth,
                    this.spriteHeight);
                this.snowflakeSprites.push(sprite);
            }

            this.snowflakesDefaultCount = number || this.snowflakesDefaultCount;
            this.snowflakes = add ? this.snowflakes : [];

            for (let i = 0; i < this.snowflakesDefaultCount; i++) {
                this.snowflakes.push(this.generateSnowflake());
            }
        }.bind(this);

        image.src = this.snowflakeSpritesLocation;
    }

   updateBounds() {
        this.bounds.width = window.innerWidth;
        this.bounds.height = window.innerHeight;
    }

    count() {
        return this.snowflakes.length;
    }

    add(number) {
        number = number || this.snowflakes.length * this.snowflakeCountIncrement;
        this.generate(number, true);
    }

    remove(number) {
        number = number || this.snowflakes.length * this.snowflakeCountIncrement * this.snowflakeRemoveFactor;
        const flakesCount = this.snowflakes.length - number;
            this.snowflakes = flakesCount > 0
                ? this.snowflakes.slice(0, flakesCount)
                : this.snowflakes;
    }

    clearFrame(context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }
}
