var frameModule = require("ui/frame");

exports.Logout = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("login/login-page");
};

exports.Cancel = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("home/home-page");
};

var dialogs = require("ui/dialogs");
dialogs.alert("There was an error!(This is a test)").then(function() {
    console.log("Dialog closed!");
});


