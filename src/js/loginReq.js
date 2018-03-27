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
 * Last modified  : 2018-03-27 00:51:48
 */
const url = require('./reqUrl');
module.exports = data => {
  //console.log(url);
  $.ajax({
    url: url + 'userauth',
    method: 'POST',
    origin: '*',
    contentType: 'text/plain',
    dataType: 'text',
    data: JSON.stringify(data),
    success: (data, status) => {
      //console.log(status);
      console.log(data);
      if (data == 'authorised') {
        //console.log('auth');
        Promise.resolve($('#login').fadeOut()).then(() => {
          $('#login').remove();
          $('.modal').remove();
          $('.tooltip').remove();
          $('body').prepend(require('../html/workspace.html'));
          $('#workSpace').fadeIn();
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
    }
  });
  return data;
};
