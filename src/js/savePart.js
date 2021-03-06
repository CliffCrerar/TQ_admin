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
 * Last modified  : 2018-04-03 23:12:02
 */
//const url = require('./reqUrl');
const showAlert = require('./alerts');
const loading = require('./loading');
const modeSwitch = require('./modes');
module.exports = (partToSave, saveType) => {
  //console.log(url);
  $.ajax({
    url: ADDRESS + saveType,
    method: 'POST',
    origin: '*',
    contentType: 'text/plain',
    dataType: 'text',
    data: JSON.stringify(partToSave),
    success: (data, status) => {
      console.log(data);
      console.log(status);
      loading.endLoading();
      var Partnumber = Object.keys(partToSave).toString();
      $('#partSaved>.alertMsg').html(
        'The part <b>' +
          Partnumber +
          '</b> has been updated, succesfully. <button type="button" class="close hideAlert"><span aria-hidden="true">&times;</span>'
      );
      $('#noChanges>.alertMsg').html(
        'Nothing has been updated for part <b>' +
          Partnumber +
          '</b> no changes were made. <button type="button" class="close hideAlert"><span aria-hidden="true">&times;</span>'
      );
      if (data == 'update') {
        showAlert($('#partSaved'));
        modeSwitch.viewMode();
      } else {
        showAlert($('#noChanges'));
      }
    },
    error: (err, xhr, some) => {
      console.log(err);
      console.log(xhr);
      console.log(some);
      loading.endLoading();
    }
  });
};
