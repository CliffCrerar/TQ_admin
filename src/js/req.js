/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Cummunicates to server
 * @author Cliff Crerar
 *
 * Created at     : 2018-03-23 17:49:20 
 * Last modified  : 2018-03-24 18:52:57
 */

 module.exports = (data)=>{
     
    url = 
    $.ajax({
        type: "POST",
        origin: '*',
        contentType: 'text/json',
        dataType: 'json',
        data: JSON.stringify(data),
        success: (status, data)=>{
            console.log(status);
            console.log(data);
        },
        error: (err,xhr,some)=>{
            console.log(err);
            console.log(xhr);
            console.log(some);
        }
     });
 };
 
