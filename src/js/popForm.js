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
 * Last modified  : 2018-04-03 20:13:58
 */
//const url = require('./reqUrl');
module.exports = part => {
  //console.log(part);
  console.log(part);
  var p = JSON.parse(part);
  // WEB LINK
  $('#imgLink').val(p.imgLink);
  // CHECK FOR LOCAL LINK AND ACT
  $('.imgBtnLinks').removeClass('btn-primary').addClass('btn-secondary');
  if (p.imgLinkLocal != undefined && p.imgLinkLocal != '') {
    var localLink = ADDRESSFS + p.imgLinkLocal;
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
  // PART NAME
  $('#partName').val(p.partName);
  // PART DESCRIPTION
  $('#partDesc').val(p.partDesc);
  // PART MAKE
  $('#make').val(p.make);
  // MODELS
  for (var i = 0; i < p.models.length; i++) {
    $('#models').append(
      '<option value="' + i + '">' + p.models[i] + '</option>'
    );
  }
  // COLORS
  $('#color').val(p.colors);
  // INSTALLATION TIME
  $('#instTime').val(p.instTime);
  // CATEGORY
  $('#cat').val(p.cat);
  // PRICE
  $('#price').val(p.price);
  // GUARENTEE
  console.log(p.grnt);
  $('#grnt').val(p.grnt.split(' ')[0]);
  // GUARENTEE PERIOD
  if (p.grnt == 'None') {
    $('#grntPeriod').val('n/a');
  } else {
    $('#grntPeriod').val(p.grnt.split(' ')[1]);
  }
  // ACTIVATE EDIT
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
