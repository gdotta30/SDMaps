

// VARIABLES PARA PARAMETRIZAR

var INDICE_CONTROL_Punto	=	  0;
var MINCHARSSUGEST          =     2;
var vAnchoLinea             =     3;
var vLatInicio              =     EXT_VAR_LATINICIO;    //-34.8785578;
var vLongInicio             =     EXT_VAR_LONGINICIO;   //-56.0788487;
var vZoom                   =     EXT_VAR_vZOOM;        //13
var vPoligonoColor          =     '#FF0000';
var vPoligonoFillColor      =     '#FF0000';
var vANCHOLABEL_1           =     40;
var vANCHOLABEL_2           =     70
var ZONAID_INSTANCIA		= 	  EXT_VAR_ZONAID_INSTANCIA;
var URLZONAS				=	  EXT_VAR_URLZONAS;
var URLSETZONAS             =     EXT_VAR_URLSETZONAS;      //'http://10.211.55.9/SoyDeliveryU11_New1.NetEnvironment/awsSetZona.aspx';
var URLZONASMANUAL          =     EXT_VAR_URLZONASMANUAL;   //"http://10.211.55.9/SoyDeliveryU11_New1.NetEnvironment/awsgetzonas.aspx";
var URLSETPOLIGONOS         =     EXT_VAR_URLSETPOLIGONOS;  //"http://10.211.55.9/SoyDeliveryU11_New1.NetEnvironment/awssetpoligono.aspx";
var CARGAR_ZONAS_AL_INICIO  =     EXT_CARGAR_ZONAS_AL_INICIO;
var vMAXHEIGHT_RUTA         =     EXT_VAR_MAXHEIGHT_RUTA;
var vMAXHEIGHT_MAPA         =     EXT_VAR_MAXHEIGHT_MAPA;
var vCOLOR_GRILLA_PAR       =     "snow";
var vCOLOR_GRILLA_IMPPAR    =     "white";
var vecDetalles				=		[];



var iconBase = EXT_VAR_ICONBASE; //'file:///Users/pablogeymonat/Documents/MapasSoyDelivery/images/';

var vCOLORFONOSPOLY_X_DEFECTO = "#1E90FF";
var vCOLORBORDEPOLY_X_DEFECTO = "#1E90FF";

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



var VKEY = EXT_VAR_vKEY; //"AIzaSyAmAcD2utpt3GNw6LlM7cE1PCNUuYq2_I0"

var currentOverlay;

var selecteShapeRuteada;


var vTIEMPOINFOWINDOW = 150000;


var vRUTA;

var semaforo = 0;
var cantsemaforo = 0;






function esModRuta(){
	if (EXT_VAR_RUTAID ==0)
	{
		return false;
	}
	return true;
}


function getZonaEnUso(){
	if (selectedShape != undefined)
		return selectedShape.tag;
	else
		return 0;

}


function mensajeOK(msg){
  alertify.success(msg);
}

function mensajeError(msg){
  alertify.error(msg);
}


















function cerrarMenuContextOD(){
  var menucontextualmapa = document.getElementById("menucontextualmapa");
  menucontextualmapa.style.display = 'none';
}














function getZonaLatLong(latLong){
  //Obtiene el polígono que contiene a una latitud longitud.
  //prioriza el polígono seleccinado y luego evalua segun el orden de creación
  var encontre = false;
  var ZonaId = 0;
  if (ZonasSistema.length==0){return;}

  //Primero dar prioridad al poligono vecMarkersPuntoseleccionado
  if (google.maps.geometry.poly.containsLocation(latLong, selectedShape)){
    ZonaId   = selectedShape.tag;
    encontre = true;
  }
  if (!encontre){
    //si no es pruebo con los demas
    for ( i = ZonasSistema.length - 1; ((i > 0) && (!encontre)); i-- ) {
      var poligono = ZonasSistema[i];
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


	inicializarDrawingManager();

	getJSONZonasCreacionManual();




	ocultarWait();


	$("body").toggleClass("sidebar-collapse");




}

function limpiarVector(vec) {
	msg("***limpiarVector***");
	//QUITA ELEMENTOS DE UN VECTOR PARA AHORRAR MEMORIA
	vec.splice(0, vec.length - 1);
	vec = [];
	return vec;
}


function mostrarWait() {

}

function ocultarWait() {

}

function limpiarPoligono(poly) {
	var encontro = false;
	//quita el poligono del mapa
	for (i = 0;
		((i < ZonasSistema.length) && (!encontro)); i++) {
		if (ZonasSistema[i].tag == poly.tag) {
			encontro = true;
			ZonasSistema[i].setMap(null);
			ZonasSistema.splice(i, 1);
		}
	}
}

function eliminarPoly(){
  if (selectedShape != undefined){
	limpiarPoligono(selectedShape);

  }else{
	  mensajeError("Haga click sobre el polígono de la zona");
  }
}




function revertirCambios(){

	getJSONZonasCreacionManual();

}




function mensajeNotificacion(msg){
	alertify.log(msg);
	return false;
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







function getPolyById(id){
  msg("***getPolyById***");
  var encontre  = false;
  var poly      = undefined;
  for (i = 0; ((i< ZonasSistema.length) && (!encontre)); i++){
	msg("====> " + ZonasSistema[i].tag + " <-> " +  id);
    if (ZonasSistema[i].tag == id){

      encontre = true;
      poly = ZonasSistema[i];
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

}



function eliminarPolyById(id){
  var p = getPolyById(id);
  limpiarPoligono(p);
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
  		  p.setMap(map);
  		}else{
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






function salvarZona(){

	if (selectedShape != undefined){
		salvandoZona(selectedShape);
	}else{
		mensajeError("Haga click sobre el polígono de la zona");
	}

}

function guardarEditZona(PoligonoId){

	var p = getPolyById(PoligonoId);
	salvandoZona(p);


}







function setDatosPoly(e){

  if (ZonasSistema.length > 0){
	  mensajeError("Ya hay un poligono para la zona");
	  e.overlay.setMap(null);
	  return;
  }
  var newShape = e.overlay;
  newShape.type = e.type;

  newShape.tag      =  ZONAID_INSTANCIA,//newShapeUltId = newShapeUltId + 1;
  newShape.caption  = "";

  var _PoligonoId = ZONAID_INSTANCIA;
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

			}

        }
    });
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
	if (ZonasSistema.length > 0) return;
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
      estadosalvado: "0"
    });

    google.maps.event.addListener(poligono, 'click', function() {


					setSelection(poligono);


        //TODO setSelection(newShape);
    });

	google.maps.event.addListener(poligono, 'dblclick', function(e) {
      setSelection(poligono);
      doInfoWindowZona(poligono, e);
	});

    poligono.setMap(map);
    agregarPolyAlArray(poligono);
}





