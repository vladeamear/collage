function getRandomInt (min, max) { return Math.floor(min + Math.random() * (max + 1 - min)); }

function getRandomArbitrary (min, max) { return Math.random() * (max - min) + min; }

function getRounded (n) { return Math.round(100*n) / 100;}

// function rotateAngle (angle) { return angle * Math.PI / 180; }

function addpics(){
    var 
        canvas  = document.getElementById("canvas"),
        ctx     = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var from = 'test1/';

    ctx.save();
        var
            // angle       = 72,
            angle       = getRandomInt(0,90),
            // angle_rad   = rotateAngle(angle),
            cos         = getRounded(Math.cos(angle)),
            sin         = getRounded(Math.sin(angle)),
            img         = new Image(),
            posy        = 0,
            posx        = 500,
            prcnt       = 0;
        img.src = from + getRandomInt(1,7).toString() + '.png';
        // img.src = '10.png';
        if (img.width < img.height){
            if (img.height < canvas.height){
                prcnt = getRounded(img.height / (canvas.height*2));
            } else {
                prcnt = getRounded(canvas.height / (img.height*2));
            }
        } else {
            if (img.width < canvas.height){
                prcnt = getRounded(canvas.height / (img.width*2));
            } else {
                prcnt = getRounded(img.width / (canvas.height*2));
            }
        }
        var 
            height1 = Math.trunc(sin*img.width*prcnt),
            height2 = Math.trunc(cos*img.height*prcnt);

        if ((height2 < 0) & (height1 >= 0)){
            var h = Math.abs(height1)+Math.abs(height2);
            if (h > canvas.height/2){
                posy = getRandomInt(h, canvas.height);
            } else {
                posy = getRandomInt(h, canvas.height-h);
            }
        } else if ((height2 >= 0) & (height1 < 0)){
            var h = Math.abs(height1)+Math.abs(height2);
            if (h > canvas.height/2){
                posy = getRandomInt(0, cavas.height-h);
            } else {
                posy = getRandomInt(h, canvas.height-h);
            }
        } else if ((height1 < 0) & (height2 <= 0)){
            posy = getRandomInt(Math.abs(height2),canvas.height-Math.abs(height1));
        } else {
            posy = getRandomInt(Math.abs(height1),canvas.height-Math.abs(height2));
        }
        ctx.setTransform(cos,-sin,sin,cos,posx,posy);
        ctx.scale(prcnt,prcnt);
        ctx.drawImage(img, 0, 0);
    ctx.restore();
    document.getElementById('height1').value = height1;
    document.getElementById('height2').value = height2;
    document.getElementById('width').value = img.width;
    document.getElementById('height').value = img.height;
    document.getElementById('posy').value = posy;
    document.getElementById('prcnt').value = prcnt;
    document.getElementById('angle').value = angle;
    
}