// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var albums = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        albums.tracks = tracks;
    }
    return albums;
}
// Calling three functions and creating three variables with different values
var album1 = make_album("Atif Aslam", "Meri Kahani");
var album2 = make_album("Ali Zafar", "Masty");
var album3 = make_album("Aima Baig", "Long Time", 20);
// print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
