//PRUEBA DE COMMIT
//DEL BRANCH V5

// VARIABLES PARA PARAMETRIZAR



var VAR_USA_PEDIDOEXTERNO		=	EXT_VAR_USA_PEDIDOEXTERNO;
var VAR_USA_CANTBULTOS  		=	true;
var VAR_USA_COMPLEJIDAD  		=	EXT_VAR_USA_COMPLEJIDAD;
var VAR_USA_SERVICIO  			=	EXT_VAR_USA_SERVICIO;
var VAR_USA_PRECLASIFICACION  	=	EXT_VAR_USA_PRECLASIFICACION;
var VAR_USA_TIPOVEHICULO  		=	EXT_VAR_USA_TIPOVEHICULO;
var VAR_USA_NEGOCIO_EN_TABLA	=	EXT_VAR_USA_NEGOCIO_EN_TABLA;
var VAR_USA_NOMBRE_EN_TABLA		=	EXT_VAR_USA_NOMBRE_EN_TABLA;


var INDICE_CONTROL_Punto	=	  0;
var MINCHARSSUGEST          =     2;
var vAnchoLinea             =     3;
var vLatInicio              =     EXT_VAR_LATINICIO;    //-34.8785578;
var vLongInicio             =     EXT_VAR_LONGINICIO;   //-56.0788487;
var vZoom                   =     EXT_VAR_vZOOM;        //13
var vPoligonoColor          =     '#FF0000';
var vPoligonoFillColor      =     '#FF0000';
var vANCHOLABEL_1           =     40;
var vANCHOLABEL_2           =     70;

var URL_wsUrlLinkViewPedido = 	  EXT_VAR_URLLINKVIEWPEDIDO;

var URL_wsUpdPedidoLocation = 	  EXT_VAR_wsUpdPedidoLocation;
var URLZONAS                =     EXT_VAR_URLZONAS;         //'http://10.211.55.9/SoyDeliveryU11_New1.NetEnvironment/awsgetzonaskml.aspx';
var URLZONASMANUAL          =     EXT_VAR_URLZONASMANUAL;   //"http://10.211.55.9/SoyDeliveryU11_New1.NetEnvironment/awsgetzonas.aspx";
var URLGETPuntoS           	=     EXT_VAR_URLGETPuntoS;     //"http://10.211.55.9/SoyDeliveryU11_New1.NetEnvironment/wsgetpuntos.aspx";
var URLGETORIGENES          =     EXT_VAR_URLGETORIGENES;   //"http://10.211.55.9/SoyDeliveryU11_New1.NetEnvironment/awsgetorigenes.aspx";
var URLSETRUTAS             =     EXT_VAR_URLSETRUTAS;      //"http://10.211.55.9/SoyDeliveryU11_New1.NetEnvironment/awssetrutas.aspx";
var URLSETPOLIGONOS         =     EXT_VAR_URLSETPOLIGONOS;  //"http://10.211.55.9/SoyDeliveryU11_New1.NetEnvironment/awssetpoligono.aspx";
var URLGETPOLIGONOS         =     EXT_VAR_URLGETPOLIGONOS;  //"http://10.211.55.9/SoyDeliveryU11_New1.NetEnvironment/awsgetpoligonos.aspx";
var CARGAR_ZONAS_AL_INICIO  =     EXT_CARGAR_ZONAS_AL_INICIO;
var vMAXHEIGHT_RUTA         =     EXT_VAR_MAXHEIGHT_RUTA;
var vMAXHEIGHT_MAPA         =     EXT_VAR_MAXHEIGHT_MAPA;
var vCOLOR_GRILLA_PAR       =     "snow";
var vCOLOR_GRILLA_IMPPAR    =     "white";
var vecDetalles				=		[];

var VAR_TIEMPOS_Y_DISTANCIAS   = EXT_VAR_TIEMPOS_Y_DISTANCIAS;
var VAR_PROVEEDOR_RUTAS   	= EXT_VAR_PROVEEDOR_RUTAS;


var iconBase = EXT_VAR_ICONBASE; //'file:///Users/pablogeymonat/Documents/MapasSoyDelivery/images/';

var TOPE_PUNTOS_SERV_RUTA     = 23;
var vCOLORFONOSPOLY_X_DEFECTO = "#1E90FF";
var vCOLORBORDEPOLY_X_DEFECTO = "#1E90FF";
var vCOLORCIRCLE_X_DEFECTO 		= "yellow";
var vCOLORBORDECIRCLE_X_DEFECTO = "red";
var vMarcaORIGEN              = "O";
var vMarcaDESTINO             = "D";
var vCLASE_CSS_LABELMARKER    = "labels";
var vSIZE_SVG                 = 25;
var hSIZE_SVG                 = 18;

var vOPACIDADPOLYBORDE        = 0.3;
var vOPACIDADPOLY             = 0.20;
var vVERBOSE = true;
var vecColor = ["#4dd126","#6c92e4","#e46cdd", "#e24a1d", "#e8a441"];
//VARIABLES GLOBALES
var vCOLOR_NO_INCLUIDO = "#F5A9A9";
var tandas = 0;
var map;    //identificador que indica el mapa de google map
//var poligono;

var EDITADO = "0";
var SALVADO = "1"
var vecMarkersPuntos   = []; //some array;
var vecPoligonos        = []; //some array;
var vectorOrigenes      = [];
var verInfoWindow       = false;
var vectorDePuntosJSON = [];
var div_Puntos;
var rutarunning         = false;

var selMarker;
var selectedShape;
var selectedZona;
var numberOfShapes;
var ZonasSistema          = [];
var largoEstimadoLabel    = 50;
var alturaEstimadaLabel   = 20;
var newShapeUlPuntoTiempoArriboTxt        = "";
var newShapeUltId         = 9000;
var DTFechaHoraInicioRuta = EXT_VAR_FECHA_HORA_INI; //"2018-12-18T10:10";
var modoOptimizacion      = false;
var infoWindow;


//** PARA EDITAR EL TEXTO DE LOS OVERLAYS
var editando            = false;
var PLACEHOLDERZONA     = "Nuevo";
var CLASEEDITARZONA     = "labelzonasedit";
var MAXVALUE            = 99999999.9;
var PATHIMAGES          = EXT_VAR_PATHIMAGES; //'file:///Users/pablogeymonat/Documents/MapasSoyDelivery/images';
var ALTOIMGSAVE         = "40px";
var ANCHOIMGSAVE        = "40px";


var vecDireccionServices  = [];
var vecDireccionDisplay   = [];
var numero = 0;
var vVRRutaDirServiceData = [];

var vMARKER_INICIO  = "origen.png";
var vMARKER_FIN     = "destino.png";
var vMARKER_COMUN_BLUE  = "pinazul.png";

var vMARKER_RUTA_RETIRO = "ruta_r.png";
var vMARKER_RUTA_ENTREGA = "ruta_e.png";
var vMARKER_PEND_RETIRO = "pend_r.png";
var vMARKER_PEND_ENTREGA = "pend_e.png";
var vMARKER_NOHAB_RETIRO = "nohab_r.png";
var vMARKER_NOHAB_ENTREGA = "nohab_e.png";

var vMARKER_WHS     = "wh.png";
var vMARKER_WHN     = "wh.png";
var vTRAVEL_MODE    = 'DRIVING';
var esHoraUTC 		= false;

var EXT_MOSTRAR_HORA_EN_RUTA  =  VAR_EXT_MOSTRAR_HORA_EN_RUTA;


var VKEY = EXT_VAR_vKEY; //"AIzaSyAmAcD2utpt3GNw6LlM7cE1PCNUuYq2_I0"

var currentOverlay;

var selecteShapeRuteada;


var vVRutaVisitaFchHorEntrada; //Inicialmente vacio
var vVRutaVisitaFchSalida; //Inicialmente vacio
var vTIEMPOINFOWINDOW = 150000;

var varincluirentregasfueraderutas = false;


var vRUTA;
var vNombreRuta = "";

var semaforo = 0;
var cantsemaforo = 0;



function abrirEnOtraVentana(PedidoId){
	var url = URL_wsUrlLinkViewPedido + "?" + PedidoId;
	window.open(url, '_blank');
}

function esModRuta(){
	if (EXT_VAR_RUTAID ==0)
	{
		return false;
	}
	return true;
}


function getZonaEnUso(){
	if (EXT_VAR_RUTAID != 0){
		return EXT_VAR_RUTAID;
	}else{
		if (selectedShape != undefined){
			return selectedShape.tag;
		}else{
			return 0;
		}
	}
}


function mensajeOK(msg){
  alertify.success(msg);
}

function mensajeError(msg){
  alertify.error(msg);
}


function getLatLongOrigen(){
  msg("***getLatLongOrigen***");
  var latlng;
  var encontre = false;
  for (i=0; (i<vectorDePuntosJSON.length && !encontre); i++){
    var x = vectorDePuntosJSON[i];
    if (x.PuntoZonaId == getZonaEnUso()){
      if (x.Marca == vMarcaORIGEN){
        latlng = new google.maps.LatLng({lat: x.PuntoLat, lng: x.PuntoLong});
        encontre = true;
      }
    }
  }
  return latlng;
}



function  estaPedidoenZona(PedidoId, ZonaId){
	for (i=0; i<vectorDePuntosJSON.length; i++){
		if (vectorDePuntosJSON[i].PedidoId == PedidoId) {
			msg("Incluye pedido PedidoId " + PedidoId + " precedencia " + vectorDePuntosJSON[i].Precedencia );
			vectorDePuntosJSON[i].PuntoZonaId = ZonaId;
		}
	}
}



function calcularOrigenTentativo(){
    msg("***calcularOrigenTentativo***");
    var origenlatlong = null;

    origenlatlong = getLatLongWareHouse();

	//buscar el mas cercano en distancia linea directa
    deltamin = MAXVALUE;
    posSiguiente  = -1;


    for (i=0; i<vectorDePuntosJSON.length; i++){
      if (vectorDePuntosJSON[i].PuntoZonaId == getZonaEnUso()){
	      var x = vectorDePuntosJSON[i];
		  if ((x.Precedencia <= 1) && (x.FlagRuteo == true)){
			  vectorDePuntosJSON[i].PuntoOrden = 1;
			  var latlng0 = origenlatlong;
			  var latlng1 = new google.maps.LatLng({lat: x.PuntoLat, lng: x.PuntoLong});
			  var delta = calcdistancia(latlng0, latlng1);
			  if (delta < deltamin){  //A la minima distancia

				  deltamin      = delta;   //Se queda con la menor
				  posSiguiente  = i;   //Y la posicion siguiente
			  }
		  }

      }
    }




    if (posSiguiente  != -1){
		msg("MARCAR VEC ORI " + posSiguiente);
		vectorDePuntosJSON[posSiguiente].PuntoOrden = 0;
		MarcarOrigen(vectorDePuntosJSON[posSiguiente].PuntoId);
		OrdenarVector(); //Deja el origen al princio
	}else{
		 mensajeError("No se encontro marca origen");
    }
}


function limpiarRutaBoton(){
	iniFlagruteo();
	limpiarRuta();
}


function recalcularRuta(){
	modoOptimizacion = false;
	limpiarRuta();
	iniFlagruteo();
	rutear(true);

}

function rutearBoton(){
	modoOptimizacion = false;
	limpiarRutaBoton();
	iniFlagruteo();
	rutear(true);

}


function buscarpedido(){
	var txtPedidoId = document.getElementById("txtbuscarpedido").value;

	cargarJsonPunto(txtPedidoId);
}

function generarMenuLateral(){
		var buffer = "";
		if (esModRuta()){

			buffer += ' <div class="collapsibleX">Buscar Pedido</div> ';
			buffer += ' <div id = "divbuscarpedido" class="contentX class_zonas" style="background-color: rgb(234, 91, 11)"> ';
			buffer += '	   <span> ';
			buffer += '				<img src = "MapasSoyDeliveryV4/images/lupa.png" class = "imgLupa"> ';
			buffer += '				<input type="text" class="form-control AttributeCheckBox" maxlength = "20" style = "width:170px" placeholder="buscar pedido..." id = "txtbuscarpedido" onblur="buscarpedido()"> ';
			buffer += '	   </span> ';
			buffer += ' </div> ';
			buffer += ' </div> ';
			buffer += ' <div class="collapsibleX">Ruta</div> ';
			buffer += '	<div class="contentX"> ';
			buffer += '	   <div class="enmarcar" style="text-align:center"> ';
			buffer += '		</div> ';
			buffer += '	   <div style="text-align:center"> ';
			buffer += '		 <input type="button" class = "btn btn-default ButtonAccSoloBorderLarge" style = "margin-left: -2px; min-width: 70%; font-size: 11px; margin-top: 5px" onclick="recalcularRuta();" value="Recalcular Ruta" title = "Recalcular Ruta" > ';
			buffer += '	   </div> ';


		}
		else {
			buffer += ' <div id = "botonbusqueda2" class="collapsibleX">Buscar Pedido</div> ';
			buffer += ' 	<div id = "contenidopoly2" class="contentX" style="background-color: rgb(234, 91, 11)"> ';
			buffer += ' 			<div style = "height: 41px"> ';
			buffer += '				<div class = "toolbarsearch" style="text-align:center "> ';
			buffer += '	   				<span> ';
			buffer += '						<img src = "MapasSoyDeliveryV4/images/lupa.png" class = "imgLupa"> ';
			buffer += '						<input type="text" class="form-control AttributeCheckBox" maxlength = "20" style = "width:170px" placeholder="buscar pedido..." id = "txtbuscarpedido" onblur="buscarpedido()"> ';
			buffer += '					</span> ';
			buffer += '				</div> '
			buffer += '			</div> ';
			buffer += '	</div> ';

			buffer += ' <div id = "botonbusqueda" class="collapsibleX">Buscar Polígonos</div> ';
			buffer += ' 	<div id = "contenidopoly" class="contentX" style="background-color: rgb(234, 91, 11)"> ';
			buffer += ' 		<div > ';
			buffer += '			<div class = "toolbarsearch" style="text-align:center "> ';
			buffer += '	   			<span> ';
			buffer += '					<img src = "MapasSoyDeliveryV4/images/lupa.png" class = "imgLupa"> ';
			buffer += '					<input type="text" class="form-control AttributeCheckBox" maxlength = "20" style = "width:170px" placeholder="buscar poligono..." id = "txtbuscarpoly" onkeyup="buscarpoly()"> ';
			buffer += '	   			</span> ';

			buffer += '				<div class = "listaexpand" id = "poligonosdisponibles" style="margin-left: -20px;"> ';
			buffer += '				</div> ';
			buffer += '			</div> ';
			buffer += '			<div class = "listaexpand" id = "poligonoscargados" style > ';
			buffer += '			</div> ';
			buffer += '		</div> ';
			buffer += ' 	</div> ';

			buffer += ' <div class="collapsibleX">Rutas</div> ';
			buffer += '	<div class="contentX"> ';
			buffer += '	   <div class="enmarcar" style="text-align:center"> ';
			buffer += '		</div> ';
			buffer += '		<div class="checkbox" style="text-align:center" > ';
			buffer += '			<label for="chkletras"> ';
			buffer += '				<input name="chkletras" id="chkletras" type="checkbox" unchecked/>Referencias Literales ';
			buffer += '			</label> ';
			buffer += '		</div> ';
			buffer += '	   <div style="text-align:center"> ';
			buffer += '		 <input type="button" class = "btn btn-default ButtonAccSoloBorderLarge" style = "margin-left: -2px; min-width: 70%; font-size: 11px; margin-top: 20px" onclick="rutearBoton();" value="Calcular Ruta" title = "Calcular Ruta" > ';
			buffer += '	   </div> ';
			buffer += '	   <div style="text-align:center"> ';
			buffer += '		 <input type="button"  class = "btn btn-default ButtonAccSoloBorderLarge" style = "margin-left: -2px; min-width: 70%; font-size: 11px; margin-bottom: 20px" onclick="limpiarRutaBoton();" value="Limpiar Ruta" title = "Limpiar Ruta"> ';
			buffer += '	   </div> ';
			buffer += ' </div> ';
			buffer += ' <div class="collapsibleX">Zonas y Polígonos</div> ';
			buffer += ' <div id = "divlistazonas" class="contentX class_zonas" style="max-height: 180px; overflow-y:auto"> ';
			buffer += ' </div> ';
		}
		var div = document.getElementById("dvbuscarpoly");
		div.innerHTML = buffer;
}


function doDescartoSiNoEstaLaEntrega(PedidoId){
	var encontre = false;
	for (x=0; (x < vectorDePuntosJSON.length) && (!encontre); x++){
		if (vectorDePuntosJSON[x].PuntoZonaId == getZonaEnUso()){
			if (vectorDePuntosJSON[x].Precedencia == 2 && vectorDePuntosJSON[x].PedidoId == PedidoId) {
				encontre = true;
			}
		}
	}
	return encontre;
}

function rutear(rutear){
  //Ordena el vector de tramos mas cercandos a cada nodo
  if ( getZonaEnUso()==undefined){return};
  if ( getZonaEnUso()==0){return};

  if (vectorDePuntosJSON.length==0){return};

  return new Promise((resolve, reject) => {
			mostrarWait();
            var tope = vectorDePuntosJSON.length;
            var matrix = new Array(tope);

			for (x=0; x < tope; x++){


				if (!esModRuta()){
					var latlng = new google.maps.LatLng({lat: vectorDePuntosJSON[x].PuntoLat, lng: vectorDePuntosJSON[x].PuntoLong});
					vectorDePuntosJSON[x].PuntoZonaId = getZonaLatLong(latlng);
				}
				if (vectorDePuntosJSON[x].Precedencia >= 2){
					if (vectorDePuntosJSON[x].PuntoZonaId == getZonaEnUso()){
						estaPedidoenZona(vectorDePuntosJSON[x].PedidoId, getZonaEnUso());
					}
				}

  		    }

			for (var j=0; j < tope; j++){ //descarto
				if (vectorDePuntosJSON[j].PuntoZonaId == getZonaEnUso()){
					if (vectorDePuntosJSON[j].Precedencia == 1){
						if (!doDescartoSiNoEstaLaEntrega(vectorDePuntosJSON[j].PedidoId)){
								vectorDePuntosJSON[j].PuntoZonaId = 0;
						}
					}
				}
			}


			if (rutear){
				calcularOrigenTentativo();
				inicializarInfoRutas(getZonaEnUso());
				var posOrigen = getPosOrigen(getZonaEnUso());
				var listaOrdenada = [];
				if (posOrigen != -1){
				  var vecaux = vectorDePuntosJSON.slice(0);
				  listaOrdenada = armarListaOrdenada(posOrigen, vecaux);
				}else{
				  msg("No encontró el origen al rutear ");
				}
				//ORDENAR SEGUN LISTA

				for (i=0; i < vectorDePuntosJSON.length; i++){
					vectorDePuntosJSON[i].PuntoOrden = 0;
					for (j=0; j < listaOrdenada.length; j++){
					  if ( vectorDePuntosJSON[i].PuntoId == listaOrdenada[j].PuntoId){
						vectorDePuntosJSON[i].Ruta = 1;
						vectorDePuntosJSON[i].PuntoOrden = j;
					  }
					}
				}
			}else{
				//OOOOOO
				  OrdenarVector();
				  var pos = minOrdenDelaZona(getZonaEnUso());
				  MarcarOrigen(vectorDePuntosJSON[pos.pos].PuntoId)

				  msg("Posicion origen : " + pos.pos + " punto " + vectorDePuntosJSON[pos.pos].PuntoId);

				  pos = maxOrdenDelaZona(getZonaEnUso());
				  MarcarDestino(vectorDePuntosJSON[pos.pos].PuntoId);
				  msg("Posicion destino : " + pos.pos + " punto " + vectorDePuntosJSON[pos.pos].PuntoId);

			}
            OrdenarVector();

			var pos = maxOrdenDelaZona(getZonaEnUso());
			MarcarDestino(vectorDePuntosJSON[pos.pos].PuntoId);

            cargarPuntos(false);
			ocultarWait();
			if (origenYDestinoValidos(getZonaEnUso())){
				calcularYDesplegarLaRuta();
			}
			selecteShapeRuteada = selectedShape;

  });

}


