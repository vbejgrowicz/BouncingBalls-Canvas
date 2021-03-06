class Ball {
  constructor(id, x, y) {
    this.id = 'ball' + id;
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.color = ballColor;
    this.velocity = 10;
    this.dx;
    this.dy;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  move() {
    Boundary.checkBoundary(this);
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
  calcVelocities(launchAngle) {
    const angleInRad = (90 - launchAngle) * (Math.PI / 180);
    this.dx = this.velocity * Math.cos(angleInRad);
    this.dy = - (this.velocity * Math.sin(angleInRad));
  }
}
