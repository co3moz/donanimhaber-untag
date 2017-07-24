var blockedThings = [
	'tag=donanimhaber-21',
	'utm_campaign=DonanimHaber',
	'utm_source=DonanimHaber'
].map(thing => new RegExp(thing, 'g'));

chrome.webRequest.onBeforeRequest.addListener(function (details) {
	for (var i = 0; i < blockedThings.length; i++) {
		if (blockedThings[i].test(details.url)) { // bak sen
			return { redirectUrl: details.url.replace(blockedThings[i], '') }; // uçur	
		}
	}
	return {};

}, {
		urls: [
			"*://*/*"
		],
		types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
	}, ["blocking"]);