function origenYDestinoValidos(ZonaId){
	var valido = true;
	var _hayPuntos = hayPuntos(ZonaId);
	if (!_hayPuntos){
		valido = false;
		mensajeError("No hay puntos en la zona o poligono seleccionado");
	}else{
		var _haydest = hayDestino(ZonaId);
		var _hayori = hayOrigen(ZonaId);
		if (esModRuta()){
			OrdenarVector();
			vectorDePuntosJSON[0].Marca = vMarcaORIGEN;
		}
	}
	return valido;

}







function getPosOrigen(ZonaId){
  var encontre =false;
  var pos = -1;
  for (i=0; ((i< vectorDePuntosJSON.length) && (!encontre)); i++){
	if  (vectorDePuntosJSON[i].PuntoZonaId == ZonaId){
		if (vectorDePuntosJSON[i].Marca == vMarcaORIGEN){
		  pos = i;
		  encontre = true;
		}
	}

  }
  return pos;
}

function hayPuntos(ZonaId){
  msg("***hayDestino***");
  var encontre = false;
  for (i = 0; ((i < vectorDePuntosJSON.length) && !encontre); i++ ){
      if (vectorDePuntosJSON[i].PuntoZonaId == ZonaId){
          encontre = true;
      }
  }
  return encontre;
}

function hayOrigen(ZonaId){
  msg("***hayDestino***");

  var encontre = false;
  var pos = 0;
  for (i = 0; ((i < vectorDePuntosJSON.length) && !encontre); i++ ){
      if (vectorDePuntosJSON[i].PuntoZonaId == ZonaId){
        if (vectorDePuntosJSON[i].Marca == vMarcaORIGEN){
          encontre = true;
          pos = i;
        }
      }
  }
  if (!encontre){
	  pos = -1;
  }
  return pos;
}



function recalcularRuta(){
	 for (i = 0; (i < vectorDePuntosJSON.length) ; i++ ){
		 if (vectorDePuntosJSON[i].PuntoZonaId == getZonaEnUso()){
			vectorDePuntosJSON[i].FlagRuteo = true;
			vectorDePuntosJSON[i].PuntoOrden = 0;
		 }
	 }
	limpiarRuta();
	rutear(true);



}

function hayDestino(ZonaId){
  msg("***hayDestino***");
  var encontre = false;
  var pos = 0;
  for (i = 0; ((i < vectorDePuntosJSON.length) && !encontre); i++ ){
      if (vectorDePuntosJSON[i].PuntoZonaId == ZonaId){
        if (vectorDePuntosJSON[i].Marca == vMarcaDESTINO){
          encontre = true;
          pos = i;
        }
      }
  }
  return pos;
}

function toggleBounce(m) {
	m.setAnimation(google.maps.Animation.BOUNCE);
	setTimeout(function(){
		m.setAnimation(null);
	}, 3000);
}


/*
function toggleBounce(m,m2) {
	m.setAnimation(google.maps.Animation.BOUNCE);
	m2.setAnimation(google.maps.Animation.BOUNCE);
	setTimeout(function(){
		m.setAnimation(null);
		m2.setAnimation(null);
	}, 3000);
}
*/



function actualizarWsLocation(p){

	var parm = {
			PedidoId: p.PedidoId,
			VRutaVisitaPrecedencia:	p.Precedencia,
			PedidoLocation: p.PuntoLat + "," + p.PuntoLong
		}

	$.ajax({
        url: URL_wsUpdPedidoLocation,
        type: "POST",
        dataType: "json",
        crossDomain: true,
        data: JSON.stringify(parm),
        success: function(respuesta) {
			ocultarWait();
			msg("respuesta " + JSON.stringify(respuesta));
			if (respuesta.ok == "S"){
				mensajeOK("Se actualizaron las coordenadas");
			}else{
				alerta(respuesta.errordesc);
			}
			ocultarWait();
        },
        error:
            function() {
              ocultarWait();
              mensajeError('Falló el ws de actualización de coordenadas');
            }
    });


}



function PermitirMover(PuntoId){
	for (var i=0; i < vecMarkersPuntos.length; i++){
		if (vecMarkersPuntos[i].labelContent == PuntoId){
			vecMarkersPuntos[i].setDraggable(true)
		}
	}
}


function NoPermitirMover(PuntoId){
	for (var i=0; i < vecMarkersPuntos.length; i++){
		if (vecMarkersPuntos[i].labelContent == PuntoId){
			vecMarkersPuntos[i].setDraggable(false)
		}
	}
}



function agregaPuntoEnElMapa(Punto){
	//agrega un punto al mapa
	var marker;
	var contentString = "";
	//CREAR EL MAKER
	var icono = "";




	if (Punto.PuntoDeRuta || !esModRuta()){
		icono  = iconBase + getIcono("RUTA" + Punto.Precedencia);
	}else{
		icono  = iconBase + getIcono("PEND" + Punto.Precedencia);
	}

	Punto.Icono = icono;
	marker= new google.maps.Marker({
		position: new google.maps.LatLng({lat: Punto.PuntoLat, lng: Punto.PuntoLong}),
		title: Punto.PuntoNombreCliente + " " + Punto.PuntoDireccion,
		labelContent: Punto.PuntoId,
		PedidoId: Punto.PedidoId,
		labelAnchor: new google.maps.Point(vANCHOLABEL_1, vANCHOLABEL_2),
	//	icon: { url: icono, scaledSize: new google.maps.Size(hSIZE_SVG, vSIZE_SVG) },
		labelClass: vCLASE_CSS_LABELMARKER, // the CSS class for the label
		draggable:      false,
		map: map
	});

	google.maps.event.addListener(marker, 'rightclick', function(e){
	var menucontextualmapa = '<div id="menucontextualmapa" class="menucontextualmapa" onclick="this.style.display=' + "'" + 'none' + "'" + '">' +
							  "<div class = 'topbar' ><a class='cerrar' onclick='cerrarMenuContextOD();'>x</a></div> " +
							 /* '<p class = "enmarcar" id="pOrigen" onclick="MarcarOrigenDesdeMarker()">Marcar Origen</p>' +
								'<p class = "enmarcar" id="pDestino" onclick="MarcarDestinoDesdeMarker()">Marcar Destino</p>' + */
							  '<p class = "enmarcar" id="pMover" onclick="PermitirMover(' + Punto.PuntoId + ')">Mover Punto</p>' +
							  '<p class = "enmarcar" id="pMover" onclick="NoPermitirMover(' + Punto.PuntoId + ')">Fijar Punto</p>' +
							  '</div>'
		selMarker = marker;
		var latLng = e.latLng;
		var v = new TxtOverlay(latLng, menucontextualmapa, "labelzonas", map);

		return false;

	});


	google.maps.event.addListener(marker, 'dblclick', function(e){
		var fichaPunto = muestroInformacionPunto(marker.labelContent);
		msg("Ficha Punto = " + fichaPunto);
		selMarker = marker;
		var latLng = e.latLng;
		var v = new TxtOverlay(latLng, fichaPunto, "labelzonas", map);
		return false;
	 });



	 google.maps.event.addListener(marker, 'click', function(e){
		for (i=0; i < vecMarkersPuntos.length; i++){
			var m2 = vecMarkersPuntos[i];
			if (marker != undefined){
					toggleBounce(marker);
				}
			if (m2.PedidoId == marker.PedidoId && m2.labelContent != marker.labelContent){

				if (m2 != undefined){
					toggleBounce(m2);
				}
			}
		}
	 });

	google.maps.event.addListener(marker, 'drag', function(e){


	});

	google.maps.event.addListener(marker, 'dragend', function(e){
		var lat = marker.getPosition().lat();
		var lng = marker.getPosition().lng();

		for (var i=0; i < vectorDePuntosJSON.length; i++){
			if (vectorDePuntosJSON[i].PuntoId == marker.labelContent){

				var p = vectorDePuntosJSON[i];
				p.PuntoLat = lat;
				p.PuntoLong = lng;

				actualizarWsLocation(p)

			}
		}

	});

	vecMarkersPuntos.push(marker);

	if (Punto.Forzado){
		toggleBounce(marker);
	}

	if (Punto.PedidoColor != ""){
		cambiarPin(Punto);
	}

}




function indicarPunto(PedidoId){
	for (i=0; i < vecMarkersPuntos.length; i++){
		var m = vecMarkersPuntos[i];
		if (m.PedidoId == PedidoId){
			toggleBounce(m);
		}
	}
}


function cerrarFichaPunto(){
  var fichaPunto = document.getElementById("fichaPunto");
  fichaPunto.style.display = 'none';
}



function muestroInformacionPunto(PuntoId){
  var html = "";
  for (i=0; i < vectorDePuntosJSON.length; i++){
      p = vectorDePuntosJSON[i];
      if (p.PuntoId == PuntoId){

        html = '<div id = "fichaPunto" class = "menuancho" onclick="this.style.display=' + "'" + 'none' + "'" + '">' +
				"<div class = 'topbar' ><a class='cerrar' onclick='cerrarFichaPunto();'>x</a></div> ";

   		html = html + '<div class = "container-fluid mygrid-wrapper-div">';
   		html += '    <div class="row enmarcar" ">';
    	if (p.PuntoId != undefined){
          //html = html + '<div class="col-sm-8 col-md-8">';
          html = html + '<p class = "titulocampoficha">#Pedido</p>';
		  if (VAR_USA_PEDIDOEXTERNO){
			  html = html + '<div onclick = "abrirEnOtraVentana(' + p.PedidoId + ')"><span>' + p.PedidoExternalId + '</div></span>';
			}else{
				html = html + '<div onclick = "abrirEnOtraVentana(' + p.PedidoId + ')"><span>' + p.PedidoId + '</div></span>';
			}

          html = html + '</div>';
          html = html + '<div class="col-sm-1 col-md-1">';
      //    html = html + '<img class ="imgInfo" src="' + PATHIMAGES + '/info.svg">';
     //     html = html + '</div>';
    	}
   		html = html + '</div>';
        html += '    <div class="row enmarcar">';
        if (p.PuntoDireccion != undefined){
         // html = html + '<div class="col-sm-12 col-md-12">';
          html = html + '<p class = "titulocampoficha">Direccion</p>';
		  if (p.Precedencia == 1){
				html = html + '<div class = "palabra"><span>' + "Retiro" + '</span></div>';
		  }else if (p.Precedencia == 2) {
				html = html + '<div class = "palabra"><span>' + "Entrega" + '</span></div>';
		  }
       //   html = html + '</div>';
          html = html + '<div class = "palabra"><span>' + p.PuntoDireccion + '</span></div>';
          html = html + '</div>';

        }
    	html = html + '</div>';
    	html += '    <div class="row enmarcar">';
        if (p.PuntoNombreCliente != undefined){
          html = html + '<div class="col-sm-12 col-md-12">';
          html = html +'<p class = "titulocampoficha">Contacto</p>';
          html = html +'<div><span>' + p.PuntoNombreCliente + '</span></div>';
          html = html + '</div>';
        }
   		html = html + '</div>';
   		html += '    <div class="row enmarcar">';
        if (p.PuntoTelefonoCliente != undefined){
    			html = html + '<div class="col-sm-12 col-md-12">';
    			html = html +'<p class = "titulocampoficha">Telefono</p>';
    			html = html +'<div><span>' + p.PuntoTelefonoCliente + '</span></div>';
    			html = html + '</div>';
        }
		html = html + '</div>';
		html += '    <div class="row enmarcar">';
		if (p.PuntoDetalle != undefined){
			if (p.PuntoDetalle != ""){
    			html = html + '<div class="col-sm-12 col-md-12">';
    			html = html +'<p class = "titulocampoficha">Detalle del Pedido</p>';
    			html = html +'<div><span>' + p.PuntoDetalle + '</span></div>';
    			html = html + '</div>';
			}
        }

		if (p.PedidoNegocioNombre != undefined){
			if (p.PedidoNegocioNombre != undefined){
    			html = html + '<div class="col-sm-12 col-md-12">';
    			html = html +'<p class = "titulocampoficha">Negocio</p>';
    			html = html +'<div><span>' + p.PedidoNegocioNombre + '</span></div>';
    			html = html + '</div>';
			}
        }

		if (p.PedidoNegocioSucursalNombre != undefined){
			if (p.PedidoNegocioSucursalNombre != undefined){
    			html = html + '<div class="col-sm-12 col-md-12">';
    			html = html +'<p class = "titulocampoficha">Sucursal</p>';
    			html = html +'<div><span>' + p.PedidoNegocioSucursalNombre + '</span></div>';
    			html = html + '</div>';
			}
        }

		if (p.ServicioNombre != undefined){
			if (p.ServicioNombre != ""){
    			html = html + '<div class="col-sm-12 col-md-12">';
    			html = html +'<p class = "titulocampoficha">Servicio</p>';
    			html = html +'<div><span>' + p.ServicioNombre + '</span></div>';
    			html = html + '</div>';
			}
        }

		if (p.PedidoComplejidadDsc != undefined){
			if (p.PedidoComplejidadDsc != ""){
    			html = html + '<div class="col-sm-12 col-md-12">';
    			html = html +'<p class = "titulocampoficha">Complejidad</p>';
    			html = html +'<div><span>' + p.PedidoComplejidadDsc + '</span></div>';
    			html = html + '</div>';
			}
        }

		if (p.PedidoTipoVehiculoNombre != undefined){
			if (p.PedidoTipoVehiculoNombre != ""){
    			html = html + '<div class="col-sm-12 col-md-12">';
    			html = html +'<p class = "titulocampoficha">Tipo de Vehículo</p>';
    			html = html +'<div><span>' + p.PedidoTipoVehiculoNombre + '</span></div>';
    			html = html + '</div>';
			}
        }

		if (p.PedidoDetalle != undefined){
			if (p.PedidoDetalle != ""){
    			html = html + '<div class="col-sm-12 col-md-12">';
    			html = html +'<p class = "titulocampoficha">Pedido Detalle</p>';
    			html = html +'<div><span>' + p.PedidoDetalle + '</span></div>';
    			html = html + '</div>';
			}
        }

		/*

		&puntoitem.ServicioNombre = ServicioNombre
			&puntoitem.PedidoNegocioNombre = PedidoNegocioNombre
			&puntoitem.PedidoNegocioSucursalNombre = PedidoNegocioSucursalNombre
			&puntoitem.PedidoComplejidadDsc  = PedidoComplejidad.EnumerationDescription()
			&puntoitem.PedidoTipoVehiculoNombre = PedidoTipoVehiculoNombre
			&puntoitem.PuntoDetalle			=	PedidoDetalle

		*/

		html = html + '</div>';
    	html += '    <div class="row enmarcar">';
        if (p.fechaHora  != undefined){
    			html = html + '<div class="col-sm-7 col-md-7">';
    			html = html +'<p class = "titulocampoficha">Hora de visita estimada</p>';
    			html = html +'<div>' + p.fechaHora + '</div>';
    			html = html + '</div>';
        }
        html = html + '</div>';
    		html = html + '</div>';
    		html = html + '</div>';
            msg(html);
      }
  }
  return html;
}

function cerrarMenuContextOD(){
  var menucontextualmapa = document.getElementById("menucontextualmapa");
  menucontextualmapa.style.display = 'none';
}




function getParametrosJsonPuntos(_PedidoId){
    var parametro = {
      PuntoNegocioId: 				VAR_EXT_PuntoNegocioId,
      PuntoNegocioSucursalId: 		VAR_EXT_PuntoNegocioSucursalId,
      FilterFechaEntregaDesde: 		VAR_EXT_FilterFechaEntregaDesde,
      FilterFechaEntregaHasta: 		VAR_EXT_FilterFechaEntregaHasta ,
      FilterFranjaHorariaId:	 	VAR_EXT_FilterFranjaHorariaId,
      FilterPuntoTelefonoCliente: 	VAR_EXT_FilterPuntoTelefonoCliente,
      FilterPuntoNombreCliente: 	VAR_EXT_FilterPuntoNombreCliente,
      FilterPuntoDetalle: 			VAR_EXT_FilterPuntoDetalle,
      FilterPuntoDireccion: 		VAR_EXT_FilterPuntoDireccion,
      FilterPuntoTipo: 				VAR_EXT_FilterPuntoTipo,
      FilterPuntoPaisId: 			VAR_EXT_FilterPuntoPaisId,
      FilterPuntoPaisCiudadId: 		VAR_EXT_FilterPuntoPaisCiudadId,
      FilterPuntoZonaId: 			VAR_EXT_FilterPuntoZonaId,
	  FilterRutaId:  ((_PedidoId==0)?EXT_VAR_RUTAID:0),
	  FilterPedidoId: _PedidoId,
	  FilterPedidoExternalId: _PedidoId
    }
    return JSON.stringify(parametro);
}










function getIcono(opcion){

      var icono="";
      switch(opcion){
         case vMarcaORIGEN:
              icono = vMARKER_INICIO; //"markerinicio.svg";
              break;
         case vMarcaDESTINO:
              icono = vMARKER_FIN; //"markerfin.svg";
              break;
         case "RUTA1":
              icono = vMARKER_RUTA_RETIRO; //"markercomun.svg";
              break;
		case "RUTA2":
              icono = vMARKER_RUTA_ENTREGA; //"markercomun.svg";
              break;
		case "RUTA0":
              icono = vMARKER_RUTA_ENTREGA; //"markercomun.svg";
              break;

		case "PEND0":
              icono = vMARKER_PEND_ENTREGA; //"markercomun.svg";
              break;
		case "PEND1":
              icono = vMARKER_PEND_RETIRO; //"wh.svg";
              break;
		case "PEND2":
              icono = vMARKER_PEND_ENTREGA; //"wh.svg";
              break;
		case "NOHAB1":
              icono = vMARKER_NOHAB_RETIRO; //"wh.svg";
              break;
		case "NOHAB2":
              icono = vMARKER_NOHAB_ENTREGA; //"wh.svg";
              break;
         case "WHS":
              icono = vMARKER_WHS; //"wh.svg";
              break;
         case "WHN":
              icono = vMARKER_WHN; //"wh5.svg";
              break;
         default:
			  icono = vMARKER_COMUN_BLUE; //"markercomun.svg";
              msg('!!!!No se encontro el icono ' + opcion);break;
      }
      return icono;
}



