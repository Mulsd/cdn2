$(document).ready(function() {

    if (location.href.indexOf(atob("bWUubXVsc2QueHl6")) == -1) {
        location.href = atob("Ly9tZS5tdWxzZC54eXo=");
    }
    var content = "";
    var author = "";
    var getQuote = function() {
        $.getJSON("https://v1.hitokoto.cn/?c=a&encode=json", function(json) {
            content = json["hitokoto"];
            author = json["from"];
            //console.log(content+"_"+author);

            $(".quote-content").html("「 " + content + " 」");
            $(".quote-author").html("——" + author);
        });
    }

    getQuote();

});