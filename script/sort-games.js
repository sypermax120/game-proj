let allGames = {
    0:{
        name: "Space Wars",
        text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
        type: ["steam", "xboxOne"],
        img: "./image/sort-me-cover.jpg"
    },
    1:{
        name: "Return of the Cars",
        text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
        type: ["steam", "uaplay"],
        img: "./image/sort-nfs-cover.jpg"
    },
    2:{
        name: "Planes of Gloria",
        text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
        type: ["xboxOne", "uaplay"],
        img: "./image/sort-Planes-of-Gloria.jpg"
    },
    3:{
        name: "Earth Wars: History",
        text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
        type: ["origin", "ps4"],
        img: "./image/sort-cod-cover.jpg"
    },
    4:{
        name: "The Warrior 3",
        text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
        type: ["origin", "ps4"],
        img: "./image/sort-the-witcher.jpg"
    },
    5:{
        name: "Life and Struggle",
        text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
        type: ["origin","steam", "uaplay"],
        img: "./image/sort-gta-poster.jpg"
    },
    6:{
        name: "Gloria Soccer 2018",
        text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
        type: ["origin", "ps4"],
        img: "./image/sort-soccer-poster.jpg"
    },
    7:{
        name: "Egypt and World",
        text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
        type: ["steam", "ps4"],
        img: "./image/sort-ew-cover.jpg"
    }
}

function funcSort(arg='all'){

    $( ".categorized-games div" ).removeClass('games-active');

    let games = document.querySelector('.sorted-games');
    games.innerHTML = ''

    for(let i=0; i<Object.keys(allGames).length; i++){
        let name = allGames[i]['name'];
        let text = allGames[i]['text'];
        let img = allGames[i]['img'];
        let type = allGames[i]['type'];
        let typeJoin = allGames[i]['type'].join(' ');
        
        if(arg=='all'){
            $( `.${arg}` ).addClass('games-active');
            games.innerHTML += `<div class='gameBox'>
                                    <div class="gameBox-img">
                                        <img src="${img}" alt="${name}">
                                    </div>
                                    <div class="gameBox-textDiv">
                                        <div class="gameBox-title">${name}</div>
                                        <div class="gameBox-text">${text}</div>
                                    </div>
                                </div>`;
        }
        else{
            $( `.${arg}` ).addClass('games-active');
            type.forEach((element) => {
                if(element==arg){
                    games.innerHTML += `<div class='gameBox'>
                                            <div class="gameBox-img">
                                                <img src="${img}" alt="${name}">
                                            </div>
                                            <div class="gameBox-textDiv">
                                                <div class="gameBox-title">${name}</div>
                                                <div class="gameBox-text">${text}</div>
                                            </div>
                                        </div>`;
                }
            });
        }
    }
};

funcSort()


