<!-- Copyright (C) 2018, LanternTavels.com -->

<!DOCTYPE html>

<html lang="en">
 
<head>

<?php require( 'config.php' ); ?>

<?php include (VIEW_HEADER); ?>

</head>


<!-- Primary Page Layout -->

<body>

<?php include (VIEW_NAVIGATION) ; ?>

<main role="main" class="inner cover">

<div class="container">
 <?php include (DIR_INCL . 'google_ad_top_horizonal.php'); ?>  
      <!-- Page Heading -->
      <div align="center">
      <h1 class="my-4">
        <br>Interlaken<br>
       </h1>
      </div>
      
      <div class="row">
        <div class="col-lg-9 col-sm-12 portfolio-item">
          <div class="card h-100">
           
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">How green is my valley?</a>
              </h4>
              <p class="card-text">   


                <!-- WP TEXT BEGINS -->

 
                <!-- WP TEXT ENDS -->

              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 portfolio-item">
                      <?php include 'php_includes/google_ad_336x280.php'; ?>  

          <div class="card h-100">
            <div class="card-body">
               <h4 class="card-title">
                <a href="#">My Instagram Feed</a>
              </h4>
                          <script src="//www.powr.io/powr.js?external-type=html"></script> 
                          <div class="powr-instagram-feed" id="e7f6289a_1527448033"></div>
          
            </div>
          </div>
        </div>
        
      <!-- /.row -->

      <!-- Pagination -->
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>

    </div>
    <!-- /.container -->
</main>

<?php include 'php_includes/footer.php'; ?>


<?php include 'php_includes/end_js.php'; ?>

</body>
</html>