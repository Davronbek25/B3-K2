const headers = {
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
};

let eminemTracks = [];
let metallicaTracks = [];
let behemothTracks = []

// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
//   method: "GET",
//   headers,
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((artists) => (console.log(artists.data.slice(0, 8))))
//   .catch((error) => console.log(error));

// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
//     method: "GET",
//     headers
// }).then(response => {
//     if(response.ok) {
//         return response.json()
//     }
// }).then(artists => console.log(artists.data.slice(0, 8)))
// .catch(error => console.log(error))

// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
//   method: "GET",
//   headers,
// }).then((response) => {
//   if(response.ok){
//     return response.json()
//   }
// }).then(singers => console.log(singers.data.slice(0,8)))
// .catch(error => console.log(error))

const fetchEminem = fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
  method: 'GET',
  headers
}).then(response => {
  if(response.ok){
    return response.json()
  }
})

const fetchMetallica = fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
  method: "GET",
  headers
}).then(response => {
  if(response.ok){
    return response.json()
  }
})

const fetchBehemoth = fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
  method: 'GET',
  headers
}).then(response => {
  if(response.ok){
    return response.json()
  }
})

let arrayTracks = []

Promise.all([fetchEminem, fetchMetallica, fetchBehemoth])
.then(response => {
  // console.log(response[0].data.slice(0,8))
  eminemTracks = response[0].data.slice(0,8)
  // console.log(eminemTracks)
  metallicaTracks = response[1].data.slice(0,8)
  behemothTracks = response[2].data.slice(0,8)
  arrayTracks = [eminemTracks, metallicaTracks, behemothTracks]
  // console.log(arraySections)
}).catch(error => console.log(error))

const createCards = () => {
  let eminemSection = document.getElementById("eminem")
  let metallicaSection = document.getElementById("metallica")
  let behemothSection = document.getElementById("behemoth")
  let arraySections = [eminemSection, metallicaSection, behemothSection]
  if(eminemTracks, metallicaTracks, behemothTracks){
    arraySections.forEach(section => {
      console.log(arrayTracks)
      for(let i = 0; i < 4; i++){
        section.innerHTML += `
        <div class="card px-0 g-0 me-3 shadow" style="width: 14rem;">
        <img src="${arrayTracks[arraySections.indexOf(section)][i + 4].album.cover_big}" class="card-img-top" alt="...">
        <div class="card-body text-center pt-2 pb-0">
        <h5 class="card-title">${arrayTracks[arraySections.indexOf(section)][i + 4].title}</h5>
        </div>
        </div>
        `
        document.getElementById('list-albums').classList.add("d-none")
        document.querySelectorAll(".row.mt-5.px-5.mx-5").forEach(el => {
          el.classList.remove("d-none")
        })
      }
    })
  }
}