function modificarPuntoEnElMapa(Punto){
  var encontre = false;
	var icono= "";
	/*if (Punto.PuntoDeRuta || !esModRuta()){
		icono  = iconBase + getIcono("RUTA" + Punto.Precedencia);
	}else{
		icono  = iconBase + getIcono("PEND" + Punto.Precedencia);
	}*/

	Punto.Icono = icono;
	if (Punto.PedidoColor != ""){
		cambiarPin(Punto);
	}

	for (i = 0; ((i < vecMarkersPuntos.length) && (!encontre)) ; i++){
      if (vecMarkersPuntos[i].labelContent == Punto.PuntoId ){
        vecMarkersPuntos[i].position     = new google.maps.LatLng({lat: Punto.PuntoLat, lng: Punto.PuntoLong});
        vecMarkersPuntos[i].title        = Punto.PuntoNombreCliente + " " + Punto.PuntoDireccion;
        vecMarkersPuntos[i].labelContent = Punto.PuntoId;
        vecMarkersPuntos[i].labelAnchor  = new google.maps.Point(vANCHOLABEL_1, vANCHOLABEL_2);
       // vecMarkersPuntos[i].setIcon({ url: icono, scaledSize: new google.maps.Size(hSIZE_SVG,vSIZE_SVG) });
        vecMarkersPuntos[i].labelClass   = vCLASE_CSS_LABELMARKER; // the CSS class for the label
		if (vecMarkersPuntos[i].PedidoColor != ""){
			cambiarPin(vecMarkersPuntos[i]);
		}
        encontre = true;
      }
  }
  return encontre;
}


function existePuntoEnVectorDePuntos(PuntoId){
    var existe = false;
    for (i=0; ((i < vectorDePuntosJSON.length) && (!existe));i++){
        if (vectorDePuntosJSON[i].PuntoId == PuntoId){
            existe = true;
        }
    }
    return existe;
}


function getZonaLatLong(latLong){
  //Obtiene el polígono que contiene a una latitud longitud.
  //prioriza el polígono seleccinado y luego evalua segun el orden de creación
  var encontre = false;
  var ZonaId = 0;
  if (vecPoligonos.length==0){return;}

  //Primero dar prioridad al poligono vecMarkersPuntoseleccionado
  if (google.maps.geometry.poly.containsLocation(latLong, selectedShape)){
    ZonaId   = selectedShape.tag;
    encontre = true;
  }
  if (!encontre){
    //si no es pruebo con los demas
    for ( i = vecPoligonos.length - 1; ((i > 0) && (!encontre)); i-- ) {
      var poligono = vecPoligonos[i];
      if (selectedShape.tag != poligono.tag){
        if (google.maps.geometry.poly.containsLocation(latLong, poligono)){
          ZonaId   = poligono.tag;
          encontre = true;
        }
      }
    }
  }
  return ZonaId;
}



function actualizarPuntosEnPantalla(){
  msg("**actualizarPuntosEnPantalla**");
  cargarPuntos(false);  //Actualizar los puntos en pantalla
}

function actualizarCenterYZoomParaTodosLosPuntos(){
  msg("***actualizarCenterYZoomParaTodosLosPuntos***");
  //centra y hace zoom en el mapa en funcion a los Marcadores existentes
  var bounds = new google.maps.LatLngBounds();
  if (vecMarkersPuntos.length == 0){return};
  for(i=0;i<vecMarkersPuntos.length;i++) {
     bounds.extend(vecMarkersPuntos[i].getPosition());
  }
  map.setCenter(bounds.getCenter());
  map.fitBounds(bounds);
  //remove one zoom level to ensure no marker is on the edge.
  map.setZoom(map.getZoom());
  // set a minimum zoom
  // if you got only 1 marker or all vecMarkersPuntos are on the same address map will be zoomed too much.
  if(map.getZoom()> vZoom){
    map.setZoom(vZoom);
  }
}




function mostrarDivCentral(){
	var v = document.getElementById("dvbuscarpoly");
	v.style.display = "inline-block";

}

function initMap() {
  //INICIALIZAR EL MAPA
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: vZoom,
		center: {lat: vLatInicio, lng: vLongInicio},
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		zoomControl: true,
		mapTypeControl: false,
		scaleControl: true,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false
	});

	inicializarOverlays();
	mostrarDivCentral();
	generarMenuLateral();
	if (!esModRuta()){
		inicializarDrawingManager();
		if (EXT_CARGAR_ZONAS_AL_INICIO){
			getJSONZonasCreacionManual();
		}

	}
	expandirMenuLateral();
	ocultarWait();
	conlapsables();
	if (EXT_VAR_CARGAR_ORIGENES){
		cargarOrigenes();
	}
	//if (EXT_VAR_CARGAR_PUNTOS){
	cargarPuntos(true);
	buscarpolyXdefectosSinClickear();
//	}
	$("body").toggleClass("sidebar-collapse");

	// if (esModRuta()){
	//	  rutear(rutear);
	//  }



}



function limpiarVector(vec){
  msg("***limpiarVector***");
  //QUITA ELEMENTOS DE UN VECTOR PARA AHORRAR MEMORIA
  vec.splice( 0, vec.length - 1 );
  vec = [];
  return vec;
}

function desAsociarMapaDeLosvecMarkersPuntos(){
  //QUITA MAKER DEL MAPA
  msg("***desAsociarMapaDeLosvecMarkersPuntos***");
  for(i = 0; i < vecMarkersPuntos.length; i++){
    var m = vecMarkersPuntos[i];
    m.setMap(null);
    msg("Quitando marker ");
  }
}

function cargarPuntos(carcardesdeweb){
  msg("***cargarPuntos***");
  if (carcardesdeweb){
    desAsociarMapaDeLosvecMarkersPuntos();
    vecMarkersPuntos = limpiarVector(vecMarkersPuntos);
  }
  cargarJsonPuntos(carcardesdeweb);
  if (carcardesdeweb){
    actualizarCenterYZoomParaTodosLosPuntos();
  }
}




function actualizarEnvioEnVectorDePuntos(vMarker){
  msg("***actualizarEnvioEnVectorDePuntos***");
  var contenido = vMarker.labelContent;
  var latLng = vMarker.getPosition();
  for (i=0; i < vectorDePuntosJSON.length; i++){
      if (vectorDePuntosJSON[i].PuntoId == contenido){ //Si el elemento del Vector de Puntos == contenido del marker
          //Actualizar las coordenadas en el vector de envío
          vectorDePuntosJSON[i].PuntoLat  = latLng.lat;
          vectorDePuntosJSON[i].PuntoLong = latLng.lng;
          //aplicar geocoder para obtener nueva direccion
          //actualizar direccion
      }
  }
}

function getLatLongWareHouseNoGoogle(){
  var encontre = false;
  var latlng;
  msg("***getLatLongHareHouse***");
  for(var i=0; ((i<vectorOrigenes.length) && (!encontre)); i++){
    if (vectorOrigenes[i].OrigenDefault == "S"){
      o = vectorOrigenes[i];
      latlng  = {lat: Number(o.OrigenLat), lng: Number(o.OrigenLong)};
      encontre = true;
    }
  }
  if (! encontre){
	  mensajeError("No se cargo el WH");
  }
  return latlng;
}


function getLatLongWareHouse(){
  var encontre = false;
  var latlng;
  msg("***getLatLongHareHouse***");
  for(var i=0; ((i<vectorOrigenes.length) && (!encontre)); i++){
    if (vectorOrigenes[i].OrigenDefault == "S"){
      o = vectorOrigenes[i];
      latlng  =new google.maps.LatLng({lat: Number(o.OrigenLat), lng: Number(o.OrigenLong)});
      encontre = true;
    }
  }
  if (! encontre){
	  mensajeError("No se cargo el WH");
  }
  return latlng;
}

/*
function rutaCerradaEnOrigen(){
  return (rutaCerradaWH || rutaCerradaUsuario);

}*/



function calcularRutaParcial(ds, dd, primerlatlng, ultimalatlng, waypts, vecPedPos, tandas, ultima){

  var num = gePuntoTiempoArribo();
  mostrarWait();



  cantsemaforo += 1;
  ds.route({
    origin: primerlatlng,
    destination: ultimalatlng,
    waypoints: waypts,
    optimizeWaypoints: modoOptimizacion,
    avoidTolls: false,
    travelMode: vTRAVEL_MODE, //'DRIVING',
  }, function(response, status) {

      if (status === 'OK') {
  		dd.setDirections(response);
  		dd.setMap(map);
  		//vVRRutaDirServiceData.push(response); COMENTADO POR PROBLEMAS EN ARMADO DE RUTAS Y TAMAÑO DE ENVIO
  		var route = response.routes[0];
  		var waypoint_order = route.waypoint_order;
  		var n = num;

  		for (var i = 0; i < route.legs.length; i++) {
  		  msg("waypoint_order " + JSON.stringify(waypoint_order) + " vecPedPos " + JSON.stringify(vecPedPos) + " i = " + i);
  		  var PuntoId = obtenerPuntoId(waypoint_order, vecPedPos, i);
  		  if (PuntoId != 0){
  			var orden = i + (n * 100);
  			asignarOrdenAPunto(PuntoId,  orden );
  			var Punto = obtenerObjPunto(PuntoId);
  			if (Punto != undefined){
  			  asignarDistanciaYTiempoAPunto(route.legs[i].start_address,
  											  route.legs[i].end_address,
  											  PuntoId,route.legs[i].distance.value,
  											  route.legs[i].distance.text,
  											  route.legs[i].duration.value,
  											  route.legs[i].duration.text);

  			}else{
  			  msg("No encontro el Punto ");
  			}
  		  }else{
  			     msg("Punto = 0");
  		  }
  		}
  		cant    = 0;

  		ocultarWait();
		semaforo += 1;

		if (cantsemaforo == semaforo){
			mostrarAsinc();
		}
    }
    else {
      ocultarWait();
      mensajeError('Error al obtener direcciones ' + status);
    }
  });
}







function SuperaElTopeDePuntosParaElServDeRuta(ZonaId){
  //retorna true si la cantidad de puntos de la ruta supera el maximo de google
  msg("***SuperaElTopeDePuntosParaElServDeRuta***");
  var supera = false;
  var cont = 0;
  for(i = 0; (i < vectorDePuntosJSON.length && !supera); i++){
    if (vectorDePuntosJSON[i].PuntoZonaId == ZonaId){
      cont ++;
      if (cont > TOPE_PUNTOS_SERV_RUTA){
        supera = true;
      }
    }
  }
  return supera;
}



function cantPuntosEnZona(ZonaId){
  //retorna true si la cantidad de puntos de la ruta supera el maximo de google
  msg("***cantPuntosEnZona***");
  var cont = 0;
  for(i = 0; (i < vectorDePuntosJSON.length); i++){
    if (vectorDePuntosJSON[i].PuntoZonaId == ZonaId){
      cont ++;
    }
  }
  return cont;
}


function mensajeNotificacion(msg){
	alertify.log(msg);
	return false;
}


function procesarTiemposYDistancias(sdtWsRutas){
	for (j=0; j < sdtWsRutas.length; j++){
		var r = sdtWsRutas[j];
		for (i=0; i < r.visitas.length; i++){
			var v = r.visitas[i];
			for (k=0; k < vectorDePuntosJSON.length; k++){
				var p = vectorDePuntosJSON[k];
				if (p.PedidoId == v.VRutaVisitaPedidoId && p.PuntoOrden == v.VRutaVisitaOrden){
					p.fechaHora 				= v.VRutaVisitaHoraPlan;
					p.fecha_hora_llegada 		= v.VRutaVisitaFchHorEntrada;
					p.fecha_hora_salida 		= v.VRutaVisitaFchSalida;
					p.PuntoDistanciaArribo 		= v.VRutaVisitaDistancia;
					p.PuntoDistanciaArriboTxt 	= v.VRutaVisitaDistanciaTxt;
					p.PuntoTiempoArribo 		= v.VRutaVisitaDuracion;
					p.PuntoTiempoArriboTxt 		= v.VRutaVisitaDuracionTxt;
					p.PuntoDuracionVisita 		= v.VRutaTiempoEstimadoEntrega;
					p.Precedencia 				= v.VRutaVisitaPrecedencia;
					p.PedidoId 					= v.VRutaVisitaPedidoId;
				}
			}
		}
	}

}

function calcularTiemposYDistanciaXSoyDelivery(){

	//Cargar vistias
	var vecVisitas = armarJSONSoloDeVisitas(getZonaEnUso());
	//Enviar
	$.ajax({
        url: VAR_TIEMPOS_Y_DISTANCIAS,
        type: "POST",
        dataType: "json",
        crossDomain: true,
        data: JSON.stringify(vecVisitas),
        success: function(respuesta) {
			ocultarWait();
			if (respuesta.sdtRespuestaWS.ok == "S"){
				procesarTiemposYDistancias(respuesta.sdtWsRutas);
				refrescarGrillaruta();
			}else{
				mensajeError(respuesta.sdtRespuestaWS.errordesc)
			}
			ocultarWait();
        },
        error:
            function() {
              ocultarWait();
              mensajeError('Falló el ws de distancias y tiempos');
            }
    });

	//Obtener y procesar

	//Desplegar la ruta


}



function calcularYDesplegarLaRuta() {
    msg("***calcularYDesplegarLaRuta***")
	if (VAR_PROVEEDOR_RUTAS == "SD"){
		calcularTiemposYDistanciaXSoyDelivery();
		return;
	}
    var vecPedPos = [];
    var waypts = [];

    var primerlatlng  = null;
    var ultimalatlng  = null;
    var primerlatlngGeneral = null;
    var ultimalatlngGeneral = null;
	cantsemaforo	=	0;
	semaforo		=	0;
    waypts.splice(0,waypts.length-1);
    vecPedPos.splice(0,vecPedPos.length-1);

    var cant  = 0;

    tandas = 0;
    if (getZonaEnUso() == 0){
      mensajeNotificacion("Debe seleccionar zona");
      return
    }
    ContraerMapa();
    var div = document.getElementById("listaPuntos");
    div.innerHTML = "";
    //*** arma el vector de WAYPOINS para el calculo de la rura en base a la zona, origen y destino
    numero = 0;
	var c = cantPuntosEnZona(getZonaEnUso());
    for (var i = 0; i < vectorDePuntosJSON.length; i++) {

          if ((vectorDePuntosJSON[i].PuntoZonaId == getZonaEnUso()) && (vectorDePuntosJSON[i].FlagRuteo == true)) {

			  cant = cant + 1;
              //obtener las coordenadas del origen
              if (primerlatlng  == null ) {
					primerlatlng	=	getLatLongWareHouse();
              }
              //Obtener las coordenadas del destino
              if (ultimalatlng==null ){

                  if (vectorDePuntosJSON[i].Marca == vMarcaDESTINO || c == 1){
                    ultimalatlngGeneral = new google.maps.LatLng({lat: vectorDePuntosJSON[i].PuntoLat, lng: vectorDePuntosJSON[i].PuntoLong});
                  }
              }
              vecPedPos.push(vectorDePuntosJSON[i].PuntoId);
              var s_stopover = true;

              waypts.push({
                location: new google.maps.LatLng({lat: vectorDePuntosJSON[i].PuntoLat, lng: vectorDePuntosJSON[i].PuntoLong}),
                stopover: s_stopover
              });
              if (cant == TOPE_PUNTOS_SERV_RUTA){
                  adPuntoDistanciaArribo();
                  if (tandas>1){
                    primerlatlng = ultimalatlng;
                  }
                  tandas = tandas + 1;
                  if  (primerlatlng  == null){
                    limpiarRutaBoton();
                    return;
                  }
                  ultimalatlng = new google.maps.LatLng({lat: vectorDePuntosJSON[i].PuntoLat, lng: vectorDePuntosJSON[i].PuntoLong});
                  if (waypts.length == 0){
                    mensajeError("No se han incluido puntos para rutear");
                    return;
                  }
                  var directionsService = new google.maps.DirectionsService;

				  var refletras = true;
				  if (!esModRuta()){
					 refletras = !(document.getElementById("chkletras").checked);
				  }
                  var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: refletras, polylineOptions: { strokeColor: vecColor[((tandas + 10) % 5)] } });
                  vecDireccionServices.push(directionsService);
                  vecDireccionDisplay.push(directionsDisplay);
                  calcularRutaParcial(directionsService, directionsDisplay, primerlatlng, ultimalatlng, waypts, vecPedPos, false);
                  primerlatlng = ultimalatlng;
                  ultimalatlng = null;
                  waypts  = [];
                  waypts.splice(0, waypts.length - 1);
                  cant    = 0;
                  vecPedPos =[];
                  vecPedPos.splice(0, vecPedPos.length - 1);
              }
          }

    }

    if (cant < TOPE_PUNTOS_SERV_RUTA){
        tandas = tandas + 1;
        adPuntoDistanciaArribo();
        if  (primerlatlng  == null){
          mensajeError("Falta definir la visita ORIGEN de la ruta");
          limpiarRuta()
          return;
        }
        ultimalatlng = ultimalatlngGeneral;
        if (waypts.length == 0){
          mensajeError("No se han incluido puntos para rutear");
          limpiarRuta();
          return;
        }

		//polylineOptions: { strokeColor: vecColor[((tandas + 10) % 5)]
        var directionsService = new google.maps.DirectionsService;

		var refletras;
		if (document.getElementById("chkletras") !=undefined){
			refletras = !(document.getElementById("chkletras").checked);
		}else{
			refletras = true;
		}
        var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: refletras, polylineOptions: { strokeColor: vecColor[((tandas + 10) % 5)] } });
        vecDireccionServices.push(directionsService);
        vecDireccionDisplay.push(directionsDisplay);
        calcularRutaParcial(directionsService, directionsDisplay, primerlatlng, ultimalatlng, waypts, vecPedPos, true);
    }
}



function mostrarAsinc(){
	OrdenarVector();
	var div_Puntos = document.getElementById("listaPuntos");
	div_Puntos.innerHTML =  mostrarRegistrosRuta(getZonaEnUso());
	// $('[data-toggle="tooltip"]').tooltip({html:true});
	showCalendar();
	habilitarDragAndDropGrilla();
}


function hayMasPuntos(posicion, ZonaId){
  //Dado una posicion retorna si hay mas puntos en la zona
  msg("***hayMasPuntos***");
  var encontre = false;
  for(i = posicion+1; (i < vectorDePuntosJSON.length && !encontre); i++){
    if (vectorDePuntosJSON[i].PuntoZonaId == ZonaId){
      encontre = true;
    }
  }
}


function toggleListaRutaCollapse(numdiv){
	var div = document.getElementById("listaruta_" + numdiv);
	var img = document.getElementById("imgtogle_" + numdiv);
	if (div.style.display == "none"){
		div.style.display = "block";
		img.src=PATHIMAGES + "/up-arrow.svg";
	}else{
		div.style.display = "none";
		img.src=PATHIMAGES + "/down-arrow.svg";
	}
}






