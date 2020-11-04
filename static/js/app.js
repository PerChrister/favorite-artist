function Artist(name,country,genre){
    this.name = name;
    this.country = country;
    this.genre = genre;
}

function Perform(lyrics){
    this.lyrics = lyrics;
}

let artists = [];

const paramore = new Artist('Paramore','U.S.A.','Alternative Rock/Pop Punk/Pop Rock');
const radiohead = new Artist('Radiohead','England','Alternative Rock/Art Rock/Experimental Rock');
const gizzards = new Artist('King Gizzard and the Lizard Wizard','Australia','Psychedelic Rock/Garage Rock/Heavy Metal');
const queens = new Artist('Queens of the Stone Age','U.S.A.','Stoner Rock/Hard Rock/Alternative Rock');
const monkeys = new Artist('Arctic Monkeys','England','Indie Rock/Garage Rock/Post-Punk Revival');

// 
    
//     * if fave album asked, Riot!, In Rainbows, Nonagon Infinity, Like Clockwork..., Favourite Worst Nightmare
//     plus images

//     perform() 
//     -returns a string of some of their lyrics
//     -if instrumental, imagine something

//     must be stored in a collection
//     hardcoded objects, sample size of 5 is good

//     display on cards/bootstrap

//     should display all artists

//     random() to generate "Artist Spotlight" and is new every refresh
