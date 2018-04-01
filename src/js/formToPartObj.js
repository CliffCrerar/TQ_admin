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
 * Last modified  : 2018-04-01 18:01:33
 */

module.exports = () => {
  var models = []; // declare variable to store models
  // populate models array from the model options
  $('#models').children().each((i, el) => {
    //console.log(i, $(el).val());
    models.push($(el).val());
  });
  // take form values and populate JS object
  var part = {
    [$('#partNumber').val().toString()]: {
      partNum: $('#partNumber').val(),
      partName: $('#partName').val(),
      partDesc: $('#partDesc').val(),
      make: $('#make').val(),
      models: models,
      imgLink: $('#imgLink').val(),
      imgLinkLocal: $('#imgLinkLocal').val(),
      colors: $('#color').val(),
      grnt: $('#grnt').val() + ' ' + $('#grntPeriod').val(),
      instTime: $('#instTime').val(),
      price: $('#price').val(),
      cat: $('#cat').val()
    }
  };
  return part; // return the parts object
};

/*
	"A090025": {
		"partNum": "A090025",
		"partName": "Bash plate",
		"partDesc": "Made off aliminuim. Protects the engine casing from lose protectiles and road hazards must have for off roading",
		"make": "BMW",
		"models": ["F650GS", "F700GS", "F800GS", "F800GSA"],
		"imgLink": "http://tinyurl.com/y8ecotqe",
		"colors": "Black",
		"grnt": "1 Year",
		"instTime": 45,
		"price": 2295,
		"cat": "BP"
    },
*/