function getDtControl(){
	var buffer = '';

	if (esModRuta()){
		if (vRUTA.VRutaEstado == "P"){
			buffer += ' <div class="dp_container " id="vDD_dp_container" data-gx-tpl-applied-datepicker=""> ';
			buffer += ' <div class="input-group"><input type="text" id="vDD" style = "width: auto;" name="vDD" value="'+   getFormatoDeFechaHora(new Date(DTFechaHoraInicioRuta)) +'" size="16" spellcheck="false" maxlength="16" ';
			buffer += ' class="form-control AttributeCheckBox" style="text-align:right" ';
			buffer += ' onfocus="gx.evt.onfocus(this, 11,\'\',false,\'\',0)" ';
			buffer += ' onchange="gx.evt.onchange(this, event)" ';
			buffer += ' onblur="gx.date.valid_date(this, 10,\'DMY\',5,24,\'spa\',false,0);;gx.evt.onblur(this,11);parcearDTFechaHoraInicio(this);" ';
			buffer += ' data-gx-context="[&quot;&quot;,false]">';
			buffer += ' </div></div>';
			console.log("====>" + buffer);
		}else{
			buffer += ' <div class="dp_container " id="vDD_dp_container" data-gx-tpl-applied-datepicker=""> ';
			buffer += ' <div class="input-group"><input type="text" id="vDD" style = "width: auto;" name="vDD" disabled value="'+   getFormatoDeFechaHora(new Date(DTFechaHoraInicioRuta)) +'" size="16" spellcheck="false" maxlength="16" ';
			buffer += ' class="form-control AttributeCheckBox" style="text-align:right" ';
			buffer += ' data-gx-context="[&quot;&quot;,false]">';
			buffer += ' </div></div>';
			console.log("====>" + buffer);
		}
	}else{
		buffer += ' <div class="dp_container " id="vDD_dp_container" data-gx-tpl-applied-datepicker=""> ';
		buffer += ' <div class="input-group"><input type="text" id="vDD" style = "width: auto;" name="vDD" value="'+   getFormatoDeFechaHora(new Date(DTFechaHoraInicioRuta)) +'" size="16" spellcheck="false" maxlength="16" ';
		buffer += ' class="form-control AttributeCheckBox" style="text-align:right" ';
		buffer += ' onfocus="gx.evt.onfocus(this, 11,\'\',false,\'\',0)" ';
		buffer += ' onchange="gx.evt.onchange(this, event)" ';
		buffer += ' onblur="gx.date.valid_date(this, 10,\'DMY\',5,24,\'spa\',false,0);;gx.evt.onblur(this,11);parcearDTFechaHoraInicio(this);" ';
		buffer += ' data-gx-context="[&quot;&quot;,false]">';
		buffer += ' </div></div>';
		console.log("====>" + buffer);
	}
	return buffer;
}


function getFormatoDeHora(fechahora){

	var v = fechahora.split(" ");
	return v[1];

}

function parcearDTFechaHoraInicio(c){
	if (!c.GXFormatError){
		var d = document.getElementById("vDD");
		console.log(d.value);

		//var initialDate = "24-04-2016 04:24:00"
		var initialDate = d.value.toString();
		console.log("initialDate: " + initialDate);
		//Dividimos la fecha primero utilizando el espacio para obtener solo la fecha y el tiempo por separado
		var splitDate= initialDate.split(" ");
		var date=splitDate[0].split("/");
		var time=splitDate[1].split(":");

		// Obtenemos los campos individuales para todas las partes de la fecha
		var dd=date[0];
		var mm=date[1]-1;
		var yyyy =date[2];
		var hh=time[0];
		var min=time[1];
		//var ss=time[2];
		var ss =0;
		console.log(dd + " " + mm + " " + yyyy + " " + hh + " " +  min);
		// Creamos la fecha con Javascript
		var fecha = new Date(yyyy,mm,dd,hh,min,ss);
		console.log("F:" + fecha);
		console.log("S:" + fecha.toString());
		console.log("ISO:" + fecha.toISOString());

		if (esHoraUTC){
			DTFechaHoraInicioRuta = fecha.toISOString();
		}else{
			DTFechaHoraInicioRuta = fecha.toString();
		}
		refrescarGrillaruta();
	}else{
		console.log("Error");
	}

}

function showCalendar() {

	/*var myCalInput = $('.myCalendarClass')[0];
	Calendar.setup({
    inputField : 'vDD',
    trigger: 'vDD_dp_trigger',
    onSelect   : function() { this.hide() },
    showTime   : 12,
    dateFormat : "%d-%m-%Y"   });
	*/
}




function getTableHeader(){

	var buffer = "";
	buffer += ' <thead> ';
	buffer += ' <tr> ';
	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;"></th> ';
	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;text-align:right;">#</th> ';
	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;"></th> ';

	if (VAR_USA_CANTBULTOS){
		buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;">Bultos</th> ';
	}

	if (VAR_USA_NEGOCIO_EN_TABLA){
		buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;">Negocio</th> ';
	}

	if (VAR_USA_NOMBRE_EN_TABLA){
		buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;">Nombre</th> ';
	}

	if (VAR_USA_COMPLEJIDAD){
		buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;">Complejidad</th> ';
	}

	if (VAR_USA_SERVICIO){
		buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;">Servicio</th> ';
	}

	if (VAR_USA_PRECLASIFICACION){
		buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;">Pre. Cla.</th> ';

	}

	if (VAR_USA_TIPOVEHICULO){
		buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;">Vehiculo</th> ';

	}

	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;">Dirección</th> ';

	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:right;;">Hora Ini</th> ';
	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:right;;">Hora Fin</th> ';
	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:right;;">Distancia</th> ';

	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:right;;">Tiempo</th> ';
	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:right;;">Arribo</th> ';
	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:right;;">Demora</th> ';
	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:right;;">Salida</th> ';
	buffer += ' <th class="gx-tab-padding-fix-1 WorkWithTitle" style="white-space:nowrap;text-align:left;;"></th> ';
	buffer += ' </tr> ';
	buffer += ' </thead> ';





	return buffer;

}



function descRetiroEntrega(o){
	var h = "";
	if (o==1){
		h = "<div class = 'divgridretiro'>R</div>";
	}else if (o==2){
		h = "<div class = 'divgridentrega'>E</div>";
	}
	return h;
}


function incluirentregasfueraderutas(){
	msg("***incluirentregasfueraderutas***");
	varincluirentregasfueraderutas = !varincluirentregasfueraderutas;
}




function mostrarCabezalRuta(){

	$("#nombreruta").val(vRUTA.VRutaNom);


}


function horaANumero(hora){
	var num;
	var vec = hora.split(":");
	num = vec[0] + "" + vec[1];

	return Number(num);
}


function  getColorDelPin(p){
	 var  color = "";


		 if (p.PuntoHabilitado){

			if (p.PedidoColor != undefined) {
				if (p.PedidoColor != ""){

					color = p.PedidoColor;
					return color;

				}

			}

			 switch(p.Precedencia){
			   case 2:
					color = "008000";
					break;
			   case 1:
					color = "FF0000";
					break;
			   default:
					color = "008000";
					break;
			}

		 }else{
			color = "808080";

		 }

	return color;


}
function cambiarPin(p){
	var urlpin = "";

	var color = getColorDelPin(p);

	if (p.FlagRuteo && p.PuntoOrden != 0){
		urlpin = "https://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|" + color + "|10|b|" + p.PuntoOrden;
	}else{
		switch (p.Precedencia){
		   case 2:
				urlpin = "https://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|" + color + "|10|b|E";
				break;
		   case 1:
				urlpin = "https://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|" + color + "|10|b|R";
				break;
		   default:
				urlpin = "https://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|" + color + "|10|b|E";
				break;
		}

	}
	for (var ii=0; (ii < vecMarkersPuntos.length); ii++){
		var m = vecMarkersPuntos[ii];
		if (m.labelContent == p.PuntoId ){
			m.setIcon(urlpin);
		}

	}

}


function grabarNombreRuta(){
	vNombreRuta = document.getElementById("nombreruta").value;
}

/*** drag and drop de la grilla ***/

function dargAndDropValido(PedidoId, precedencia, ordenOriginal, posicionADondeSeVaAMover){
	var valido = true;
	var pos = 0;

	var encontre = false;
	for (var i=0; i < vectorDePuntosJSON.length && !encontre; i++){
		if (vectorDePuntosJSON[i].PedidoId == PedidoId && vectorDePuntosJSON[i].Precedencia == precedencia){
			pos = i;
			encontre = true;
		}
	}

	if (encontre){
		if (!vectorDePuntosJSON[pos].PuntoHabilitado){

			return false;
		}
		return movimientoValido(vectorDePuntosJSON[pos], posicionADondeSeVaAMover);
	}else{

		return true;
	}
}

function habilitarDragAndDropGrilla() {
	$(function() {
		$("#sortable tbody").sortable({
		cursor: "move",
		update: function(event, ui) {
			/* obtener valor que se esta moviendo */
			var PedidoId 		= buscarDentroDeUnTr(ui.item.context, "pedido");
			var PuntoId 		= buscarDentroDeUnTr(ui.item.context, "puntoid");
			var ordenOriginal 	= buscarDentroDeUnTr(ui.item.context, "orden");
			var precedencia 	= buscarDentroDeUnTr(ui.item.context, "precedencia");



			/* ver donde se va a mover */
			var posicionADondeSeVaAMover = buscarDentroDeUnaTabla(event.target.parentElement, "posicion", PuntoId, "puntoid")


			/* analizar si el movimiento sea valido */
			if (!dargAndDropValido(PedidoId, precedencia, ordenOriginal, posicionADondeSeVaAMover)){
				$('#sortable tbody').sortable("cancel");
				mensajeError("No se puede mover el punto, verifique la precedencia");

			}else{
				/* si el movimiento es valido, se toma el orden que quedó en la tabla */
				asignarOrdenDesdeLaTablaOrdenada(event.target.parentElement);

				/* ordenar y mostrar */
				var pos = minOrdenDelaZona(getZonaEnUso());
				OrdenarVector();
				MarcarOrigen(vectorDePuntosJSON[pos.pos].PuntoId);
				pos = maxOrdenDelaZona(getZonaEnUso());
				MarcarDestino(vectorDePuntosJSON[pos.pos].PuntoId);
				cargarPuntos(false);
				modoOptimizacion	= false;
				calcularYDesplegarLaRuta();

			}
		},
		stop:  function(e, ui) {
			},
		beforeStop:  function(e, ui) {
			},
		placeholder: "sortable-placeholder",
		helper: function(e, tr)
			{
				var $originals = tr.children();
				var $helper = tr.clone();
				$helper.children().each(function(index)
				{
					$(this).width($originals.eq(index).width());
				});
				return $helper;
			}
		}).disableSelection();
	});



}


/* buscar dentro de un td*/

function buscarDentroDeUnTr(tr, campoABuscar){
	var cellsOfRow = tr.getElementsByTagName('td');
	var valorDelCampo = "";
	// Recorremos todas las celdas
	var found = false;
	for (let j = 0; j < cellsOfRow.length && !found; j++) {
		const compareWith = cellsOfRow[j].id;
		// Buscamos el texto en el contenido de la celda
		if (compareWith==campoABuscar) {
			valorDelCampo	= cellsOfRow[j].innerHTML;
			found = true;
		}
	}
	return valorDelCampo;
}

function asignarOrdenDesdeLaTablaOrdenada(tabla){
	var tableReg = tabla;
	for (let i = 1; i < tableReg.rows.length; i++) {
		var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
		// Recorremos todas las celdas
		for (let j = 0; j < cellsOfRow.length; j++) {
			// Buscamos el texto en el contenido de la celda
			if ("puntoid" == cellsOfRow[j].id) {
				var PuntoId = cellsOfRow[j].innerHTML;
				var p = getPUntoById(PuntoId);
				p.PuntoOrden = i;
			}
		}
	}
}

/* buscar dentro de una tabla */
function buscarDentroDeUnaTabla(tabla, campoARetornar, valorABuscar,campoNombre)
{

	var tableReg = tabla;
	var tdEncontrado;
	var pos = 0;
	let total = 0;
	 // Recorremos todas las filas con contenido de la tabla
	for (let i = 1; i < tableReg.rows.length; i++) {
		let found = false;
		var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
		// Recorremos todas las celdas
		for (let j = 0; j < cellsOfRow.length && !found; j++) {
			var compareWith = cellsOfRow[j].innerHTML;
			// Buscamos el texto en el contenido de la celda
			if (compareWith	==	valorABuscar && campoNombre == cellsOfRow[j].id) {
				found = true;
				pos = i;
			}
		}


		if (found){
			if (campoARetornar == "posicion") {
				tdEncontrado =  "" + pos;
			}else{
				found	=	false;
				for (let j = 0; j < cellsOfRow.length && !found; j++) {
					var compareWith = cellsOfRow[j].id;
					// Buscamos el texto en el contenido de la celda
					if (compareWith == campoARetornar) {
						found = true;
						tdEncontrado = cellsOfRow[j].innerHTML;
					}
				}
			}
		}
	}
	return tdEncontrado;
}

