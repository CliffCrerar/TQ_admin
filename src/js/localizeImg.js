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
 * Last modified  : 2018-04-03 19:30:43
 */
// const url = require('./reqUrl');
module.exports = {
  download(pNumber) {
    $.ajax({
      url: ADDRESS + 'locolizeImg',
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
  },

  check(pNumber) {
    $.ajax({
      url: ADDRESS + 'checkLocalization',
      method: 'POST',
      origin: '*',
      contentType: 'text/plain',
      dataType: 'text',
      data: pNumber,
      success: (data, status) => {
        //console.log(data);
        //console.log(status);
        $('#imgLinkLocal').val('/data/partImg/' + data);
        $('.imgBtnLinks').removeClass('disabled');
        $('#localizeImg').addClass('disabled');
      },
      error: (err, xhr, some) => {
        console.log(err);
        console.log(xhr);
        console.log(some);
      }
    });
  }
};
