!function (context) {
  
  var gravel = {
    
    tagify: function (el, keywordFunc) {
      el.map(function (el) {
        var el = $(el),
            kwds = el.text().split(/\s+/),
            keywordFunc = keywordFunc || function (kwd) {
              return kwd.toLowerCase()
            };
        
        if (keywordFunc) for (var i = 0; i < kwds.length; i++) kwds[i] = keywordFunc(kwds[i]);
        
        el.attr("data-keywords", kwds.join(","));
      });
    },
    
    filter: function (el, query, queryFunc, matchCallback, noMatchCallback) {
      var queryFunc = queryFunc || function (query) {
            return query.replace(/^\s\s*/, "").replace(/\s\s*$/, "").toLowerCase()
          },
          matchCallback = matchCallback || function (el) { el.show(); },
          noMatchCallback = noMatchCallback || function (el) { el.hide(); };
      
      if (queryFunc) query = queryFunc(query);
      var terms = query.split(/\s+/);
      
      el.map(function (el) {
        var el = $(el),
            matches = 0,
            kwds = el.attr("data-keywords").split(",");
        
        for (var j = 0; j < terms.length; j++) {
          for (var i = 0; i < kwds.length; i++) {
            if (kwds[i].indexOf(terms[j]) === 0) { matches++; break; }
          }
          
          if (matches === terms.length) break;
        }
        
        (matches === terms.length) ? matchCallback(el) : noMatchCallback(el);
      });
    }
    
  };

  var oldGravel = context.gravel;
  gravel.noConflict = function () {
    context.gravel = oldGravel;
    return this;
  };

  (typeof module !== "undefined" && module.exports) ? (module.exports = gravel) : (context["gravel"] = gravel);
  
}(this);