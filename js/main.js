
if (Modernizr.boxshadow){
	console.debug("boxshadow soportado");
}
else{
	console.debug("boxshadow NO soportado");
} 


if (Modernizr.borderradius){
	console.debug("borderradius soportado");
}else{
	console.debug("borderradius NO soportado");
}
/*********************/
/* Modernizr para JS */
/*********************/
Modernizr.load({
	test: Modernizr.geolocation,
	yep : 'js/geo-extras.js',
	nope: 'js/geo-polyfill.js',
	both: 'js/migeolocalizacion.js',
	complete: function(){
		inicializar_geolocalizacion();
	}
});

//Primero busca la función en las propias librerías y si no lo encuentra ejecutaría éste
function inicializar_geolocalizacion(){
	console.info('Geolocalizando gracias al polyfill');
}