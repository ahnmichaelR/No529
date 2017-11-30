var dialogsModule = require("ui/dialogs");
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();
exports.loaded = function(args) {
    page = args.object;
};
/* These functions will either send user back to home page or to Login page */
exports.Logout = function() { 
    var topmost = frameModule.topmost();
    topmost.navigate("Login/Login");
};

exports.cancel = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("home/home-page");
};