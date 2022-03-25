let featuredGames = {
    0:{
        name: "Space Wars",
        type: ["steam", "xboxOne"],
        img: "./image/sort-me-cover.jpg"
    },
    1:{
        name: "Return of the Cars",
        type: ["steam", "uaplay"],
        img: "./image/sort-nfs-cover.jpg"
    },
    2:{
        name: "Planes of Gloria",
        type: ["xboxOne", "uaplay"],
        img: "./image/sort-Planes-of-Gloria.jpg"
    },
    3:{
        name: "Earth Wars: History",
        type: ["origin", "ps4"],
        img: "./image/sort-cod-cover.jpg"
    },
    4:{
        name: "The Warrior 3",
        type: ["origin", "ps4"],
        img: "./image/sort-the-witcher.jpg"
    },
    5:{
        name: "Life and Struggle",
        type: ["origin","steam", "uaplay"],
        img: "./image/sort-gta-poster.jpg"
    },
};

function funcShow(){

    let showGames = document.querySelector('.featured-games');

    for(let i=0; i<Object.keys(featuredGames).length; i++){
        let name = featuredGames[i]['name'];
        let img = featuredGames[i]['img'];
        let typeJoin = featuredGames[i]['type'].join(' ');

        showGames.innerHTML += `<div class='featured-gameBox'>
                                    <div class="featuredGame-img">
                                        <img src="${img}" alt="${name}">
                                        </div>
                                        <div class="featured-textDiv">
                                        <div class="featured-title">${name}</div>
                                        <div class="featured-text">${typeJoin}</div>
                                        </div>
                                    <div class="featuredGame-hover"></div>
                                        
                                </div>`;    
    }
}

funcShow()
