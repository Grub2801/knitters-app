$(function(){
  var id = window.location.pathname.split("/")[2];
  API.getOneShop(id).then(function(knit){

    var newHTML = '<div class="row well">' +
                    '<div class="col-md-2">' +
                      '<img id="shop-photo" class="img-responsive" src="https://s3.amazonaws.com/knitter-app/' + knit.image  + '">' +
                    '</div>' +
                    '<div class="col-md-10">' +
                      '<h2>' +
                        knit.name +
                        '<a class="btn btn-primary pull-right" href="/knits">Back</a>' +
                        '<a id="edit-button" class="btn btn-success pull-right" href="/knits/' + knit._id + '/edit">Edit</a>' +
                      '</h2>' +
                      '<p><strong>Address: </strong>' + knit.address + '</p>' +
                      '<p><strong>Phone: </strong>' + knit.phone + '</p>' +
                      '<p><strong>Email: </strong>' + knit.email + '</p>' +
                      '<p><strong>Website: </strong>' + knit.website + '</p>' +
                      '<p><strong>Opening hours: </strong>' + knit.hours + '</p>' +
                      '<p><strong>Special notes: </strong>' + knit.note + '</p>' +
                    '</div>' +
                  '</div>' +
                  '<hr>';

    $("#shop-show").append(newHTML);
  })
})