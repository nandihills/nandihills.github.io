$(document).ready(function() { 


//MENU SUPERIOR DIREITO

function mouseIn(){
                $(this).animate({"height":80},300);
                $(this).children('div').children('div').jKit('show', { 'delay': '0', 'speed': 'slow' });
            }

            function mouseOut(){
                $(this).animate({"height":70},300);
                $(this).children('div').children('div').jKit('hide', { 'delay': '0', 'speed': 'slow' });
            }
            $("div.item").hoverIntent(mouseIn,mouseOut);



//MENU PRINCIPAL ESQUERDA

var sizes={walks:250, jeep:140, sightseeing:140, birdwatching:40, geotour:40, activities:140, dolphinandhalewatching:40, packs:170}
var color={walks:"#f69f2c",jeep:"#c2c434",sightseeing:"#1d7745",birdwatching:"#f69f2c",geotour:"#c2c434" ,activities:"#1d7745" ,dolphinandwhalewatching:"#f69f2c" ,packs:"#c2c434"}
    
    var config = {  
        over: menuOver, // function = onMouseOver callback (REQUIRED)    
        timeout: 50, // number = milliseconds delay before onMouseOut    
        out: menuOut // function = onMouseOut callback (REQUIRED)    
    };

    function menuOver(){
        name=$(this).attr('id');
        $(this).animate({
                        backgroundColor:color[name],
                        opacity:0.95,
                        height: sizes[name]
                    },300 );
    }

    function menuOut(){
        $(this).animate({
                        backgroundColor:"#000",
                        opacity:0.8,
                        height: 40
                    },300
                    );

    }

    $('#walks').hoverIntent(config);    
    $('#jeep').hoverIntent(config);
	$('#sightseeing').hoverIntent(config);
	$('#birdwatching').hoverIntent(config);
	$('#geotour').hoverIntent(config);
	$('#activities').hoverIntent(config);
	$('#dolphinandwhalewatching').hoverIntent(config);
	$('#packs').hoverIntent(config);

//POR OS DIVS DO MENU SUPERIOR COM LINK IGUAL AO <A>




//POPUP PARA AS RESERVAS
$('#btn_reservations').click(function(e) {
//cancela o comportamento padrão do link
e.preventDefault();

//armazena o atributo href do link
var id = $(this).children('a').attr('href');

//armazena a largura e a altura da tela
var maskHeight = $(document).height();
var maskWidth = $(window).width();

//Define largura e altura do div#mask iguais ás dimensões da tela
$('#mask').css({'width':maskWidth,'height':maskHeight});

//efeito de transição
//$('#mask').fadeIn(1000);
//$('#mask').fadeTo("slow",0.8);

//armazena a largura e a altura da janela
var winH = $(window).height();
var winW = $(window).width();
//centraliza na tela a janela popup
$(id).css('top',  '80px');
$(id).css('left', '23px');
//efeito de transição
$(id).fadeIn(2000);
$('.mapwindow').hide();
$('.contactwindow').hide();
});

//se o botãoo fechar for clicado
$('.window .close').click(function (e) {
//cancela o link
e.preventDefault();
$('#mask, .window').hide();
});

//se div#mask for clicado
$('#mask').click(function () {
$(this).hide();
$('.window').hide();
});


//POPUP PARA O MAPA
$('#btn_map').click(function(e) {
//cancela o comportamento padrão do link
e.preventDefault();

//armazena o atributo href do link
var idm = $(this).children('a').attr('href');

//armazena a largura e a altura da tela
var maskHeight = $(document).height();
var maskWidth = $(window).width();

//Define largura e altura do div#mask iguais ás dimensões da tela
$('#mapmask').css({'width':maskWidth,'height':maskHeight});

//efeito de transição
//$('#mask').fadeIn(1000);
//$('#mask').fadeTo("slow",0.8);

//armazena a largura e a altura da janela
var winH = $(window).height();
var winW = $(window).width();
//centraliza na tela a janela popup
$(idm).css('top',  '80px');
$(idm).css('left', '120px');
//efeito de transição
$(idm).fadeIn(2000);
$('.window').hide();
$('.contactwindow').hide();
});

//se o botãoo fechar for clicado
$('.mapwindow .close').click(function (e) {
//cancela o link
e.preventDefault();
$('#mapmask, .mapwindow').hide();
});

//se div#mask for clicado
$('#mapmask').click(function () {
$(this).hide();
$('.mapwindow').hide();
});



//POPUP PARA OS CONTACTOS
$('#btn_contacts').click(function(e) {
//cancela o comportamento padrão do link
e.preventDefault();

//armazena o atributo href do link
var idc = $(this).children('a').attr('href');

//armazena a largura e a altura da tela
var maskHeight = $(document).height();
var maskWidth = $(window).width();

//Define largura e altura do div#mask iguais ás dimensões da tela
$('#contactmask').css({'width':maskWidth,'height':maskHeight});

//efeito de transição
//$('#mask').fadeIn(1000);
//$('#mask').fadeTo("slow",0.8);

//armazena a largura e a altura da janela
var winH = $(window).height();
var winW = $(window).width();
//centraliza na tela a janela popup
$(idc).css('top',  '80px');
$(idc).css('left', '217px');
//efeito de transição
$(idc).fadeIn(2000);
$('.window').hide();
$('.mapwindow').hide();
});

//se o botãoo fechar for clicado
$('.contactwindow .close').click(function (e) {
//cancela o link
e.preventDefault();
$('#contactmask, .contactwindow').hide();
});

//se div#mask for clicado
$('#contactmask').click(function () {
$(this).hide();
$('.contactwindow').hide();
});




//CHAMA O CHOSEN PARA OS SELECTS DO FORMULARIO
          $(".activit").chosen();
          $(".hotels").chosen();
          $(".adls").chosen();
          $(".chds").chosen();
          $(".chzn-select-deselect").chosen({allow_single_deselect:true});

//


            


});
            

