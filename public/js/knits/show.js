$(function(){
  var id = window.location.pathname.split("/")[2];
  API.getOneShop(id).then(function(knit){
    $("#shop-show").append('<div class="row well"><div class="col-md-2"><img id="shop-photo" class="img-responsive" src="http://placehold.it/200x200" alt=""></div><div class="col-md-10"><h2>' + knit.name + '<a class="btn btn-primary pull-right" href="/knits">Back</a><a id="edit-button" class="btn btn-success pull-right" href="#">Edit</a></h2><p><strong>Address: </strong>' + knit.address + '</p><p><strong>Phone: </strong>' + knit.phone + '</p><p><strong>Email: </strong>' + knit.email + '</p><p><strong>Website: </strong>' + knit.website + '</p><p><strong>Opening hours: </strong>' + knit.hours + '</p><p><strong>Special notes: </strong>' + knit.note + '</p></div></div><hr>')

  })
})

