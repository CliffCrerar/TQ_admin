/**
 * TQ Admin Console
 *
 * Product of IA
 *
 * long description for the file
 *
 * @summary defines the address of the web server
 * @author Cliff Crerar
 *
 * Created at     : 2018-03-27 00:50:25 
 * Last modified  : 2018-04-02 21:17:13
 */

module.exports = {
  webserver() {
    //return 'http://172.16.0.104:8010/'; // mac home
    return 'http://34.242.179.249:8010/'; // web host
  }, // home mac
  //  webserver(){return 'http://172.17.20.50:8010/'}
  fileServer() {
    //return 'http://172.16.0.104:8015/'; // mac home
    return 'http://34.242.179.249:8015'; // web host
  }
};
