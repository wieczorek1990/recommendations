(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "    <div class=\"row\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "            <div class="
    + alias2((helpers.col || (depth0 && depth0.col) || alias1).call(depth0,(depths[2] != null ? depths[2].colSize : depths[2]),{"name":"col","hash":{},"data":data}))
    + ">\n                <h2 class=\"text-center\">"
    + alias2(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\n\n"
    + ((stack1 = (helpers.ifImage || (depth0 && depth0.ifImage) || alias1).call(depth0,(depth0 != null ? depth0.image : depth0),(depths[2] != null ? depths[2].platform : depths[2]),{"name":"ifImage","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifShort || (depth0 && depth0.ifShort) || alias1).call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"ifShort","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n                <p class=\"text-center\">\n                    <a class=\"btn btn-primary\" href="
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(data && data.key),(depths[2] != null ? depths[2].platform : depths[2]),depth0,{"name":"link","hash":{},"data":data}))
    + " role=\"button\">\n                        "
    + alias2((helpers.go || (depth0 && depth0.go) || alias1).call(depth0,(depths[2] != null ? depths[2].platform : depths[2]),{"name":"go","hash":{},"data":data}))
    + "\n                    </a>\n                </p>\n            </div>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                    <a href=\""
    + alias2((helpers.link || (depth0 && depth0.link) || alias1).call(depth0,(data && data.key),(depths[3] != null ? depths[3].platform : depths[3]),depth0,{"name":"link","hash":{},"data":data}))
    + "\">\n                        <img class=\"img-responsive center-block\"\n                             style=\"width: "
    + alias2((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depths[3] != null ? depths[3].platform : depths[3]),{"name":"size","hash":{},"data":data}))
    + "px; height: auto;\"\n                             src="
    + alias2((helpers.img || (depth0 && depth0.img) || alias1).call(depth0,(data && data.key),(depths[3] != null ? depths[3].platform : depths[3]),{"name":"img","hash":{},"data":data}))
    + " alt="
    + alias2(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + ">\n                    </a>\n";
},"5":function(depth0,helpers,partials,data) {
    return "                    <p class=\"lead text-center\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n";
},"7":function(depth0,helpers,partials,data) {
    return "                    <p class=\"lead text-justify\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
})();