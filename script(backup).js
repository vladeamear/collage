function getRandomInt (from, to) { return Math.floor(Math.random() * to) + from; }

function getRandomArbitrary (min, max) { return Math.random() * (max - min) + min; }

function rotateAngle (angle) { return angle * Math.PI / 180; }

function addpics(){
    var 
        img     = new Image(),
        canvas  = document.getElementById("canvas"),
        ctx     = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var from = 'test1/';

    ctx.save();
    for(var i = 0; i <= 5; i++){
        var
            prcnt       = getRandomArbitrary(1,2),
            angle       = getRandomInt(0,90),
            angle_rad   = rotateAngle(angle),
            cos         = Math.cos(angle_rad),
            sin         = Math.sin(angle_rad);
        img.src = from + getRandomInt(1,7).toString() + '.png';
        var
            // posx        = getRandomInt(prcnt*sin*img.height,prcnt*sin*img.width),
            // posy        = getRandomInt(300,500);
            posx        = 500,
            posy        = 500;
        ctx.setTransform(cos,-sin,sin,cos,posx,posy);
        ctx.scale(prcnt,prcnt);
        ctx.drawImage(img, 0, 0);
    }
    ctx.restore();
    
}