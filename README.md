Crap Browser Notifier
=========

This is a javascript snippet that detects whether or not the user's browser is Microsoft Internet Explorer, and if it is, it adds a small window to the bottom-right of the window notifying the user that they are using a crappy browser and provides links to install better browsers.

### [Demo](http://milesmatthias.github.com/Crap-Browser-Notifier/) ###

### Usage: ###

	<script src="crapBrowserNotifier.js"></script>

### Requirements: ###

* jQuery
* Store 'browser_logos-64.png' on your web server and update the references

OR, if you don't want to locally store the image, use the standalone version:

	<script src="crapBrowserNotifier_STANDALONE.js"></script>

### Future improvements ###

* Automatically include jQuery if not already included
* Use a more lightweight version of jQuery, like jequip, since it barely uses jQuery
* Make image url a global variable so it's easier for the user to change

### License ###

[MIT License](http://www.opensource.org/licenses/mit-license.php)
