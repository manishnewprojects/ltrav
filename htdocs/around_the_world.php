<!-- Copyright (C) 2017, LanternTravels.com -->

<!doctype html>


<?php require( 'config.php' ); ?>

<?php include (VIEW_HEADER); ?>

</head>
 
 <!-- Primary Page Layout -->

<body class="index-page">

<?php include (VIEW_NAVIGATION) ; ?>

<?php include 'php_includes/google_ad_top_horizonal.php'; ?>  


<div id="map"></div>
<!-- Replace the value of the key parameter with your own API key. -->
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCyzNh1jUjz9QJ9VE_GO0DBV8wGM6li_EU&callback=initMap">
</script>


  
 <?php include 'php_includes/footer.php'; ?>
<!-- Go to www.addthis.com/dashboard to customize your tools -->
 
</body>
</html>