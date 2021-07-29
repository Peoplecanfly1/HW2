 export default class Musican {
  constructor(url) {
      this.albumsUrl = url
  }

  async getAlbums () {
      let response = await fetch(this.albumsUrl)
      let albums = await response.json()
      console.log(albums)
  }
}

let classAsync = new Musican("https://jsonplaceholder.typicode.com/albums");

// classAsync.getAlbums()
