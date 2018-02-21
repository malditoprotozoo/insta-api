/* #access_token=180609192.aa3fb91.6e65ee78ed08493aab14e064d376bcff */
$(document).ready(() => {
  const token = '180609192.aa3fb91.6e65ee78ed08493aab14e064d376bcff';
  const id = 180609192;
  const numPhotos = 20;

  $.ajax({
    url: `https://api.instagram.com/v1/users/${id}/media/recent`,
    datatype: 'json',
    type: 'GET',
    data: { // data se convierte en una cadena que se adjunta a una petición get
      access_token: token,
      count: numPhotos
    }
  })
    .done(response => {
      console.log(response);
      showInfo(response);
    })
    .fail(error => {
      console.log(error);
    });

  function showInfo(info) {
    for (let i = 0; i < info.data.length; i++) {
      $('#pictures').append(`<div class="col m4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="${info.data[i].images.standard_resolution.url}"></div></div></div>`);
    }
  }
});