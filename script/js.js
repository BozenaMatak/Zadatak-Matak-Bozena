var Images= new Array('slike/0FsZlOWQ.jpg', 'slike/05hyj3Qw.jpg','slike/9yo-5ngw.jpg','slike/CB4-bq9Q.jpg','slike/cqmNqloQ.jpg', 'slike/QQqMqazw.jpg', 'slike/W382LLCg.jpg', 'slike/RDGMeAng.jpg','slike/wZEzYMLw.jpg')
    var i = 0;     
    $( "#lijevo" ).click(function() {
        $( ".image" ).animate({
                transform: "-185px",
                left: "-185px"
            }, 1000, function(){
                if($(".image:animated").length === 0){   //ovaj nam uvjet služi za to da bi se ova obavila samo jednom
                    i++;
                    if(i==9){
                        i=0;
                    }
                    
                    var elem = document.getElementsByClassName("image")[0];
                    elem.parentElement.removeChild(elem);
                    var img = document.createElement('img'); 
                    img.src =  Images[i]; 
                    document.getElementsByClassName("row")[1].appendChild(img); 
                    document.getElementsByTagName("img")[9].className += "image";
                    console.log(i)
                    for(let a= 0;a < 10; a++){
                        document.getElementsByTagName("img")[a].removeAttribute("style")
                    }
                }
            }); 


    });
    $( "#desno" ).click(function() {
        $( ".image" ).animate({
                transform: "-185px",
                right: "-185px"
            }, 1000, function(){
                if($(".image:animated").length === 0){   //ovaj nam uvjet služi za to da bi se ova obavila samo jednom
                    if(i==0){
                        i = 9;
                    }
                    i--;
                    var elem = document.getElementsByClassName("image")[9];
                    elem.parentElement.removeChild(elem);
                    var img = document.createElement('img'); 
                    img.src =  Images[i]; 
                    document.getElementsByClassName("row")[1].prepend(img); 
                    document.getElementsByTagName("img")[0].className += "image";
                    
                    for(let a= 0;a < 10; a++){
                        document.getElementsByTagName("img")[a].removeAttribute("style")
                    }
                }
            }); 


    });

    $( "#lijevo" ).click(function() {
        $( ".image1" ).animate({
                transform: "-185px",
                left: "-185px"
            }, 1000, function(){
                if($(".image1:animated").length === 0){   //ovaj nam uvjet služi za to da bi se ova obavila samo jednom
                    
                    var elem1 = document.getElementsByClassName("image1")[0];
                    elem1.parentElement.removeChild(elem1); 
                    var img = document.createElement('img'); 
                    img.src =  Images[i];
                    
                    document.getElementsByClassName("row")[3].appendChild(img); 
                    document.getElementsByTagName("img")[19].className += "image1";
                    for(let a= 0;a < 10; a++){
                        document.getElementsByClassName("image1")[a].removeAttribute("style")
                    }
                }
            });                         
    });

    $( "#desno" ).click(function() {
        $( ".image1" ).animate({
                transform: "-185px",
                right: "-185px"
            }, 1000, function(){
                if($(".image1:animated").length === 0){   //ovaj nam uvjet služi za to da bi se ova obavila samo jednom
                    
                    var elem = document.getElementsByClassName("image1")[9];
                    elem.parentElement.removeChild(elem);
                    var img = document.createElement('img'); 
                    img.src =  Images[i]; 
                    document.getElementsByClassName("row")[3].prepend(img); 
                    document.getElementsByTagName("img")[10].className += "image1";
                    
                    for(let a= 0;a < 10; a++){
                        document.getElementsByClassName("image1")[a].removeAttribute("style")
                    }
                }
            }); 


    });