function mostrarRegistrosRuta(poly){
    msg("***mostrarRegistrosRuta***");

    var vHtml = "";
    var cntpuntos = 0;
	var cantruteados = 0;
    var cabezal = true;
	var cantTotalDeBultos = 0;
    for (i=0; i < vectorDePuntosJSON.length; i++){
      var p = vectorDePuntosJSON[i];

        if (p.PuntoZonaId == poly){
			if (cabezal){
				var color = vectorDePuntosJSON[i].Color;
				vHtml += '<table  class = "tablaTopPaddingBottom" >';
				vHtml += '<tr>';
				vHtml += '<td><img class= "imgGrid2" src="' + PATHIMAGES + '/paquete.png' + '"></td><td><span class="labeltablaruta">&nbsp;BULTOS:</span>&nbsp;<span class = "valorescabezalruta">[=&&8=]</span> </td><span class="labeltablaruta">' + "[=&&1=]&nbsp&nbsp[=&&2=]" + '</span></td>';

				if (!esModRuta()){
					vHtml += '<td class = "celdaGrid" ><span>Nombre&nbspde&nbspRuta:</td><td><input class = "form-control AttributeCheckBox" id="nombreruta" value ="' + vNombreRuta + '" onblur = "grabarNombreRuta()" maxLenght="20" style= "width: auto;" placeholder="Ingrese Nombre..."></input></span></td>';
				}else{
					if (vRUTA.VRutaEstado == "P"){
						vHtml += '<td class = "celdaGrid" ><span>Nombre&nbspde&nbspRuta:</td><td><input class = "form-control AttributeCheckBox" id="nombreruta"  value ="' + vNombreRuta + '" maxLenght="20" style= "width: auto;" placeholder="Ingrese Nombre..." onblur = "grabarNombreRuta()"></input></span></td>';
					}else{
						vHtml += '<td class = "celdaGrid" ><span>Nombre&nbspde&nbspRuta:</td><td><input class = "form-control AttributeCheckBox" id="nombreruta"  value ="' + vRUTA.VRutaNom + '" maxLenght="20" style= "width: auto;" placeholder="Ingrese Nombre..." disabled></input></span></td>';
					}
				}
				vHtml += '<td class = "celdaGrid" >' + '<input type ="button"  id= "btnrutas2server" class="btn btn-default ButtonAccSoloBorderLarge" style = "min-width:100px" onclick="armarRutas2Server();" title = "Confirmar" value = "Confirmar">';
				vHtml += "</td>";
				var minutosdelta = 0;
				var minllegadas = 0;
				cntpuntos = 0;
				var horaDeInicio = null;
				var distanciatotal=0;
				var tiempototal = 0;
				vHtml += '</tr>';
				vHtml += '</table>';
				vHtml += '<table id="sortable" id ="listaruta_1" style=";" class="gx-tab-spacing-fix-2 WorkWith" data-cellpadding="1" data-cellspacing="2">';
				vHtml += getTableHeader();
				cabezal = false;
				var acumuladoMinutos = 0;
			}
			cantruteados ++;
			if (p.FlagRuteo && !p.PuntoOcultar){
				cntpuntos ++;
				cantTotalDeBultos += p.PedidoCantBultos;

			}

			vHtml += '<tr  data-gxrendering_row="" data-gxrow="0001" class="WorkWithOdd" ' + getClassColorRowEvenOdd(cntpuntos,p.FlagRuteo) + '>';
			vHtml += '<td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '">';
			vHtml += '	<div class="col-sm-1 col-md-1 "> ';
			if (p.FlagRuteo && p.PuntoHabilitado){
				vHtml += '  		<span> <img  id="imgUP" class = "imgGrid" src="' + PATHIMAGES + '/up.png" onclick = "upGrid('+ p.PuntoId +')"/> ';
				vHtml += '  		<img  id="imgDown" class = "imgGrid" src="' + PATHIMAGES + '/down.png" onclick = "downGrid('+ p.PuntoId +')"/> </span>';
			}else{
			  if (!p.PuntoHabilitado){
				  vHtml += p.PuntoEstadoTxt;
			  }
			}
			p.PuntoOrden = cntpuntos;
			vHtml += '	</div>';
			vHtml += ' </td>';

			vHtml += ' <td style="display:none;" id = "orden">' + p.PuntoOrden + '</td> ';


			vHtml += ' <td style="display:none;" id = "puntoid">' + p.PuntoId + '</td> ';
			vHtml += ' <td style="display:none;" id = "precedencia">' + p.Precedencia  + '</td> ';

			vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:right;" onclick = "abrirEnOtraVentana(' + p.PedidoId + ')">';

			if (VAR_USA_PEDIDOEXTERNO){

				vHtml += ' 			<div class="tooltip2">#' + p.PuntoOrden + '-' + p.PedidoExternalId   + '';
			}else{
				vHtml += ' 			<div class="tooltip2">#' + p.PuntoOrden + '-' + p.PedidoId  + '';
			}

			vHtml += '			<span class="tooltiptext2">' + mostrarDetallesPedido(p.PedidoId) + '</span> ';
			vHtml += ' 		</div> '
			vHtml += ' </td>';

			vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:right;">';
				switch(p.Precedencia){
					case 1:
						vHtml += '<span class ="icono" style="background-color: #' + getColorDelPin(p) + ';"> Retiro </span>'
						break;
					case 2:
						vHtml += '<span class ="icono" style="background-color: #' + getColorDelPin(p) + ';"> Retiro </span>'
						break;
					default:
						vHtml += '<span class ="icono" style="background-color: #' + getColorDelPin(p) + ';"> Retiro </span>'
						break;
				}


			//vHtml +=  ' <img   class = "imgTogle" src = "' +  p.Icono + '" onclick = "indicarPunto(' + p.PedidoId  + ')"/>';
			vHtml += ' </td>';


			if (VAR_USA_CANTBULTOS){
				vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:left;">';
				vHtml += '	<strong>' + p.PedidoCantBultos+ '</strong>';
				vHtml += ' </td>';

			}

			if (VAR_USA_NEGOCIO_EN_TABLA) {
				vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:left;">';
				vHtml += '	<strong>' + p.PedidoNegocioNombre + '</strong>';
				vHtml += ' </td>';

			}

			if (VAR_USA_NOMBRE_EN_TABLA) {
				vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:left;">';
				vHtml += '	<strong>' + p.PuntoNombreCliente + '</strong>';
				vHtml += ' </td>';
			}

			/****** columnas opcionales *******/



			if (VAR_USA_COMPLEJIDAD){


				p.PedidoComplejidadClass


				vHtml += '  <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:left;">';
				vHtml += '		<span class = "' + p.PedidoComplejidadClass + '">' +p.PedidoComplejidadDsc + ' </span>';
				vHtml += ' </td>';
			}

			if (VAR_USA_SERVICIO){
				vHtml += '  <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:left;">';
				vHtml += '		<span class = "' + p.PedidoServicioClass + '">' + p.ServicioNombre + ' </span>';
				vHtml += ' </td>';
			}

			if (VAR_USA_PRECLASIFICACION){
				vHtml += '  <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:left;">';
				vHtml += '		' + p.PedidoPreclaDsc + ' ';
				vHtml += ' </td>';

			}

			if (VAR_USA_TIPOVEHICULO){
				vHtml += '  <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:left;">';
				vHtml += '		' + p.PedidoTipoVehiculoNombre + ' ';
				vHtml += ' </td>';

			}


			/***********************************/


			vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:left;">';
			vHtml += p.PuntoDireccion ;
			vHtml += ' </td>';

			vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:left;">';

			vHtml +=  getFormatoDeHora(getFormatoDeFechaHora(new Date(p.PedidoHorarioIni)));
			vHtml += ' </td>';
			vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:left;">';
			vHtml +=  getFormatoDeHora(getFormatoDeFechaHora(new Date(p.PedidoHorarioFin)));
			vHtml += ' </td>';

			vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:right;">';
			cambiarPin(p);
			if ((p.FlagRuteo && p.PuntoHabilitado) || p.VRutaVisitaEstado == "P"){

				vHtml +=  p.PuntoDistanciaArriboTxt ;
			}
			vHtml += ' </td>';
			vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:right;">';
			if ((p.FlagRuteo && p.PuntoHabilitado) || p.VRutaVisitaEstado == "P"){
				vHtml +=  p.PuntoTiempoArriboTxt;
			}
			vHtml += ' </td>';

			var fecha_hora;
			var horasalida = "";
			var minutosASumar =0;


			if (((EXT_MOSTRAR_HORA_EN_RUTA &&  p.PuntoHabilitado && !p.PuntoOcultar) || p.VRutaVisitaEstado == "P") && ( p.FlagRuteo )){
				tiempototal = tiempototal + Number(p.PuntoDuracionVisita) + Math.round(Number(p.PuntoTiempoArribo) / 60) ;
				distanciatotal = distanciatotal + p.PuntoDistanciaArribo ;
				if (horaDeInicio == null){

					horaDeInicio = getFormatoDeFechaHora(new Date(fecha_hora));
				}

				var hora_visita0;
				var hora_horario0;
				var  hora_horario1;
				var  hora_visita1;
				if (p.PuntoTiempoArribo != undefined){
					acumuladoMinutos += 	Math.round(Number(p.PuntoTiempoArribo) / 60); // + minutosdelta;
					var fecha_hora_llegada = sumar_horas(DTFechaHoraInicioRuta, acumuladoMinutos);
					if (p.PuntoTiempoArribo != undefined){
						acumuladoMinutos += Number(p.PuntoDuracionVisita); //  + Math.round(Number(p.PuntoTiempoArribo) / 60);
						fecha_hora = sumar_horas(DTFechaHoraInicioRuta, acumuladoMinutos);
						p.fecha_hora_salida = fecha_hora;
						vectorDePuntosJSON[i].fechaHora = fecha_hora;
						if ((EXT_MOSTRAR_HORA_EN_RUTA && p.FlagRuteo &&  p.PuntoHabilitado) || p.VRutaVisitaEstado == "P"){
						  horasalida =   getFormatoDeHora(getFormatoDeFechaHora(new Date(p.fecha_hora_salida )));
						}
					}
					hora_visita0 = horaANumero(getFormatoDeHora(getFormatoDeFechaHora(new Date(fecha_hora_llegada))));
					hora_horario0 = horaANumero(getFormatoDeHora(getFormatoDeFechaHora(new Date(p.PedidoHorarioIni))));
					hora_horario1 = horaANumero(getFormatoDeHora(getFormatoDeFechaHora(new Date(p.PedidoHorarioFin))));
					hora_visita1= horaANumero(getFormatoDeHora(getFormatoDeFechaHora(new Date(p.fecha_hora_salida))));
				}
			}
			var estilo = getestilohorario(hora_horario0, hora_horario1, hora_visita0, hora_visita1);
			if ((EXT_MOSTRAR_HORA_EN_RUTA && p.FlagRuteo &&  p.PuntoHabilitado)  || p.VRutaVisitaEstado == "P"){
				vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" ' +  estilo + '><strong> ' + getFormatoDeHora(getFormatoDeFechaHora(new Date(fecha_hora_llegada)))  + '</strong>';

				vHtml += ' </td> ';
			} else{

				vHtml += '<td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" style="text-align:right;"></strong></td>';
			}


			p.fecha_hora_llegada = fecha_hora_llegada;
			vHtml += ' <td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" ' + estilo + '>';
			if (((EXT_MOSTRAR_HORA_EN_RUTA &&  p.PuntoHabilitado)  || p.VRutaVisitaEstado == "P") && ( p.FlagRuteo )){
				vHtml += '	<Input type = "text" id ="dur_num_' + p.PuntoId + '" maxlength="3" value = "' + p.PuntoDuracionVisita + '" class = "form-control AttributeCheckBox" style = "max-width:50px" onblur = "validonumero(' + p.PuntoId + ')" placeholder = "5min" ></input>';
				minutosdelta += Number(p.PuntoDuracionVisita);
			}else{
				vHtml += '	<Input type = "text" id ="dur_num_' + p.PuntoId + '" maxlength="3" value = "' + p.PuntoDuracionVisita + '" class = "form-control AttributeCheckBox" style = "max-width:50px" disabled></input>';
				vHtml += '	';
			}
			vHtml += ' </td>';

			if (((EXT_MOSTRAR_HORA_EN_RUTA &&  p.PuntoHabilitado) || p.VRutaVisitaEstado == "P") && ( p.FlagRuteo )){
				vHtml += '<td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" ' + estilo + '><strong>' +  horasalida + '</strong></td>';
			}else{
				vHtml += '<td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p)+ '" ' + estilo + '><strong></strong></td>';
			}
			vHtml += '<td class="gx-tab-padding-fix-1 gx-attribute celdaGrid ' + clasesEstado(p) + '" ' +  estilo + '  >';

			if (p.PuntoHabilitado){
				if (EXT_MOSTRAR_HORA_EN_RUTA && p.FlagRuteo){
					vHtml += '	<img  id="imgCancelar" class = "imgGrid2" src="' + PATHIMAGES + '/cruz.png" onclick = "noIncluirRuta('+ p.PuntoId +')"/> ';
				}else{
					vHtml += '	<img  id="imgCancelar" class = "imgGridMuerto" src="' + PATHIMAGES + '/approve.png" onclick = "noIncluirRuta('+ p.PuntoId +')"/> ';

				}

			}
			vHtml += '</td>';
			vHtml += '</tr>';

      }
    }

      if (!cabezal){

        vHtml += '</table>';
  	    vHtml += '</div>';
        var rep =  '<td"><td><img class= "imgGrid2" src="' + PATHIMAGES + '/recursopin.png' + '"></td><td><span class="labeltablaruta">&nbspPUNTOS:</span>&nbsp<span class = "valorescabezalruta">' + cntpuntos+ "</span></td>";
        rep +='<td><img class = "imgGrid2" src = "' + PATHIMAGES + '/way.png"></td><td><span class="labeltablaruta">RECORRIDO:</span>&nbsp<span class = "valorescabezalruta">' + Math.round(distanciatotal /1000) + '&nbspkm&nbsp</span></td><td><img class = "imgGrid2" src = "' + PATHIMAGES + '/time-left.png"></td><td><span class="labeltablaruta">Duración&nbsp</span><span class = "valorescabezalruta">' + tiempototal  + "</span>&nbspmin&nbsp</td>" ;


		vHtml = vHtml.replace("[=&&8=]", cantTotalDeBultos);
        vHtml = vHtml.replace("[=&&1=]", rep);


        if (EXT_MOSTRAR_HORA_EN_RUTA){
          //vHtml = vHtml.replace("[=&&2=]", "Inicio&nbsp<strong>" + getFormatoDeFechaHora(new Date(DTFechaHoraInicioRuta)) + "</strong>,&nbspfin&nbsp<strong>" + getFormatoDeFechaHora(new Date(fecha_hora))) ;
  		      vHtml = vHtml.replace("[=&&2=]", '<td class = "celdaGrid" ><span class="labeltablaruta">INICIO</td><td >' + getDtControl() + '</span></td><td class = "celdaGrid"><span class="labeltablaruta">FIN</span></td><td><span class = "valorescabezalruta">' + rellenarConNBSP(getFormatoDeFechaHora(new Date(fecha_hora)))) + "</span></td>" ;
  	    }
	}


  vVRutaVisitaFchSalida = getFormatoDeFechaHoraISO(new Date(fecha_hora));
  vVRutaVisitaFchHorEntrada = getFormatoDeFechaHoraISO(new Date(DTFechaHoraInicioRuta));


  ContraerMapa();




  return vHtml;
}



function getestilohorario(hora_horario0, hora_horario1, hora_visita0, hora_visita1){
	var v = "";
	if ((hora_horario0 <= hora_visita0) &&  (hora_visita1 <= hora_horario1)){
		v += ' style="text-align:center; color: black;" ';
	}else{
		v += ' style="text-align:center;  color: red; " ';
	}
	return v;
}

function clasesEstado(v){
  var c = "";

	if (v.PuntoOcultar){
		c = "oculto";
		return c;
	}
	if (v.PuntoHabilitado){
		  if (!v.FlagRuteo){
			c = "muerto";
		  }
	}else{
		c = "estadonohab";
	}
  return c;
}

function rellenarConNBSP(b){
  var v = b.replace(" ","&nbsp");
  return v;
}

function reasignarFechaHoraInicio(){
	refrescarGrillaruta();
}


function refrescarGrillaruta(){
	var div_Puntos = document.getElementById("listaPuntos");
	div_Puntos.innerHTML =  mostrarRegistrosRuta(getZonaEnUso());

	showCalendar();
	habilitarDragAndDropGrilla();
	//$('[data-toggle="tooltip"]').tooltip({html:true});
}

function validonumero(PuntoId){
	var txt = document.getElementById("dur_num_" + PuntoId);
	if (esEntero(txt.value)){
		var p = getPUntoById(PuntoId)
		p.PuntoDuracionVisita = txt.value;
		refrescarGrillaruta();
		console.log("Entero valido");
	}else{
		console.log("Entero no valido");
	}
}


function esEntero(numero){
	var valido = false;
    if (isNaN(numero)){
        alert("Numero incorrecto, debe ingresar un numero entero");
    } else {
        if (numero % 1 == 0) {
            valido = true;
        }
    }
	return valido;
}





function getPUntoById(PuntoId){
  //Dado una posicion retorna si hay mas puntos en la zona
  msg("***hayMasPuntos***");
  var encontre = false;
  var punto = null;
  for(var i = 0; (i < vectorDePuntosJSON.length && !encontre); i++){
    if (vectorDePuntosJSON[i].PuntoId == PuntoId){
      punto = vectorDePuntosJSON[i];
      encontre = true;
    }
  }
  return punto;
}


function noIncluirRuta(PuntoId){
	msg("***noIncluirRuta***");
	var p = getPUntoById(PuntoId);
	p.FlagRuteo = !p.FlagRuteo;
	if (!esModRuta()){
		p.PuntoOrden			=	0;
		p.Ruta = 0;
	}else{
		if (vRUTA.VRutaEstado == "P"){
			p.PuntoOrden			=	0;
			p.Ruta = 0;
		}
	}
	p.PuntoTiempoArribo		=	0;
	p.PuntoTiempoArriboTxt		=		"";
	p.PuntoDistanciaArribo		=		0;
	p.PuntoDistanciaArriboTxt	=		"";
	p.Marca = "-";
	for (i=0; i < vectorDePuntosJSON.length; i++ ){
	  if (vectorDePuntosJSON[i].PedidoId == p.PedidoId &&  vectorDePuntosJSON[i].PuntoId != p.PuntoId){
		vectorDePuntosJSON[i].FlagRuteo =  p.FlagRuteo;
		if (!esModRuta()){
			vectorDePuntosJSON[i].PuntoOrden			=	0;
		}else{
			if (vRUTA.VRutaEstado == "P"){
				vectorDePuntosJSON[i].PuntoOrden			=	0;
			}
		}
		vectorDePuntosJSON[i].PuntoTiempoArribo			=		0;
		vectorDePuntosJSON[i].PuntoTiempoArriboTxt		=		"";
		vectorDePuntosJSON[i].PuntoDistanciaArribo		=		0;
		vectorDePuntosJSON[i].PuntoDistanciaArriboTxt	=		"";
		vectorDePuntosJSON[i].Marca = "-";
	  }
	}
	if (!esModRuta()){
		limpiarRuta();
		modoOptimizacion = false;
		rutear(true);
	}else{
		if (vRUTA.VRutaEstado == "P"){
			limpiarRuta();
			modoOptimizacion = false;
			rutear(true);
		}else{
			modoOptimizacion = false;
			rutear(false);
		}
	}
}


function addZero(i) {
  msg("**addZero***");
  //agrega un 0 adelante si es menor que 10, se usa para formatear por ej 9 => 09
  if (Number(i) < 10) {
    i = "0" + i;
  }
  return i;
}

function getFormatoDeFechaHoraISO(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // months are zero indexed
    var day = date.getDate();
  	var hour;
  	if (esHoraUTC){
  		hour = date.getUTCHours();
  	}else{
  		hour = date.getHours();
  	}
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var hourFormatted = hour % 24 || 0; // hour returned in 24 hour format
    var minuteFormatted = minute < 10 ? "0" + minute : minute;
    var morning = ""; //hour < 12 ? "am" : "pm";
    return  addZero(year) + "-" + addZero(month)  + "-" + addZero(day) + "T" + addZero(hourFormatted) + ":" + addZero(minute);

    //  msg("***getFormatoDeFechaHora***");
    //  var s = "<span>" + addZero(day) + "/" + addZero(month) + "/" + addZero(year) + "&nbsp" + addZero(hour) + ":" + addZero(minute) + "</span>";
    //  return s;
}



function getFormatoDeFechaHora(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // months are zero indexed
    var day = date.getDate();
  	var hour;
  	if (esHoraUTC){S
  		hour = date.getUTCHours();
  	}else{
  		hour = date.getHours();
  	}
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var hourFormatted = hour % 24 || 0; // hour returned in 24 hour format
    var minuteFormatted = minute < 10 ? "0" + minute : minute;
    var morning = "";
    return  addZero(day) + "/" + addZero(month) + "/" + addZero(year) + " " + hourFormatted + ":" + minuteFormatted + morning;
}

function getClassColorRowEvenOdd(i,FlagRuteo){
  //alterna el coolor de la grilla de ruta segun par impar
  msg("***getClassColorRowEvenOdd**");
  var v="";
  if (FlagRuteo){
    if (i % 2==0){
      v= 'style="background-color:' + vCOLOR_GRILLA_PAR + ';"';
    }else{
      v = 'style="background-color:' + vCOLOR_GRILLA_IMPPAR + ';"';
    }
  }else{
      v = 'style="background-color:' + vCOLOR_NO_INCLUIDO + ';"';
  }
  return v;
}

function OrdenarVectorXDistancia(){
    //ordena el vector de Puntos segun el atributo orden
    msg("***OrdenarVectorXDistancia***");
    vectorDePuntosJSON.sort(function (a, b)
    {
        return a.distancia_aux-b.distancia_aux;
    });
}

function OrdenarVector(){
    //ordena el vector de Puntos segun el atributo orden
    msg("***OrdenarVector***");
    vectorDePuntosJSON.sort(function (a, b)
    {
        return a.PuntoOrden-b.PuntoOrden;
    });
}









function movimientoValido(PuntoAMover, PuntoOrdenQueOcuparia){
	var ordenUltimoTrancado = 0;

	if (!PuntoAMover.PuntoHabilitado){
		return false;
	}

	for (var ii=0; ii< vectorDePuntosJSON.length; ii++){
		if (vectorDePuntosJSON[ii].PuntoZonaId == PuntoAMover.PuntoZonaId ){
			if ((vectorDePuntosJSON[ii].PedidoId == PuntoAMover.PedidoId) && (vectorDePuntosJSON[ii].PuntoId != PuntoAMover.PuntoId)) {
				if (vectorDePuntosJSON[ii].Precedencia > PuntoAMover.Precedencia){
					if (PuntoOrdenQueOcuparia >= vectorDePuntosJSON[ii].PuntoOrden){
						return false;
					}
				}else if (vectorDePuntosJSON[ii].Precedencia < PuntoAMover.Precedencia){
					if (PuntoOrdenQueOcuparia <= vectorDePuntosJSON[ii].PuntoOrden){
						return false;
					}
				}
			}
			if (!vectorDePuntosJSON[ii].PuntoHabilitado){/*orden que ocuparia debe ser mayor que el ultimo trancado */
				if (ordenUltimoTrancado < vectorDePuntosJSON[ii].PuntoOrden){
					ordenUltimoTrancado = vectorDePuntosJSON[ii].PuntoOrden;
				}
			}

		}

	}



	if (ordenUltimoTrancado >= PuntoOrdenQueOcuparia){
			return false;
	}

	return true;
}







function moverOrdenPunto(direccion, PuntoId){
  var marca = "";
  //Mueve el Punto arriba o abajo segun el orden que establesca el usuario
  msg("***moverOrdenPunto***");
  var encontre = false;
  for (var i=0;  ((i < vectorDePuntosJSON.length) && (!encontre)); i++){
    if (vectorDePuntosJSON[i].PuntoZonaId == getZonaEnUso()){
      if (vectorDePuntosJSON[i].PuntoId == PuntoId){
        if (direccion == "D"){ //Si se mueve hacia abajo (incrementa la posición)
          if (i< (vectorDePuntosJSON.length - 1)){
            // Swap con el siguiente
            encontre = true;
            var posicionSiguiente = 0;
            var posinicial = i + 1;
            posicionSiguiente = posinicial;
            for (var j=posinicial; ((!vectorDePuntosJSON[j].FlagRuteo) || (vectorDePuntosJSON[j].PuntoZonaId !=getZonaEnUso()) && (j < vectorDePuntosJSON.length)); j++){
              posicionSiguiente = j + 1;
            }
			var PuntoOrdenSigiente = vectorDePuntosJSON[posicionSiguiente].PuntoOrden;
			if (movimientoValido(vectorDePuntosJSON[i],PuntoOrdenSigiente)){
					vectorDePuntosJSON[posicionSiguiente].PuntoOrden = vectorDePuntosJSON[i].PuntoOrden;
					vectorDePuntosJSON[i].PuntoOrden = PuntoOrdenSigiente;
			}else{
				mensajeError("No se puede mover el punto, verifique la precedencia");
				return;
			}
          }
        }else if (direccion == "U"){ //Si se mueve hacia arriba (decrementa la posicion)
          if (i > 0){
            //Swap con el anterior
            encontre = true;
            var posicionAnterior = 0;
            var posinicial = i - 1;
            posicionAnterior = posinicial;
            for (var j=posinicial; ((!vectorDePuntosJSON[j].FlagRuteo) || (vectorDePuntosJSON[j].PuntoZonaId != getZonaEnUso()) && (j > 0)); j--) {
              posicionAnterior = j - 1;
            }
			var PuntoOrdenAnterior = vectorDePuntosJSON[posicionAnterior].PuntoOrden;
			if (movimientoValido(vectorDePuntosJSON[i],PuntoOrdenAnterior)){
					vectorDePuntosJSON[posicionAnterior].PuntoOrden = vectorDePuntosJSON[i].PuntoOrden;
					vectorDePuntosJSON[i].PuntoOrden = PuntoOrdenAnterior;
			}else{

				mensajeError("No se puede mover el punto, verifique la precedencia");
				return;
			}

          }
        }
      }
    }
  }

  OrdenarVector();
  var pos = minOrdenDelaZona(getZonaEnUso());
  MarcarOrigen(vectorDePuntosJSON[pos.pos].PuntoId)
  pos = maxOrdenDelaZona(getZonaEnUso());
  MarcarDestino(vectorDePuntosJSON[pos.pos].PuntoId);
  cargarPuntos(false);



}





