$(function () {
    var $btn = $('.lottery-bg');
    var clickfunc = function () {
        var data = [1, 2, 3, 4, 5, 6, 7, 8];
        data = data[Math.floor(Math.random() * data.length)];
        switch (data) {
            case 1:
                rotateFunc(1, 0);
                break;
            case 2:
                rotateFunc(2, 45);
                break;
            case 3:
                rotateFunc(3, 90);
                break;
            case 4:
                rotateFunc(4, 135);
                break;
            case 5:
                rotateFunc(5, 180);
                break;
            case 6:
                rotateFunc(6, 225);
                break;
            case 7:
                rotateFunc(7, 270);
                break;
            case 8:
                rotateFunc(8, 325);
                break;
        }
    }
    $("#playbtn").click(function () {
        clickfunc();
    });

    var all_word = [
        {
            bigText: "watermelon",
            text: "西瓜",
            src: "../sourcesImage/fruit1.png",
            bc: "rgb(121, 191, 88)"
        },
        {
            bigText: "wax-apple",
            text: "蓮霧",
            src: "../sourcesImage/fruit2.png",
            bc: "rgb(154, 100, 167)"
        },
        {
            bigText: "banana",
            text: "香蕉",
            src: "../sourcesImage/fruit3.png",
            bc: "rgb(233, 76, 83)"
        },
        {
            bigText: "grape",
            text: "葡萄",
            src: "../sourcesImage/fruit4.png",
            bc: "rgb(141, 209, 230)"
        },
        {
            bigText: "papaya",
            text: "木瓜",
            src: "../sourcesImage/fruit5.png",
            bc: "rgb(239, 129, 53)"
        },
        {
            bigText: "pineapple",
            text: "鳳梨",
            src: "../sourcesImage/fruit6.png",
            bc: "rgb(238, 132, 178)"
        },
        {
            bigText: "durian",
            text: "榴槤",
            src: "../sourcesImage/fruit7.png",
            bc: "rgb(92, 145, 205)"
        },
        {
            bigText: "strawberry",
            text: "草莓",
            src: "../sourcesImage/fruit8.png",
            bc: "rgb(245, 239, 112)"
        }
    ];
    
    var x;
    var init_word = function () {
        var $cw = $('<div class="jump" style="width: 450px; height: 450px; border-radius: 10px; text-align: center; border: 5px solid white; position: absolute; font-family: cwTeXYen; left: 450px; top: 100px;"><div class="jumpNum"><img src="../sourcesImage/starNo.png" alt="" class="star" style="position: absolute; right: 10px; top: 10px;"><h1 class="jumpBigText" style="margin: 0px; padding: 10px;"></h1><h2 class="jumpText"></h2><img class="fruitPic" style="width: 300px;"><p class="jumpClose" style="position: absolute; bottom: 3px; left: 10px">關閉視窗</p></div></div>');
        
        $cw.find('.jumpNum').css("background-color", all_word[x].bc).css("height", "450px").css("border-radius", "5px");
        $cw.find('.jumpBigText').text(all_word[x].bigText);
        $cw.find('.jumpText').text(all_word[x].text);
        $cw.find('.fruitPic').attr('src', all_word[x].src);

        $('#main').after($cw);
    };

    var rotateFunc = function (awards, angle) {
        $btn.stopRotate();
        $btn.rotate({
            angle: 0,
            duration: 5000,
            animateTo: angle + 1440,
            callback: function () {
                isture = false;
                for(var i = 1; i <= 8; i++) {
                    if (awards == i) {
                        x = i - 1;
                    };
                }
                init_word();
            }
        });
    };
    
    var toggle = true;
    $('body').on('click', '.star', function(){
        if (toggle) {
            $(".star").attr("src","../sourcesImage/starYes.png");
            toggle = false;
        } else {
            $(".star").attr("src","../sourcesImage/starNo.png");
            toggle = true;
        }
    });
    
    $('body').on('click', '.jumpClose', function(){
        $(".jump").remove();
    });
    
    $('body').on('mouseover', '.jumpClose', function(){
        $(this).css("cursor", "Pointer");
    });
    
    $('body').on('mouseover', '.star', function(){
        $(this).css("cursor", "Pointer");
    });
});
