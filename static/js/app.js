function Artist(name,country,genre,lyrics){
    this.name = name;
    this.country = country;
    this.genre = genre;
    this.lyrics = lyrics;
}

let artists = [];

const paramore = new Artist('Paramore','U.S.A.','Alternative Rock/Pop Punk/Pop Rock',"That's what you get when you let your heart win!");
const radiohead = new Artist('Radiohead','England','Alternative Rock/Art Rock/Experimental Rock');
const gizzards = new Artist('King Gizzard and the Lizard Wizard','Australia','Psychedelic Rock/Garage Rock/Heavy Metal');
const queens = new Artist('Queens of the Stone Age','U.S.A.','Stoner Rock/Hard Rock/Alternative Rock');
const monkeys = new Artist('Arctic Monkeys','England','Indie Rock/Garage Rock/Post-Punk Revival');

artists.push(paramore);
artists.push(radiohead);
artists.push(gizzards);
artists.push(queens);
artists.push(monkeys);

const contentContainer = document.querySelector('#artist-card')
const createCard = (artist) => {
    const card = document.createElement('div')
    card.innerHTML = `
    <div class="card" style="border-style: groove">
    <div class="card-body">
    <h4 class="card-title"> <strong>${artist.name}</strong></h4>
    <p class="card-text">
      <strong>Country:</strong> ${artist.country}
    </p>
    <p class="card-text">
      <strong>Genre:</strong> ${artist.genre}
    </p>
    <p class="card-text">
      <button id="button" onclick="Perform()">Perform!</button> 
    </p>
    <script>
    function Perform(){
    document.getElementById("card-text").innerHTML = 
    <p class="card-text" ${artist.lyrics}</p></div>;
    }
    </script>
    </div>
    `
    return card;
}
const cards = artists.map(artist => {
    return createCard(artist);
})
cards.forEach(card => contentContainer.appendChild(card));