class Library {
	constructor(name, creator){
		this.name = name,
		this.creator = creator,
		this.playlist = []
	}

  addPlaylist(playlist){
    this.playlist.push(playlist)
  }
}

class Playlist{
  
  constructor(name){
    this.name = name,
    this.tracks = []
	}

	get overallRating(){
    let totalRating = 0
		this.tracks.forEach((track) => {
			totalRating += track.rating
		})
		let averageRating = totalRating / this.tracks.length
		return averageRating
	}
  
  get totalDuration(){
  	let time = 0
  	this.tracks.forEach((track) => {
  		time += track.length
  	})
  	return time
  }

	addTrack(track){
    this.tracks.push(track)
	}
}

class Track{

	constructor(title, rating, length){
		if (rating > 5 || rating < 1){
			console.log('rating must be between 1 and 5')
		} else if (typeof length !== 'number') {
			console.log('length must be a number')
		} else {
	    this.title = title,
	    this.rating = rating,
	    this.length = length
	  }
  }
}

let library1 = new Library('library1', 'eli')
let playlist1 = new Playlist('play1')
let coolsong = new Track('coolsong', 5, 100)
let badsong = new Track('badsong', 1, 200)

playlist1.addTrack(coolsong)
playlist1.addTrack(badsong)
library1.addPlaylist(playlist1)

console.log(library1)
console.log(playlist1.overallRating)
console.log(playlist1.totalDuration)