function upGrid(PuntoId){
    msg("***upGrid " + PuntoId + "***");
    limpiarRuta();
    moverOrdenPunto("U",PuntoId);
    modoOptimizacion= false;
    calcularYDesplegarLaRuta();
}

function downGrid(PuntoId){
  msg("***downGrid" + PuntoId + "***");
  limpiarRuta();
  moverOrdenPunto("D",PuntoId);
  modoOptimizacion = false;
  calcularYDesplegarLaRuta();
}


function inicializarInfoRutas(ZonaId){
  for (i=0; (i<vectorDePuntosJSON.length);i++){
    if (vectorDePuntosJSON[i].PuntoZonaId == ZonaId){
      vectorDePuntosJSON[i].PuntoDistanciaArribo  = 0;
      vectorDePuntosJSON[i].PuntoDistanciaArriboTxt     = "";
      vectorDePuntosJSON[i].PuntoTiempoArribo  = 0;
      vectorDePuntosJSON[i].PuntoTiempoArriboTxt     = "";
      vectorDePuntosJSON[i].start_address  = "";
      vectorDePuntosJSON[i].end_address    = "";
    }
  }
}

function asignarDistanciaYTiempoAPunto(start_address, end_address, PuntoId, PuntoDistanciaArribo, PuntoDistanciaArriboTxt, PuntoTiempoArribo, PuntoTiempoArriboTxt){

  var encontre = false;
  for (i=0; ((i<vectorDePuntosJSON.length) && (!encontre));i++){
    if (vectorDePuntosJSON[i].PuntoId == PuntoId){
      encontre = true;
      vectorDePuntosJSON[i].PuntoDistanciaArribo  = PuntoDistanciaArribo;
      vectorDePuntosJSON[i].PuntoDistanciaArriboTxt     =  PuntoDistanciaArriboTxt;
      vectorDePuntosJSON[i].PuntoTiempoArribo  = PuntoTiempoArribo;
      vectorDePuntosJSON[i].PuntoTiempoArriboTxt     = PuntoTiempoArriboTxt;
      vectorDePuntosJSON[i].start_address  = start_address;
      vectorDePuntosJSON[i].end_address    = end_address;
    }
  }
}


function asignarOrdenAPunto(PuntoId, orden){
  msg("***obtenerObjPunto***");
  var encontre = false;
  for (i=0; ((i<vectorDePuntosJSON.length) && (!encontre));i++){
    if (vectorDePuntosJSON[i].PuntoId == PuntoId){
      encontre = true;
      vectorDePuntosJSON[i].PuntoOrden = orden;
    }
  }
}

function obtenerObjPunto(PuntoId){
  msg("***obtenerObjPunto***");
  var encontre = false;
  var Punto = undefined;
  for (i=0; ((i<vectorDePuntosJSON.length) && (!encontre));i++){
    if (vectorDePuntosJSON[i].PuntoId == PuntoId){
      encontre = true;
      Punto = vectorDePuntosJSON[i];
    }
  }
  return Punto;
}

function obtenerPuntoId(vecDiccionario, vecPuntos, i){
  msg("***obtenerPuntoId***");
  var PuntoId;
  if (i > vecDiccionario.length) {
    return 0;
  }

  var posPunto = vecDiccionario[i];
  PuntoId = vecPuntos[posPunto];

  return PuntoId

}



function MarcarOrigen(PuntoId){
  var Punto = obtenerObjPunto(PuntoId);
  msg("ZZZZZZ1");
  for (i = 0; i < vectorDePuntosJSON.length; i++ ){
      if (vectorDePuntosJSON[i].PuntoZonaId == Punto.PuntoZonaId){
        if (vectorDePuntosJSON[i].PuntoId == PuntoId){
            vectorDePuntosJSON[i].Marca = vMarcaORIGEN;
        	msg("ZZZZZZ2 " + PuntoId);
        }else{

          if (vectorDePuntosJSON[i].Marca == vMarcaORIGEN) {
            vectorDePuntosJSON[i].Marca = "";
          }
        }
      }
  }
}


function MarcarOrigenDesdeMarker(){
  msg("***MarcarOrigen***")
  if (selMarker == undefined){
    mensajeNotificacion("Debe seleccionar un punto de origen");
  }
  var PuntoId = selMarker.labelContent;
  MarcarOrigen(PuntoId);
  cargarPuntos(false);
}







function MarcarDestino(PuntoId){
  var Punto = obtenerObjPunto(PuntoId);
  for (i = 0; i < vectorDePuntosJSON.length; i++ ){
      if (vectorDePuntosJSON[i].PuntoZonaId == Punto.PuntoZonaId){
          if (vectorDePuntosJSON[i].PuntoId == PuntoId){
              vectorDePuntosJSON[i].Marca = vMarcaDESTINO;
                vectorDePuntosJSON[i].Icon = getIcono(vMarcaDESTINO);
          }else{
            if (vectorDePuntosJSON[i].Marca == vMarcaDESTINO) {
              vectorDePuntosJSON[i].Icon = getIcono("");
              vectorDePuntosJSON[i].Marca = "";
            }
          }
      }
  }
}



function MarcarDestinoDesdeMarker(){
  msg("***MarcarDestino***")
  if (selMarker==undefined){
    mensajeNotificacion("Debe seleccionar un punto de destino");
  }
  var PuntoId = selMarker.labelContent;
  MarcarDestino(PuntoId);
  cargarPuntos(false);
}


function getParmPoligonosFromServer(_PoligonoId, _PoligonoNombre,_PoligonoUsuario,_Modo){

  var parm = {
    PoligonoId: _PoligonoId,
    PoligonoNegocioId:  EXT_VAR_NEGOCIOID,
    PoligonoSucursalId: EXT_VAR_NEGOCIOSUCURSALID,
    PoligonoNombre:   _PoligonoNombre,
    PoligonoUsuario:  _PoligonoUsuario,
    Modo: _Modo
  }
  return parm;

}

function cargarpoly(_PoligonoId, mostrar){

  var p = getParmPoligonosFromServer(_PoligonoId, "","","CON_PUNTOS");
  getPoligonosFromServer(p, mostrar);

}



function buscarpolyXdefectosSinClickear(){

    var p = getParmPoligonosFromServer("","","","CON_PUNTOS");
    getPoligonosFromServer(p, false);

}

function buscarpoly(){

  var ele = document.getElementById('txtbuscarpoly').value;
  if (ele.length >= MINCHARSSUGEST){
    var p = getParmPoligonosFromServer("",ele,"","SIN_PUNTOS");
    getPoligonosFromServer(p);
  }else{
	  if (ele.length == 0){
		var div = document.getElementById("poligonosdisponibles");
		div.innerHTML = "";
		expandirMenuLateral();
		refrescarMenuPoly(0);
	  }
  }
}



function presentarPoligonosEnDiv(vPoly){
  //Mestra los nombres de poligonos en el div flotante
  msg("***presentarPoligonosEnDiv***");
  var buffer = "";
  var div = document.getElementById("poligonosdisponibles");

  var cantitems = 0;
  buffer = '<ul style="height: auto;text-align: left;overflow: hiden">';
  for(i=0; (i < vPoly.length); i++){
      var p = vPoly[i];
      buffer += "<li class = 'lista' ";
      buffer += ' onclick="cargarpoly(' + "'" + p.PoligonoId + "'" +',true) " ';
      buffer += ">";
      buffer += p.PoligonoNombre;
      buffer += "</li>";
      cantitems ++;
  }
  buffer += "</ul>";
  div.innerHTML = buffer;
  refrescarMenuPoly(cantitems);

}

function convertirPuntosAnumericos(vec){
  msg("***convertirPuntosAnumericos***");
  /* convierte puntos del ws de poligonos a puntos del googlemaps */
  var puntos = [];
  for(i=0; (i < vec.length); i++){
    var x = vec[i];
    var p = new google.maps.LatLng({lat: x.PoliPuntoLat  ,lng:  x.PoliPuntoLong});
    puntos.push(p);
  }
  return puntos;
}

function cargarPligonoObtenido(vPoly,mostrar){
  //Muestra el poligono en el mapa
  msg("***cargarPligonoObtenido***");

  for(var k=0; (k < vPoly.length); k++){
      var p = vPoly[k];

      if (!extistePolyAlArray(p.PoligonoId)){
		var puntos = convertirPuntosAnumericos(p.puntos);

		polyFromTheScratch(p.PoligonoId, p.PoligonoNombre, puntos,false);
      }
  }
  cargarPoligonosEnLista(true);

}

function setPolyModificado(id,mod){

//  msg("ID::::" + id);

  var p = getPolyById(id);
  p.estadosalvado = mod;
  if (mod == SALVADO){
    p.jsonpoly.PoligonoMode = "UPD";
  }

  var nomcampo =  "campo_" + id;

  //setEdit(id);
  //restaurar(id,nomcampo);

}



function polyFromTheScratch(id,desc,puntos,mostrar){

  var newShape = new google.maps.Polygon({
    paths:          puntos,
    strokeColor:    vPoligonoColor,
    strokeOpacity:  vOPACIDADPOLYBORDE,
    strokeWeight:   vAnchoLinea,
    fillColor:      vPoligonoFillColor,
    fillOpacity:    vOPACIDADPOLY,
    editable: true,
    tag:      id,
    caption:  desc,
    ov:"",
    jsonpoly: "",
    estadosalvado: "1",
    zIndex:999999,
	visible: mostrar
  });


  var _PoligonoId = id;
  var _PoligonoNegocioId = EXT_VAR_NEGOCIOID;
  var _PoligonoSucursalId = EXT_VAR_NEGOCIOSUCURSALID;
  var _PoligonoNombre = desc;
  var _PoligonoUsuario = EXT_VAR_USUARIO;
  var _PoligonoMode = "UPD";

  newShape.jsonpoly = newPoly(_PoligonoId, _PoligonoNegocioId, _PoligonoSucursalId, _PoligonoNombre, _PoligonoUsuario, _PoligonoMode);
  google.maps.event.addListener(newShape, 'click', function(e) {
      setSelection(newShape);
  });

  google.maps.event.addListener(newShape, 'dblclick', function(e) {
      setSelection(newShape);
      doInfoWindow(newShape, e);
  });

/*

  google.maps.event.addListener(newShape.getPath(), 'insert_at', function() {
      //setPolyModificado(newShape.tag, EDITADO);
  });
  google.maps.event.addListener(newShape.getPath(), 'remove_at', function() {
      //setPolyModificado(newShape.tag, EDITADO);
  });
  google.maps.event.addListener(newShape.getPath(), 'set_at', function() {
      //setPolyModificado(newShape.tag, EDITADO);
  });
 */

  agregarPolyAlArray(newShape);

  if (mostrar){
	setSelection(newShape);
	newShape.setMap(map);
	cargarPoligonosEnLista(mostrar);
  }

  //return newShape;
}


function getPolyById(id){
  msg("***getPolyById***");
  var encontre  = false;
  var poly      = undefined;
  for (i = 0; ((i< vecPoligonos.length) && (!encontre)); i++){
	msg("====> " + vecPoligonos[i].tag + " <-> " +  id);
    if (vecPoligonos[i].tag == id){

      encontre = true;
      poly = vecPoligonos[i];
    }
  }
  return poly;
}


function inconoEstadoSalavadoPoly(id){
  msg("***inconoEstadoSalavadoPoly***");
  //Get estado poly
  var poly  = getPolyById(id);
  var icono = "";
  if (poly  ==  undefined){
    icono = "editar.svg";
  }else{
    switch(poly.estadosalvado){
       case "0":
            icono = "editar.svg";
            break;
       case "1":
            icono = "guardar.svg";
            break;
       default:
            icono = "guardar.svg";
            break;
    }
  }
  return PATHIMAGES + "/" + icono;

}

function actualizarJSONPoly(valor, id){
  var p  = getPolyById(id);
  if (p == undefined){return};
  p.caption = valor;
  if (p.jsonpoly.PoligonoId == "0"){
    var _PoligonoId = valor.replace(" ","_");
    var _PoligonoNegocioId = EXT_VAR_NEGOCIOID;
    var _PoligonoSucursalId = EXT_VAR_NEGOCIOSUCURSALID;
    var _PoligonoNombre = valor;
    var _PoligonoUsuario = EXT_VAR_USUARIO;
    var _PoligonoMode = "INS";
    p.jsonpoly = newPoly(_PoligonoId, _PoligonoNegocioId, _PoligonoSucursalId, _PoligonoNombre, _PoligonoUsuario, _PoligonoMode);
  }else{
    p.jsonpoly.PoligonoNombre = valor;
  }
  cargarPoligonosEnLista(true);
}

function limpiarRuta(){
  for (var i=0; (i < vecDireccionDisplay.length); i++){
    d = vecDireccionDisplay[i];
    d.setMap(null);
  }

  for (var i=0; i < vectorDePuntosJSON.length; i++){
	  vectorDePuntosJSON[i].FlagRuteo = false;
	  vectorDePuntosJSON[i].PuntoOrden = 0;
  }
  cargarPuntos(false);
  ExpandirMapa();
  var div_Puntos = document.getElementById("listaPuntos");
  div_Puntos.innerHTML = "";


}

function eliminarPolyById(id){
  var p = getPolyById(id);
  limpiarPoligono(p);
}
function listaDePoligonos(mostrar){
  msg("***listaDePoligonos***");
  var bufferHtml = '';
  for (var i=0; i < vecPoligonos.length; i++){
      var idckh = 'chk_poly' + vecPoligonos[i].tag;
      bufferHtml += '<div class="checkbox">';
      bufferHtml += '<label for="'+ idckh +'"> ';
	  if (vecPoligonos[i].visible){
			bufferHtml += '<input name="' + idckh + '" id="' + idckh + '" type="checkbox" checked  onclick="AccionPoligonos(' + "'" + vecPoligonos[i].tag + "'" +')">';
	  }else{
			bufferHtml += '<input name="' + idckh + '" id="' + idckh + '" type="checkbox"   onclick="AccionPoligonos(' + "'" + vecPoligonos[i].tag + "'" +')">';
	  }
      bufferHtml += vecPoligonos[i].caption
      bufferHtml += '</label>';
      if (vecPoligonos[i].jsonpoly != ""){
        bufferHtml += '<div style = "float:right">';
        bufferHtml += '<img class = "imgGrid" src="' + PATHIMAGES + '/trash.png" onclick="eliminarPolyById(' + vecPoligonos[i].tag + ');cargarPoligonosEnLista(false);">';
        bufferHtml += '</div>';
      }
      bufferHtml += '</div>';



  }
  return bufferHtml;
}

function AccionPoligonos(tag){
    msg("***AcccionZonas***");
    var p = getPolyById(tag);

  	var idckh = 'chk_poly' + tag;
      var chk = document.getElementById(idckh);
  	if (chk==null){

  		p.setMap(null);
  	}else{
  		if (chk.checked){
		  p.visible = true;
  		  p.setMap(map);
  		}else{
		  p.visible = false;
  		  p.setMap(null);
  		}
  	}
}


function guardarEditPoly(PoligonoId){
  var poly = getPolyById(PoligonoId);
  var val = document.getElementById(poly.tag + 'nompoly').value;
  actualizarJSONPoly(val, PoligonoId);
  salvandoPoly(poly);
}

function cancelarEditPoly(PoligonoId){
  var p = getPolyById(PoligonoId);
  cerrarInfoWindows(p);
}

function cerrarInfoWindows(poly){
  try {
    poly.ov.close();
  }catch(err){
    alert(err);
  }
}

function doInfoWindow(newShape, e){
  if (newShape == undefined){
    return;
  }
  if (newShape.ov!=undefined ){
    try {
      newShape.ov.close();
    }catch(err){

    }
  }

  var html = '<div><div style = "display:inline-block"> ';


  html += '</div><div style = "display:block;"><span><img class= "imgGrid2" src="' + PATHIMAGES+ '/edit.png"/>';
  html += '<input value= "' + newShape.caption + '" style = "float: right;margin-right: 10px;width: 300px;margin-bottom: 10px;" type = "text" id = "' + newShape.tag + 'nompoly" placeholder="Ingrese nombre" class="form-control AttributeCheckBox" maxlength = "20" style = "width:100px"/></span></div>';
  html += '<div style="float:right; "><span><input  class = "btn btn-default ButtonAccSoloBorderLarge" style = " min-width: 150px; font-size: 11px; " type="button" value="Guardar" onclick = "guardarEditPoly(' + newShape.tag + ');"/><input class = "btn btn-default ButtonAccSoloBorderLarge" style = " min-width: 150px; font-size: 11px; " type="button" value="Cancelar" onclick = "cancelarEditPoly(' + newShape.tag + ');"/></span></div> </div>';

  newShape.ov = new google.maps.InfoWindow;
  newShape.ov.setContent(html);
  newShape.ov.setPosition(e.latLng);
  newShape.ov.open(map);

  setTimeout(function () { newShape.ov.close(); }, vTIEMPOINFOWINDOW);

}

function getIdUnicoPoligono(p){
  var v = (EXT_VAR_NEGOCIOID *10000) + (EXT_VAR_NEGOCIOSUCURSALID  * 1000000)   + Math.round(calcularElPerimetroDelPoligono(p.getPath()))
  var dt = new Date();
  var dtbuffer = addZero(dt.getDay()) + "" + addZero(dt.getHours()) + "" + addZero(dt.getMinutes()) + "" + addZero(dt.getSeconds());
  v = v + dtbuffer;
  return v;
}

function setDatosPoly(e){
  var newShape = e.overlay;
  newShape.type = e.type;

  newShape.tag      =  getIdUnicoPoligono(newShape); //newShapeUltId = newShapeUltId + 1;
  newShape.caption  = newShapeUlPuntoTiempoArriboTxt = "Poligono " + getFormatoDeFechaHora(new Date());

  var _PoligonoId = getIdUnicoPoligono(newShape);
  var _PoligonoNegocioId = EXT_VAR_NEGOCIOID;
  var _PoligonoSucursalId = EXT_VAR_NEGOCIOSUCURSALID;
  var _PoligonoNombre = "";
  var _PoligonoUsuario = EXT_VAR_USUARIO;
  var _PoligonoMode = "INS";
  newShape.jsonpoly = newPoly(_PoligonoId, _PoligonoNegocioId, _PoligonoSucursalId, _PoligonoNombre, _PoligonoUsuario, _PoligonoMode);

  google.maps.event.addListener(newShape, 'click', function(e) {
      setSelection(newShape);
  });
  google.maps.event.addListener(newShape, 'dblclick', function(e) {
      setSelection(newShape);
      doInfoWindow(newShape,e);
  });
  setSelection(newShape);
  agregarPolyAlArray(newShape);
  google.maps.event.addListener(newShape.getPath(), 'insert_at', function() {
      //setPolyModificado(newShape.tag, EDITADO);
  });
  google.maps.event.addListener(newShape.getPath(), 'remove_at', function() {
      //setPolyModificado(newShape.tag, EDITADO);
  });
  google.maps.event.addListener(newShape.getPath(), 'set_at', function() {
      //setPolyModificado(newShape.tag, EDITADO);
  });
  cargarPoligonosEnLista(true);
}

