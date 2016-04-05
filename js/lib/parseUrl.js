//
// This contains the parsing logic.
//

var parseUrl = (function() {
        function parseUrl() {
                this.highlight = {
                	startTag: "<b>",
                	endTag: "</b>" };
                this.source = "";
                this.setSource = function(sourceCode) {
                        this.source = sourceCode;
                }
                this.getTagSummary = function() {
                        var parser = new DOMParser();
                        var doc = parser.parseFromString(this.source,"text/html");
                        var tags = doc.getElementsByTagName("*");
                        var summary = {};

			console.log(tags);
                        for(a=0; a<tags.length; a++) {
                                summary[tags[a].tagName.toLowerCase()] = doc.getElementsByTagName(tags[a].tagName).length;
                        }
                        return summary;
                }
                this.highlightTag = function(tag) {

			var encodedSource = $('<div/>').text(this.source).html();

			// UGLY HACK: I would like to consolidate this into one regex :-)
			// Tags without attributes
			encodedSource = encodedSource.replace(new RegExp('&lt;(\/)?'+tag+'([^&gt;]*)&gt;','g'), this.highlight.startTag + '&lt;$1'+tag+'$2&gt;' + this.highlight.endTag);
			// Tags with attributes
			encodedSource = encodedSource.replace(new RegExp('&lt;(\/)?'+tag+'([^&gt;].*?)&gt;','g'), this.highlight.startTag + '&lt;$1'+tag+'$2&gt;' + this.highlight.endTag);

			return encodedSource; 
                }
        }
        return new parseUrl();
})();
