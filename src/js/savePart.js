/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Saves parts from edit and add mode.
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-01 15:52:23 
 * Last modified  : 2018-04-01 19:08:19
 */
const url = require('./reqUrl');
module.exports = (partToSave, saveType) => {
  //console.log(url);
  $.ajax({
    url: url + saveType,
    method: 'POST',
    origin: '*',
    contentType: 'text/plain',
    dataType: 'text',
    data: JSON.stringify(partToSave),
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
