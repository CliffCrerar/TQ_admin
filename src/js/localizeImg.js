/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Sends localisation task to web server
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-01 23:13:35 
 * Last modified  : 2018-04-02 01:38:54
 */
const url = require('./reqUrl');
module.exports = pNumber => {
  $.ajax({
    url: url + 'locolizeImg',
    method: 'POST',
    origin: '*',
    contentType: 'text/plain',
    dataType: 'text',
    data: pNumber,
    success: (data, status) => {
      console.log(data);
      console.log(status);
      if (status == 'success') {
        checkImg(pNumber);
      }
    },
    error: (err, xhr, some) => {
      console.log(err);
      console.log(xhr);
      console.log(some);
    }
  });
  const checkImg = pNumber => {
    $.ajax({
      url: url + 'checkImg',
      method: 'POST',
      origin: '*',
      contentType: 'text/plain',
      dataType: 'text',
      data: pNumber,
      success: (data, status) => {
        console.log(data);
        console.log(status);
      },
      error: (err, xhr, some) => {
        console.log(err);
        console.log(xhr);
        console.log(some);
      }
    });
  };
};
