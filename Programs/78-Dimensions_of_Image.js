const image = new Image();
image.src =
  "//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png";
image.onload = function () {
  console.log("Width: " + this.width);
  console.log("Height: " + this.height);
};
