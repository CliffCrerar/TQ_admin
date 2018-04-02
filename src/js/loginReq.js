/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Cummunicates to server
 * @author Cliff Crerar
 *
 * Created at     : 2018-03-23 17:49:20 
 * Last modified  : 2018-04-02 12:48:00
 */
const url = require('./reqUrl');
module.exports = data => {
  //console.log(url);
  $.ajax({
    url: url.webserver() + 'userauth',
    method: 'POST',
    origin: '*',
    contentType: 'text/plain',
    dataType: 'text',
    data: JSON.stringify(data),
    success: (data, status) => {
      //console.log(status);
      //console.log(data);
      if (data == 'authorised') {
        //console.log('auth');
        Promise.resolve($('#login').fadeOut()).then(() => {
          $('#login').remove();
          $('.modal').remove();
          $('.tooltip').remove();
          $('#workSpace').css('height', screen.height);
          $('#workSpace').fadeIn();
          $('.arrow').fadeIn();
        });
      } else {
        //console.log('Not auth');
        $('.modal').modal('show');
      }
    },
    error: (err, xhr, some) => {
      console.log(err);
      console.log(xhr);
      console.log(some);
      if (err) {
        $('.modal-title').html('NO CONNECTION!');
        $('.modal-body>p').html(
          'Your connection to the server seems to be down, check that you have an internet connection. If you have a connection it is possible that the web server is down. Please contact your administrator for clarity.'
        );
        $('.modal').modal('show');
      }
    }
  });
  return data;
};
