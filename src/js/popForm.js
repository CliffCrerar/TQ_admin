/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Populate workspace form with data
 * @author Cliff Crerar
 *
 * Created at     : 2018-03-27 20:22:37 
 * Last modified  : 2018-04-02 21:40:31
 */
const url = require('./reqUrl');
module.exports = part => {
  //console.log(part);
  //console.log(JSON.parse(part));
  var p = JSON.parse(part);
  $('#imgLink').val(p.imgLink);
  $('.imgBtnLinks').removeClass('btn-primary').addClass('btn-secondary');
  if (p.imgLinkLocal != undefined && p.imgLinkLocal != '') {
    var localLink = url.fileServer() + p.imgLinkLocal;
    $('#imgLinkLocal').val(p.imgLinkLocal);
    $('#showImg').attr('src', localLink);
    $('#imgLinkLocalBtn').removeClass('btn-secondary').addClass('btn-primary');
    $('#localizeImg').addClass('disabled');
  } else {
    $('#imgLinkLocal').val('');
    $('#showImg').attr('src', p.imgLink);
    $('#imgLinkBtn')
      .removeClass('btn-secondary')
      .addClass('btn-primary disabled');
    $('#imgLinkLocalBtn').addClass('disabled');
  }
  $('#partName').val(p.partName);
  $('#partDesc').val(p.partDesc);
  $('#make').val(p.make);
  for (var i = 0; i < p.models.length; i++) {
    $('#models').append(
      '<option value="' + i + '">' + p.models[i] + '</option>'
    );
  }
  $('#color').val(p.colors);
  $('#instTime').val(p.instTime);
  $('#cat').val(p.cat);
  $('#price').val(p.price);
  $('#grnt').val(p.grnt.split(' ')[0]);
  $('#grntPeriod').val(p.grnt.split(' ')[1]);
  $('#edit_save').removeClass('disabled');
};

/*
cat: "OTH"
colors: "Black cap"
grnt: "0"
imgLink: "http://tinyurl.com/ybzkfut4"
instTime: 30
make: "BMW"
models: Array [ "F650GS", "F700GS", "F800GS", … ]
partDesc: "Supplies auxiliary power for add ons"
partName: "Hella Female Power Outlet Socket"
partNum: "A01010"
price: 55
*/
