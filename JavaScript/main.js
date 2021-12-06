$(document).ready(function(){

    //para que se abra con el primer enlace abierto
    $('ul.tabs li a:first').addClass('active');

    //llamamos a todos los articulos y los ocultamos
	$('.secciones article').hide();

    //llamamos los articulos y mostramos solo el primero
	$('.secciones article:first').show();

    //cuando damos click remueve clase activo y se la pone al que le damos click para mostrarlo
	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

        //para que apararezca el contenido del que activamos
		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});



});


