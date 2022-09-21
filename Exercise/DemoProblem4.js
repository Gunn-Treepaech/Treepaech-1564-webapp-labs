var Song = function (title, artist) {
  this.title = title;
  this.artist = artist;
  this.play = function () {
    return console.log("Playing: " + this.title + " by " + this.artist);
  };
};

var song1 = new Song("Money", "Lisa");
var song2 = new Song("ชีวิตยังคงสวยงาม", "Bodyslam");
song1.play();
song2.play();
