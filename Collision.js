const Collision = {
  getDistance(ball, blockX, blockY){
    let xDistance = blockX - ball.x;
    let yDistance = blockY - ball.y;
    return  Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));;
  },
  getMiddleDistance(ball, block){
    let xMidDistance = block.x + block.width/2 - ball.x;
    let yMidDistance = block.y + block.width/2 - ball.y;
    return Math.sqrt(Math.pow(xMidDistance, 2) + Math.pow(yMidDistance, 2));
  },
  resolveCollision(ball, block) {
    const blockLeft = block.x;
    const blockRight = block.x + block.width;
    const blockTop = block.y;
    const blockBottom = block.y + block.height;

    block.number -= 1;

    if (ball.x < blockLeft) {
      ball.dx = -ball.dx;
      ball.dy = -ball.dy;
    } else if (ball.x > blockRight) {
      ball.dx = -ball.dx
      ball.dy = -ball.dy;
    } else {
      ball.dy = -ball.dy;
    }
  },
  checkCollision(ball, block) {
    const blockPointsX = [block.x, block.x + block.width];
    const blockPointsY = [block.y, block.y + block.height];
    //check all corners for collisions as well as middle
    if (
      (this.getDistance(ball, blockPointsX[0], blockPointsY[0]) - ball.radius < 0) ||
      (this.getDistance(ball, blockPointsX[0], blockPointsY[1]) - ball.radius < 0) ||
      (this.getDistance(ball, blockPointsX[1], blockPointsY[0]) - ball.radius < 0) ||
      (this.getDistance(ball, blockPointsX[1], blockPointsY[1]) - ball.radius < 0)
    ) {
      this.resolveCollision(ball, block);
    } else if (this.getMiddleDistance(ball, block) - ball.radius - block.width/2 < 0) {
      this.resolveCollision(ball, block);
    }
  }
}