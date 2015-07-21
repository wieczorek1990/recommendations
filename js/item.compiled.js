(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "    <div class=\"row\">\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n";
},"2":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "            <div class="
    + escapeExpression(((helpers.col || (depth0 && depth0.col) || helperMissing).call(depth0, (depths[2] != null ? depths[2].colSize : depths[2]), {"name":"col","hash":{},"data":data})))
    + ">\n                <h2 class=\"text-center\">"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n\n";
  stack1 = ((helpers.ifImage || (depth0 && depth0.ifImage) || helperMissing).call(depth0, (depth0 != null ? depth0.image : depth0), (depths[2] != null ? depths[2].platform : depths[2]), {"name":"ifImage","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.ifShort || (depth0 && depth0.ifShort) || helperMissing).call(depth0, (depth0 != null ? depth0.description : depth0), {"name":"ifShort","hash":{},"fn":this.program(5, data, depths),"inverse":this.program(7, data, depths),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                <p class=\"text-center\">\n                    <a class=\"btn btn-primary\" href="
    + escapeExpression(((helpers.link || (depth0 && depth0.link) || helperMissing).call(depth0, (data && data.key), (depths[2] != null ? depths[2].platform : depths[2]), depth0, {"name":"link","hash":{},"data":data})))
    + " role=\"button\">\n                        "
    + escapeExpression(((helpers.go || (depth0 && depth0.go) || helperMissing).call(depth0, (depths[2] != null ? depths[2].platform : depths[2]), {"name":"go","hash":{},"data":data})))
    + "\n                    </a>\n                </p>\n            </div>\n";
},"3":function(depth0,helpers,partials,data,depths) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "                    <a href=\""
    + escapeExpression(((helpers.link || (depth0 && depth0.link) || helperMissing).call(depth0, (data && data.key), (depths[3] != null ? depths[3].platform : depths[3]), depth0, {"name":"link","hash":{},"data":data})))
    + "\">\n                        <img class=\"img-responsive center-block\"\n                             style=\"width: "
    + escapeExpression(((helpers.size || (depth0 && depth0.size) || helperMissing).call(depth0, (depths[3] != null ? depths[3].platform : depths[3]), {"name":"size","hash":{},"data":data})))
    + "px; height: auto;\"\n                             src="
    + escapeExpression(((helpers.img || (depth0 && depth0.img) || helperMissing).call(depth0, (data && data.key), (depths[3] != null ? depths[3].platform : depths[3]), {"name":"img","hash":{},"data":data})))
    + " alt="
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + ">\n                    </a>\n";
},"5":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <p class=\"lead text-center\">"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n";
},"7":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <p class=\"lead text-justify\">"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true,"useDepths":true});
})();
