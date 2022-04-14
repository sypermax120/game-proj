
function myFunc(value){

    let up = "up"+value;
    document.getElementById(up).style.WebkitTransitionDuration='1s';
    document.getElementById(up).style.transform = 'translate(-20%, -40%) rotate(-45deg)';
    document.getElementById("result").style.zIndex = "4"
    document.getElementById("result").style.opacity = "0.9"
    
    if(field[value]=='banana'){
        let timerId = setTimeout(function() {
            document.getElementById("result").style.backgroundImage = "url('./image/image_game_find/fail.png')";
            console.log(value, 'FAIL')
        }, 1000);
    }else{
        let timerId = setTimeout(function() {
            document.getElementById("result").style.backgroundImage = "url('./image/image_game_find/win.png')";
            console.log(value, 'WIN')
        }, 1000);
    }

    let timerId = setTimeout(function() {
        document.getElementById("bl1").style.display = "none";
        document.getElementById("bl2").style.display = "none";
        document.getElementById("bl3").style.display = "none";
        document.getElementById("button").style.display = "block";
        document.getElementById("restart").style.display = "block";
        
        document.getElementById("result").style.backgroundImage = "none";
        document.getElementById(up).style.transform = 'translate(0%, 0%) rotate(0deg)';
        document.getElementById("result").style.zIndex = "1"

        document.getElementById("game_field").style.backgroundImage = "none"


      }, 2000);




    
}

function playFunc(){
    document.getElementById("game_field").style.backgroundColor = "#ffcb7f";
    document.getElementById("button").style.display = "none";
    document.getElementById("restart").style.display = "none";
    document.getElementById("bl1").style.display = "block";
    document.getElementById("bl2").style.display = "block";
    document.getElementById("bl3").style.display = "block";

    field = {}
    dishes = ["banana", "cake", "pancake"]
    count = 0

    while(count < 3){
        rand = Math.floor(Math.random() * (3 - 1 + 1 )) + 1;

        if(!(rand in field)){
            field[rand] = dishes[count]
            var ur = "url('./image/image_game_find/" + field[rand] + ".png')"
            var st = 'd'+rand
            document.getElementById(st).style.backgroundImage = ur;
            count+=1
        }
    }

    let timerId = setTimeout(function() {
        document.getElementById("game_field").style.backgroundImage = "url('./image/image_game_find/cat.png')";

    }, 1000);
    
    console.log(field)

}
