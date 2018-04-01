/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Send part number and recieve part data
 * @author Cliff Crerar
 *
 * Created at     : 2018-03-27 19:04:39 
 * Last modified  : 2018-04-01 16:03:11
 */

const url = require('./reqUrl');
const populateForm = require('./popForm');
module.exports = pNumber => {
  //console.log(url);
  $.ajax({
    url: url + 'prt',
    method: 'POST',
    origin: '*',
    contentType: 'text/plain',
    dataType: 'text',
    data: pNumber,
    success: (data, status) => {
      // console.log(data);
      // console.log(status);
      if (data == 'notExist') {
        alert(
          'Requested part does not exist, please enter a valid part number'
        );
      } else {
        populateForm(data);
      }
    },
    error: (err, xhr, some) => {
      console.log(err);
      console.log(xhr);
      console.log(some);
    }
  });
};
