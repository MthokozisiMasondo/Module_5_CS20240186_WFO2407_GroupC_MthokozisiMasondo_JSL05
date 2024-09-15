// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
// Use the map() function to create playlists for each Guardian
   const playlist = document.getElementById('playlists')
    playlist.classList.add('playlist')

        Object.keys(guardians).forEach(guardian => {
        const favouriteGenre = guardians[guardian] 
        const songSelection = songs.filter(song => 
            song.genre === favouriteGenre)


            const guardianDiv = document.createElement('div')
            // guardianDiv.classList.add('song')
        
            const guardianName = document.createElement('h1')
            guardianName.textContent = `${guardian}'s Playlist`
            guardianDiv.appendChild(guardianName)

            songSelection.forEach(song => {
                const songInfo = document.createElement('ul')
                songInfo.classList.add('song-title')
                songInfo.textContent = `${song.title} by ${song.artist}`
                guardianDiv.appendChild(songInfo)
            })

            playlist.appendChild(guardianDiv)
    })  
    
}


// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


