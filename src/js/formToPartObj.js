/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Converts the form back to object for transfer
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-01 16:05:18 
 * Last modified  : 2018-04-01 16:10:17
 */

module.exports = () => {
  var part = {
    [$('#partNumber').val().toString()]: {}
  };
  $('#imgLink').val(p.imgLink);
  $('#imgLinkLocal').val();
  $('#showImg').attr('src', p.imgLink);
  $('#partName').val(p.partName);
  $('#partDesc').val(p.partDesc);
  $('#make').val(p.make);
  for (var i = 0; i < p.models.length; i++) {
    $('#models').append('<option>' + p.models[i] + '</option>');
  }
  $('#color').val(p.colors);
  $('#instTime').val(p.instTime);
  $('#cat').val(p.cat);
  $('#price').val(p.price);
  $('#grnt').val(p.grnt.split(' ')[0]);
  $('#grntPeriod').val(p.grnt.split(' ')[1]);
  $('#edit_save').removeClass('disabled');
};
