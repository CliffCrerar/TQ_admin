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
 * Last modified  : 2018-03-27 21:20:13
 */
const url = require('./reqUrl');
module.exports = () => {
  //console.log(url);
  $.ajax({
    url: url + 'pMakes',
    method: 'GET',
    origin: '*',
    contentType: 'text/plain',
    dataType: 'text',
    success: (data, status) => {
      console.log(status);
      console.log(data);
      console.log(data.split(',').sort());
      var makes = data.split(',').sort();
      for (var i = 0; i < makes.length; i++) {
        $('#make').append('<option>' + makes[i] + '</option>');
      }
    },
    error: (err, xhr, some) => {
      console.log(err);
      console.log(xhr);
      console.log(some);
    }
  });
};
