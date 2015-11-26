$(function(){

  $('#new-shop-form').on('submit', function (e){
    e.preventDefault();

    var params = {
      knit: {
        name: $('#shop-name').val(),
        address: $('#shop-address').val(),
        image: $('#shop-image').val(),
        phone: $('#shop-phone').val(),
        email: $('#shop-email').val(),
        website: $('#shop-website').val(),
        hours: $('#shop-hours').val(),
        note: $('#shop-note').val()
      }
    };

    API.createKnitShop(params).then(function(data){
      window.location.href = "/knits/" + data.knit._id;

    });

  })
})


