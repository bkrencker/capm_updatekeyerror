/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/capmui5error/ui5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});