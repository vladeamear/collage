var prev = [[150,150,1,0.998,-0.066,'11.png']];

function roundabit(n){
    return Math.round(n*1000)/1000;
}

function SaveNAdd(){
    var
        posx    = document.getElementById("posx").value,
        posy    = document.getElementById("posy").value,
        angle   = document.getElementById("angle").value,
        size    = document.getElementById("size").value,
        cos     = roundabit(Math.cos(angle)),
        sin     = roundabit(Math.sin(angle)),
        k       = 0,
        src     = '',
        pics    = document.getElementsByName("picture");
    
    for (var i = 0; i < pics.length; i++){
        if (pics[i].checked){ src = pics[i].value; }
    }

    var old = [posx,posy,size,cos,sin,src];

    for(var i=0; i < prev.length; i++){
        for(var j=0; j < prev[i].length; j++){
            if(prev[i][j] === old[j]){ k++; }
        }
        if(k !== prev[i].length){ k = 0; }
    }
    if (k == 0){ old = prev.push(old); }
}

function addoncanvas(posx,posy,size,cos,sin,src,ctx){
    var img = new Image();
    img.src = src;
    
    ctx.save();
    ctx.transform(size*cos,-sin*size,size*sin,size*cos,posx,posy);
    ctx.drawImage(img, 0, 0);
    ctx.restore();
}

function addpics(){
    var 
        posx    = document.getElementById("posx").value,
        posy    = document.getElementById("posy").value,
        angle   = document.getElementById("angle").value,
        size    = document.getElementById("size").value,
        cos     = roundabit(Math.cos(angle)),
        sin     = roundabit(Math.sin(angle)),
        src     = '',
        pics    = document.getElementsByName("picture"),
        canvas  = document.getElementById("canvas"),
        ctx     = canvas.getContext("2d");
    
    for (var i = 0; i < pics.length; i++){
        if (pics[i].checked){ src = pics[i].value; }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < prev.length; i++){
        addoncanvas(prev[i][0],prev[i][1],prev[i][2],prev[i][3],prev[i][4],prev[i][5],ctx);
    }

    addoncanvas(posx,posy,size,cos,sin,src,ctx);   

    document.getElementById("helper").value = prev.length;
}