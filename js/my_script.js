    //здесь будет расположен весь наш код    

   /* $(document).ready(function() {
        $("#gallery a").click(function(evt){
            evt.preventDefault();
            var imgPath = $(this).attr('href');
            var oldImg = $("#photo__tiberkul img");
            var newImg = $("<img src='" + imgPath + "'>");
            newImg.hide();
            $("#photo__tiberkul").prepend(newImg);
            newImg.fadeIn(1000);
            oldImg.fadeOut(1000, function(){
            this.remove();	
            });
        }); 
        $("#gallery a:first").click();     
        })*/

/*$(document).ready(function () {
    $('#gallery a').click(function(e) {
        if($('#photo__tiberkul').attr('src')!==$(this).attr('href')) {
            $('#photo__tiberkul').attr('src', $(this).attr('href')).fadeIn(1000);
        }
        e.preventDefault();
    })
})  */

$(document).ready(function () {
    $('.small a').click(function(e) {
        if($('.big img').attr('src')!==$(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        }
        e.preventDefault();
    });

    /*$('.button').click(function() {
        $('.gallary').slideToggle(500);
        if($('.button').text()=='-'){
            $('.button').text('+');
        } else {
            $('.button').text('-');
        }    
        });

        $('.small a img').click(function() {
            $(this).fadeTo(500,0.6).css({
                'border': '1px solid black'
            })
        });*/
    })

   /*let buttonHeader = document.querySelector('.header__button');
   let buttonPopUp = document.querySelector('.entrance__button');
   let blockEntrance = document.querySelector('.entrance');
   
   buttonHeader.addEventListener('click', function (e) {
    blockEntrance.classList.toggle ('visible');
   });

   buttonPopUp.addEventListener ('click', function (e) {
    blockEntrance.classList.toggle('visible');
   });*/


