/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    'POST /user': 'UserController.userSignup',
    'POST /user/login': 'UserController.userLogin',
    'POST /user/logout': 'UserController.userLogout',
    'POST /category': 'CategoryController.addCategory',
    'POST /product': 'ProductController.addProduct',

};
