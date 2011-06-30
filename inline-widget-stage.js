// Settings include:
// - width*
// - height*
// - font
// - font-size
// - color
// - number of reviews
// - whether to show a search box

var urlParams = {};
(function () {
	var e,
	a = /\+/g,  // Regex for replacing addition symbol with a space
	r = /([^&=]+)=?([^&]*)/g,
	d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
	q = window.location.search.substring(1);

	while (e = r.exec(q))
		urlParams[d(e[1])] = d(e[2]);
})();

window.onload = function(){
	document.getElementById('inlineWidgetLink').style.display = 'none';
	
	var widgetFrameWidth = urlParams['width'];
	var widgetFrameHeight = urlParams['height'];
	
	var widgetContainer = document.createElement('div');
	widgetContainer.className = 'searchReviewsInlineWidget';
	
	var widgetFooter = document.createElement('div');
	widgetFooter.className = 'searchReviewsInlineWidgetFooter';
	widgetFooter.style.width = parseInt(widgetFrameWidth) + 2 + "px";
	widgetFooter.style.height = parseInt(widgetFrameHeight) + 2 + "px";
	
	var widgetLink = document.createElement('a');
	widgetLink.className = 'searchReviewsInlineWidgetLink';
	widgetLink.href = 'http://searchreviews.com';
	widgetLink.innerHTML = '<img src="logo.png" alt="Searchreviews.com" />';
	widgetLink.style.display = 'block';
	widgetLink.style.cssFloat = 'left';
	widgetLink.target = '_blank';
	
	var getWidgetLink = document.createElement('a');
	getWidgetLink.className = 'searchReviewsInlineGetWidgetLink';
	getWidgetLink.href = 'http://searchreviews.com/publisher';
	getWidgetLink.innerHTML = '<img src="getwidget.png" alt="Get Widget" />';
	getWidgetLink.style.display = 'block';
	getWidgetLink.style.cssFloat = 'right'
	getWidgetLink.target = '_blank';
	
	var whatsThis = document.createElement('a');
	whatsThis.className = 'searchReviewsInlineWhatsThis';
	whatsThis.href = '#';
	whatsThis.innerHTML = "what's this?";
	whatsThis.title = 'Disclaimer text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	whatsThis.style.display = 'block';
	whatsThis.style.clear = "both";
	whatsThis.style.fontFamily = 'Helvetica';
	whatsThis.style.textDecoration = 'none';
	whatsThis.style.fontSize = '9px';
	whatsThis.style.color = '#666';
	whatsThis.style.paddingTop = '3px';
	whatsThis.style.position = 'relative';
	
	var whatsThisText = document.createElement('div');
	whatsThisText.id = 'searchReviewsInlineWhatsThisText';
	whatsThisText.innerHTML = whatsThis.title;
	whatsThisText.style.background = "#ddd";
	whatsThisText.style.position = 'absolute';
	whatsThisText.style.width = parseInt(widgetFrameWidth) - 10;
	whatsThisText.style.padding = '5px';
	whatsThisText.style.border = "1px solid #bbb";
	whatsThisText.style.fontSize = '10px';
	whatsThisText.style.bottom = "33px";
	whatsThisText.style.left = "0";
	whatsThisText.style.display = 'none';
	whatsThisText.style.cursor = "default";
	
	whatsThis.onclick = function(){
		if (whatsThisText.style.display == 'none'){
			whatsThisText.style.display = 'block';
		}
		else{
			whatsThisText.style.display = 'none';
		}
		return false;
	}
	
	var widgetFrame = document.createElement('iframe');
	widgetFrame.src = 'inline-widget.html';
	widgetFrame.scrolling = 'no';
	widgetFrame.style.width = widgetFrameWidth + "px";
	widgetFrame.style.height = widgetFrameHeight + "px";
	widgetFrame.style.border = '1px solid #ccc';
	widgetFrame.style.marginBottom = '6px';
	
	widgetContainer.appendChild(widgetFrame);
	widgetFooter.appendChild(widgetLink);
	widgetFooter.appendChild(getWidgetLink);
	whatsThis.appendChild(whatsThisText);
	widgetFooter.appendChild(whatsThis);
	widgetContainer.appendChild(widgetFooter);
	var src = document.getElementById('searchReviewsInlineWidgetRef');
	src.parentNode.insertBefore(widgetContainer, src);
}