function extistePolyAlArray(tag){
  msg("***extistePolyAlArray***");
  //infica si existe el poligono en el vetor de ZonasSistema
  var existe = false;
  for (i=0; ((i<ZonasSistema.length) && (!existe)); i++){
    if (ZonasSistema[i].tag == tag){
      existe = true;
    }else{
      if (ZonasSistema[i].jsonpoly != undefined){
        if (ZonasSistema[i].jsonpoly.PoligonoId == tag){
          existe = true;
        }
      }
    }
  }
  return existe;
}

function listaPoligonos(){
    msg("***listaPoligonos****");
    ZonasSistema.forEach(function (v) {
        msg(v.tag);

    });
}




function agregarPolyAlArray(p){
  msg("***agregarPolyAlArray****");
  //agrega poligono y array si no existe
  if (ZonasSistema.length > 0){
	  mensajeNotificacion("Solo puede crearse un poligono");
  }

  if (!extistePolyAlArray(p.tag)){
    ZonasSistema.push(p);
  }
}




function eliminarPoly(){

  msg("Eliminado zona " + getZonaEnUso());
  if (selectedShape != undefined){
	limpiarPoligono(selectedShape);
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
			drawingModes: ['polygon']
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
        selectedShape = undefined;
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
      fZonaId: ZONAID_INSTANCIA,
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














function calcdistancia(latlng0,latlng1){
  var distancia = google.maps.geometry.spherical.computeDistanceBetween(latlng0, latlng1);

 // msg("VA PA I ÑERI =>" + JSON.stringify(latlng0) + " " +  JSON.stringify(latlng1) + " => " + distancia);
  return distancia;
}






function newPoly(_PoligonoId, _PoligonoNegocioId, _PoligonoSucursalId, _PoligonoNombre, _PoligonoUsuario, _PoligonoMode){
  var poly ={
    PoligonoId : _PoligonoId ,
    PoligonoNegocioId : _PoligonoNegocioId,
    PoligonoSucursalId :  _PoligonoSucursalId,
    PoligonoNombre : _PoligonoNombre ,
    PoligonoUsuario : _PoligonoUsuario,
    PoligonoMode: _PoligonoMode
  }
  return poly;
}


function getParametrosSetZona(zonaid,vecpuntos ){
	msg("getParametrosSetZona " + JSON.stringify(vecpuntos));
	var parametro = {
		NegocioId : EXT_VAR_NEGOCIOID,
		NegocioSucursalId :EXT_VAR_NEGOCIOSUCURSALID,
		NegocioSucursalZonaId : zonaid,
		Puntos :  vecpuntos

	}
	return parametro;
}


function salvandoZona(poly){


  if (poly == undefined){return;}



  /**  PUNTOS **/
  var vecpuntos=[];
  var paths = poly.getPath();
  for (var i =0; i < paths.getLength(); i++) {

     var xy = paths.getAt(i);
     var punto ={
       lat: xy.lat(),
       lng: xy.lng()
     }
     vecpuntos.push(punto);
  }

  //** ARMAR PARAMETORS POST ***/
  var jsonpoligono = getParametrosSetZona( poly.tag,vecpuntos );
  var vecp = [];
  vecp.push(jsonpoligono);

  //** enviar poligono al server ***/
  setZonas2Server(vecp, poly.tag);
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











function setZonas2Server(jsonZonas,id){
  msg("***setZonas2Server***");
  var parm = JSON.stringify(jsonZonas);
  mostrarWait();
  $.ajax({
        url: URLSETZONAS,
        type: "POST",
        dataType: "json",
        crossDomain: true,
        data: parm,
        success: function(respuesta) {
          msg("respuesta " + JSON.stringify(respuesta));
          if (respuesta.ok != "S"){

            mensajeNotificacion(respuesta.errordesc);
          }

          ocultarWait();
        },
        error:
            function() {
              ocultarWait();
              mensajeError('Falló la actualización de la zona');
            }
    });
}





function getJSONZonasCreacionManual(){
  msg("***getJSONZonasCreacionManual***");

  for(var i=0; i < ZonasSistema.length; i++){
	 google.maps.event.clearListeners(map, 'bounds_changed');
	  eliminarPoly(ZonasSistema[i]);
  }


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

                  }
                });

                ocultarWait();
        },
        error: function() {
          ocultarWait();
          alert('Falló la carga de Zonas');
      }
    });
}
