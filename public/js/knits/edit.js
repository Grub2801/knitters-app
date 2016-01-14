$(function(){

  var id = window.location.pathname.split("/")[2];

  API.getOneShop(id).then(function (knit){
    console.log(knit);
    $('#edit-shop-name').val(knit.name);
    $('#edit-shop-address').val(knit.address);
    $('#edit-shop-image').val(knit.image);
    $('#edit-shop-phone').val(knit.phone);
    $('#edit-shop-email').val(knit.email);
    $('#edit-shop-website').val(knit.website);
    $('#edit-shop-hours').val(knit.hours);
    $('#edit-shop-note').val(knit.note);
  })

  $('#edit-shop-form').on('submit', function (e) {
    e.preventDefault();

    var params = {
      knit: {
        name : $('#edit-shop-name').val(),
        address : $('#edit-shop-address').val(),
        image : $('#edit-shop-image').val(),
        phone : $('#edit-shop-phone').val(),
        email : $('#edit-shop-email').val(),
        website : $('#edit-shop-website').val(),
        hours : $('#edit-shop-hours').val(),
        note : $('#edit-shop-note').val()
      }
    };

    API.editKnitShop(id, params).then(function (knit){
      window.location.href = "/knits/" + id;
    }, errorHandling);

  })

})