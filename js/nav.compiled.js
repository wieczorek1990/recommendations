(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isActive : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <a href="
    + escapeExpression(((helpers.href || (depth0 && depth0.href) || helperMissing).call(depth0, (data && data.key), {"name":"href","hash":{},"data":data})))
    + ">"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\n        </li>\n";
},"2":function(depth0,helpers,partials,data) {
  return "            <li class=\"active\">\n";
  },"4":function(depth0,helpers,partials,data) {
  return "            <li>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul class=\"nav nav-justified\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.links : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>\n";
},"useData":true});
})();