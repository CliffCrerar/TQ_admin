/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Get a list of part numbers
 * @author Cliff Crerar
 *
 * Created at     : 2018-03-27 00:48:46 
 * Last modified  : 2018-03-27 03:06:36
 */
const url = require('./reqUrl');
module.exports = () => {
  //console.log(url);
  $.ajax({
    url: url + 'pNumbers',
    method: 'GET',
    origin: '*',
    contentType: 'text/plain',
    dataType: 'text',
    success: (data, status) => {
      //console.log(status);
      localStorage.partNumbers = data;
    },
    error: (err, xhr, some) => {
      console.log(err);
      console.log(xhr);
      console.log(some);
    }
  });
};