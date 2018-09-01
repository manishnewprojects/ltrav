
function initMap() {
  var deep_atlantic = {lat: 36.197226, lng: -41.531212}
  var yosemite = {lat: 37.7459, lng: -119.5332};
  var prague = {lat: 50.0598054, lng: 14.3251966};  
  var cesky_krumlov = {lat: 48.812737, lng: 14.317466};  
  var paris = {lat: 48.856613, lng: 2.352222};  

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: deep_atlantic
  });



/* Prague BLOCK */
  var contentString_p = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Prague, Czechia</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Prague</b>,</p>'+
      '<p> <a href="https://lanterntravels.com/prague.php">'+
      'LanternTravel Article: Prague</a> '+
      '</div>'+
      '</div>';

  var infowindow_p = new google.maps.InfoWindow({
    content: contentString_p
  });

  var marker_p = new google.maps.Marker({
    position: prague,
    map: map,
    title: 'Prague, Czechia'
  });


  marker_p.addListener('click', function() {
    infowindow_p.open(map, marker_p);
  });

/* END OF PRAGUE BLOCK */

/* YOSEMITE BLOCK */
  var contentString_y = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Half dome, Yosemite</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Half dome</b>,</p>'+
      '<p> <a href="https://lanterntravels.com/yosemite_half_dome.php">'+
      'LanternTravel Article: Yosemite</a> '+
      '</div>'+
      '</div>';

  var infowindow_y = new google.maps.InfoWindow({
    content: contentString_y
  });

  var marker_y = new google.maps.Marker({
    position: yosemite,
    map: map,
    title: 'Yosemite National Park (Half Dome)'
  });


  marker_y.addListener('click', function() {
    infowindow_y.open(map, marker_y);
  });

/* END OF YOSEMITE BLOCK */

/* Paris BLOCK */
  var contentString_y = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Paris, France</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Half dome</b>,</p>'+
      '<p> <a href="https://lanterntravels.com/paris.php">'+
      'LanternTravel Article: Paris</a> '+
      '</div>'+
      '</div>';

  var infowindow_y = new google.maps.InfoWindow({
    content: contentString_y
  });

  var marker_y = new google.maps.Marker({
    position: paris,
    map: map,
    title: 'Paris, France'
  });


  marker_y.addListener('click', function() {
    infowindow_y.open(map, marker_y);
  });

/* END OF Paris BLOCK */

/* Cesky Krumlov BLOCK */
  var contentString_y = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Cesky Krumlov, Czechia</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Half dome</b>,</p>'+
      '<p> <a href="https://lanterntravels.com/cesky_krumlov.php">'+
      'LanternTravel Article: Cesky Krumlov, Czechia</a> '+
      '</div>'+
      '</div>';

  var infowindow_y = new google.maps.InfoWindow({
    content: contentString_y
  });

  var marker_y = new google.maps.Marker({
    position: cesky_krumlov,
    map: map,
    title: 'Cesky Krumlov, Czechia'
  });


  marker_y.addListener('click', function() {
    infowindow_y.open(map, marker_y);
  });

/* END OF Cesky Krumlov BLOCK */
}