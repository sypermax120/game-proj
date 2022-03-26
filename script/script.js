
let countNav = 0;
$( ".header-menu-dots" ).click(function() {
    if(countNav%2==0){
        // $( "header" ).addClass('header-nav-menu');
        $( ".header-menu" ).addClass('header-nav-menu');
        

    }else{
        // $("header" ).removeClass("header-nav-menu");
        $( ".header-menu" ).removeClass('header-nav-menu');
    }
    countNav+=1;

  });

  window.addEventListener("resize", myFunction);
  function myFunction() {

    if(window.innerWidth>1200){
        // $("header" ).removeClass("header-nav-menu");
        $( ".header-menu" ).removeClass('header-nav-menu');
        countNav = 0
    }
    if(window.innerWidth>300){
        $( ".gameBox-img img" ).css({"width": `${250}`});
    }
    if(window.innerWidth<300){
        $( ".gameBox-img img" ).css({"width": `${window.innerWidth-50}`});
    }
    if(window.innerWidth<450){
        $( ".blog-games img" ).css({"width": `${window.innerWidth-50}`});
    }
    if(window.innerWidth>450){
        $( ".blog-games img" ).css({"width": `${400}`});
    }
    
    // console.log(window.innerWidth)
  }

myFunction()
