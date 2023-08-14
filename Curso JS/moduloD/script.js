function Load(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("img");
    var title = document.getElementById("main-title");
    var date = new Date();
    var hora = date.getHours();
    
    if(hora >= 5 && hora < 12){
        title.innerHTML = "Bom dia";
        msg.innerHTML = `Bom dia agora são ${hora} horas`
        img.style.background = "#FAF80B";
        document.body.style.background = "#F0E800";
        
    }

    else if(hora >= 12 && hora <= 18){
        title.innerHTML = "Boa tarde";
        msg.innerHTML = `Boa tarde agora são ${hora} horas`
        img.style.background = "#E3840B";
        document.body.style.background = "#F0B900";
        console.log(title); 
    }

    else{
        title.innerHTML = "Boa noite";
        msg.innerHTML = `Boa noite agora são ${hora} horas`
        img.style.background = "#000000";
        document.body.style.background = "#002633";
    }
}