function inicializarDrawingManager(){
    //INICIALIZA EL DRAWING MANAGER
    var drawingManager = showDrawingManager();
    google.maps.event.addListener(drawingManager, 'overlaycomplete', function(e) {
		if (e.type != google.maps.drawing.OverlayType.MARKER) {
		    // Switch back to non-drawing mode after drawing a shape.
            drawingManager.setDrawingMode(null);
            // Add an event listener that selects the newly-drawn shape when the user
            // mouses down on it.
			if (e.type == google.maps.drawing.OverlayType.POLYGON){
				setDatosPoly(e);
			}else{
				if (e.type == google.maps.drawing.OverlayType.CIRCLE){
					setDatosClicle(e);
				}
			}

        }
    });
}

function setDatosClicle(e){
	currentOverlay= e.overlay
	currentOverlay.addListener('rightclick', overlayClickListener);
	currentOverlay.addListener('radius_changed', showRadius);
	currentOverlay.addListener('center_changed', showRadius);
	showRadius();


}




  function showRadius(){
      console.log('showRadius');
      if(infoWindow != null){
          infoWindow.setMap(null);
      }
      $("#map").unbind("mousemove");
      $("#distanceSign SPAN.radiusValue").text((currentOverlay.getRadius()/1000.0).toFixed(3));
      var content = $("#distanceSign").html();
      infoWindow = new google.maps.InfoWindow({
          content:content,
          position:currentOverlay.getCenter()
      });
      infoWindow.open(map);
      $("#map").mousemove(function (e) {
          infoWindow.setMap(null);
      });

  }

  // remove the overlay
function overlayClickListener() {
    console.log('overlayClickListener');
	  currentOverlay.setMap(null);
	  google.maps.event.clearInstanceListeners(currentOverlay);
	  currentOverlay = null;
}


function cargarPoligonosEnLista(mostrar){
    var d = document.getElementById("divlistazonas");
	if (d != undefined){
		d.innerHTML =  listaDePoligonos(mostrar);
	}
}


function polygonCenter(poly) {
    msg("***polygonCenter***");
    //DATO UN POLIGONO RETORNA LAS COORDENAS DEL CENTRO
    var latitudes = [];
    var longitudes = [];
    var vertices = poly.getPath();
    // put all latitudes and longitudes in arrays
    for (var i = 0; i < vertices.length; i++) {
        longitudes.push(vertices.getAt(i).lng());
        latitudes.push(vertices.getAt(i).lat());
    }
    // sort the arrays low to high
    latitudes.sort();
    longitudes.sort();
    // get the min and max of each
    var lowX = latitudes[0];
    var highX = latitudes[latitudes.length - 1];
    var lowy = longitudes[0];
    var highy = longitudes[latitudes.length - 1];
    // center of the polygon is the starting point plus the midpoint
    var centerX = lowX + ((highX - lowX) / 2);
    var centerY = lowy + ((highy - lowy) / 2);
    return (new google.maps.LatLng(centerX, centerY));
}



function repintarPoligono(_zona ,poly, _vPoligonoFillColor, _vPoligonoColor, _vAnchoLinea){
    msg("***repintarPoligono***");
    //PINTA EL POLIGONO EN EL MAPA
    var poligono = new google.maps.Polygon({
      paths:          poly,
      strokeColor:    _vPoligonoColor,
      strokeOpacity:  vOPACIDADPOLYBORDE,
      strokeWeight:   _vAnchoLinea,
      fillColor:      _vPoligonoFillColor,
      fillOpacity:    vOPACIDADPOLY,
      editable: false,
      tag:      _zona.ZonaId,
      caption:  _zona.ZonaDsc,
      ov:"",
      jsonpoly: "",
      estadosalvado: "0",
	  visible: true
    });

    google.maps.event.addListener(poligono, 'click', function() {

		 if (selectedShape == undefined || poligono.tag != selectedShape.tag){
			 alertify.confirm("¿Confirma seleccionar la zona " + poligono.caption + "?", function (e) {
				if (e) {
					limpiarRuta();
					setSelection(poligono);

				}
			});
		}
        //TODO setSelection(newShape);
    });
    poligono.setMap(map);
    agregarPolyAlArray(poligono);
}





function extistePolyAlArray(tag){
  msg("***extistePolyAlArray***");
  //infica si existe el poligono en el vetor de vecPoligonos
  var existe = false;
  for (i=0; ((i<vecPoligonos.length) && (!existe)); i++){
    if (vecPoligonos[i].tag == tag){
      existe = true;
    }else{
      if (vecPoligonos[i].jsonpoly != undefined){
        if (vecPoligonos[i].jsonpoly.PoligonoId == tag){
          existe = true;
        }
      }
    }
  }
  return existe;
}

function listaPoligonos(){
    msg("***listaPoligonos****");
    vecPoligonos.forEach(function (v) {
        msg(v.tag);

    });
}




function agregarPolyAlArray(p){
  msg("***agregarPolyAlArray****");
  //agrega poligono y array si no existe
  if (!extistePolyAlArray(p.tag)){
    vecPoligonos.push(p);
  }
}




function eliminarPoly(){

  msg("Eliminado zona " + getZonaEnUso());
  limpiarPoligono(selectedShape);
}



function limpiarPoligono(poly){
  var encontro=false;
    //quita el poligono del mapa
  for (i=0; ((i < vecPoligonos.length) && (!encontro)); i++){
    if (vecPoligonos[i].tag == poly.tag){
      encontro = true;
      vecPoligonos[i].setMap(null);
      vecPoligonos.splice( i, 1);
    }
  }
}


function calcularElAreaDelPoligono(v){
  var area = google.maps.geometry.spherical.computeArea(v);
  return area;
}

function calcularElPerimetroDelPoligono(v){
  var p = google.maps.geometry.spherical.computeLength(v);
  return p;
}


function showDrawingManager(){
    var managerOptions = {
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
			drawingModes: ['circle', 'polygon']
            //drawingModes: [google.maps.drawing.OverlayType.POLYGON]
		},
        markerOptions: {
            editable: true

        },
        polygonOptions: {
            fillColor:  vCOLORFONOSPOLY_X_DEFECTO ,
            strokeColor: vCOLORBORDEPOLY_X_DEFECTO,
            tag: newShapeUltId,
            strokeOpacity:  vOPACIDADPOLYBORDE,
            fillOpacity:    vOPACIDADPOLY,
            caption: newShapeUlPuntoTiempoArriboTxt,
            ov:null,
            jsonpoly:"",
            estadosalvado: "0"
        },
		circleOptions: {
			editable: true,
			fillColor:  vCOLORCIRCLE_X_DEFECTO ,
            strokeColor: vCOLORBORDECIRCLE_X_DEFECTO,
            tag: newShapeUltId,
            strokeOpacity:  vOPACIDADPOLYBORDE,
            fillOpacity:    vOPACIDADPOLY,
            caption: newShapeUlPuntoTiempoArriboTxt,
            ov:null,
            jsonpoly:"",
            estadosalvado: "0"
		},
        polylineOptions: {
            strokeColor: vCOLORBORDEPOLY_X_DEFECTO
        }
    }

    var drawingManager = new google.maps.drawing.DrawingManager(managerOptions);
    drawingManager.setMap(map);
    return drawingManager;
}

function clearSelection() {
    //DESMarca LA FIGURA COMO editable
    if (selectedShape) {
        msg("clearSelection");
        selectedShape.setEditable(false);
        selectedShape = null;
        numberOfShapes--;
    }
}

function setSelection(shape) {
   //Marca LA FIGURA COMO EDITABLE
   selectedZona = shape.tag;
   msg("seleccionar zona " + selectedZona);
   clearSelection();
   selectedShape = shape;
   shape.setEditable(true);
   numberOfShapes++;
}


function getZonasCreacionKML(){
  msg("***getZonasCreacionKML***");
  var src = URLZONAS;
  kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
}


function NewZona(){
  msg("***NewZona***");
  var Zona = {
    ZonaId: 0,
    ZonaDsc: "",
    ZonaColorFondo : "",
    ZonaColorBorde : "",
    ZonaPoly : [] ,
    getVector: function(){
          return this.ZonaPoly;
    }
  };
  return Zona;
}


function getParametrosZonas(){
    msg("***getParametrosZonas***");
    var parametro = {
      fNegocioId: EXT_VAR_NEGOCIOID,
      fNegocioSucursalId: EXT_VAR_NEGOCIOSUCURSALID,
      fNegocioSucursalZonaId: 0,
      fZonaId: 0,
      fZonaPaisId: 0,
      fZonaPaisCiudadId: 0,
      fZonaTipoId: 0
    }
    return JSON.stringify(parametro);
}

//***** TEXTOS OVERLAS PARA LOS MAPAS ******//
function TxtOverlay(pos, txt, cls, map) {
  // Now initialize all properties.
  this.pos = pos;
  this.txt_ = txt;
  this.cls_ = cls;
  this.map_ = map;
  // We define a property to hold the image's
  // div. We'll actually create this div
  // upon receipt of the add() method so we'll
  // leave it null for now.
  this.div_ = null;
  // Explicitly call setMap() on this overlay
  this.setMap(map);
}


function inicializarOverlays(){
    TxtOverlay.prototype = new google.maps.OverlayView();

    TxtOverlay.prototype.onAdd = function() {
    // Note: an overlay's receipt of onAdd() indicates that
    // the map's panes are now available for attaching
    // the overlay to the map via the DOM.
    // Create the DIV and set some basic attributes.
    var div = document.createElement('DIV');
    div.className = this.cls_;
    div.innerHTML = this.txt_;

    // Set the overlay's div_ property to this DIV
    this.div_ = div;
    var overlayProjection = this.getProjection();
    var position = overlayProjection.fromLatLngToDivPixel(this.pos);
    div.style.left = position.x - largoEstimadoLabel + 'px';
    div.style.top = position.y - alturaEstimadaLabel + 'px';
    // We add an overlay to a map via one of the map's panes.

    var panes = this.getPanes();
    panes.floatPane.appendChild(div);
  }

  TxtOverlay.prototype.draw = function() {
    var overlayProjection = this.getProjection();
    // Retrieve the southwest and northeast coordinates of this overlay
    // in latlngs and convert them to pixels coordinates.
    // We'll use these coordinates to resize the DIV.
    var position = overlayProjection.fromLatLngToDivPixel(this.pos);
    var div = this.div_;
    div.style.left = position.x - largoEstimadoLabel + 'px';
    div.style.top = position.y - alturaEstimadaLabel + 'px';
  }
    //Optional: helper methods for removing and toggling the text overlay.
  TxtOverlay.prototype.onRemove = function() {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }

  TxtOverlay.prototype.hide = function() {
    if (this.div_) {
      this.div_.style.visibility = "hidden";
    }
  }

  TxtOverlay.prototype.show = function() {
    if (this.div_) {
      this.div_.style.visibility = "visible";
    }
  }

  TxtOverlay.prototype.toggle = function() {
    if (this.div_) {
      if (this.div_.style.visibility == "hidden") {
        this.show();
      } else {
        this.hide();
      }
    }
  }

  TxtOverlay.prototype.toggleDOM = function() {
    if (this.getMap()) {
      this.setMap(null);
    } else {
      this.setMap(this.map_);
    }
  }
}

//*******************//





function adPuntoDistanciaArribo(){
  numero = numero + 1;
}

function gePuntoTiempoArribo(){
  return numero;
}

function alerta(m){
  alert(m)
}

function msg(m){
  if (vVERBOSE){
    console.log(m);
  }
}


function ExpandirMapa(){
  var divmapa = document.getElementById("map");
  divmapa.style.maxHeight = "100%";
  var divruta = document.getElementById("listaPuntos");
  divruta.style.maxHeight = "0px";
//  divruta.style.display = "none";

}


function ContraerMapa(){
  var divmapa = document.getElementById("map");
  divmapa.style.maxHeight = vMAXHEIGHT_MAPA;
  var divruta = document.getElementById("listaPuntos");
  divruta.style.maxHeight = vMAXHEIGHT_RUTA;
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


function alibaba(){
  var ds = new google.maps.DirectionsService;
  var dd = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: vecColor[((tandas + 10) % 5)] } });
  //usage:
  readTextFile("js/pruebajson.json", function(text){
      var data = JSON.parse(text);
      dd.setDirections(data);
      dd.setMap(map);
  });
}


function addminutes(dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}


//console.log(add_minutes(new Date(2014,10,2), 62).toString());
function sumar_horas(fecha, minutos)
{

	fecha = new Date(fecha);
	fecha.setMinutes(fecha.getMinutes()+ Number(minutos));

  var vfecha = getFormatoDeFechaHoraISO(fecha)
  vfecha = vfecha.replace(" ", "T");

  /*
    fecha =  fecha.toString();
  	var fecha_date = fecha.split('T');
  	var fecha_time = fecha_date[1].split('.');
  	var fecha_time = fecha_date[1].split(':');
  	fecha_date = fecha_date[0];
  	fecha = fecha_date+'T'+fecha_time[0]+':'+fecha_time[1]+':00';
  */

	return vfecha;
}



function  expandirMenuLateral(){
	 var coll = document.getElementsByClassName("collapsibleX");

	 //coll[1].click();

	 var content;
	 if (esModRuta()){
		content = coll[0].nextElementSibling;
		content.style.maxHeight  = "220px";
		content = coll[1].nextElementSibling;
		content.style.maxHeight  = "220px";
	 }else{
		content = coll[1].nextElementSibling;
		content.style.maxHeight  = "220px";
		content = coll[2].nextElementSibling;
		content.style.maxHeight  = "220px";
	 }

}


//ELEMENTOS COLAPSABLES
function conlapsables(){
  var coll = document.getElementsByClassName("collapsibleX");
  var i;
  for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
      this.classList.toggle("activeX");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}

//JS para hacer flotante el DIV
//function addListeners(){
//    document.getElementById('dvbuscarpoly').addEventListener('mousedown', mouseDown, false);
//    window.addEventListener('mouseup', mouseUp, false);
//}
//function mouseUp()
//{
//    window.removeEventListener('mousemove', divMove, true);
//}
//function mouseDown(e){
//    window.addEventListener('mousemove', divMove, true);
//}

/*
function divMove(e){

    var div = document.getElementById('dvbuscarpoly');
    div.style.position = 'absolute';
    div.style.top = e.clientY - 60 + 'px';
    div.style.left = e.clientX - 280 + 'px';
}
*/

function refrescarMenuPoly(cantitems) {
  //Actualiza el div flotante segun cuantos nombres de pligonos se carguen
  var elemento = document.getElementById("botonbusqueda");
  elemento.classList.toggle("activeX");
  var content = document.getElementById("contenidopoly");
  if (cantitems==0){
	content.style.height = "45px";
  }else{
	content.style.height = 45 + (cantitems * 30) + "px";
  }
}

/*
function compoTipoRutaSelect(){
  var combo = document.getElementById("compoTipoRuta");
  switch(combo.value){
     case "RCWH":
          rutaCerradaWH = true;
          rutaAbiertaWH = false;
          rutaCerradaUsuario = false;
          rutaAbiertaUsuario = false;
          break;
     case "RAWH":
           rutaCerradaWH = false;
           rutaAbiertaWH = true;
           rutaCerradaUsuario = false;
           rutaAbiertaUsuario = false;
          break;
     case "RCU":
          rutaCerradaWH = false;
          rutaAbiertaWH = false;
          rutaCerradaUsuario = true;
          rutaAbiertaUsuario = false;
          break;
     case "RAU":
          rutaCerradaWH = false;
          rutaAbiertaWH = false;
          rutaCerradaUsuario = false;
          rutaAbiertaUsuario = true;
          break;
     default:
          msg('default');break;
  }
}

*/

function calcdistancia(latlng0,latlng1){
  var distancia = google.maps.geometry.spherical.computeDistanceBetween(latlng0, latlng1);

 // msg("VA PA I ÑERI =>" + JSON.stringify(latlng0) + " " +  JSON.stringify(latlng1) + " => " + distancia);
  return distancia;
}




function getParametrosSetPoligono(poly, puntos){
  msg("puntos " + JSON.stringify(puntos));
  var parametro = {
    PoligonoId : poly.PoligonoId,
    PoligonoNegocioId :poly.PoligonoNegocioId,
    PoligonoSucursalId : poly.PoligonoSucursalId,
    PoligonoNombre :  poly.PoligonoNombre,
    PoligonoUsuario : poly.PoligonoUsuario,
    PoligonoFechaULTMod :"0000-00-00T00:00:00",
    PoligonoMode: poly.PoligonoMode,
    puntos: puntos
  }
  return parametro;
}


function newPoly(_PoligonoId, _PoligonoNegocioId, _PoligonoSucursalId, _PoligonoNombre, _PoligonoUsuario, _PoligonoMode){
  var poly ={
    PoligonoId : _PoligonoId ,
    PoligonoNegocioId : _PoligonoNegocioId,
    PoligonoSucursalId :  _PoligonoSucursalId,
    PoligonoNombre : _PoligonoNombre ,
    PoligonoUsuario : _PoligonoUsuario,
    PoligonoMode: _PoligonoMode,
  }
  return poly;
}


function salvandoPoly(poly){


  if (poly == undefined){return;}

  if (!poligonoValido(poly)) {return;}

  /**  PUNTOS **/
  var vecpuntos=[];
  var paths = poly.getPath();
  for (var i =0; i < paths.getLength(); i++) {

     var xy = paths.getAt(i);
     var punto ={
       PoliPuntoId: i,
       PoliPuntoLat: xy.lat(),
       PoliPuntoLong: xy.lng()
     }
     vecpuntos.push(punto);
   }

  //** ARMAR PARAMETORS POST ***/
  var jsonpoligono = getParametrosSetPoligono(poly.jsonpoly,vecpuntos );
  var vecp = [];
  vecp.push(jsonpoligono);

  //** enviar poligono al server ***/
  setPoligonos2Server(vecp, poly.tag);
}

function poligonoValido(poly){
  //Valido datos jsonpoly

  if (poly.jsonpoly.PoligonoId == "0"){
    mensajeNotificacion("Debe indicar un identificador para el polígono");
    return false;
  }

  if (poly.jsonpoly.PoligonoNombre == 0){
    mensajeNotificacion("Debe indicar un nombre para el polígono");
    return false;
  }

  return true;
}


/**
 * Displays overlay with "Please wait" text. Based on bootstrap modal. Contains animated progress bar.
*/

function mostrarWait(){

}

function ocultarWait(){

}



function armarListaOrdenada(posPrimerElemento, listaDesordenada){
    msg("***armarListaOrdenada***");
    var listaposiciones = [];
    var fin = false;
    var posele = posPrimerElemento;
    var ele = listaDesordenada[posele];
    listaDesordenada.splice(posele, 1);
	var v = {PuntoId: ele.PuntoId, PedidoId: ele.PedidoId, Precedencia: ele.Precedencia, Posicion: posele};
    listaposiciones.push(v);

	while((listaDesordenada.length>0) && (!fin)){
      var possig = 0;
      msg("***listaDesordenada length " + listaDesordenada.length);
      possig = sigDeMenorDist(ele, listaDesordenada,listaposiciones );

      if (possig.Posicion == -1){
        fin = true;
      }else{
        msg("Va a agregar " +possig.Posicion);

        ele = listaDesordenada[possig.Posicion];
        listaposiciones.push(ele);
        listaDesordenada.splice(possig.Posicion, 1);

      }
    }
    return listaposiciones;
}



