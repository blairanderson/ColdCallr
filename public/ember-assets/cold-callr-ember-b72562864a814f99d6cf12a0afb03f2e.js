define("cold-callr-ember/adapters/application",["ember-data","cold-callr-ember/config/environment","exports"],function(e,t,a){"use strict";var r=e["default"],s=t["default"];a["default"]=r.ActiveModelAdapter.extend({host:s.host,namespace:"api"})}),define("cold-callr-ember/config/environment",["exports"],function(e){"use strict";e["default"]={environment:"production",baseURL:"/",locationType:"auto",EmberENV:{FEATURES:{}},APP:{},host:""}}),define("cold-callr-ember/app",["ember","ember/resolver","ember/load-initializers","exports"],function(e,t,a,r){"use strict";var s=e["default"],n=t["default"],o=a["default"];s.MODEL_FACTORY_INJECTIONS=!0;var l=s.Application.extend({modulePrefix:"cold-callr-ember",Resolver:n});o(l,"cold-callr-ember"),r["default"]=l}),define("cold-callr-ember/config/environments/production",["exports"],function(e){"use strict";e["default"]={environment:"production",baseURL:"/",locationType:"auto",EmberENV:{FEATURES:{}},APP:{},host:""}}),define("cold-callr-ember/controllers/contacts",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.ArrayController.extend({perPage:100,page:1,currentContact:1})}),define("cold-callr-ember/models/contact",["ember-data","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Model.extend({name:a.attr(),phone:a.attr(),doNotCall:a.attr("boolean"),properties:a.attr()})}),define("cold-callr-ember/router",["ember","exports"],function(e,t){"use strict";var a=e["default"],r=a.Router.extend({location:ColdCallrEmberENV.locationType});r.map(function(){this.resource("contacts",function(){this.route("show",{path:":contact_id"})})}),t["default"]=r}),define("cold-callr-ember/routes/contacts",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Route.extend({model:function(){return this.store.find("contact")},afterModel:function(e){e.get("length")>0&&this.transitionTo("contacts.show",e.get("lastObject"))},actions:{getMore:function(){if(!this.get("loadingMore")){this.set("loadingMore",!0);var e=this.get("controller"),t=(e.get("currentPage")+1,e.get("perPage"),this.incrementProperty("currentPage"));e.set("currentPage",t);var a=this.get("store").find("contact",{page:t});a.get("length")>0&&this.transitionTo("contacts.show",a.get("lastObject")),this.set("loadingMore",!1)}}}})}),define("cold-callr-ember/templates/application",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,r,s,n){this.compilerInfo=[4,">= 1.0.0"],r=this.merge(r,a.Handlebars.helpers),n=n||{};var o,l="";return n.buffer.push("<h2 id='title'>Welcome to ColdCallr</h2>\n\n\n"),o=r._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(o||0===o)&&n.buffer.push(o),n.buffer.push("\n"),l})}),define("cold-callr-ember/templates/contacts",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,r,s,n){this.compilerInfo=[4,">= 1.0.0"],r=this.merge(r,a.Handlebars.helpers),n=n||{};var o,l,c,u="",i=this.escapeExpression,h=r.helperMissing;return n.buffer.push("Contacts\n<p>current: "),o=r._triageMustache.call(t,"currentContact",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(o||0===o)&&n.buffer.push(o),n.buffer.push("</p>\n<p><button "),n.buffer.push(i(r.action.call(t,"previous",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n}))),n.buffer.push(' class="btn btn-default">Previous</button></p>\n<p><button '),n.buffer.push(i(r.action.call(t,"getMore",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n}))),n.buffer.push(' class="btn btn-default">Next</button></p>\n<p>'),l=r["query-params"]||t&&t["query-params"],c={hash:{page:"nextPage"},hashTypes:{page:"ID"},hashContexts:{page:t},contexts:[],types:[],data:n},o=l?l.call(t,c):h.call(t,"query-params",c),n.buffer.push(i((l=r["link-to"]||t&&t["link-to"],c={hash:{},hashTypes:{},hashContexts:{},contexts:[t,t],types:["STRING","sexpr"],data:n},l?l.call(t,"Next",o,c):h.call(t,"link-to","Next",o,c)))),n.buffer.push("</p>\n"),o=r._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(o||0===o)&&n.buffer.push(o),n.buffer.push("\n\n"),u})}),define("cold-callr-ember/templates/contacts/index",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,r,s,n){this.compilerInfo=[4,">= 1.0.0"],r=this.merge(r,a.Handlebars.helpers),n=n||{};var o,l="";return n.buffer.push("array "),o=r._triageMustache.call(t,"model.length",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(o||0===o)&&n.buffer.push(o),n.buffer.push("\n\n"),l})}),define("cold-callr-ember/templates/contacts/show",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,r,s,n){this.compilerInfo=[4,">= 1.0.0"],r=this.merge(r,a.Handlebars.helpers),n=n||{};var o,l="";return n.buffer.push("Details:\n\n"),o=r._triageMustache.call(t,"name",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:n}),(o||0===o)&&n.buffer.push(o),l})});