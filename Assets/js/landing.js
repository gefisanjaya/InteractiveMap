// init animation queue
function initAnimation() {
    for(var n = 1; n < 13; n++) {
        var _durationIn = randInteger(1500, 3000);
        var _leftIn = randInteger(1, 8); //vw
        var _durationAnimation = _durationIn;
        var _leftAnimation = _leftIn + randInteger(1, 5); //vw
        var _durationOut = _durationIn;
        var _leftOut = _leftAnimation + randInteger(1, 2); //vw
        setTimeout(cloudMaker, randInteger(1000, 10000), n, _durationIn, _leftIn, _durationAnimation, _leftAnimation, _durationOut, _leftOut);
    }
    }

    let isInDialog = false;
    let lastClick = 0;
    document.addEventListener('click', function() {
    var now = performance.now();
    });

    (function(){
    function id(v){return document.getElementById(v); }
    function loadPage() {
        initCss();
        var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0;
            tot = img.length;

        function imgLoaded(){
            c += 1;
            var perc = ((100/tot*c) << 0) +"%";
            prog.style.width = perc;
            stat.innerHTML = "Loading "+ perc;
            if(c===tot) return doneLoading();
        }
        function doneLoading(){
            In.start();
            setTimeout(function(){ 
                ovrl.style.opacity = 0;
                setTimeout(function() {
                    initAnimation();
                    ovrl.style.display = "none";
                }, 1200);
                
            }, 2000);
        }
        for(var i=0; i<tot; i++) {
            var tImg     = new Image();
            tImg.onload  = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src     = img[i].src;
        }    
    }
    document.addEventListener('DOMContentLoaded', loadPage, false);
        }());