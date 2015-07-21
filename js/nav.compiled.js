(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "            <a href="
    + alias1((helpers.href || (depth0 && depth0.href) || helpers.helperMissing).call(depth0,(data && data.key),{"name":"href","hash":{},"data":data}))
    + ">"
    + alias1(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\n        </li>\n";
},"2":function(depth0,helpers,partials,data) {
    return "            <li class=\"active\">\n";
},"4":function(depth0,helpers,partials,data) {
    return "            <li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"nav nav-justified\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
})();