function minOrdenDelaZona(ZonaId){
  msg("***maxOrdenDelaZona***");
  var orden = 99999;
  var pos = 0;
  for (i = 0; (i < vectorDePuntosJSON.length); i++){
	if  (vectorDePuntosJSON[i].PuntoZonaId == ZonaId && vectorDePuntosJSON[i].FlagRuteo && vectorDePuntosJSON[i].PuntoHabilitado){
		if (vectorDePuntosJSON[i].PuntoOrden < orden){
			pos = i;
			orden = vectorDePuntosJSON[i].PuntoOrden;
		}
	}
  }
  return {order: orden, pos: pos};
}

function maxOrdenDelaZona(ZonaId){
  msg("***maxOrdenDelaZona***");
  var orden = 0;
  var pos = 0;
  for (i = 0; (i < vectorDePuntosJSON.length); i++){
	if  (vectorDePuntosJSON[i].PuntoZonaId == ZonaId && vectorDePuntosJSON[i].FlagRuteo && vectorDePuntosJSON[i].PuntoHabilitado){
		if (vectorDePuntosJSON[i].PuntoOrden > orden){
			pos = i;
			orden = vectorDePuntosJSON[i].PuntoOrden;
		}
	}
  }
  return {order: orden, pos: pos};
}




function cumplePrecedecia(p, listaposiciones){



	msg("Va a ver si cumple la preferencia");

	if (p.Precedencia <= 1){
		msg("Cumple por " + p.Precedencia);
		return true;
	}

	msg("Ve si existe la precedencia 1");
	for (j=0; j < listaposiciones.length; j++){
		msg("Ve si existe la precedencia 1 " + listaposiciones[j].PedidoId + " - " + p.PedidoId);
		if (listaposiciones[j].PedidoId == p.PedidoId){
			if ((Number(p.Precedencia) -  Number(listaposiciones[j].Precedencia))  == 1){
				msg("Encontró su presendencia, asi que se incluye!!!!");
				return true;
			}
		}
	}
	msg("No encontró su presendecia , siga pa la proxima");

	return false;


}

function sigDeMenorDist(ele,lista, listaposiciones){
  var mindistancia = MAXVALUE;
  var   v = {PuntoId: 0, PedidoId: 0, Precedencia: 0, Posicion: -1};
  for (i=0; i < lista.length; i++){
    var p = lista[i];
	msg(" p.PuntoZonaId ===> " + p.PuntoZonaId);
    if ((ele.PuntoId != p.PuntoId) && (p.PuntoZonaId  == getZonaEnUso())){
      var distancia =  calcdistancia(new google.maps.LatLng({lat: ele.PuntoLat, lng: ele.PuntoLong}) , new google.maps.LatLng({lat: p.PuntoLat, lng: p.PuntoLong}));//distanciaEntre2Puntos(ele.PuntoLat, ele.PuntoLong, p.PuntoLat, p.PuntoLong);
      if (distancia < mindistancia){
        if (cumplePrecedecia(p, listaposiciones)){
			mindistancia 	= 	distancia;
			v.PuntoId 		=	p.PuntoId;
			v.PedidoId 		= 	p.PedidoId;
			v.Precedencia 	=  	p.Precedencia;
			v.Posicion		= 	i;
			msg("V===>" + JSON.stringify(v));
		}
      }
    }
  }

  return v;
}

function getRutaNombre(){
  var nomruta = document.getElementById("nombreruta");
  if (nomruta == undefined){
	  return "";
  }
  return myTrim(nomruta.value);
}

function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm,'');
}

function getZonaRuta(){
  return 1;
}

function getZonaDesc(){
  return "";
}


function getZonaId(){
	return getZonaEnUso();
}



function getRutaId(){
	if (vRUTA == undefined){
		return 0;
	}
	if (vRUTA.VRutaId == undefined){
		return 0;
	}
	return vRUTA.VRutaId ;
}

function getCabezalRutaJSON(visitas){
  var hh =	getLatLongWareHouseNoGoogle();

  var rutaCabezal = {
    VRutaId: getRutaId(),
    VRutaNom: getRutaNombre(),
    VRZonaDesc: "",
    VRZonaId: getZonaId(),
    VRutaNegocioSucursalId: EXT_VAR_NEGOCIOSUCURSALID,
    VRutaNegocioId: EXT_VAR_NEGOCIOID,
    VRutaFecha:"0000-00-00",
    VRutaDeliveryTelefono:"0",
    VRutaHoraFin:vVRutaVisitaFchSalida,
    VRutaHoraComienzo:vVRutaVisitaFchHorEntrada,
    VRRutaDirServiceData: "", //JSON.stringify(vVRRutaDirServiceData), SE COMENTA POR PROBLEMAS DE TRAFICO
	VRutaOrigenLocation: hh.lat + "," + hh.lng,
    VRutaHabilitada:0,"visitas":visitas

	//vercoco
  }
  //return JSON.stringify(rutaCabezal);
  return rutaCabezal;
}


function getVisitasRutaJSON(vecVisitas,p){
  var visita = {
      VRutaId:            0,        //se da de alta en web service
      VRutaVisitaId:      0,  //se da de alta en el web service
      VRutaVisitaObsBE:   "Punto nro " + p.PedidoId, //x ahora se deja vacio
      VRutaVisitaObsDri:    "Punto nro " + p.PedidoId, //x ahora se deja vacio
      VRutaVisitaEstado:   "P",//0, // x defecto va en 0
      VRutaVisitaHoraPlan:    p.fechaHora,
      VRutaVisitaOrden:       p.PuntoOrden,
      VRutaVisitaCalificacion:    0,
      VRutaVisitaFchHorEntrada:   p.fecha_hora_llegada, //Inicialmente vacio
      VRutaVisitaFchSalida:       p.fecha_hora_salida,//Inicialmente vacio
      VRutaVisitaDistancia:       p.PuntoDistanciaArribo,
      VRutaVisitaDistanciaTxt:    p.PuntoDistanciaArriboTxt,
      VRutaVisitaDuracion:        p.PuntoTiempoArribo,
      VRutaVisitaDuracionTxt:     p.PuntoTiempoArriboTxt,
      VRutaTiempoEstimadoEntrega: p.PuntoDuracionVisita,
      VRutaVisitaDireccion:       p.PuntoDireccion,
      VRutaVisitaGeolocation:      p.PuntoLat + "," + p.PuntoLong,
      VRutaVisitaTelefonoContacto:      p.PuntoTelefonoCliente,
	  	VRutaVisitaNombreContacto: p.PuntoNombreCliente,
	  	VRutaVisitaPrecedencia:	p.Precedencia,
	  	VRutaVisitaPedidoId: p.PedidoId
    }
    vecVisitas.push(visita);
}

function armarJSONSoloDeVisitas(ZonaId){
	msg("***armarRutas2Server***");
    var vecrutas = [];
    var r = armarJSONRuta(getZonaEnUso());
    vecrutas.push(r);
   return vecrutas;
}



function armarJSONRuta(ZonaId){
    msg("***armarJSONRuta***");
    var vecVisitas =[];
    for (i=0; i < vectorDePuntosJSON.length; i++){
        x = vectorDePuntosJSON[i];
        if (x.PuntoZonaId == ZonaId && x.FlagRuteo){
          getVisitasRutaJSON(vecVisitas,x);
        }
    }
    var r = getCabezalRutaJSON(vecVisitas);
    return r;

}

function armarRutas2Server(){
    msg("***armarRutas2Server***");
    var vecrutas = [];
    var nomruta = document.getElementById("nombreruta");
    if (myTrim(nomruta.value) == ""){
      alert("Debe darle un nombre a la ruta");
      return;
    }

    var r = armarJSONRuta(getZonaEnUso());
    vecrutas.push(r);
    setRutas2Server(JSON.stringify(vecrutas));
}


function getPoligonosFromServer(_parametros,mostrar){
  msg("***getPoligonosFromServer***");
  var parm = JSON.stringify(_parametros);
  mostrarWait();
  $.ajax({
        url: URLGETPOLIGONOS,
        type: "POST",
        dataType: "json",
        crossDomain: true,
        data: parm,
        success: function(respuesta) {
          ocultarWait();
          msg("respuesta " + JSON.stringify(respuesta));
          if (respuesta.sdtRespuestaWS.ok == "S"){
            if (_parametros.Modo == "CON_PUNTOS" ){
                //Muestor el poligono en el mapa
                cargarPligonoObtenido(respuesta.sdtWsPoligonos,mostrar);

            }else{
                //Muestro los resultados en un div
                if (respuesta.sdtWsPoligonos != undefined){
                  presentarPoligonosEnDiv(respuesta.sdtWsPoligonos);
                }else{
					refrescarMenuPoly(0);
				}
            }
          }else{
            mensajeError(respuesta.sdtRespuestaWS.errordesc)
          }
          ocultarWait();
        },
        error:
            function() {
              ocultarWait();
              mensajeError('Falló la actualización del polígono');
            }
    });
}


function setPoligonos2Server(jsonpolygono,id){
  msg("***setPoligonos2Server***");
  var parm = JSON.stringify(jsonpolygono);
  mostrarWait();
  $.ajax({
        url: URLSETPOLIGONOS,
        type: "POST",
        dataType: "json",
        crossDomain: true,
        data: parm,
        success: function(respuesta) {
          msg("respuesta " + JSON.stringify(respuesta));
          if (respuesta.ok == "S"){
            var p = getPolyById(id);
            cerrarInfoWindows(p);
            setPolyModificado(id, SALVADO);
          }else{
            mensajeNotificacion(respuesta.errordesc);
          }

          ocultarWait();
        },
        error:
            function() {
              ocultarWait();
              mensajeError('Falló la actualización del polígono');
            }
    });
}


function iniFlagruteo(){
	for (i=0; i < vectorDePuntosJSON.length; i ++){
		vectorDePuntosJSON[i].Marca = " ";
		vectorDePuntosJSON[i].FlagRuteo = true;

	}
}

function setRutas2Server(jsonrutas){
  msg("***setRutas2Server***");
  mostrarWait();
  document.getElementById("btnrutas2server").style.display = "none";
  console.log(jsonrutas);
  console.log(URLSETRUTAS);
  $.ajax({
        url: URLSETRUTAS,
        type: "POST",
        dataType: "json",
        crossDomain: true,
        data: jsonrutas,
        success:
          function(respuesta) {
            console.log(respuesta);
      		  if (respuesta.ok == "S"){
					if (esModRuta()){
						if (EXT_VAR_URLCALL_CONF_RUTA != undefined){
							window.location.href = EXT_VAR_URLCALL_CONF_RUTA;
						}
					}else{
						limpiarRuta();
						cargarPuntos(true);
						mensajeOK("Se ha creado la ruta, para asignar conductores vaya a la opción correspondiente");
					}
      		  }else{
      			  mensajeError(respuesta.errordesc);
      		  }
			  document.getElementById("btnrutas2server").style.display = "block";
            ocultarWait();
          },
        error:
            function(a) {
              ocultarWait();
              mensajeError('Falló la actualización de la ruta:' + JSON.stringify(a));
            }
    });
}

function cargarOrigenes(){
  msg("***cargarOrigenes***");
  mostrarWait();
  $.ajax({
		async: false,
        url: URLGETORIGENES,
        type: "POST",
        dataType: "json",
        crossDomain: true,
        success:
          function(origenes){
            $.each(origenes, function(i, origen) {
              vectorOrigenes.push(origen);
            });
            desplegarOrigenesEnElMapa();
            ocultarWait();
        },
        error:
            function() {
              ocultarWait();
              mensajeError('Falló la carga de origenes');
            }
    });

}

function marcoWarehouseEnMapa(o){
  marker= new google.maps.Marker({
    position: new google.maps.LatLng({lat: o.OrigenLat, lng: o.OrigenLong}),
    title: o.OrigenNombre + " " + o.OrigenDireccion,
    labelContent: o.OrigenNombre,
    labelAnchor: new google.maps.Point(vANCHOLABEL_1, vANCHOLABEL_2),
    icon: { url: iconBase + o.Icon, scaledSize: new google.maps.Size(hSIZE_SVG,vSIZE_SVG) },
    labelClass: vCLASE_CSS_LABELMARKER, // the CSS class for the label
    map: map
  });
}

function desplegarOrigenesEnElMapa(){
    msg("***desplegarOrigenesEnElMapa***")
    for(i=0; (i<vectorOrigenes.length); i++){
      var o = vectorOrigenes[i];
      o.Icon = getIcono("WH"+o.OrigenDefault);
      marcoWarehouseEnMapa(o);
    }
}

function cargarJsonPunto(PedidoId){
	msg("HAY 1");
	  var parms = getParametrosJsonPuntos(PedidoId);
	  mostrarWait();
	  $.ajax({
		url: URLGETPuntoS,
		type: "POST",
		dataType: "json",
		crossDomain: true,
		data: parms ,
		success: function(Puntos ) {
			msg("HAY 2");
			msg("HAY QUE VER: " + Puntos.sdtGetPuntos.length);
			if (Puntos.sdtGetPuntos.length == 0){
				mensajeNotificacion("No se incluyó el pedido, verifique el nro. de pedido o detalles como el estado, etc.");
			}else{
				$.each(Puntos.sdtGetPuntos, function(i, Punto) {
				if (!existePuntoEnVectorDePuntos(Punto.PuntoId )){
					var myLatLng = new google.maps.LatLng({lat: Punto.PuntoLat, lng: Punto.PuntoLong});
					if (esModRuta()){
						Punto.PuntoZonaId = getZonaEnUso();
					}
					Punto.FlagRuteo = true;
					Punto.Forzado = true;
					Punto.distancia_aux = 0;
					agregaPuntoEnElMapa(Punto);
					vectorDePuntosJSON.push(Punto);
				}else{
					var p = getPUntoById(Punto.PuntoId);
					p.Forzado = true;
					p.PuntoZonaId = getZonaEnUso();

				}
			  });
			  if (esModRuta()){
				  if (document.getElementById("listaPuntos") != undefined){
					  if ( document.getElementById("listaPuntos").innerHTML != ""){
						rutear(true);
					  }
				  }
			  }
			}
		  ocultarWait();
		},
		error: function() { alert('Falló la carga de Puntos');}
	});

}

function cargarJsonPuntos(cargarDesdeWEB){
    //Lee un JSON de puntos y los inserta en el mapa
    msg("***getJsonPuntos***");
    if (cargarDesdeWEB){
      vecMarkersPuntos = limpiarVector(vecMarkersPuntos);
      vectorDePuntosJSON = limpiarVector(vectorDePuntosJSON);
    }


    if (cargarDesdeWEB){
          var parms = getParametrosJsonPuntos(0);
          msg("Consumiendo WS parms " + URLGETPuntoS + "\n parámetros " + parms);
          mostrarWait();
          $.ajax({
                url: URLGETPuntoS,
                type: "POST",
                dataType: "json",
                crossDomain: true,
                data: parms ,
                success: function(Puntos ) {
					if (esModRuta()){
						vRUTA = Puntos.sdtCabezalRuta;
						DTFechaHoraInicioRuta = vRUTA.VRutaHoraComienzo;
						vNombreRuta =  vRUTA.VRutaNom;
					}

					$.each(Puntos.sdtGetPuntos, function(i, Punto) {
                    if (!existePuntoEnVectorDePuntos(Punto.PuntoId )){
                        var myLatLng = new google.maps.LatLng({lat: Punto.PuntoLat, lng: Punto.PuntoLong});
                        Punto.Icon = "";
						if (esModRuta()){
							Punto.PuntoZonaId = getZonaEnUso();
						}
						Punto.Forzado = false;
                        Punto.FlagRuteo = true;
                        Punto.distancia_aux = 0;
                        agregaPuntoEnElMapa(Punto);
                        vectorDePuntosJSON.push(Punto);
                    }
                  });
				  if (esModRuta()){
					rutear(false)
				  }
                  ocultarWait();
                },
                error: function() { alert('Falló la carga de Puntos');}
            });
    }else{
	  $.each(vectorDePuntosJSON, function(i, Punto) {
			if (!modificarPuntoEnElMapa(Punto)){
			  agregaPuntoEnElMapa(Punto);
			}
	  });
	  ocultarWait();
  }
}

function getJSONZonasCreacionManual(){
  msg("***getJSONZonasCreacionManual***");
  ZonasSistema = limpiarVector(ZonasSistema);
  var parms = getParametrosZonas();
  mostrarWait();
  $.ajax({
        url: URLZONASMANUAL,
        type: "POST",
        dataType: "json",
        crossDomain: true,
        data: parms,
        success: function( data ) {
              $.each(data, function(i, zonaitem) {
                  //OBTENER PROPIEDADES DE LA ZONA
                  if (!extistePolyAlArray(zonaitem.ZonaId)){
                    Zona = NewZona();
                    Zona.ZonaId = zonaitem.ZonaId;
                    if (zonaitem.ZonaDesc.trim() == ""){
                      Zona.ZonaDsc = "Zona " + zonaitem.ZonaId;
                    }else{
                      Zona.ZonaDsc = zonaitem.ZonaDesc;
                    }
                    Zona.ZonaColorFondo = zonaitem.ZonaColor;
                    Zona.ZonaColorBorde = zonaitem.ZonaColorBorder;
                    $.each(zonaitem.Puntos, function(i, punto) {
                        //OBTENER PROPIEDADES DEL PUNTO
                         var l = new google.maps.LatLng({lat: punto.lat, lng: punto.lng});
                         Zona.ZonaPoly.push(l);
                    });
                    repintarPoligono(Zona, Zona.ZonaPoly, Zona.ZonaColorFondo, Zona.ZonaColorBorde, vAnchoLinea);
                    ZonasSistema.push(Zona);
                  }
                });
				if (!esModRuta()){
					cargarPoligonosEnLista(true);
				}
                ocultarWait();
        },
        error: function() {
          ocultarWait();
          alert('Falló la carga de Zonas');
      }
    });
}

function  sacarCaracteresEspeciales(contenido){
	var texto = contenido.toLowerCase().replace(/[\*\^\"'\!]/g, '');
	return texto;
}


function mostrarDetallesPedido(_PedidoId){
	var buffer = "";
	for (var x=0; x < vectorDePuntosJSON.length; x++){
			if (vectorDePuntosJSON[x].PedidoId == _PedidoId){

				if (vectorDePuntosJSON[x].PuntoDetalle!=""){
					buffer = "Detalle: " + sacarCaracteresEspeciales(vectorDePuntosJSON[x].PuntoDetalle) + " ";
				}
				if (vectorDePuntosJSON[x].Productos != undefined){
					for (var j=0; j < vectorDePuntosJSON[x].Productos.length; j++){
						var p = vectorDePuntosJSON[x].Productos[j];
						buffer +=  	"<div>" +  p.PedidoProductoCodigo + " - " + sacarCaracteresEspeciales(p.PedidoProductoNombre) + " Cantidad: " +	p.PedidoProductoCantidad + " </div>";
					}
				}

				if (buffer == ""){
					buffer = "Sin detalles";
				}
				return buffer;

			}
	}
	if (buffer == ""){
		buffer = "Sin Productos Detallados";
	}

	return buffer;
}
