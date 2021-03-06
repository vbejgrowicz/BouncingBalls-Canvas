const blockXPositions = [6.66, 68.32, 129.98, 191.64, 253.3, 314.96, 376.62];
let numOfBlocks = 0;

const Objects = {
  createUniqRandomNumArr() {
    const numOf = 6;
    const arr = [];
    for (let i = 0; i < numOf; i += 1) {
      arr.push(Math.floor(Math.random() * 7));
    }
    return arr.filter((v, i, a) => a.indexOf(v) === i);
  },
  createBlocks() {
    const uniqArr = this.createUniqRandomNumArr();
    for (let i = 0; i < uniqArr.length; i += 1) {
      const value = numOfBalls + (Math.round(Math.random()) * numOfBalls);
      let newBlock = new Block('block' + numOfBlocks, blockXPositions[uniqArr[i]], 5, value);
      blocks.push(newBlock);
      numOfBlocks += 1;
    }
  },
  loadBlocks(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      let loadedBlock = new Block(arr[i].id, arr[i].x, arr[i].y, arr[i].number);
      blocks.push(loadedBlock);
    }
  },
  createBalls(timestamp) {
    while (count < numOfBalls && timestamp - startTime > 75) {
      let newBall = new Ball(count, canvas.width / 2, canvas.height - 15);
      newBall.calcVelocities(launchAngle);
      balls.push(newBall);
      startTime = timestamp;
      count += 1;
    }
  }
}
