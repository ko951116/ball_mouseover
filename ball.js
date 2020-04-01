export class Ball {
    constructor(stageWidth, stageHeight, radius, speed, color) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;
        this.color = color;

        this.x = Math.random() * (stageWidth - radius*2) + radius;
        this.y = Math.random() * (stageHeight - radius*2) + radius;
    }

    draw(ctx, stageWidth, stageHeight, color) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
    }

    ballGrow(mouse) {
        const maxRadius = 40;
        const minRadius = 4;

        if (Math.abs(mouse.x - this.x ) < 50 && Math.abs(mouse.y - this.y) < 50) {
            if (this.radius < maxRadius) {
                this.radius += 2;
            }
        } else if(this.radius > minRadius) {
            this.radius -= 2;
        }

    }

    bounceWindow(stageWidth, stageHeight) { //스테이지에 닿았는지 확인하는 함수
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        if (this.x <= minX || this.x >= maxX) {
            this.vx *= (-1);
            this.x += this.vx;
        } else if (this.y <= minY || this.y >= maxY) {
            this.vy *= (-1);
            this.y += this.vy;
        }
    }
}