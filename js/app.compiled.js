(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "    <div class=\"row\">\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "            <div class=\"col-lg-4\">\n                <h2 class=\"text-center\">"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n\n                <a href="
    + escapeExpression(((helpers.link || (depth0 && depth0.link) || helperMissing).call(depth0, (data && data.key), {"name":"link","hash":{},"data":data})))
    + ">\n                    <img class=\"img-responsive center-block\" src="
    + escapeExpression(((helpers.img || (depth0 && depth0.img) || helperMissing).call(depth0, (data && data.key), {"name":"img","hash":{},"data":data})))
    + " alt="
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + " height=\"170\"\n                         width=\"170\">\n                </a>\n\n";
  stack1 = ((helpers.ifShort || (depth0 && depth0.ifShort) || helperMissing).call(depth0, (depth0 != null ? depth0.description : depth0), {"name":"ifShort","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                <p class=\"text-center\"><a class=\"btn btn-primary\" href="
    + escapeExpression(((helpers.link || (depth0 && depth0.link) || helperMissing).call(depth0, (data && data.key), {"name":"link","hash":{},"data":data})))
    + " role=\"button\">Install »</a></p>\n            </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <p class=\"lead text-center\">"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n";
},"5":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <p class=\"lead text-justify\">"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();