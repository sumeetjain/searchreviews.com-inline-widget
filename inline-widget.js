// Settings include:
// - width*
// - height*
// - font
// - font-size
// - color
// - number of reviews
// - whether to show a search box

window.onload = function(){
	var widgetFrameWidth = '350px';
	var widgetFrameHeight = '475px';
	
	var widgetContainer = document.createElement('div');
	widgetContainer.className = 'searchReviewsInlineWidget';
	
	var widgetLink = document.createElement('a');
	widgetLink.className = 'searchReviewsInlineWidgetLink';
	widgetLink.href = 'http://searchreviews.com';
	widgetLink.innerHTML = '<img src="logo.png" alt="Searchreviews.com" />';
	widgetLink.style.display = 'block';
	
	var widgetFrame = document.createElement('iframe');
	widgetFrame.src = 'inline-widget.html';
	widgetFrame.scrolling = 'no';
	widgetFrame.style.width = widgetFrameWidth;
	widgetFrame.style.height = widgetFrameHeight;
	widgetFrame.style.border = '1px solid #ccc';
	widgetFrame.style.marginBottom = '6px';
	
	widgetContainer.appendChild(widgetFrame);
	widgetContainer.appendChild(widgetLink);
	var src = document.getElementById('searchReviewsInlineWidgetRef');
	src.parentNode.insertBefore(widgetContainer, src);
}