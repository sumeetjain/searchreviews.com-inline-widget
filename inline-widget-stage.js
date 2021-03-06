// Settings include:
// - width*
// - height*
// - font
// - font-size
// - color
// - number of reviews
// - whether to show a search box
// - pubId

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
	whatsThis.title = 'These customer reviews and links are keyword-targeted to the current page by SearchReviews.com.  By clicking on links in the SearchReviews widget you will leave the current site.  Both the current site and SearchReviews may receive commission from subsequent purchases.';
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
	
	// Set keywords, use backups if needed:
	function sriGetKeywords(){
		if (urlParams['reviews']){
			var rawString = urlParams['reviews'];
		}
		else{
			if (document.getElementsByTagName('h1')[0]){
				if (document.all){
					var rawString = document.getElementsByTagName('h1')[0].innerText.toLowerCase();
				}
				else{
					var rawString = document.getElementsByTagName('h1')[0].textContent.toLowerCase();
				}
			}
			else if (document.getElementsByTagName('h2')[0]){
				if (document.all){
					var rawString = document.getElementsByTagName('h2')[0].innerText.toLowerCase();
				}
				else{
					var rawString = document.getElementsByTagName('h2')[0].textContent.toLowerCase();
				}
			}
			else if (document.getElementsByTagName('h3')[0]){
				if (document.all){
					var rawString = document.getElementsByTagName('h3')[0].innerText.toLowerCase();
				}
				else{
					var rawString = document.getElementsByTagName('h3')[0].textContent.toLowerCase();
				}
			}
			else if (document.getElementsByTagName('h4')[0]){
				if (document.all){
					var rawString = document.getElementsByTagName('h4')[0].innerText.toLowerCase();
				}
				else{
					var rawString = document.getElementsByTagName('h4')[0].textContent.toLowerCase();
				}
			}
			else if (document.getElementsByTagName('h5')[0]){
				if (document.all){
					var rawString = document.getElementsByTagName('h5')[0].innerText.toLowerCase();
				}
				else{
					var rawString = document.getElementsByTagName('h5')[0].textContent.toLowerCase();
				}
			}
			else if (document.getElementsByTagName('h6')[0]){
				if (document.all){
					var rawString = document.getElementsByTagName('h6')[0].innerText.toLowerCase();
				}
				else{
					var rawString = document.getElementsByTagName('h6')[0].textContent.toLowerCase();
				}
			}
			else{
				var metaTags = document.getElementsByTagName('meta');
				for(var i = metaTags.length - 1; i >= 0; --i){

					if(metaTags[i].name == 'description'){
						var rawString = metaTags[i].content;
					}
				}
			}
		}
		
		var cleanString = rawString.replace(/reviews/g, "").replace(/review/g, "");
		return cleanString;
	}
	
	widgetFrame.src = 'http://searchreviews.com/widget/widget_inline_display.jsp?reviews=' + sriGetKeywords() + '&font=' + urlParams['font'] + '&fontSize=' + urlParams['fontSize'] + '&titleColor=' + urlParams['titleColor'] + '&productColor=' + urlParams['productColor'] + '&numReviews=' + urlParams['numReviews'] + '&searchBoxYN=' + urlParams['searchBoxYN'] + '&pubId=' + urlParams['pubId'] + '';
	alert(widgetFrame.src);
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