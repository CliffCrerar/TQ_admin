/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Contians the alert functions
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-01 19:03:25 
 * Last modified  : 2018-04-01 20:44:33
 */

/* SHOW ALERT FUNCTION */
module.exports = userAlert => {
    $(userAlert).slideDown();
    $('.alertOverlay').css('z-index', '5900').fadeIn();
    /* HIDE ALERTS */
    $('.hideAlert').click(() => {
        $('.userAlert').slideUp();
        $('.alertOverlay').fadeOut();
        $('.alertOverlay').css('z-index', '-100');
    });
};