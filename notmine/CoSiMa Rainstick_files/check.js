var cosima = cosima || {};

/** @namespace */
cosima.check = {};

function showBlocker(text) {
  blocker = document.getElementById('blocker');
  classie.add(blocker, "open");
  classie.remove(blocker, "hidden");
  blocker.innerHTML = '<div class="overlay-content">' +
    '<button type="button" class="overlay-close" data-toggle="overlay" data-target="blocker">Close</button>' +
    '<div class="wrapper vertical-center">' +
    '<p>' + text + '</p>' +
    '</div>' +
    '</div>';
}

/** 
 *  Initialize check module.
 *  Check platform and open blocking overlay if necessary.
 */
cosima.check.init = function() {};

cosima.check.platform = function() {
  function parseVersionString(string) {
    if (string) {
      var a = string.split('.');

      if (a[1] >= 0)
        return parseFloat(a[0] + "." + a[1]);

      return parseFloat(a[0]);
    }

    return null;
  }

  var osVersion = parseVersionString(platform.os.version);
  var browserVersion = parseVersionString(platform.version);
  var msg = null;

  if (platform.os.family == "iOS") {
    if (osVersion < 6)
      msg = "This application requires at least iOS 6.<br/>You have iOS " + platform.os.version + ".";
  } else if (platform.os.family == "Android") {
    if (osVersion < 4.2)
      msg = "This application won't work properly on your device. It requires at least Android 4.2.";
    else if (platform.name != 'Chrome Mobile')
      msg = "For now, you have to use Chrome (version 35 or later) to run this application on an Android device.";
    else if (browserVersion < 35)
      msg = "Please install the latest version of Chrome to run this application.";
  } else {
    msg = "This application is designed for mobile devices under iOS or Android. It won't work properly on this device.";
  }

  if (msg !== null)
    showBlocker(msg);
};

cosima.check.init();