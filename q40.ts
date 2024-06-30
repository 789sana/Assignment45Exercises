// Define the make_album function
function make_album(artist_name:string,album_title:string,tracks?:number){
    let albums:{artist:string,title:string,tracks?:number} ={
        artist:artist_name,
        title:album_title
    };
    if(tracks !== undefined){
        albums.tracks=tracks;
    }
    return albums;
}
// Calling three functions and creating three variables with different values
let album1=make_album("Atif Aslam","Meri Kahani")
let album2=make_album("Ali Zafar","Masty")
// Calling a make_album function with 3rd parameter
let album3=make_album("Aima Baig","Long Time",20)

// print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);


