let baseURL = 'https://api.discogs.com/database/search'
let token = 'RyrWcewvRsMQGDwFSUjlICemGjAmICzjjvnjIjiW'
let url;

const submitForm = document.querySelector('form');
const searchTerm = document.getElementById('search');
const section = document.getElementById('musicDisplayArea')

submitForm.addEventListener('submit', fetchMusic);

function fetchMusic(e){
    e.preventDefault();
url = `${baseURL}?q=${searchTerm.value}&token=${token}`
fetch(url)
.then(function(result){
    console.log(result);
    return result.json();
  })
  .then(function(json) {
    console.log(json);
    displayResults(json);
  })
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    console.log("DisplayResults:", json);
    let people = json.results;

    let allReleases = [];

    for (let p of people) {
        console.log('Type in for loop: ', p.type);
        if (p.type == 'release'){
            console.log(p);
            allReleases.push(p);
            console.log(allReleases);
        };

        console.log('All Releases: ', allReleases)

        // for (let r of allReleases) {
        //     console.log('Release loop: ', r);
        // }
    }
        const randomValue = allReleases[Math.floor(Math.random() * allReleases.length)]
        console.log('Random Value: ', randomValue)
    
        // let randomValue = Math.floor(Math.random() * (allReleases.length - 0) + 0);
        // console.log(randomValue);
        // let current = allReleases[randomValue];
        // console.log(current);

        let article = document.createElement("article");
        let title = document.createElement("h2");
        let country = document.createElement('h3');
        let genre = document.createElement('h3');
        let image = document.createElement('img');

        title.textContent = randomValue.title;
        image.src = randomValue.cover_image;
        genre.textContent = randomValue.genre;
        country.textContent = randomValue.country;

        article.appendChild(title);
        article.appendChild(country);
        article.appendChild(genre);
        article.appendChild(image);
        section.appendChild(article);

}




