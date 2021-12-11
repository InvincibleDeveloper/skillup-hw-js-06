function task7() {
  let sizes = { width: 5, height: 10 },
    getSquare = function () {
      return this.width * this.height;
    };

  console.log(getSquare(({ width, height } = sizes)));
}

task7();
