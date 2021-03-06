$(function(){
  API.getKnitShops().then(function(knits){
    knits.forEach(function(knit){
      var newHTML = '<div class="row well">' +
                      '<div class="col-xs-12 col-md-2">' +
                        '<img id="shop-photo" class="img-responsive" src="https://s3.amazonaws.com/knitter-app/' + knit.image  + '">' +
                      '</div>' +
                      '<div class="col-xs-12 col-md-10">' +
                        '<h2>' + knit.name + '</h2>' +
                        '<p>' + knit.address + '</p>' +
                        '<a id="show-shop-btn" class="btn btn-primary" href="/knits/' + knit._id + '">View Shop <span class="glyphicon glyphicon-chevron-right"></span></a>' +
                      '</div>' +
                    '</div>';

      $("#shop-index").append(newHTML);
    }, errorHandling );
  })
})