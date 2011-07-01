// I think this is deprecated by inline-widget-stage.js - or the JSP.

// Settings include:
// - width*
// - height*
// - font
// - font-size
// - color
// - number of reviews
// - whether to show a search box

window.onload = function(){
	var widgetFrameWidth = window.sr_inline_widget.width;
	var widgetFrameHeight = window.sr_inline_widget.height;
	
	var widgetContainer = document.createElement('div');
	widgetContainer.className = 'searchReviewsInlineWidget';
	
	var widgetFooter = document.createElement('div');
	widgetFooter.className = 'searchReviewsInlineWidgetFooter';
	
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
	whatsThisText.style.width = parseInt(window.sr_inline_widget.width) - 10;
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
	widgetFrame.style.width = widgetFrameWidth;
	widgetFrame.style.height = widgetFrameHeight;
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