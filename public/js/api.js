var API_WRAPPER = function () {
  this.URL_BASE = window.location.origin;

  // this.getSecret = function(){
  //   return $.ajax({
  //     url:    this.URL_BASE + "/secret",
  //     method: "GET"
  //   })
  // };

  this.getKnitShops = function () {
    return $.ajax({
      url: this.URL_BASE + "/api/knits",
      method: "GET"
    })
  };

  this.getOneShop = function () {
    return $.ajax({
      url: this.URL_BASE + "/api/knits/:id",
      method: "GET"
    })
  };
};

var API = new API_WRAPPER();
