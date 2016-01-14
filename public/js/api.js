var API_WRAPPER = function () {
  this.URL_BASE = window.location.origin;

  this.getKnitShops = function () {
    return $.ajax({
      url: this.URL_BASE + "/api/knits",
      method: "GET"
    })
  };

  this.getOneShop = function (id) {
    return $.ajax({
      url: this.URL_BASE + "/api/knits/" + id,
      method: "GET"
    })
  };

  this.createKnitShop = function (params) {
    return $.ajax({
      url: this.URL_BASE + "/api/knits",
      method: "POST",
      data: params
    });
  };

  this.editKnitShop = function (id, params) {
    return $.ajax({
      url: this.URL_BASE + "/api/knits/" + id,
      method: "PUT",
      data: params
    });
  };

};

var API = new API_WRAPPER();