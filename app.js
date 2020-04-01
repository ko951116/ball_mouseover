import {
    Ball
} from './ball.js';

export class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.totallBalls = 800;

        document.body.appendChild(this.canvas); 

        addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        addEventListener("mousemove", this.mouseover.bind(this), false);
        this.mouseover(event);

        this.ballArray =[];
        for (let i = 0; i<this.totallBalls; i++) {
            let radius = Math.random()*5 +1;
            let x = this.stageWidth;
            let y = this.stageHeight;

            this.ballArray.push(new Ball(x, y, radius, ((Math.random() - 0.5)*5)));
        }
        requestAnimationFrame(this.animate.bind(this));
    }

    mouseover(event) {
        this.mouse = {
            x: undefined,
            y: undefined
        };
        this.mouse.x = event.x;
        this.mouse.y = event.y;
       //console.log(this.mouse);
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2,2);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight); 

        for (let i = 0; i<this.totallBalls; i++) {
            this.color = ['rgba(0,199,235,1)', 'rgba(0,146,199,1)', 'rgba(0,87,158,1)'];

            this.ballArray[i].draw(this.ctx, this.stageWidth, this.stageHeight, this.color[i%3]);
        }

        for (let i = 0; i<this.totallBalls; i++) {
            this.ballArray[i].ballGrow(this.mouse);
        }
    }
}

window.onload = () => {
    new App();
};
