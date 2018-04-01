/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary Loading screen controls.
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-01 20:31:40 
 * Last modified  : 2018-04-01 20:38:04
 */

module.exports = {
    startLoading() {
        $('loadingTxt').css('z-index', '7100');
        $('#loadingDiv').css('zIndex', '7000');
        $('#loadingDiv').fadeIn();
        $('.alertOverlay').css('z-index', '5900').fadeIn();
    },

    endLoading() {
        $('#loadingDiv').fadeOut();
        $('#loadingTxt').css('z-index', '-100');
        $('.alertOverlay').css('z-index', '-100').fadeOut();
    },
};