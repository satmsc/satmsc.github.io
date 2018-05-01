webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-content/admin-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-content/admin-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Dashboard\n      <small>Control panel</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- Small boxes (Stat box) -->\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-aqua\">\n          <div class=\"inner\">\n            <h3>150</h3>\n\n            <p>New Orders</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-bag\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-green\">\n          <div class=\"inner\">\n            <h3>53<sup style=\"font-size: 20px\">%</sup></h3>\n\n            <p>Bounce Rate</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-stats-bars\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-yellow\">\n          <div class=\"inner\">\n            <h3>44</h3>\n\n            <p>User Registrations</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-person-add\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-red\">\n          <div class=\"inner\">\n            <h3>65</h3>\n\n            <p>Unique Visitors</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-pie-graph\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n    </div>\n    <!-- /.row -->\n    <!-- Main row -->\n    <div class=\"row\">\n      <!-- Left col -->\n      <section class=\"col-lg-7 connectedSortable\">\n        <!-- Custom tabs (Charts with tabs)-->\n        <div class=\"nav-tabs-custom\">\n          <!-- Tabs within a box -->\n          <ul class=\"nav nav-tabs pull-right\">\n            <li class=\"active\"><a href=\"#revenue-chart\" data-toggle=\"tab\">Area</a></li>\n            <li><a href=\"#sales-chart\" data-toggle=\"tab\">Donut</a></li>\n            <li class=\"pull-left header\"><i class=\"fa fa-inbox\"></i> Sales</li>\n          </ul>\n          <div class=\"tab-content no-padding\">\n            <!-- Morris chart - Sales -->\n            <div class=\"chart tab-pane active\" id=\"revenue-chart\" style=\"position: relative; height: 300px;\"></div>\n            <div class=\"chart tab-pane\" id=\"sales-chart\" style=\"position: relative; height: 300px;\"></div>\n          </div>\n        </div>\n        <!-- /.nav-tabs-custom -->\n\n        <!-- Chat box -->\n        <div class=\"box box-success\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-comments-o\"></i>\n\n            <h3 class=\"box-title\">Chat</h3>\n\n            <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"Status\">\n              <div class=\"btn-group\" data-toggle=\"btn-toggle\">\n                <button type=\"button\" class=\"btn btn-default btn-sm active\"><i class=\"fa fa-square text-green\"></i>\n                  </button>\n                <button type=\"button\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-square text-red\"></i></button>\n              </div>\n            </div>\n          </div>\n          <div class=\"box-body chat\" id=\"chat-box\">\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"assets/img/user4-128x128.jpg\" alt=\"user image\" class=\"online\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 2:15</small>\n                    Mike Doe\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\n                They say it is going to be one the best themes on the market\n              </p>\n              <div class=\"attachment\">\n                <h4>Attachments:</h4>\n\n                <p class=\"filename\">\n                  Theme-thumbnail-image.jpg\n                </p>\n\n                <div class=\"pull-right\">\n                  <button type=\"button\" class=\"btn btn-primary btn-sm btn-flat\">Open</button>\n                </div>\n              </div>\n              <!-- /.attachment -->\n            </div>\n            <!-- /.item -->\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"assets/img/user3-128x128.jpg\" alt=\"user image\" class=\"offline\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:15</small>\n                    Alexander Pierce\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\n                They say it is going to be one the best themes on the market\n              </p>\n            </div>\n            <!-- /.item -->\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"assets/img/user2-160x160.jpg\" alt=\"user image\" class=\"offline\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:30</small>\n                    Susan Doe\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\n                They say it is going to be one the best themes on the market\n              </p>\n            </div>\n            <!-- /.item -->\n          </div>\n          <!-- /.chat -->\n          <div class=\"box-footer\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"Type message...\">\n\n              <div class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /.box (chat box) -->\n\n        <!-- TO DO List -->\n        <div class=\"box box-primary\">\n          <div class=\"box-header\">\n            <i class=\"ion ion-clipboard\"></i>\n\n            <h3 class=\"box-title\">To Do List</h3>\n\n            <div class=\"box-tools pull-right\">\n              <ul class=\"pagination pagination-sm inline\">\n                <li><a href=\"#\">&laquo;</a></li>\n                <li><a href=\"#\">1</a></li>\n                <li><a href=\"#\">2</a></li>\n                <li><a href=\"#\">3</a></li>\n                <li><a href=\"#\">&raquo;</a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <ul class=\"todo-list\">\n              <li>\n                <!-- drag handle -->\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <!-- checkbox -->\n                <input type=\"checkbox\" value=\"\">\n                <!-- todo text -->\n                <span class=\"text\">Design a nice theme</span>\n                <!-- Emphasis label -->\n                <small class=\"label label-danger\"><i class=\"fa fa-clock-o\"></i> 2 mins</small>\n                <!-- General tools such as edit or delete-->\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Make the theme responsive</span>\n                <small class=\"label label-info\"><i class=\"fa fa-clock-o\"></i> 4 hours</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-warning\"><i class=\"fa fa-clock-o\"></i> 1 day</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-success\"><i class=\"fa fa-clock-o\"></i> 3 days</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Check your messages and notifications</span>\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1 week</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-default\"><i class=\"fa fa-clock-o\"></i> 1 month</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer clearfix no-border\">\n            <button type=\"button\" class=\"btn btn-default pull-right\"><i class=\"fa fa-plus\"></i> Add item</button>\n          </div>\n        </div>\n        <!-- /.box -->\n\n        <!-- quick email widget -->\n        <div class=\"box box-info\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-envelope\"></i>\n\n            <h3 class=\"box-title\">Quick Email</h3>\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <button type=\"button\" class=\"btn btn-info btn-sm\" data-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\n                  <i class=\"fa fa-times\"></i></button>\n            </div>\n            <!-- /. tools -->\n          </div>\n          <div class=\"box-body\">\n            <form action=\"#\" method=\"post\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" name=\"emailto\" placeholder=\"Email to:\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Subject\">\n              </div>\n              <div>\n                <textarea class=\"textarea\" placeholder=\"Message\" style=\"width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\n              </div>\n            </form>\n          </div>\n          <div class=\"box-footer clearfix\">\n            <button type=\"button\" class=\"pull-right btn btn-default\" id=\"sendEmail\">Send\n                <i class=\"fa fa-arrow-circle-right\"></i></button>\n          </div>\n        </div>\n\n      </section>\n      <!-- /.Left col -->\n      <!-- right col (We are only adding the ID to make the widgets sortable)-->\n      <section class=\"col-lg-5 connectedSortable\">\n\n        <!-- Map box -->\n        <div class=\"box box-solid bg-light-blue-gradient\">\n          <div class=\"box-header\">\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <button type=\"button\" class=\"btn btn-primary btn-sm daterange pull-right\" data-toggle=\"tooltip\" title=\"Date range\">\n                  <i class=\"fa fa-calendar\"></i></button>\n              <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" data-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\"\n                style=\"margin-right: 5px;\">\n                  <i class=\"fa fa-minus\"></i></button>\n            </div>\n            <!-- /. tools -->\n\n            <i class=\"fa fa-map-marker\"></i>\n\n            <h3 class=\"box-title\">\n              Visitors\n            </h3>\n          </div>\n          <div class=\"box-body\">\n            <div id=\"world-map\" style=\"height: 250px; width: 100%;\"></div>\n          </div>\n          <!-- /.box-body-->\n          <div class=\"box-footer no-border\">\n            <div class=\"row\">\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <div id=\"sparkline-1\"></div>\n                <div class=\"knob-label\">Visitors</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <div id=\"sparkline-2\"></div>\n                <div class=\"knob-label\">Online</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\">\n                <div id=\"sparkline-3\"></div>\n                <div class=\"knob-label\">Exists</div>\n              </div>\n              <!-- ./col -->\n            </div>\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box -->\n\n        <!-- solid sales graph -->\n        <div class=\"box box-solid bg-teal-gradient\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-th\"></i>\n\n            <h3 class=\"box-title\">Sales Graph</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n          </div>\n          <div class=\"box-body border-radius-none\">\n            <div class=\"chart\" id=\"line-chart\" style=\"height: 250px;\"></div>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer no-border\">\n            <div class=\"row\">\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"20\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">Mail-Orders</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"50\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">Online</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"30\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">In-Store</div>\n              </div>\n              <!-- ./col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-footer -->\n        </div>\n        <!-- /.box -->\n\n        <!-- Calendar -->\n        <div class=\"box box-solid bg-green-gradient\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-calendar\"></i>\n\n            <h3 class=\"box-title\">Calendar</h3>\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <!-- button with a dropdown -->\n              <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-success btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"fa fa-bars\"></i></button>\n                <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n                  <li><a href=\"#\">Add new event</a></li>\n                  <li><a href=\"#\">Clear events</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">View calendar</a></li>\n                </ul>\n              </div>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n            <!-- /. tools -->\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body no-padding\">\n            <!--The calendar -->\n            <div id=\"calendar\" style=\"width: 100%\"></div>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer text-black\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <!-- Progress bars -->\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #1</span>\n                  <small class=\"pull-right\">90%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\n                </div>\n\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #2</span>\n                  <small class=\"pull-right\">70%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 70%;\"></div>\n                </div>\n              </div>\n              <!-- /.col -->\n              <div class=\"col-sm-6\">\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #3</span>\n                  <small class=\"pull-right\">60%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 60%;\"></div>\n                </div>\n\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #4</span>\n                  <small class=\"pull-right\">40%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 40%;\"></div>\n                </div>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box -->\n\n      </section>\n      <!-- right col -->\n    </div>\n    <!-- /.row (main row) -->\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-content/admin-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminContentComponent = (function () {
    function AdminContentComponent() {
    }
    AdminContentComponent.prototype.ngOnInit = function () {
    };
    AdminContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-content',
            template: __webpack_require__("../../../../../src/app/admin/admin-content/admin-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-content/admin-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminContentComponent);
    return AdminContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\n  <!-- Create the tabs -->\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n    <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n  </ul>\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <!-- Home tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                <p>Will be 23 on April 24th</p>\n              </div>\n            </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n                <p>New phone +1(800)555-1234</p>\n              </div>\n            </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n                <p>nora@example.com</p>\n              </div>\n            </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n                <p>Execution time 5 seconds</p>\n              </div>\n            </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Custom Template Design\n              <span class=\"label label-danger pull-right\">70%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Update Resume\n              <span class=\"label label-success pull-right\">95%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Laravel Integration\n              <span class=\"label label-warning pull-right\">50%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Back End Framework\n              <span class=\"label label-primary pull-right\">68%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n    </div>\n    <!-- /.tab-pane -->\n    <!-- Stats tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n    <!-- /.tab-pane -->\n    <!-- Settings tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n      <form method=\"post\">\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n          <p>\n            Some information about this general settings option\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n          <p>\n            Other sets of options are available\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n          <p>\n            Allow the user to show his name in blog posts\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n            </label>\n        </div>\n        <!-- /.form-group -->\n      </form>\n    </div>\n    <!-- /.tab-pane -->\n  </div>\n</aside>\n<!-- Add the sidebar's background. This div must be placed\n       immediately after the control sidebar -->\n<div class=\"control-sidebar-bg\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminControlSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminControlSidebarComponent = (function () {
    function AdminControlSidebarComponent() {
    }
    AdminControlSidebarComponent.prototype.ngOnInit = function () {
    };
    AdminControlSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-control-sidebar',
            template: __webpack_require__("../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminControlSidebarComponent);
    return AdminControlSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Dashboard\n      <small>Control panel</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- Small boxes (Stat box) -->\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-aqua\">\n          <div class=\"inner\">\n            <h3>150</h3>\n\n            <p>New Orders</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-bag\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-green\">\n          <div class=\"inner\">\n            <h3>53<sup style=\"font-size: 20px\">%</sup></h3>\n\n            <p>Bounce Rate</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-stats-bars\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-yellow\">\n          <div class=\"inner\">\n            <h3>44</h3>\n\n            <p>User Registrations</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-person-add\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-red\">\n          <div class=\"inner\">\n            <h3>65</h3>\n\n            <p>Unique Visitors</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-pie-graph\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n    </div>\n    <!-- /.row -->\n    <!-- Main row -->\n    <div class=\"row\">\n      <!-- Left col -->\n      <section class=\"col-lg-7 connectedSortable\">\n        <!-- Custom tabs (Charts with tabs)-->\n        <div class=\"nav-tabs-custom\">\n          <!-- Tabs within a box -->\n          <ul class=\"nav nav-tabs pull-right\">\n            <li class=\"active\"><a href=\"#revenue-chart\" data-toggle=\"tab\">Area</a></li>\n            <li><a href=\"#sales-chart\" data-toggle=\"tab\">Donut</a></li>\n            <li class=\"pull-left header\"><i class=\"fa fa-inbox\"></i> Sales</li>\n          </ul>\n          <div class=\"tab-content no-padding\">\n            <!-- Morris chart - Sales -->\n            <div class=\"chart tab-pane active\" id=\"revenue-chart\" style=\"position: relative; height: 300px;\"></div>\n            <div class=\"chart tab-pane\" id=\"sales-chart\" style=\"position: relative; height: 300px;\"></div>\n          </div>\n        </div>\n        <!-- /.nav-tabs-custom -->\n\n        <!-- Chat box -->\n        <div class=\"box box-success\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-comments-o\"></i>\n\n            <h3 class=\"box-title\">Chat</h3>\n\n            <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"Status\">\n              <div class=\"btn-group\" data-toggle=\"btn-toggle\">\n                <button type=\"button\" class=\"btn btn-default btn-sm active\"><i class=\"fa fa-square text-green\"></i>\n                  </button>\n                <button type=\"button\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-square text-red\"></i></button>\n              </div>\n            </div>\n          </div>\n          <div class=\"box-body chat\" id=\"chat-box\">\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"assets/img/user4-128x128.jpg\" alt=\"user image\" class=\"online\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 2:15</small>\n                    Mike Doe\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\n                They say it is going to be one the best themes on the market\n              </p>\n              <div class=\"attachment\">\n                <h4>Attachments:</h4>\n\n                <p class=\"filename\">\n                  Theme-thumbnail-image.jpg\n                </p>\n\n                <div class=\"pull-right\">\n                  <button type=\"button\" class=\"btn btn-primary btn-sm btn-flat\">Open</button>\n                </div>\n              </div>\n              <!-- /.attachment -->\n            </div>\n            <!-- /.item -->\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"assets/img/user3-128x128.jpg\" alt=\"user image\" class=\"offline\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:15</small>\n                    Alexander Pierce\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\n                They say it is going to be one the best themes on the market\n              </p>\n            </div>\n            <!-- /.item -->\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"assets/img/user2-160x160.jpg\" alt=\"user image\" class=\"offline\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                    <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:30</small>\n                    Susan Doe\n                  </a> I would like to meet you to discuss the latest news about the arrival of the new theme.\n                They say it is going to be one the best themes on the market\n              </p>\n            </div>\n            <!-- /.item -->\n          </div>\n          <!-- /.chat -->\n          <div class=\"box-footer\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"Type message...\">\n\n              <div class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /.box (chat box) -->\n\n        <!-- TO DO List -->\n        <div class=\"box box-primary\">\n          <div class=\"box-header\">\n            <i class=\"ion ion-clipboard\"></i>\n\n            <h3 class=\"box-title\">To Do List</h3>\n\n            <div class=\"box-tools pull-right\">\n              <ul class=\"pagination pagination-sm inline\">\n                <li><a href=\"#\">&laquo;</a></li>\n                <li><a href=\"#\">1</a></li>\n                <li><a href=\"#\">2</a></li>\n                <li><a href=\"#\">3</a></li>\n                <li><a href=\"#\">&raquo;</a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <ul class=\"todo-list\">\n              <li>\n                <!-- drag handle -->\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <!-- checkbox -->\n                <input type=\"checkbox\" value=\"\">\n                <!-- todo text -->\n                <span class=\"text\">Design a nice theme</span>\n                <!-- Emphasis label -->\n                <small class=\"label label-danger\"><i class=\"fa fa-clock-o\"></i> 2 mins</small>\n                <!-- General tools such as edit or delete-->\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Make the theme responsive</span>\n                <small class=\"label label-info\"><i class=\"fa fa-clock-o\"></i> 4 hours</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-warning\"><i class=\"fa fa-clock-o\"></i> 1 day</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-success\"><i class=\"fa fa-clock-o\"></i> 3 days</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Check your messages and notifications</span>\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1 week</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                <span class=\"handle\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                      </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-default\"><i class=\"fa fa-clock-o\"></i> 1 month</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer clearfix no-border\">\n            <button type=\"button\" class=\"btn btn-default pull-right\"><i class=\"fa fa-plus\"></i> Add item</button>\n          </div>\n        </div>\n        <!-- /.box -->\n\n        <!-- quick email widget -->\n        <div class=\"box box-info\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-envelope\"></i>\n\n            <h3 class=\"box-title\">Quick Email</h3>\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <button type=\"button\" class=\"btn btn-info btn-sm\" data-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\n                  <i class=\"fa fa-times\"></i></button>\n            </div>\n            <!-- /. tools -->\n          </div>\n          <div class=\"box-body\">\n            <form action=\"#\" method=\"post\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" name=\"emailto\" placeholder=\"Email to:\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Subject\">\n              </div>\n              <div>\n                <textarea class=\"textarea\" placeholder=\"Message\" style=\"width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\n              </div>\n            </form>\n          </div>\n          <div class=\"box-footer clearfix\">\n            <button type=\"button\" class=\"pull-right btn btn-default\" id=\"sendEmail\">Send\n                <i class=\"fa fa-arrow-circle-right\"></i></button>\n          </div>\n        </div>\n\n      </section>\n      <!-- /.Left col -->\n      <!-- right col (We are only adding the ID to make the widgets sortable)-->\n      <section class=\"col-lg-5 connectedSortable\">\n\n        <!-- Map box -->\n        <div class=\"box box-solid bg-light-blue-gradient\">\n          <div class=\"box-header\">\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <button type=\"button\" class=\"btn btn-primary btn-sm daterange pull-right\" data-toggle=\"tooltip\" title=\"Date range\">\n                  <i class=\"fa fa-calendar\"></i></button>\n              <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" data-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\"\n                style=\"margin-right: 5px;\">\n                  <i class=\"fa fa-minus\"></i></button>\n            </div>\n            <!-- /. tools -->\n\n            <i class=\"fa fa-map-marker\"></i>\n\n            <h3 class=\"box-title\">\n              Visitors\n            </h3>\n          </div>\n          <div class=\"box-body\">\n            <div id=\"world-map\" style=\"height: 250px; width: 100%;\"></div>\n          </div>\n          <!-- /.box-body-->\n          <div class=\"box-footer no-border\">\n            <div class=\"row\">\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <div id=\"sparkline-1\"></div>\n                <div class=\"knob-label\">Visitors</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <div id=\"sparkline-2\"></div>\n                <div class=\"knob-label\">Online</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\">\n                <div id=\"sparkline-3\"></div>\n                <div class=\"knob-label\">Exists</div>\n              </div>\n              <!-- ./col -->\n            </div>\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box -->\n\n        <!-- solid sales graph -->\n        <div class=\"box box-solid bg-teal-gradient\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-th\"></i>\n\n            <h3 class=\"box-title\">Sales Graph</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n          </div>\n          <div class=\"box-body border-radius-none\">\n            <div class=\"chart\" id=\"line-chart\" style=\"height: 250px;\"></div>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer no-border\">\n            <div class=\"row\">\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"20\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">Mail-Orders</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"50\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">Online</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"30\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">In-Store</div>\n              </div>\n              <!-- ./col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-footer -->\n        </div>\n        <!-- /.box -->\n\n        <!-- Calendar -->\n        <div class=\"box box-solid bg-green-gradient\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-calendar\"></i>\n\n            <h3 class=\"box-title\">Calendar</h3>\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <!-- button with a dropdown -->\n              <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-success btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"fa fa-bars\"></i></button>\n                <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n                  <li><a href=\"#\">Add new event</a></li>\n                  <li><a href=\"#\">Clear events</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">View calendar</a></li>\n                </ul>\n              </div>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n                </button>\n            </div>\n            <!-- /. tools -->\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body no-padding\">\n            <!--The calendar -->\n            <div id=\"calendar\" style=\"width: 100%\"></div>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer text-black\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <!-- Progress bars -->\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #1</span>\n                  <small class=\"pull-right\">90%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\n                </div>\n\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #2</span>\n                  <small class=\"pull-right\">70%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 70%;\"></div>\n                </div>\n              </div>\n              <!-- /.col -->\n              <div class=\"col-sm-6\">\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #3</span>\n                  <small class=\"pull-right\">60%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 60%;\"></div>\n                </div>\n\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #4</span>\n                  <small class=\"pull-right\">40%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 40%;\"></div>\n                </div>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box -->\n\n      </section>\n      <!-- right col -->\n    </div>\n    <!-- /.row (main row) -->\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboard1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminDashboard1Component = (function () {
    function AdminDashboard1Component() {
    }
    AdminDashboard1Component.prototype.ngOnInit = function () {
        // Update the AdminLTE layouts
        AdminLTE.init();
        // Make the dashboard widgets sortable Using jquery UI
        jQuery('.connectedSortable').sortable({
            placeholder: 'sort-highlight',
            connectWith: '.connectedSortable',
            handle: '.box-header, .nav-tabs',
            forcePlaceholderSize: true,
            zIndex: 999999
        });
        jQuery('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');
        // jQuery UI sortable for the todo list
        jQuery('.todo-list').sortable({
            placeholder: 'sort-highlight',
            handle: '.handle',
            forcePlaceholderSize: true,
            zIndex: 999999
        });
        // bootstrap WYSIHTML5 - text editor
        // jQuery('.textarea').wysihtml5();
        jQuery('.daterange').daterangepicker({
            ranges: {
                'Today': [__WEBPACK_IMPORTED_MODULE_1_moment__(), __WEBPACK_IMPORTED_MODULE_1_moment__()],
                'Yesterday': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'days'), __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'days')],
                'Last 7 Days': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(6, 'days'), __WEBPACK_IMPORTED_MODULE_1_moment__()],
                'Last 30 Days': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(29, 'days'), __WEBPACK_IMPORTED_MODULE_1_moment__()],
                'This Month': [__WEBPACK_IMPORTED_MODULE_1_moment__().startOf('month'), __WEBPACK_IMPORTED_MODULE_1_moment__().endOf('month')],
                'Last Month': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'month').startOf('month'), __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'month').endOf('month')]
            },
            startDate: __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(29, 'days'),
            endDate: __WEBPACK_IMPORTED_MODULE_1_moment__()
        }, function (start, end) {
            // window.alert('You chose:  ' + this.start.format('MMMM D, YYYY') + ' - ' + this.end.format('MMMM D, YYYY'));
        });
        this.knob = jQuery('.knob').knob();
        this.calendar = jQuery('#calendar').datepicker();
        // SLIMSCROLL FOR CHAT WIDGET
        jQuery('#chat-box').slimScroll({
            height: '250px'
        });
        this.areaChart = Morris.Area({
            element: 'revenue-chart',
            resize: true,
            data: [
                { y: '2011 Q1', item1: 2666, item2: 2666 },
                { y: '2011 Q2', item1: 2778, item2: 2294 },
                { y: '2011 Q3', item1: 4912, item2: 1969 },
                { y: '2011 Q4', item1: 3767, item2: 3597 },
                { y: '2012 Q1', item1: 6810, item2: 1914 },
                { y: '2012 Q2', item1: 5670, item2: 4293 },
                { y: '2012 Q3', item1: 4820, item2: 3795 },
                { y: '2012 Q4', item1: 15073, item2: 5967 },
                { y: '2013 Q1', item1: 10687, item2: 4460 },
                { y: '2013 Q2', item1: 8432, item2: 5713 }
            ],
            xkey: 'y',
            ykeys: ['item1', 'item2'],
            labels: ['Item 1', 'Item 2'],
            lineColors: ['#a0d0e0', '#3c8dbc'],
            hideHover: 'auto'
        });
        this.donutChart = Morris.Donut({
            element: 'sales-chart',
            resize: true,
            colors: ['#3c8dbc', '#f56954', '#00a65a'],
            data: [
                { label: 'Download Sales', value: 12 },
                { label: 'In-Store Sales', value: 30 },
                { label: 'Mail-Order Sales', value: 20 }
            ],
        });
        this.linechart = Morris.Line({
            element: 'line-chart',
            resize: true,
            data: [
                { y: '2011 Q1', item1: 2666 },
                { y: '2011 Q2', item1: 2778 },
                { y: '2011 Q3', item1: 4912 },
                { y: '2011 Q4', item1: 3767 },
                { y: '2012 Q1', item1: 6810 },
                { y: '2012 Q2', item1: 5670 },
                { y: '2012 Q3', item1: 4820 },
                { y: '2012 Q4', item1: 15073 },
                { y: '2013 Q1', item1: 10687 },
                { y: '2013 Q2', item1: 8432 }
            ],
            xkey: 'y',
            ykeys: ['item1'],
            labels: ['Item 1'],
            lineColors: ['#efefef'],
            lineWidth: 2,
            hideHover: 'auto',
            gridTextColor: '#fff',
            gridStrokeWidth: 0.4,
            pointSize: 4,
            pointStrokeColors: ['#efefef'],
            gridLineColor: '#efefef',
            gridTextFamily: 'Open Sans',
            gridTextSize: 10
        });
        /* The todo list plugin */
        /*
        jQuery('.todo-list').todolist({
          onCheck: function (ele) {
            window.console.log('The element has been checked');
            return ele;
          },
          onUncheck: function (ele) {
            window.console.log('The element has been unchecked');
            return ele;
          }
        });*/
    };
    AdminDashboard1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-dashboard1',
            template: __webpack_require__("../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboard1Component);
    return AdminDashboard1Component;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Dashboard\n      <small>Version 2.0</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- Info boxes -->\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-aqua\"><i class=\"ion ion-ios-gear-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">CPU Traffic</span>\n            <span class=\"info-box-number\">90<small>%</small></span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-red\"><i class=\"fa fa-google-plus\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Likes</span>\n            <span class=\"info-box-number\">41,410</span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n      </div>\n      <!-- /.col -->\n\n      <!-- fix for small devices only -->\n      <div class=\"clearfix visible-sm-block\"></div>\n\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-green\"><i class=\"ion ion-ios-cart-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Sales</span>\n            <span class=\"info-box-number\">760</span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-yellow\"><i class=\"ion ion-ios-people-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">New Members</span>\n            <span class=\"info-box-number\">2,000</span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"box\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Monthly Recap Report</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-box-tool dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"fa fa-wrench\"></i></button>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <p class=\"text-center\">\n                  <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\n                </p>\n\n                <div class=\"chart\">\n                  <!-- Sales Chart Canvas -->\n                  <canvas id=\"salesChart\" style=\"height: 180px;\"></canvas>\n                </div>\n                <!-- /.chart-responsive -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-4\">\n                <p class=\"text-center\">\n                  <strong>Goal Completion</strong>\n                </p>\n\n                <div class=\"progress-group\">\n                  <span class=\"progress-text\">Add Products to Cart</span>\n                  <span class=\"progress-number\"><b>160</b>/200</span>\n\n                  <div class=\"progress sm\">\n                    <div class=\"progress-bar progress-bar-aqua\" style=\"width: 80%\"></div>\n                  </div>\n                </div>\n                <!-- /.progress-group -->\n                <div class=\"progress-group\">\n                  <span class=\"progress-text\">Complete Purchase</span>\n                  <span class=\"progress-number\"><b>310</b>/400</span>\n\n                  <div class=\"progress sm\">\n                    <div class=\"progress-bar progress-bar-red\" style=\"width: 80%\"></div>\n                  </div>\n                </div>\n                <!-- /.progress-group -->\n                <div class=\"progress-group\">\n                  <span class=\"progress-text\">Visit Premium Page</span>\n                  <span class=\"progress-number\"><b>480</b>/800</span>\n\n                  <div class=\"progress sm\">\n                    <div class=\"progress-bar progress-bar-green\" style=\"width: 80%\"></div>\n                  </div>\n                </div>\n                <!-- /.progress-group -->\n                <div class=\"progress-group\">\n                  <span class=\"progress-text\">Send Inquiries</span>\n                  <span class=\"progress-number\"><b>250</b>/500</span>\n\n                  <div class=\"progress sm\">\n                    <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\"></div>\n                  </div>\n                </div>\n                <!-- /.progress-group -->\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- ./box-body -->\n          <div class=\"box-footer\">\n            <div class=\"row\">\n              <div class=\"col-sm-3 col-xs-6\">\n                <div class=\"description-block border-right\">\n                  <span class=\"description-percentage text-green\"><i class=\"fa fa-caret-up\"></i> 17%</span>\n                  <h5 class=\"description-header\">$35,210.43</h5>\n                  <span class=\"description-text\">TOTAL REVENUE</span>\n                </div>\n                <!-- /.description-block -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-sm-3 col-xs-6\">\n                <div class=\"description-block border-right\">\n                  <span class=\"description-percentage text-yellow\"><i class=\"fa fa-caret-left\"></i> 0%</span>\n                  <h5 class=\"description-header\">$10,390.90</h5>\n                  <span class=\"description-text\">TOTAL COST</span>\n                </div>\n                <!-- /.description-block -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-sm-3 col-xs-6\">\n                <div class=\"description-block border-right\">\n                  <span class=\"description-percentage text-green\"><i class=\"fa fa-caret-up\"></i> 20%</span>\n                  <h5 class=\"description-header\">$24,813.53</h5>\n                  <span class=\"description-text\">TOTAL PROFIT</span>\n                </div>\n                <!-- /.description-block -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-sm-3 col-xs-6\">\n                <div class=\"description-block\">\n                  <span class=\"description-percentage text-red\"><i class=\"fa fa-caret-down\"></i> 18%</span>\n                  <h5 class=\"description-header\">1200</h5>\n                  <span class=\"description-text\">GOAL COMPLETIONS</span>\n                </div>\n                <!-- /.description-block -->\n              </div>\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-footer -->\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n\n    <!-- Main row -->\n    <div class=\"row\">\n      <!-- Left col -->\n      <div class=\"col-md-8\">\n        <!-- MAP & BOX PANE -->\n        <div class=\"box box-success\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Visitors Report</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body no-padding\">\n            <div class=\"row\">\n              <div class=\"col-md-9 col-sm-8\">\n                <div class=\"pad\">\n                  <!-- Map will be created here -->\n                  <div id=\"world-map-markers\" style=\"height: 325px;\"></div>\n                </div>\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-3 col-sm-4\">\n                <div class=\"pad box-pane-right bg-green\" style=\"min-height: 280px\">\n                  <div class=\"description-block margin-bottom\">\n                    <div class=\"sparkbar pad\" data-color=\"#fff\">90,70,90,70,75,80,70</div>\n                    <h5 class=\"description-header\">8390</h5>\n                    <span class=\"description-text\">Visits</span>\n                  </div>\n                  <!-- /.description-block -->\n                  <div class=\"description-block margin-bottom\">\n                    <div class=\"sparkbar pad\" data-color=\"#fff\">90,50,90,70,61,83,63</div>\n                    <h5 class=\"description-header\">30%</h5>\n                    <span class=\"description-text\">Referrals</span>\n                  </div>\n                  <!-- /.description-block -->\n                  <div class=\"description-block\">\n                    <div class=\"sparkbar pad\" data-color=\"#fff\">90,50,90,70,61,83,63</div>\n                    <h5 class=\"description-header\">70%</h5>\n                    <span class=\"description-text\">Organic</span>\n                  </div>\n                  <!-- /.description-block -->\n                </div>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <!-- DIRECT CHAT -->\n            <div class=\"box box-warning direct-chat direct-chat-warning\">\n              <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Direct Chat</h3>\n\n                <div class=\"box-tools pull-right\">\n                  <span data-toggle=\"tooltip\" title=\"3 New Messages\" class=\"badge bg-yellow\">3</span>\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                    </button>\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-toggle=\"tooltip\" title=\"Contacts\" data-widget=\"chat-pane-toggle\">\n                      <i class=\"fa fa-comments\"></i></button>\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n                    </button>\n                </div>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"box-body\">\n                <!-- Conversations are loaded here -->\n                <div class=\"direct-chat-messages\">\n                  <!-- Message. Default to the left -->\n                  <div class=\"direct-chat-msg\">\n                    <div class=\"direct-chat-info clearfix\">\n                      <span class=\"direct-chat-name pull-left\">Alexander Pierce</span>\n                      <span class=\"direct-chat-timestamp pull-right\">23 Jan 2:00 pm</span>\n                    </div>\n                    <!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"assets/img/user1-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      Is this template really for free? That's unbelievable!\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                  <!-- Message to the right -->\n                  <div class=\"direct-chat-msg right\">\n                    <div class=\"direct-chat-info clearfix\">\n                      <span class=\"direct-chat-name pull-right\">Sarah Bullock</span>\n                      <span class=\"direct-chat-timestamp pull-left\">23 Jan 2:05 pm</span>\n                    </div>\n                    <!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"assets/img/user3-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      You better believe it!\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                  <!-- Message. Default to the left -->\n                  <div class=\"direct-chat-msg\">\n                    <div class=\"direct-chat-info clearfix\">\n                      <span class=\"direct-chat-name pull-left\">Alexander Pierce</span>\n                      <span class=\"direct-chat-timestamp pull-right\">23 Jan 5:37 pm</span>\n                    </div>\n                    <!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"assets/img/user1-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      Working with AdminLTE on a great new app! Wanna join?\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                  <!-- Message to the right -->\n                  <div class=\"direct-chat-msg right\">\n                    <div class=\"direct-chat-info clearfix\">\n                      <span class=\"direct-chat-name pull-right\">Sarah Bullock</span>\n                      <span class=\"direct-chat-timestamp pull-left\">23 Jan 6:10 pm</span>\n                    </div>\n                    <!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"assets/img/user3-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      I would love to.\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                </div>\n                <!--/.direct-chat-messages-->\n\n                <!-- Contacts are loaded here -->\n                <div class=\"direct-chat-contacts\">\n                  <ul class=\"contacts-list\">\n                    <li>\n                      <a href=\"#\">\n                          <img class=\"contacts-list-img\" src=\"assets/img/user1-128x128.jpg\" alt=\"User Image\">\n\n                          <div class=\"contacts-list-info\">\n                                <span class=\"contacts-list-name\">\n                                  Count Dracula\n                                  <small class=\"contacts-list-date pull-right\">2/28/2015</small>\n                                </span>\n                            <span class=\"contacts-list-msg\">How have you been? I was...</span>\n                          </div>\n                          <!-- /.contacts-list-info -->\n                        </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                          <img class=\"contacts-list-img\" src=\"assets/img/user7-128x128.jpg\" alt=\"User Image\">\n\n                          <div class=\"contacts-list-info\">\n                                <span class=\"contacts-list-name\">\n                                  Sarah Doe\n                                  <small class=\"contacts-list-date pull-right\">2/23/2015</small>\n                                </span>\n                            <span class=\"contacts-list-msg\">I will be waiting for...</span>\n                          </div>\n                          <!-- /.contacts-list-info -->\n                        </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                          <img class=\"contacts-list-img\" src=\"assets/img/user3-128x128.jpg\" alt=\"User Image\">\n\n                          <div class=\"contacts-list-info\">\n                                <span class=\"contacts-list-name\">\n                                  Nadia Jolie\n                                  <small class=\"contacts-list-date pull-right\">2/20/2015</small>\n                                </span>\n                            <span class=\"contacts-list-msg\">I'll call you back at...</span>\n                          </div>\n                          <!-- /.contacts-list-info -->\n                        </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                          <img class=\"contacts-list-img\" src=\"assets/img/user5-128x128.jpg\" alt=\"User Image\">\n\n                          <div class=\"contacts-list-info\">\n                                <span class=\"contacts-list-name\">\n                                  Nora S. Vans\n                                  <small class=\"contacts-list-date pull-right\">2/10/2015</small>\n                                </span>\n                            <span class=\"contacts-list-msg\">Where is your new...</span>\n                          </div>\n                          <!-- /.contacts-list-info -->\n                        </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                          <img class=\"contacts-list-img\" src=\"assets/img/user6-128x128.jpg\" alt=\"User Image\">\n\n                          <div class=\"contacts-list-info\">\n                                <span class=\"contacts-list-name\">\n                                  John K.\n                                  <small class=\"contacts-list-date pull-right\">1/27/2015</small>\n                                </span>\n                            <span class=\"contacts-list-msg\">Can I take a look at...</span>\n                          </div>\n                          <!-- /.contacts-list-info -->\n                        </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                          <img class=\"contacts-list-img\" src=\"assets/img/user8-128x128.jpg\" alt=\"User Image\">\n\n                          <div class=\"contacts-list-info\">\n                                <span class=\"contacts-list-name\">\n                                  Kenneth M.\n                                  <small class=\"contacts-list-date pull-right\">1/4/2015</small>\n                                </span>\n                            <span class=\"contacts-list-msg\">Never mind I found...</span>\n                          </div>\n                          <!-- /.contacts-list-info -->\n                        </a>\n                    </li>\n                    <!-- End Contact Item -->\n                  </ul>\n                  <!-- /.contatcts-list -->\n                </div>\n                <!-- /.direct-chat-pane -->\n              </div>\n              <!-- /.box-body -->\n              <div class=\"box-footer\">\n                <form action=\"#\" method=\"post\">\n                  <div class=\"input-group\">\n                    <input type=\"text\" name=\"message\" placeholder=\"Type Message ...\" class=\"form-control\">\n                    <span class=\"input-group-btn\">\n                            <button type=\"button\" class=\"btn btn-warning btn-flat\">Send</button>\n                          </span>\n                  </div>\n                </form>\n              </div>\n              <!-- /.box-footer-->\n            </div>\n            <!--/.direct-chat -->\n          </div>\n          <!-- /.col -->\n\n          <div class=\"col-md-6\">\n            <!-- USERS LIST -->\n            <div class=\"box box-danger\">\n              <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Latest Members</h3>\n\n                <div class=\"box-tools pull-right\">\n                  <span class=\"label label-danger\">8 New Members</span>\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                    </button>\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n                    </button>\n                </div>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"box-body no-padding\">\n                <ul class=\"users-list clearfix\">\n                  <li>\n                    <img src=\"assets/img/user1-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Alexander Pierce</a>\n                    <span class=\"users-list-date\">Today</span>\n                  </li>\n                  <li>\n                    <img src=\"assets/img/user8-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Norman</a>\n                    <span class=\"users-list-date\">Yesterday</span>\n                  </li>\n                  <li>\n                    <img src=\"assets/img/user7-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Jane</a>\n                    <span class=\"users-list-date\">12 Jan</span>\n                  </li>\n                  <li>\n                    <img src=\"assets/img/user6-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">John</a>\n                    <span class=\"users-list-date\">12 Jan</span>\n                  </li>\n                  <li>\n                    <img src=\"assets/img/user2-160x160.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Alexander</a>\n                    <span class=\"users-list-date\">13 Jan</span>\n                  </li>\n                  <li>\n                    <img src=\"assets/img/user5-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Sarah</a>\n                    <span class=\"users-list-date\">14 Jan</span>\n                  </li>\n                  <li>\n                    <img src=\"assets/img/user4-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Nora</a>\n                    <span class=\"users-list-date\">15 Jan</span>\n                  </li>\n                  <li>\n                    <img src=\"assets/img/user3-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Nadia</a>\n                    <span class=\"users-list-date\">15 Jan</span>\n                  </li>\n                </ul>\n                <!-- /.users-list -->\n              </div>\n              <!-- /.box-body -->\n              <div class=\"box-footer text-center\">\n                <a href=\"javascript:void(0)\" class=\"uppercase\">View All Users</a>\n              </div>\n              <!-- /.box-footer -->\n            </div>\n            <!--/.box -->\n          </div>\n          <!-- /.col -->\n        </div>\n        <!-- /.row -->\n\n        <!-- TABLE: LATEST ORDERS -->\n        <div class=\"box box-info\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Latest Orders</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table no-margin\">\n                <thead>\n                  <tr>\n                    <th>Order ID</th>\n                    <th>Item</th>\n                    <th>Status</th>\n                    <th>Popularity</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><a href=\"pages/examples/invoice.html\">OR9842</a></td>\n                    <td>Call of Duty IV</td>\n                    <td><span class=\"label label-success\">Shipped</span></td>\n                    <td>\n                      <div class=\"sparkbar\" data-color=\"#00a65a\" data-height=\"20\">90,80,90,-70,61,-83,63</div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td><a href=\"pages/examples/invoice.html\">OR1848</a></td>\n                    <td>Samsung Smart TV</td>\n                    <td><span class=\"label label-warning\">Pending</span></td>\n                    <td>\n                      <div class=\"sparkbar\" data-color=\"#f39c12\" data-height=\"20\">90,80,-90,70,61,-83,68</div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\n                    <td>iPhone 6 Plus</td>\n                    <td><span class=\"label label-danger\">Delivered</span></td>\n                    <td>\n                      <div class=\"sparkbar\" data-color=\"#f56954\" data-height=\"20\">90,-80,90,70,-61,83,63</div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\n                    <td>Samsung Smart TV</td>\n                    <td><span class=\"label label-info\">Processing</span></td>\n                    <td>\n                      <div class=\"sparkbar\" data-color=\"#00c0ef\" data-height=\"20\">90,80,-90,70,-61,83,63</div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td><a href=\"pages/examples/invoice.html\">OR1848</a></td>\n                    <td>Samsung Smart TV</td>\n                    <td><span class=\"label label-warning\">Pending</span></td>\n                    <td>\n                      <div class=\"sparkbar\" data-color=\"#f39c12\" data-height=\"20\">90,80,-90,70,61,-83,68</div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\n                    <td>iPhone 6 Plus</td>\n                    <td><span class=\"label label-danger\">Delivered</span></td>\n                    <td>\n                      <div class=\"sparkbar\" data-color=\"#f56954\" data-height=\"20\">90,-80,90,70,-61,83,63</div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td><a href=\"pages/examples/invoice.html\">OR9842</a></td>\n                    <td>Call of Duty IV</td>\n                    <td><span class=\"label label-success\">Shipped</span></td>\n                    <td>\n                      <div class=\"sparkbar\" data-color=\"#00a65a\" data-height=\"20\">90,80,90,-70,61,-83,63</div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <!-- /.table-responsive -->\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer clearfix\">\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info btn-flat pull-left\">Place New Order</a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default btn-flat pull-right\">View All Orders</a>\n          </div>\n          <!-- /.box-footer -->\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n\n      <div class=\"col-md-4\">\n        <!-- Info Boxes Style 2 -->\n        <div class=\"info-box bg-yellow\">\n          <span class=\"info-box-icon\"><i class=\"ion ion-ios-pricetag-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Inventory</span>\n            <span class=\"info-box-number\">5,200</span>\n\n            <div class=\"progress\">\n              <div class=\"progress-bar\" style=\"width: 50%\"></div>\n            </div>\n            <span class=\"progress-description\">\n                    50% Increase in 30 Days\n                  </span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n        <div class=\"info-box bg-green\">\n          <span class=\"info-box-icon\"><i class=\"ion ion-ios-heart-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Mentions</span>\n            <span class=\"info-box-number\">92,050</span>\n\n            <div class=\"progress\">\n              <div class=\"progress-bar\" style=\"width: 20%\"></div>\n            </div>\n            <span class=\"progress-description\">\n                    20% Increase in 30 Days\n                  </span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n        <div class=\"info-box bg-red\">\n          <span class=\"info-box-icon\"><i class=\"ion ion-ios-cloud-download-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Downloads</span>\n            <span class=\"info-box-number\">114,381</span>\n\n            <div class=\"progress\">\n              <div class=\"progress-bar\" style=\"width: 70%\"></div>\n            </div>\n            <span class=\"progress-description\">\n                    70% Increase in 30 Days\n                  </span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n        <div class=\"info-box bg-aqua\">\n          <span class=\"info-box-icon\"><i class=\"ion-ios-chatbubble-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Direct Messages</span>\n            <span class=\"info-box-number\">163,921</span>\n\n            <div class=\"progress\">\n              <div class=\"progress-bar\" style=\"width: 40%\"></div>\n            </div>\n            <span class=\"progress-description\">\n                    40% Increase in 30 Days\n                  </span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n\n        <div class=\"box box-default\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Browser Usage</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div class=\"chart-responsive\">\n                  <canvas id=\"pieChart\" height=\"150\"></canvas>\n                </div>\n                <!-- ./chart-responsive -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-4\">\n                <ul class=\"chart-legend clearfix\">\n                  <li><i class=\"fa fa-circle-o text-red\"></i> Chrome</li>\n                  <li><i class=\"fa fa-circle-o text-green\"></i> IE</li>\n                  <li><i class=\"fa fa-circle-o text-yellow\"></i> FireFox</li>\n                  <li><i class=\"fa fa-circle-o text-aqua\"></i> Safari</li>\n                  <li><i class=\"fa fa-circle-o text-light-blue\"></i> Opera</li>\n                  <li><i class=\"fa fa-circle-o text-gray\"></i> Navigator</li>\n                </ul>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer no-padding\">\n            <ul class=\"nav nav-pills nav-stacked\">\n              <li><a href=\"#\">United States of America\n                  <span class=\"pull-right text-red\"><i class=\"fa fa-angle-down\"></i> 12%</span></a></li>\n              <li><a href=\"#\">India <span class=\"pull-right text-green\"><i class=\"fa fa-angle-up\"></i> 4%</span></a>\n              </li>\n              <li><a href=\"#\">China\n                  <span class=\"pull-right text-yellow\"><i class=\"fa fa-angle-left\"></i> 0%</span></a></li>\n            </ul>\n          </div>\n          <!-- /.footer -->\n        </div>\n        <!-- /.box -->\n\n        <!-- PRODUCT LIST -->\n        <div class=\"box box-primary\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Recently Added Products</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                </button>\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <ul class=\"products-list product-list-in-box\">\n              <li class=\"item\">\n                <div class=\"product-img\">\n                  <img src=\"assets/img/default-50x50.gif\" alt=\"Product Image\">\n                </div>\n                <div class=\"product-info\">\n                  <a href=\"javascript:void(0)\" class=\"product-title\">Samsung TV\n                      <span class=\"label label-warning pull-right\">$1800</span></a>\n                  <span class=\"product-description\">\n                          Samsung 32\" 1080p 60Hz LED Smart HDTV.\n                        </span>\n                </div>\n              </li>\n              <!-- /.item -->\n              <li class=\"item\">\n                <div class=\"product-img\">\n                  <img src=\"assets/img/default-50x50.gif\" alt=\"Product Image\">\n                </div>\n                <div class=\"product-info\">\n                  <a href=\"javascript:void(0)\" class=\"product-title\">Bicycle\n                      <span class=\"label label-info pull-right\">$700</span></a>\n                  <span class=\"product-description\">\n                          26\" Mongoose Dolomite Men's 7-speed, Navy Blue.\n                        </span>\n                </div>\n              </li>\n              <!-- /.item -->\n              <li class=\"item\">\n                <div class=\"product-img\">\n                  <img src=\"assets/img/default-50x50.gif\" alt=\"Product Image\">\n                </div>\n                <div class=\"product-info\">\n                  <a href=\"javascript:void(0)\" class=\"product-title\">Xbox One <span class=\"label label-danger pull-right\">$350</span></a>\n                  <span class=\"product-description\">\n                          Xbox One Console Bundle with Halo Master Chief Collection.\n                        </span>\n                </div>\n              </li>\n              <!-- /.item -->\n              <li class=\"item\">\n                <div class=\"product-img\">\n                  <img src=\"assets/img/default-50x50.gif\" alt=\"Product Image\">\n                </div>\n                <div class=\"product-info\">\n                  <a href=\"javascript:void(0)\" class=\"product-title\">PlayStation 4\n                      <span class=\"label label-success pull-right\">$399</span></a>\n                  <span class=\"product-description\">\n                          PlayStation 4 500GB Console (PS4)\n                        </span>\n                </div>\n              </li>\n              <!-- /.item -->\n            </ul>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer text-center\">\n            <a href=\"javascript:void(0)\" class=\"uppercase\">View All Products</a>\n          </div>\n          <!-- /.box-footer -->\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboard2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboard2Component = (function () {
    function AdminDashboard2Component() {
    }
    AdminDashboard2Component.prototype.ngOnInit = function () {
        // Actualiza la barra latera y el footer
        AdminLTE.init();
    };
    AdminDashboard2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-dashboard2',
            template: __webpack_require__("../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboard2Component);
    return AdminDashboard2Component;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-footer/admin-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-footer/admin-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <b>Version</b> 2.3.11\n  </div>\n  <strong>Copyright &copy; 2014-2016 <a href=\"http://almsaeedstudio.com\">Almsaeed Studio</a>.</strong> All rights reserved.\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-footer/admin-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminFooterComponent = (function () {
    function AdminFooterComponent() {
    }
    AdminFooterComponent.prototype.ngOnInit = function () {
    };
    AdminFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-footer',
            template: __webpack_require__("../../../../../src/app/admin/admin-footer/admin-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-footer/admin-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminFooterComponent);
    return AdminFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-header/admin-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-header/admin-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <!-- Logo -->\n  <a href=\"index2.html\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>A</b>LT</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>Admin</b>LTE</span>\n  </a>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <!-- Messages: style can be found in dropdown.less-->\n        <li class=\"dropdown messages-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-envelope-o\"></i>\n              <span class=\"label label-success\">4</span>\n            </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 4 messages</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <!-- start message -->\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Support Team\n                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <!-- end message -->\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      AdminLTE Design Team\n                      <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Developers\n                      <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Sales Department\n                      <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Reviewers\n                      <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n          </ul>\n        </li>\n        <!-- Notifications: style can be found in dropdown.less -->\n        <li class=\"dropdown notifications-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"label label-warning\">10</span>\n            </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 10 notifications</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <a href=\"#\">\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joine\n                    </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                      <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                      page and may cause design problems\n                    </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                      <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                    </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                      <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                    </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                      <i class=\"fa fa-user text-red\"></i> You changed your username\n                    </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">View all</a></li>\n          </ul>\n        </li>\n        <!-- Tasks: style can be found in dropdown.less -->\n        <li class=\"dropdown tasks-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-flag-o\"></i>\n              <span class=\"label label-danger\">9</span>\n            </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 9 tasks</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Design some buttons\n                      <small class=\"pull-right\">20%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">20% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li>\n                  <!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Create a nice theme\n                      <small class=\"pull-right\">40%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">40% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li>\n                  <!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Some task I need to do\n                      <small class=\"pull-right\">60%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">60% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li>\n                  <!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Make beautiful transitions\n                      <small class=\"pull-right\">80%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\"\n                        aria-valuemax=\"100\">\n                        <span class=\"sr-only\">80% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"#\">View all tasks</a>\n            </li>\n          </ul>\n        </li>\n        <!-- User Account: style can be found in dropdown.less -->\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">Alexander Pierce</span>\n            </a>\n          <ul class=\"dropdown-menu\">\n            <!-- User image -->\n            <li class=\"user-header\">\n              <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n              <p>\n                Alexander Pierce - Web Developer\n                <small>Member since Nov. 2012</small>\n              </p>\n            </li>\n            <!-- Menu Body -->\n            <li class=\"user-body\">\n              <div class=\"row\">\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Followers</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Sales</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Friends</a>\n                </div>\n              </div>\n              <!-- /.row -->\n            </li>\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n              </div>\n              <div class=\"pull-right\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- Control Sidebar Toggle Button -->\n        <li>\n          <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-header/admin-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHeaderComponent = (function () {
    function AdminHeaderComponent() {
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
    };
    AdminHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-header',
            template: __webpack_require__("../../../../../src/app/admin/admin-header/admin-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-header/admin-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-left-side/admin-left-side.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-left-side/admin-left-side.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n    <!-- Sidebar user panel -->\n    <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <p>Alexander Pierce</p>\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n      </div>\n    </div>\n    <!-- search form -->\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n        <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n      </div>\n    </form>\n    <!-- /.search form -->\n    <!-- sidebar menu: : style can be found in sidebar.less -->\n    <ul class=\"sidebar-menu\">\n      <li class=\"header\">MAIN NAVIGATION</li>\n      <li class=\"active treeview\">\n        <a href=\"#\">\n            <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n        <ul class=\"treeview-menu\">\n          <li class=\"active\"><a routerLink=\"dashboard1\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\n          <li><a routerLink=\"dashboard2\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n            <i class=\"fa fa-files-o\"></i>\n            <span>Layout Options</span>\n            <span class=\"pull-right-container\">\n              <span class=\"label label-primary pull-right\">4</span>\n            </span>\n          </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/layout/top-nav.html\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\n          <li><a href=\"pages/layout/boxed.html\"><i class=\"fa fa-circle-o\"></i> Boxed</a></li>\n          <li><a href=\"pages/layout/fixed.html\"><i class=\"fa fa-circle-o\"></i> Fixed</a></li>\n          <li><a href=\"pages/layout/collapsed-sidebar.html\"><i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a></li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"pages/widgets.html\">\n            <i class=\"fa fa-th\"></i> <span>Widgets</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-green\">new</small>\n            </span>\n          </a>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n            <i class=\"fa fa-pie-chart\"></i>\n            <span>Charts</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/charts/chartjs.html\"><i class=\"fa fa-circle-o\"></i> ChartJS</a></li>\n          <li><a href=\"pages/charts/morris.html\"><i class=\"fa fa-circle-o\"></i> Morris</a></li>\n          <li><a href=\"pages/charts/flot.html\"><i class=\"fa fa-circle-o\"></i> Flot</a></li>\n          <li><a href=\"pages/charts/inline.html\"><i class=\"fa fa-circle-o\"></i> Inline charts</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n            <i class=\"fa fa-laptop\"></i>\n            <span>UI Elements</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/UI/general.html\"><i class=\"fa fa-circle-o\"></i> General</a></li>\n          <li><a href=\"pages/UI/icons.html\"><i class=\"fa fa-circle-o\"></i> Icons</a></li>\n          <li><a href=\"pages/UI/buttons.html\"><i class=\"fa fa-circle-o\"></i> Buttons</a></li>\n          <li><a href=\"pages/UI/sliders.html\"><i class=\"fa fa-circle-o\"></i> Sliders</a></li>\n          <li><a href=\"pages/UI/timeline.html\"><i class=\"fa fa-circle-o\"></i> Timeline</a></li>\n          <li><a href=\"pages/UI/modals.html\"><i class=\"fa fa-circle-o\"></i> Modals</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n            <i class=\"fa fa-edit\"></i> <span>Forms</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/forms/general.html\"><i class=\"fa fa-circle-o\"></i> General Elements</a></li>\n          <li><a href=\"pages/forms/advanced.html\"><i class=\"fa fa-circle-o\"></i> Advanced Elements</a></li>\n          <li><a href=\"pages/forms/editors.html\"><i class=\"fa fa-circle-o\"></i> Editors</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n            <i class=\"fa fa-table\"></i> <span>Tables</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/tables/simple.html\"><i class=\"fa fa-circle-o\"></i> Simple tables</a></li>\n          <li><a href=\"pages/tables/data.html\"><i class=\"fa fa-circle-o\"></i> Data tables</a></li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"pages/calendar.html\">\n            <i class=\"fa fa-calendar\"></i> <span>Calendar</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-red\">3</small>\n              <small class=\"label pull-right bg-blue\">17</small>\n            </span>\n          </a>\n      </li>\n      <li>\n        <a href=\"pages/mailbox/mailbox.html\">\n            <i class=\"fa fa-envelope\"></i> <span>Mailbox</span>\n            <span class=\"pull-right-container\">\n              <small class=\"label pull-right bg-yellow\">12</small>\n              <small class=\"label pull-right bg-green\">16</small>\n              <small class=\"label pull-right bg-red\">5</small>\n            </span>\n          </a>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n            <i class=\"fa fa-folder\"></i> <span>Examples</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/examples/invoice.html\"><i class=\"fa fa-circle-o\"></i> Invoice</a></li>\n          <li><a href=\"pages/examples/profile.html\"><i class=\"fa fa-circle-o\"></i> Profile</a></li>\n          <li><a href=\"pages/examples/login.html\"><i class=\"fa fa-circle-o\"></i> Login</a></li>\n          <li><a href=\"pages/examples/register.html\"><i class=\"fa fa-circle-o\"></i> Register</a></li>\n          <li><a href=\"pages/examples/lockscreen.html\"><i class=\"fa fa-circle-o\"></i> Lockscreen</a></li>\n          <li><a href=\"pages/examples/404.html\"><i class=\"fa fa-circle-o\"></i> 404 Error</a></li>\n          <li><a href=\"pages/examples/500.html\"><i class=\"fa fa-circle-o\"></i> 500 Error</a></li>\n          <li><a href=\"pages/examples/blank.html\"><i class=\"fa fa-circle-o\"></i> Blank Page</a></li>\n          <li><a href=\"pages/examples/pace.html\"><i class=\"fa fa-circle-o\"></i> Pace Page</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n            <i class=\"fa fa-share\"></i> <span>Multilevel</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n          <li>\n            <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One\n                <span class=\"pull-right-container\">\n                  <i class=\"fa fa-angle-left pull-right\"></i>\n                </span>\n              </a>\n            <ul class=\"treeview-menu\">\n              <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two</a></li>\n              <li>\n                <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two\n                    <span class=\"pull-right-container\">\n                      <i class=\"fa fa-angle-left pull-right\"></i>\n                    </span>\n                  </a>\n                <ul class=\"treeview-menu\">\n                  <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                </ul>\n              </li>\n            </ul>\n          </li>\n          <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n        </ul>\n      </li>\n      <li><a href=\"documentation/index.html\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\n      <li class=\"header\">LABELS</li>\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\n    </ul>\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-left-side/admin-left-side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLeftSideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminLeftSideComponent = (function () {
    function AdminLeftSideComponent() {
    }
    AdminLeftSideComponent.prototype.ngOnInit = function () {
    };
    AdminLeftSideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-left-side',
            template: __webpack_require__("../../../../../src/app/admin/admin-left-side/admin-left-side.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-left-side/admin-left-side.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLeftSideComponent);
    return AdminLeftSideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-routing/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_dashboard2_admin_dashboard2_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_dashboard1_admin_dashboard1_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild([
                    {
                        path: 'admin',
                        component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
                        children: [
                            {
                                path: '',
                                redirectTo: 'dashboard1',
                                pathMatch: 'full'
                            },
                            {
                                path: 'dashboard1',
                                component: __WEBPACK_IMPORTED_MODULE_1__admin_dashboard1_admin_dashboard1_component__["a" /* AdminDashboard1Component */]
                            },
                            {
                                path: 'dashboard2',
                                component: __WEBPACK_IMPORTED_MODULE_0__admin_dashboard2_admin_dashboard2_component__["a" /* AdminDashboard2Component */]
                            }
                        ]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <app-admin-header></app-admin-header>\n  <!-- Left side column. contains the logo and sidebar -->\n  <app-admin-left-side></app-admin-left-side>\n\n  <!-- Content Wrapper. Contains page content -->\n  <router-outlet></router-outlet>\n  <!-- /.content-wrapper -->\n  <app-admin-footer></app-admin-footer>\n\n  <!-- Control Sidebar -->\n  <app-admin-control-sidebar></app-admin-control-sidebar>\n  <!-- /.control-sidebar -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    AdminComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_routing_admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_dashboard1_admin_dashboard1_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard1/admin-dashboard1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_control_sidebar_admin_control_sidebar_component__ = __webpack_require__("../../../../../src/app/admin/admin-control-sidebar/admin-control-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_footer_admin_footer_component__ = __webpack_require__("../../../../../src/app/admin/admin-footer/admin-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_content_admin_content_component__ = __webpack_require__("../../../../../src/app/admin/admin-content/admin-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_left_side_admin_left_side_component__ = __webpack_require__("../../../../../src/app/admin/admin-left-side/admin-left-side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_header_admin_header_component__ = __webpack_require__("../../../../../src/app/admin/admin-header/admin-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_dashboard2_admin_dashboard2_component__ = __webpack_require__("../../../../../src/app/admin/admin-dashboard2/admin-dashboard2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__admin_routing_admin_routing_module__["a" /* AdminRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_6__admin_header_admin_header_component__["a" /* AdminHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__admin_left_side_admin_left_side_component__["a" /* AdminLeftSideComponent */],
                __WEBPACK_IMPORTED_MODULE_4__admin_content_admin_content_component__["a" /* AdminContentComponent */],
                __WEBPACK_IMPORTED_MODULE_3__admin_footer_admin_footer_component__["a" /* AdminFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_2__admin_control_sidebar_admin_control_sidebar_component__["a" /* AdminControlSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_1__admin_dashboard1_admin_dashboard1_component__["a" /* AdminDashboard1Component */],
                __WEBPACK_IMPORTED_MODULE_10__admin_dashboard2_admin_dashboard2_component__["a" /* AdminDashboard2Component */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__starter_MyTimesheet_mytimesheet_component__ = __webpack_require__("../../../../../src/app/starter/MyTimesheet/mytimesheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__starter_EditTimesheet_EditTimesheet_component__ = __webpack_require__("../../../../../src/app/starter/EditTimesheet/EditTimesheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__starter_Notifications_Notifications_component__ = __webpack_require__("../../../../../src/app/starter/Notifications/Notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__starter_TimeOffSubmission_TimeOffSubmission_component__ = __webpack_require__("../../../../../src/app/starter/TimeOffSubmission/TimeOffSubmission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__starter_TimesheetApprovals_TimesheetApprovals_component__ = __webpack_require__("../../../../../src/app/starter/TimesheetApprovals/TimesheetApprovals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__starter_TimeOffApprovals_TimeOffApprovals_component__ = __webpack_require__("../../../../../src/app/starter/TimeOffApprovals/TimeOffApprovals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__starter_TimesheetHistory_TimesheetHistory_component__ = __webpack_require__("../../../../../src/app/starter/TimesheetHistory/TimesheetHistory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__starter_TeamAllocations_team_allocations_component__ = __webpack_require__("../../../../../src/app/starter/TeamAllocations/team-allocations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__starter_settings_settings_component__ = __webpack_require__("../../../../../src/app/starter/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__starter_kanban_kanban_component__ = __webpack_require__("../../../../../src/app/starter/kanban/kanban.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__starter_MyTimesheet_mytimesheet_component__["a" /* MyTimesheetComponent */]
    },
    {
        path: 'Mytimesheet',
        component: __WEBPACK_IMPORTED_MODULE_0__starter_MyTimesheet_mytimesheet_component__["a" /* MyTimesheetComponent */]
    },
    {
        path: 'EditTimesheet',
        component: __WEBPACK_IMPORTED_MODULE_1__starter_EditTimesheet_EditTimesheet_component__["a" /* EditTimesheetComponent */]
    },
    {
        path: 'Notifications',
        component: __WEBPACK_IMPORTED_MODULE_2__starter_Notifications_Notifications_component__["a" /* NotificationsComponent */]
    },
    {
        path: 'TimeOffSubmission',
        component: __WEBPACK_IMPORTED_MODULE_3__starter_TimeOffSubmission_TimeOffSubmission_component__["a" /* TimeOffSubmissionComponent */]
    },
    {
        path: 'TimesheetApprovals',
        component: __WEBPACK_IMPORTED_MODULE_4__starter_TimesheetApprovals_TimesheetApprovals_component__["a" /* TimesheetApprovalsComponent */]
    },
    {
        path: 'TimeOffApprovals',
        component: __WEBPACK_IMPORTED_MODULE_5__starter_TimeOffApprovals_TimeOffApprovals_component__["a" /* TimeOffApprovalsComponent */]
    },
    {
        path: 'TimesheetHistory',
        component: __WEBPACK_IMPORTED_MODULE_6__starter_TimesheetHistory_TimesheetHistory_component__["a" /* TimesheetHistoryComponent */]
    },
    {
        path: 'TeamAllocations',
        component: __WEBPACK_IMPORTED_MODULE_7__starter_TeamAllocations_team_allocations_component__["a" /* TeamAllocationsComponent */]
    },
    {
        path: 'Settings',
        component: __WEBPACK_IMPORTED_MODULE_10__starter_settings_settings_component__["a" /* SettingsComponent */]
    },
    {
        path: 'Kanban',
        component: __WEBPACK_IMPORTED_MODULE_11__starter_kanban_kanban_component__["a" /* KanbanComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <!-- Main Header -->\n   <app-starter-header></app-starter-header>\n\n   <app-starter-left-side></app-starter-left-side>\n   <!-- Content Wrapper. Contains page content -->\n   <router-outlet></router-outlet>\n   <!-- /.content-wrapper -->\n   <!-- Main Footer -->\n   <app-starter-footer></app-starter-footer>\n   <!-- Control Sidebar -->\n   <app-starter-control-sidebar></app-starter-control-sidebar>\n   <div class=\"control-sidebar-bg\"></div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__starter_starter_component__ = __webpack_require__("../../../../../src/app/starter/starter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__starter_starter_header_starter_header_component__ = __webpack_require__("../../../../../src/app/starter/starter-header/starter-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__starter_starter_left_side_starter_left_side_component__ = __webpack_require__("../../../../../src/app/starter/starter-left-side/starter-left-side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__starter_starter_content_starter_content_component__ = __webpack_require__("../../../../../src/app/starter/starter-content/starter-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__starter_starter_footer_starter_footer_component__ = __webpack_require__("../../../../../src/app/starter/starter-footer/starter-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__starter_starter_control_sidebar_starter_control_sidebar_component__ = __webpack_require__("../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__starter_MyTimesheet_mytimesheet_component__ = __webpack_require__("../../../../../src/app/starter/MyTimesheet/mytimesheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__starter_EditTimesheet_EditTimesheet_component__ = __webpack_require__("../../../../../src/app/starter/EditTimesheet/EditTimesheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__starter_Notifications_Notifications_component__ = __webpack_require__("../../../../../src/app/starter/Notifications/Notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__starter_TimeOffSubmission_TimeOffSubmission_component__ = __webpack_require__("../../../../../src/app/starter/TimeOffSubmission/TimeOffSubmission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__starter_TimesheetApprovals_TimesheetApprovals_component__ = __webpack_require__("../../../../../src/app/starter/TimesheetApprovals/TimesheetApprovals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__starter_TimeOffApprovals_TimeOffApprovals_component__ = __webpack_require__("../../../../../src/app/starter/TimeOffApprovals/TimeOffApprovals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__starter_TimesheetHistory_TimesheetHistory_component__ = __webpack_require__("../../../../../src/app/starter/TimesheetHistory/TimesheetHistory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__starter_TeamAllocations_team_allocations_component__ = __webpack_require__("../../../../../src/app/starter/TeamAllocations/team-allocations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__starter_settings_settings_component__ = __webpack_require__("../../../../../src/app/starter/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__starter_kanban_kanban_component__ = __webpack_require__("../../../../../src/app/starter/kanban/kanban.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_jqwidgets_ts_angular_jqxkanban__ = __webpack_require__("../../../../jqwidgets-ts/angular_jqxkanban.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_jqwidgets_ts_angular_jqxsplitter__ = __webpack_require__("../../../../jqwidgets-ts/angular_jqxsplitter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__starter_starter_component__["a" /* StarterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__starter_starter_header_starter_header_component__["a" /* StarterHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__starter_starter_left_side_starter_left_side_component__["a" /* StarterLeftSideComponent */],
                __WEBPACK_IMPORTED_MODULE_9__starter_starter_content_starter_content_component__["a" /* StarterContentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__starter_starter_footer_starter_footer_component__["a" /* StarterFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__starter_starter_control_sidebar_starter_control_sidebar_component__["a" /* StarterControlSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__starter_MyTimesheet_mytimesheet_component__["a" /* MyTimesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_13__starter_EditTimesheet_EditTimesheet_component__["a" /* EditTimesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_14__starter_Notifications_Notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__starter_TimeOffSubmission_TimeOffSubmission_component__["a" /* TimeOffSubmissionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__starter_TimesheetApprovals_TimesheetApprovals_component__["a" /* TimesheetApprovalsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__starter_TimeOffApprovals_TimeOffApprovals_component__["a" /* TimeOffApprovalsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__starter_TimesheetHistory_TimesheetHistory_component__["a" /* TimesheetHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_19__starter_TeamAllocations_team_allocations_component__["a" /* TeamAllocationsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__starter_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__starter_kanban_kanban_component__["a" /* KanbanComponent */],
                __WEBPACK_IMPORTED_MODULE_22_jqwidgets_ts_angular_jqxkanban__["a" /* jqxKanbanComponent */],
                __WEBPACK_IMPORTED_MODULE_23_jqwidgets_ts_angular_jqxsplitter__["a" /* jqxSplitterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__admin_admin_module__["a" /* AdminModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/starter/EditTimesheet/EditTimesheet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/EditTimesheet/EditTimesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Edit TimeSheet\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\n      <li class=\"active\">Here</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\" style=\"min-height:490px !important\">\n\n    <!-- Your Page Content Here -->\n  <div>\n  <div class=\"container-fluid\">\n\t<div class=\"row bg-1\">\n\t\t<div class=\"col-lg-12\">\n\t\t\n\t\t<div id=\"topMenu\">\n<div id=\"box\">\n  <div class=\"scroller scroller-left\"><i class=\"fa fa-chevron-left\"></i></div>\n  <div class=\"scroller scroller-right\"><i class=\"fa fa-chevron-right\"></i></div>\n \n</div>\n</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row bg-2\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"relative\">\n\t\t\t\t<div class=\"pos-abs lft-0 top-0 tmarg\">\n\t\t\t\t\t<a  class=\"btnr bg-w txt-666 \" href=\"javascript:void(0)\">\n\t\t\t\t\t\t<i class=\"fa fa-chevron-left\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ad-bar-1 ad-bar-2\">\n\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t<span class=\"tpad bpad\">Monday Jan 22nd, 2018</span>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"pos-abs rft-0 top-0 tmarg\">\n\t\t\t\t\t<a class=\"btnr bg-w txt-666 \" href=\"javascript:void(0)\">\n\t\t\t\t\t\t<i class=\"fa fa-chevron-right\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row bg-blue\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"ad-bar-3 text-center\">\n\t\t\t\t<h3>Total 22 Hours</h3>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table table-bordered table-hover table-h\" width=\"100%\">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<h6 class=\"trblmarg-0\">Monday</h6>\n\t\t\t\t\t\t\t<span>January 22-2018</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"form-group bmarg-0\">\n\t\t\t\t\t\t\t<input class=\"form-control\"/>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\th\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<h6 class=\"trblmarg-0\">Tuesday</h6>\n\t\t\t\t\t\t\t<span>January 22-2018</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"form-group bmarg-0\">\n\t\t\t\t\t\t\t<input class=\"form-control\"/>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\th\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<h6 class=\"trblmarg-0\">Wednesday</h6>\n\t\t\t\t\t\t\t<span>January 22-2018</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"form-group bmarg-0\">\n\t\t\t\t\t\t\t<input class=\"form-control\"/>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\th\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<h6 class=\"trblmarg-0\">Thursday</h6>\n\t\t\t\t\t\t\t<span>January 22-2018</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"form-group bmarg-0\">\n\t\t\t\t\t\t\t<input class=\"form-control\"/>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\th\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<h6 class=\"trblmarg-0\">Friday</h6>\n\t\t\t\t\t\t\t<span>January 22-2018</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"form-group bmarg-0\">\n\t\t\t\t\t\t\t<input class=\"form-control\"/>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\th\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<h6 class=\"trblmarg-0\">Saturday</h6>\n\t\t\t\t\t\t\t<span>January 22-2018</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"form-group bmarg-0\">\n\t\t\t\t\t\t\t<input class=\"form-control\"/>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\th\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<h6 class=\"trblmarg-0\">Sunday</h6>\n\t\t\t\t\t\t\t<span>January 22-2018</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"form-group bmarg-0\">\n\t\t\t\t\t\t\t<input class=\"form-control \"/>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\th\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"fot\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul class=\"btn-lst\">\n\t\t\t<li>\n\t\t\t\t<button>\n\t\t\t\t\t<span><i class=\"fa fa-share\"></i></span> Submit\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<button>\n\t\t\t\t\t<span><i class=\"fa fa-save\"></i> </span> Save\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t</ul>\n      </div>\n    </div>\n  </div>\n</footer>\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/starter/EditTimesheet/EditTimesheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTimesheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditTimesheetComponent = (function () {
    function EditTimesheetComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    EditTimesheetComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    EditTimesheetComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    EditTimesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-EditTimesheet',
            template: __webpack_require__("../../../../../src/app/starter/EditTimesheet/EditTimesheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/EditTimesheet/EditTimesheet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditTimesheetComponent);
    return EditTimesheetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/MyTimesheet/mytimesheet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/MyTimesheet/mytimesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      My Timesheet\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> 1Timesheet</a></li>\n      <li class=\"active\">MyTimesheet</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\" style=\"min-height:490px !important\">\n\n    <!-- Your Page Content Here -->\n    <div>\n      <div class=\"container-fluid\">\n      <div class=\"row bg-1\">\n        <div class=\"col-lg-12\">\n        <div id=\"topMenu\">\n        </div>\n        \n        \n        \n          \n        </div>\n      </div>\n      <div class=\"row bg-2\">\n        <div class=\"col-lg-12\">\n          <div class=\"relative\">\n            <div class=\"pos-abs lft-0 top-0 tmarg\">\n              <a  class=\"btnr bg-w txt-666 \" href=\"javascript:void(0)\">\n                <i class=\"fa fa-chevron-left\"></i>\n              </a>\n            </div>\n            <div style=\" padding-left: 30px;padding-top: 30px\" class=\"row\">\n              <div class=\"col-md-2 col-sm-12 col-xs-12\">\n              <div style=\"background-color: #3c8dbc\" class=\"ad-bar-1 ad-bar-1-tb-pad-0\">\n                <h5>January 22 - January 28, 2018</h5>\n                <span>Open</span>\n              </div>\n              </div>\n              <div class=\"col-md-2 col-sm-12 col-xs-12\">\n              <div class=\"ad-bar-1 ad-bar-1-tb-pad-0\">\n                <h5>January 29 - February 4, 2018</h5>\n                <span>Open</span>\n              </div>\n              </div>\n              <div class=\"col-md-2 col-sm-12 col-xs-12\">\n              <div class=\"ad-bar-1 ad-bar-1-tb-pad-0\">\n                <h5>February 5 - February 11, 2018</h5>\n                <span>Open</span>\n              </div>\n              </div>\n            </div>\n            <div class=\"pos-abs rft-0 top-0 tmarg\">\n              <a class=\"btnr bg-w txt-666 \" href=\"javascript:void(0)\">\n                <i class=\"fa fa-chevron-right\"></i>\n               \n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n        <div>\n          <div>\n          <div style=\" overflow-y: hidden;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n            <table class=\"table table-bordered table-hover table-h\" width=\"100%\">\n              <thead>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<th>\n                  <h6>Project</h6>\n                  </th>\n                <th><h6>Input Type Code</h6> </th>\n\t\t\t\t\t\t\t\t<th><h6>Charge Code</h6> </th>\n\t\t\t\t\t\t\t\t<th width=\"100px\" ><h6>Mon 23</h6> </th>\n                <th><h6>Tue 24</h6> </th>\n\t\t\t\t\t\t\t\t<th><h6>Wed 25</h6> </th>\t\t\t\t\t\t\t\n                <th><h6>Thu 26</h6> </th>\t\t\t\t\t\t\t\n                <th><h6>Fri 27</h6> </th>\t\t\t\t\t\t\t\n                <th><h6>Sat 28</h6> </th>\t\t\t\t\t\t\t\n                <th><h6>Sun 29</h6> </th>\t\t\t\n                <th><h6>Total</h6> </th>\t\t\t\t\t\t\t\n              </thead>\n              <tbody>\n                <tr>\n                <td>\n                  \n                  <h6>Functional and Technical Design(Design Phase)</h6>                  \n                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Billable</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Design</h6>                  \n                </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" ></td>\n\t\t\t\t\t\t\t\t<td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <!--<td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>-->\n              </tr>\n              <tr>\n                <td>\n                  <h6>Requirements Definition(Design Phase)</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Billable</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Design</h6>                  \n                </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <!--<td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>-->\n              </tr>\n              <tr>\n                <td>\n                  <h6>Unit and Performance Testing(User Interface Development)</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Billable</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Managment</h6>                  \n                </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <!--<td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>-->\n              </tr>\n              <tr>\n                <td>\n                  <h6>Database Development(Construction Phase)</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Billable</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Develop</h6>                  \n                </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <!--<td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>-->\n              </tr>\n              <tr>\n                <td>\n                  <h6>Functional and System Testing(Deployment and Quality Phase)</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Billable</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Test</h6>                  \n                </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <!--<td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>-->\n              </tr>\n              <tr>\n                <td>\n                  <h6>Functional and Technical Design(Design Phase)</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Billable</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Design</h6>                  \n                </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <!--<td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>-->\n              </tr>\n              <tr>\n                <td>\n                  <h6>Risk Response and Mitigation Plan(Planning Phase)</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Billable</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Design</h6>                  \n                </td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n\t\t\t\t\t\t\t\t<td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"></td>\n                <td><input type=\"text\" class=\"TextBoxClassTimeSheet\" value=\"\"> </td>\n                <!--<td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>-->\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n     <footer>\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"container\">\n                    \n                      <div class=\"col-lg-12\">\n                        <ul class=\"btn-lst\">\n                      <li>\n                        <button>\n                          <span><i class=\"fa fa-share\"></i></span> Save\n                        </button>\n                      </li>\n                      <li>\n                        <button>\n                          <span><i class=\"fa fa-share\"></i> </span> Submit\n                        </button>\n                      </li>\n                    </ul>\n                      </div>\n                    \n                  </div>\n                </div>\n              </div>\n            </footer>\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/starter/MyTimesheet/mytimesheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTimesheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyTimesheetComponent = (function () {
    function MyTimesheetComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    MyTimesheetComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    MyTimesheetComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    MyTimesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-MyTimesheet',
            template: __webpack_require__("../../../../../src/app/starter/MyTimesheet/mytimesheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/MyTimesheet/mytimesheet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyTimesheetComponent);
    return MyTimesheetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/Notifications/Notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/Notifications/Notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Notifications\n      <small>Optional description</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> 1Timesheet</a></li>\n      <li class=\"active\">Notifications</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\" style=\"min-height:490px !important\">\n\n    <!-- Your Page Content Here -->\n  <div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n\t\t<ul class=\"nt-lst\">\n\t\t\t<li>\n\t\t\t\t<div class=\"nt-icon\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"fa fa-bell\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"nt-data\">\n\t\t\t\t\t<h4>Action Items</h4>\n\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n\t\t\t\t\t<div class=\"dt-icon\">\n\t\t\t\t\t\t<span><i class=\"fa fa-calendar\"></i></span> 12-04-207\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tm-icon\">\n\t\t\t\t\t\t<span><i class=\"fa fa-clock-o\"></i></span> 6:00am\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<div class=\"nt-icon\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"fa fa-bell\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"nt-data\">\n\t\t\t\t\t<h4>Time Off</h4>\n\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n\t\t\t\t\t<div class=\"dt-icon\">\n\t\t\t\t\t\t<span><i class=\"fa fa-calendar\"></i></span> 12-04-207\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tm-icon\">\n\t\t\t\t\t\t<span><i class=\"fa fa-clock-o\"></i></span> 6:00am\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<div class=\"nt-icon\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<i class=\"fa fa-bell\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"nt-data\">\n\t\t\t\t\t<h4>Timesheet Approvals</h4>\n\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n\t\t\t\t\t<div class=\"dt-icon\">\n\t\t\t\t\t\t<span><i class=\"fa fa-calendar\"></i></span> 12-04-207\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tm-icon\">\n\t\t\t\t\t\t<span><i class=\"fa fa-clock-o\"></i></span> 6:00am\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\t\t\n      </div>\n    </div>\n  </div>\n</div>\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/starter/Notifications/Notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    NotificationsComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-Notifications',
            template: __webpack_require__("../../../../../src/app/starter/Notifications/Notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/Notifications/Notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/TeamAllocations/team-allocations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/TeamAllocations/team-allocations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      My Team Allocations\n      <small>Optional description</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> 1Timesheet</a></li>\n      <li class=\"active\">My Team Allocations</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\" style=\"min-height:490px !important\">\n      <div>\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n              <div class=\"row tpad\">\n                <div class=\"col-xs-6\">\n                  <div class=\"form-group\">\n                    <select class=\"form-control\">\n                      <option>Resource Name</option>\n                    </select>\n                   </div>\n                </div>\n                <div class=\"col-xs-6\">\n                  <div class=\"form-group\">\n                    <select class=\"form-control\">\n                      <option>Project Name</option>\n                    </select>\n                   </div>\n                </div>\n              </div>\n             \n              <div class=\"row\">\n                <div class=\"col-md-2 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <select class=\"form-control\">\n                      <option>Select Period</option>\n                    </select>\n                   </div>\n                </div>\n                <div class=\"col-md-2 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <div class=\"icon-field\">\n                      <input id=\"datefrom\" type=\"text\" class=\"form-control\" placeholder=\"Date From\" >\n                      <span><i class=\"fa fa-calendar\"></i></span>\n                    </div>\n                   </div>\n                </div>\n                <div class=\"col-md-2 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <div class=\"icon-field\">\n                      <input id=\"dateto\" type=\"text\" class=\"form-control\" placeholder=\"Date To\" >\n                      <span><i class=\"fa fa-calendar\"></i></span>\n                    </div>\n                   </div>\n                </div>\n                <div class=\"col-md-2 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Over Threshold\" class=\"form-control\"/>\n                   </div>\n                </div>\n                <div class=\"col-md-2 col-sm-12 col-xs-12\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Under Threshold\" class=\"form-control\"/>\n                   </div>\n                </div>\n                <div class=\"col-xs-1\">\n                  <div class=\"form-group\">\n                    <button class=\"flt-btn\"><i class=\"fa fa-filter\"></i></button>\n                   </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-12 table-h3\">\n                     \n                      \n                         <div style=\"float: right;\" class=\"row\">\n                            <div class=\"col-md-2 col-sm-1 col-xs-1\">\n                               <button style=\"background:#0098c0\" ><img src=\"assets/img/refresh.png\" alt=\"\"/></button>\n                             </div> \n                             <div class=\"col-md-2 col-sm-1 col-xs-1\">\n                               <button style=\"background:#0098c0\" ><img src=\"assets/img/excel.png\" alt=\"\"/></button>\n                             </div>\n                             <div class=\"col-md-2 col-sm-1 col-xs-1\">\n                               <button style=\"background:#0098c0\"><img src=\"assets/img/outlook.png\" alt=\"\"/></button>\n                             </div>\n                     \n                         </div>\n                       \n                    </div>\n                  </div>\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-hover table-h\" width=\"100%\">\n                      <thead>\n                        <tr>\n                          <th>Resource Name</th>\n                          <th>Resource ID  </th>\n                          <th>% Allocation 12-12-2016</th>\n                          <th>% Allocation 12-19-2016</th>\n                          <th>% Allocation 12-26-2016</th>\n                          <th>% Allocation 01-02-2017</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"709%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                         <td><input type=\"text\"  class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"709%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"709%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"709%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"709%\"></td>\n                        </tr><tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"709%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"709%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                         <td><input type=\"text\"  class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"709%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"709%\"></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-12 table-h3\">\n                        <div style=\"float: right;\" class=\"row\">\n                            <div class=\"col-md-2 col-sm-1 col-xs-1\">\n                               <button style=\"background:#0098c0\" ><img src=\"assets/img/refresh.png\" alt=\"\"/></button>\n                             </div> \n                             <div class=\"col-md-2 col-sm-1 col-xs-1\">\n                               <button style=\"background:#0098c0\" ><img src=\"assets/img/excel.png\" alt=\"\"/></button>\n                             </div>\n                             <div class=\"col-md-2 col-sm-1 col-xs-1\">\n                               <button style=\"background:#0098c0\"><img src=\"assets/img/outlook.png\" alt=\"\"/></button>\n                             </div>\n                     \n                         </div>\n                    </div>\n                  </div>\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-hover table-h\" width=\"100%\">\n                      <thead>\n                        <tr>\n                          <th>Resource Name</th>\n                          <th>Resource ID  </th>\n                          <th>Project Name   </th>\n                          <th>Project ID   </th>\n                          <th>12-12-2017 </th>\n                          <th>12-19-2017 </th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td>YIS Test Project</td>\n                          <td>00000091</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          \n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td>YIS Test Project</td>\n                          <td>00000091</td>\n                         <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td>YIS Test Project</td>\n                          <td>00000091</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td>YIS Test Project</td>\n                          <td>00000091</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td>YIS Test Project</td>\n                          <td>00000091</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td>YIS Test Project</td>\n                          <td>00000091</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td>YIS Test Project</td>\n                          <td>00000091</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                        </tr>\n                        <tr>\n                          <td>Administrator, PPm</td>\n                          <td>Admin</td>\n                          <td>YIS Test Project</td>\n                          <td>00000091</td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                          <td><input type=\"text\" class=\"TextBoxClass\" value=\"1200%\"></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n              </div>\n            </div>\n          </div>\n        </div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/starter/TeamAllocations/team-allocations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamAllocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamAllocationsComponent = (function () {
    function TeamAllocationsComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    TeamAllocationsComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    TeamAllocationsComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    TeamAllocationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-allocations',
            template: __webpack_require__("../../../../../src/app/starter/TeamAllocations/team-allocations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/TeamAllocations/team-allocations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamAllocationsComponent);
    return TeamAllocationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/TimeOffApprovals/TimeOffApprovals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/TimeOffApprovals/TimeOffApprovals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      TimeOff Approvals\n      <small>Optional description</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> 1Timesheet</a></li>\n      <li class=\"active\">TimeOff Approvals</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\" style=\"min-height:490px !important\">\n\n    <!-- Your Page Content Here -->\n  <div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n\t\t\t<ul class=\"toa-lst\">\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-6\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-6\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-6\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-6\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t</ul>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"fot\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul class=\"btn-lst\">\n\t\t\t<li>\n\t\t\t\t<button>\n\t\t\t\t\t<span><i class=\"fa fa-share\"></i></span> Approve\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<button>\n\t\t\t\t\t<span><i class=\"fa fa-reply\"></i> </span> Return\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t</ul>\n      </div>\n    </div>\n  </div>\n</footer>\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/starter/TimeOffApprovals/TimeOffApprovals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeOffApprovalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeOffApprovalsComponent = (function () {
    function TimeOffApprovalsComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    TimeOffApprovalsComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    TimeOffApprovalsComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    TimeOffApprovalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-TimeOffApprovals',
            template: __webpack_require__("../../../../../src/app/starter/TimeOffApprovals/TimeOffApprovals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/TimeOffApprovals/TimeOffApprovals.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimeOffApprovalsComponent);
    return TimeOffApprovalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/TimeOffSubmission/TimeOffSubmission.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/TimeOffSubmission/TimeOffSubmission.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      TimeOff Submission\n      <small>Optional description</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> 1Timesheet</a></li>\n      <li class=\"active\">TimeOff Submission</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\" style=\"min-height:490px !important\">\n\n    <!-- Your Page Content Here -->\n <div style=\"padding-top:50px;\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label >Time Off Start Date</label>\n\t\t\t\t\t\t<div class=\"icon-field\">\n\t\t\t\t\t\t\t<input id=\"timeofstartdate\" type=\"text\" class=\"form-control\" >\n\t\t\t\t\t\t\t<span><i class=\"fa fa-calendar\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>&nbsp;</label>\n\t\t\t\t\t\t<div class=\"icon-field\">\n\t\t\t\t\t\t\t<input id=\"timeofstarttime\" type=\"text\" class=\"form-control\" >\n\t\t\t\t\t\t\t<span><i class=\"fa fa-clock-o\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Time Off End Date</label>\n\t\t\t\t\t\t<div class=\"icon-field\">\n\t\t\t\t\t\t\t<input id=\"timeofenddate\" type=\"text\" class=\"form-control\" >\n\t\t\t\t\t\t\t<span><i class=\"fa fa-calendar\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label >&nbsp;</label>\n\t\t\t\t\t\t<div class=\"icon-field\">\n\t\t\t\t\t\t\t<input id=\"timeofendtime\" type=\"text\" class=\"form-control\" >\n\t\t\t\t\t\t\t<span><i class=\"fa fa-clock-o\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t  <label class=\"form-check-label\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" value=\"\"> All Day Event\n\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label >Time Off Description</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" ></textarea>\n\t\t\t\t\t </div>\n\t\t\t\t</div>\n\t\t\t</div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"fot\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul class=\"btn-lst\">\n\t\t\t<li>\n\t\t\t\t<button>\n\t\t\t\t\t<span><i class=\"fa fa-share-alt\"></i></span> Submit For Approval\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t\n\t\t</ul>\n      </div>\n    </div>\n  </div>\n</footer>\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/starter/TimeOffSubmission/TimeOffSubmission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeOffSubmissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeOffSubmissionComponent = (function () {
    function TimeOffSubmissionComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    TimeOffSubmissionComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    TimeOffSubmissionComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    TimeOffSubmissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-TimeOffSubmission',
            template: __webpack_require__("../../../../../src/app/starter/TimeOffSubmission/TimeOffSubmission.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/TimeOffSubmission/TimeOffSubmission.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimeOffSubmissionComponent);
    return TimeOffSubmissionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/TimesheetApprovals/TimesheetApprovals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/TimesheetApprovals/TimesheetApprovals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      My Team Time Approvals\n      <small>Optional description</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> 1Timesheet</a></li>\n      <li class=\"active\">My Team Time Approvals</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\" style=\"min-height:490px !important\">\n\n    <!-- Your Page Content Here -->\n  <div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n\t\t\t<ul class=\"toa-lst\">\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-2\">Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Suresh</div>\n\t\t\t\t\t\t<label class=\"col-xs-2\">Manager Name</label>\n\t\t\t\t\t\t<div class=\"col-xs-4\">Mahesh</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-6\">Subject</label>\n\t\t\t\t\t\t<div class=\"col-xs-6\">Test</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<label class=\"col-xs-6\">Status</label>\n\t\t\t\t\t\t<div class=\"col-xs-6\">Pending</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"chk\"><input type=\"checkbox\"/></span>\n\t\t\t\t</li>\n\t\t\t</ul>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"fot\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul class=\"btn-lst\">\n\t\t\t<li>\n\t\t\t\t<button>\n\t\t\t\t\t<span><i class=\"fa fa-share\"></i></span> Approve\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<button>\n\t\t\t\t\t<span><i class=\"fa fa-reply\"></i> </span> Return\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t</ul>\n      </div>\n    </div>\n  </div>\n</footer>\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/starter/TimesheetApprovals/TimesheetApprovals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetApprovalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimesheetApprovalsComponent = (function () {
    function TimesheetApprovalsComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    TimesheetApprovalsComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    TimesheetApprovalsComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    TimesheetApprovalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-TimesheetApprovals',
            template: __webpack_require__("../../../../../src/app/starter/TimesheetApprovals/TimesheetApprovals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/TimesheetApprovals/TimesheetApprovals.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimesheetApprovalsComponent);
    return TimesheetApprovalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/TimesheetHistory/TimesheetHistory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/TimesheetHistory/TimesheetHistory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Posted History\n      <small>Optional description</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> 1Timesheet</a></li>\n      <li class=\"active\">Posted History</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\" style=\"min-height:490px !important\">\n\n    <!-- Your Page Content Here -->\n  <div>\n      <div class=\"container-fluid\">\n      <div class=\"row bg-1\">\n        <div class=\"col-lg-12\">\n        <div id=\"topMenu\">\n        </div>\n        \n        \n        \n          \n        </div>\n      </div>\n      <!--<div class=\"row bg-2\">\n        <div class=\"col-lg-12\">\n          <div class=\"relative\">\n            <div class=\"pos-abs lft-0 top-0 tmarg\">\n              <a  class=\"btnr bg-w txt-666 \" href=\"javascript:void(0)\">\n                <i class=\"fa fa-chevron-left\"></i>\n              </a>\n            </div>\n              <div class=\"ad-bar-1 ad-bar-1-tb-pad-0\">\n                <h2>January 22 - January 28, 2018</h2>\n                <span>Open</span>\n              </div>\n            <div class=\"pos-abs rft-0 top-0 tmarg\">\n              <a class=\"btnr bg-w txt-666 \" href=\"javascript:void(0)\">\n                <i class=\"fa fa-chevron-right\"></i>\n               \n              </a>\n            </div>\n          </div>\n        </div>\n      </div>-->\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-hover table-h\" width=\"100%\">\n              <thead>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<th><h6>Week Start Date</h6></th>\n                <th><h6>Week End Date</h6> </th>\n\t\t\t\t\t\t\t\t<th><h6>Status</h6> </th>\n\t\t\t\t\t\t\t\t<th><h6>Hours</h6> </th>\n                <th><h6>Approved By</h6> </th>\n\t\t\t\t\t\t\t\t<th><h6>Details</h6> </th>\t\t\t\t\t\t\t\n              </thead>\n              <tbody>\n                <tr>\n                <td>\n                  <h6>2017-04-17</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>2017-04-23</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Open</h6>                  \n                </td>\n                <td>0.5 h</td>\n\t\t\t\t\t\t\t\t<td> </td>\n                <td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>2017-06-12</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>2017-06-18</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Submitted</h6>                  \n                </td>\n                <td>40 h</td>\n\t\t\t\t\t\t\t\t<td> </td>\n                <td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>2017-06-19</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>2017-06-25</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Open</h6>                  \n                </td>\n                <td>34.5 h</td>\n\t\t\t\t\t\t\t\t<td> </td>\n                <td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>2017-07-03</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>2017-07-09</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Submitted</h6>                  \n                </td>\n                <td>40 h</td>\n\t\t\t\t\t\t\t\t<td> </td>\n                <td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>2017-07-24</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>2017-07-30</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Submitted</h6>                  \n                </td>\n                <td>40 h</td>\n\t\t\t\t\t\t\t\t<td> </td>\n                <td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>2017-08-07</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>2017-08-13</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Approved</h6>                  \n                </td>\n                <td>40 h</td>\n\t\t\t\t\t\t\t\t<td>admin</td>\n                <td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>2017-08-14</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>2017-08-20</h6>                  \n                </td>\n\t\t\t\t\t\t\t\t<td>\n                  <h6>Submitted</h6>                  \n                </td>\n                <td>40 h</td>\n\t\t\t\t\t\t\t\t<td></td>\n                <td class=\"text-center\">\n                    <a routerLink='/EditTimesheet' class=\"txt-666\">\n                      <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/starter/TimesheetHistory/TimesheetHistory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimesheetHistoryComponent = (function () {
    function TimesheetHistoryComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    TimesheetHistoryComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    TimesheetHistoryComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    TimesheetHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-TimesheetHistory',
            template: __webpack_require__("../../../../../src/app/starter/TimesheetHistory/TimesheetHistory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/TimesheetHistory/TimesheetHistory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimesheetHistoryComponent);
    return TimesheetHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/kanban/kanban.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/kanban/kanban.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n     Taskboard\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> 1Timesheet</a></li>\n      <li class=\"active\">Taskboard</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\" style=\"min-height:490px !important\">\n      <!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n          <title id='Description'>Task Board.</title>\n          \n      </head>\n      <body>\n          <jqxSplitter [width]='900' [height]='600' [panels]='mainSplitterPanels'>\n        <div>\n            <jqxKanban id=\"kanban3\" #myKanbanThree\n                       [width]='\"100%\"' [height]='\"100%\"' [source]='dataAdapter3'\n                       [columns]='kanbanThreeColumns' [connectWith]='\"#kanban2, #kanban1\"'\n                       [resources]='resourcesAdapterFunc()' [columnRenderer]='kanbanThreeColumnRenderer'>\n            </jqxKanban>\n        </div>\n    <div>\n    <jqxSplitter [width]='\"100%\"' [height]='\"100%\"'\n        [orientation]='\"horizontal\"' [panels]='rightSplitterPanels'>\n        <div>\n            <jqxKanban id=\"kanban2\" #myKanbanTwo\n                       [width]='\"100%\"' [height]='\"100%\"' [source]='dataAdapter2'\n                       [columns]='kanbanTwoColumns' [connectWith]='\"#kanban1, #kanban3\"'\n                       [resources]='resourcesAdapterFunc()' [columnRenderer]='kanbanTwoColumnRenderer'>\n            </jqxKanban>\n        </div>\n        <div>\n        <jqxKanban id=\"kanban1\" #myKanbanOne\n                   [width]='\"100%\"' [height]='\"100%\"' [source]='dataAdapter'\n                   [columns]='kanbanOneColumns' [connectWith]='\"#kanban2, #kanban3\"'\n                   [resources]='resourcesAdapterFunc()' [columnRenderer]='kanbanOneColumnRenderer'>\n        </jqxKanban>\n    </div>\n        \n    </jqxSplitter>\n    </div>\n</jqxSplitter>\n           <!-- <div id=\"kanban\"></div>  -->\n      </body>\n      </html>\n  </section>\n\n\n  "

/***/ }),

/***/ "../../../../../src/app/starter/kanban/kanban.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KanbanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_ts_angular_jqxkanban__ = __webpack_require__("../../../../jqwidgets-ts/angular_jqxkanban.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KanbanComponent = (function () {
    function KanbanComponent() {
        var _this = this;
        this.fields = [
            { name: 'status', map: 'state', type: 'string' },
            { name: 'text', map: 'label', type: 'string' },
            { name: 'tags', type: 'string' },
            { name: 'color', map: 'hex', type: 'string' },
            { name: 'resourceId', type: 'number' }
        ];
        this.source = {
            localData: [
                { state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
                { state: 'new', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
                { state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
                { state: 'new', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
                { state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
            ],
            dataType: 'array',
            dataFields: this.fields
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.source2 = {
            localData: [
                { state: 'ready', label: 'Logout issue', tags: 'logout, issue', hex: '#5dc3f0', resourceId: 7 },
                { state: 'ready', label: 'Remember password issue', tags: 'password, issue', hex: '#6bbd49', resourceId: 8 },
                { state: 'ready', label: 'Cart calculation issue', tags: 'cart, calculation', hex: '#f19b60', resourceId: 9 },
                { state: 'ready', label: 'Remove topic issue', tags: 'topic, issue', hex: '#6bbd49' }
            ],
            dataType: 'array',
            dataFields: this.fields
        };
        this.dataAdapter2 = new jqx.dataAdapter(this.source2);
        this.source3 = {
            localData: [
                { state: 'done', label: 'Delete orders', tags: 'orders, combine', hex: '#f19b60', resourceId: 4 },
                { state: 'work', label: 'Add New Address', tags: 'address', hex: '#6bbd49', resourceId: 5 },
                { state: 'new', label: 'Rename items', tags: 'rename', hex: '#5dc3f0', resourceId: 6 },
                { state: 'work', label: 'Update cart', tags: 'cart, update', hex: '#6bbd49' }
            ],
            dataType: 'array',
            dataFields: this.fields
        };
        this.dataAdapter3 = new jqx.dataAdapter(this.source3);
        this.resourcesAdapterFunc = function () {
            var resourcesSource = {
                localData: [
                    { id: 0, name: 'No name', image: '../jqwidgets/styles/images/common.png', common: true },
                    { id: 1, name: 'Andrew Fuller', image: '../images/andrew.png' },
                    { id: 2, name: 'Janet Leverling', image: '../images/janet.png' },
                    { id: 3, name: 'Steven Buchanan', image: '../images/steven.png' },
                    { id: 4, name: 'Nancy Davolio', image: '../images/nancy.png' },
                    { id: 5, name: 'Michael Buchanan', image: '../images/Michael.png' },
                    { id: 6, name: 'Margaret Buchanan', image: '../images/margaret.png' },
                    { id: 7, name: 'Robert Buchanan', image: '../images/robert.png' },
                    { id: 8, name: 'Laura Buchanan', image: '../images/Laura.png' },
                    { id: 9, name: 'Laura Buchanan', image: '../images/Anne.png' }
                ],
                dataType: 'array',
                dataFields: [
                    { name: 'id', type: 'number' },
                    { name: 'name', type: 'string' },
                    { name: 'image', type: 'string' },
                    { name: 'common', type: 'boolean' }
                ]
            };
            var resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
            return resourcesDataAdapter;
        };
        this.kanbanOneColumns = [
            { text: 'Backlog', dataField: 'new', maxItems: 10 }
        ];
        this.kanbanOneColumnRenderer = function (element, collapsedElement, column) {
            if (element[0]) {
                var headerStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
                var columnItems = _this.myKanbanOne.getColumnItems(column.dataField).length;
                headerStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
            }
        };
        this.kanbanTwoColumns = [
            { text: 'Ready', dataField: 'ready', maxItems: 10 }
        ];
        this.kanbanTwoColumnRenderer = function (element, collapsedElement, column) {
            if (element[0]) {
                var headerStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
                var columnItems = _this.myKanbanTwo.getColumnItems(column.dataField).length;
                headerStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
            }
        };
        this.kanbanThreeColumns = [
            { text: 'Backlog', dataField: 'new', maxItems: 5 },
            { text: 'In Progress', dataField: 'work', maxItems: 5 },
            { text: 'Done', dataField: 'done', maxItems: 5 }
        ];
        this.kanbanThreeColumnRenderer = function (element, collapsedElement, column) {
            if (element[0]) {
                var columnItems = _this.myKanbanThree.getColumnItems(column.dataField).length;
                var headerStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
                headerStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
                var collapsedHeaderStatus = collapsedElement[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
                collapsedHeaderStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
            }
        };
        this.mainSplitterPanels = [{ size: 250, min: 100 }, { min: 250 }];
        this.rightSplitterPanels = [{ min: 200, size: 350, collapsible: false }, { min: 200 }];
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    KanbanComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    KanbanComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myKanbanOne'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_jqwidgets_ts_angular_jqxkanban__["a" /* jqxKanbanComponent */])
    ], KanbanComponent.prototype, "myKanbanOne", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myKanbanTwo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_jqwidgets_ts_angular_jqxkanban__["a" /* jqxKanbanComponent */])
    ], KanbanComponent.prototype, "myKanbanTwo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myKanbanThree'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_jqwidgets_ts_angular_jqxkanban__["a" /* jqxKanbanComponent */])
    ], KanbanComponent.prototype, "myKanbanThree", void 0);
    KanbanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-kanban',
            template: __webpack_require__("../../../../../src/app/starter/kanban/kanban.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/kanban/kanban.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KanbanComponent);
    return KanbanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n      <h1>\n        Settings\n        <small>Optional description</small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> 1Timesheet</a></li>\n        <li class=\"active\">Settings</li>\n      </ol>\n    </section>\n  \n    <!-- Main content -->\n    <section class=\"content\" style=\"min-height:490px !important\">\n\n        <div>\n            <div class=\"container-fluid\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                <div class=\"table-responsive\">\n                  <table class=\"table table-bordered table-hover table-h\" width=\"100%\">\n                    <thead>\n                      <tr>\n                        <th>Setting Name   </th>\n                        <th>  Setting Value    </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>\n                          Action Item One\n                        </td>\n                        <td>\n                          Mahesh B\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>\n                          Action Item Two\n                        </td>\n                        <td>\n                          Mahesh B\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>\n                          Action Item Three\n                        </td>\n                        <td>\n                          Mahesh B\n                        </td>\n                      </tr>\n          <tr>\n                        <td>\n                          Action Item Four\n                        </td>\n                        <td>\n                          Mahesh B\n                        </td>\n                      </tr>\n          <tr>\n                        <td>\n                          Action Item Five\n                        </td>\n                        <td>\n                          Mahesh B\n                        </td>\n                      </tr>\n          <tr>\n                        <td>\n                          Action Item Six\n                        </td>\n                        <td>\n                          Mahesh B\n                        </td>\n                      </tr>\n          <tr>\n                        <td>\n                          Action Item Seven\n                        </td>\n                        <td>\n                          Mahesh B\n                        </td>\n                      </tr>\t\t\t\t\t\t\n                        \n                    </tbody>\n                  </table>\n                </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n<footer class=\"fot\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul class=\"btn-lst\">\n\t\t\t<li>\n\t\t\t\t<button>\n\t\t\t\t\t<span><i class=\"fa fa-share\"></i></span> Save\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<button>\n\t\t\t\t\t<span><i class=\"fa fa-reply\"></i> </span> Close\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t</ul>\n      </div>\n    </div>\n  </div>\n</footer>\n      </section>"

/***/ }),

/***/ "../../../../../src/app/starter/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/starter/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter-content/starter-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter-content/starter-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Page Header\n      <small>Optional description</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\n      <li class=\"active\">Here</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n\n    <!-- Your Page Content Here -->\n    test\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter-content/starter-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterContentComponent = (function () {
    function StarterContentComponent() {
    }
    StarterContentComponent.prototype.ngOnInit = function () {
        // Update the AdminLTE layouts
        AdminLTE.init();
    };
    StarterContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter-content',
            template: __webpack_require__("../../../../../src/app/starter/starter-content/starter-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter-content/starter-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterContentComponent);
    return StarterContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\n  <!-- Create the tabs -->\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n   \n  </ul>\n  <!-- Tab panes -->\n  <div class=\"\">\n    <!-- Home tab content -->\n    \n    <!-- /.tab-pane -->\n    <!-- Stats tab content -->\n    \n    <!-- /.tab-pane -->\n    <!-- Settings tab content -->\n    <div>\n      <form method=\"post\">\n       \n        <!-- /.form-group -->\n      </form>\n    </div>\n    <!-- /.tab-pane -->\n  </div>\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterControlSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterControlSidebarComponent = (function () {
    function StarterControlSidebarComponent() {
    }
    StarterControlSidebarComponent.prototype.ngOnInit = function () {
    };
    StarterControlSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter-control-sidebar',
            template: __webpack_require__("../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter-control-sidebar/starter-control-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterControlSidebarComponent);
    return StarterControlSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter-footer/starter-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter-footer/starter-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <!-- To the right -->\n  <div class=\"pull-right hidden-xs\">\n    Anything you want\n  </div>\n  <!-- Default to the left -->\n  <strong>Copyright &copy; 2016 <a href=\"#\">Company</a>.</strong> All rights reserved.\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter-footer/starter-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterFooterComponent = (function () {
    function StarterFooterComponent() {
    }
    StarterFooterComponent.prototype.ngOnInit = function () {
    };
    StarterFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter-footer',
            template: __webpack_require__("../../../../../src/app/starter/starter-footer/starter-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter-footer/starter-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterFooterComponent);
    return StarterFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter-header/starter-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter-header/starter-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n  <!-- Logo -->\n  <a href=\"#\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\">\n    <img src=\"assets/img/One_time_sheet_logo-icon.jpg\"></span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><img src=\"assets/img/One_time_sheet_logo.jpg\"></span>\n  </a>\n\n  <!-- Header Navbar -->\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n    <!-- Navbar Right Menu -->\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <!-- Messages: style can be found in dropdown.less-->\n        <li class=\"dropdown messages-menu\">\n          <!-- Menu toggle button -->\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-envelope-o\"></i>\n              <span class=\"label label-success\">4</span>\n            </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 4 messages</li>\n            <li>\n              <!-- inner menu: contains the messages -->\n              <ul class=\"menu\">\n                <li>\n                  <!-- start message -->\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <!-- User Image -->\n                      <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <!-- Message title and timestamp -->\n                    <h4>\n                      Support Team\n                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                    </h4>\n                    <!-- The message -->\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <!-- end message -->\n              </ul>\n              <!-- /.menu -->\n            </li>\n            <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n          </ul>\n        </li>\n        <!-- /.messages-menu -->\n\n        <!-- Notifications Menu -->\n        <li class=\"dropdown notifications-menu\">\n          <!-- Menu toggle button -->\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"label label-warning\">10</span>\n            </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 10 notifications</li>\n            <li>\n              <!-- Inner Menu: contains the notifications -->\n              <ul class=\"menu\">\n                <li>\n                  <!-- start notification -->\n                     <a href=\"#\">\n                      <i class=\"fa fa-users text-aqua\"></i> Action Items 4\n                    </a>\n                </li>\n               \n                  <li ><a routerLink='TimeOffApprovals'><i class=\"fa fa-users text-aqua\"></i> <span>Time Off 2</span></a></li>\n\n                  <li ><a routerLink='TimesheetApprovals'><i class=\"fa fa-users text-aqua\"></i> <span>Timesheet Approvals 4</span></a></li>\n                \n                <!-- end notification -->\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">View all</a></li>\n          </ul>\n        </li>\n        <!-- Tasks Menu -->\n        <li class=\"dropdown tasks-menu\">\n          <!-- Menu Toggle Button -->\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-flag-o\"></i>\n              <span class=\"label label-danger\">9</span>\n            </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 9 tasks</li>\n            <li>\n              <!-- Inner menu: contains the tasks -->\n              <ul class=\"menu\">\n                <li>\n                  <!-- Task item -->\n                  <a href=\"#\">\n                    <!-- Task title and progress text -->\n                    <h3>\n                      Design some buttons\n                      <small class=\"pull-right\">20%</small>\n                    </h3>\n                    <!-- The progress bar -->\n                    <div class=\"progress xs\">\n                      <!-- Change the css width attribute to simulate progress -->\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">20% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"#\">View all tasks</a>\n            </li>\n          </ul>\n        </li>\n        <!-- User Account Menu -->\n        <li class=\"dropdown user user-menu\">\n          <!-- Menu Toggle Button -->\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <!-- The user image in the navbar-->\n            <img src=\"assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n            <!-- hidden-xs hides the username on small devices so only the image appears. -->\n            <span class=\"hidden-xs\">Alexander Pierce</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- The user image in the menu -->\n            <li class=\"user-header\">\n              <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n              <p>\n                Alexander Pierce - Web Developer\n                <small>Member since Nov. 2012</small>\n              </p>\n            </li>\n            <!-- Menu Body -->\n            <li class=\"user-body\">\n              <div class=\"row\">\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Followers</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Sales</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Friends</a>\n                </div>\n              </div>\n              <!-- /.row -->\n            </li>\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n              </div>\n              <div class=\"pull-right\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- Control Sidebar Toggle Button -->\n      \n        <li><a routerLink='Settings' ><i class=\"fa fa-gears\"></i> </a></li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter-header/starter-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterHeaderComponent = (function () {
    function StarterHeaderComponent() {
    }
    StarterHeaderComponent.prototype.ngOnInit = function () {
    };
    StarterHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter-header',
            template: __webpack_require__("../../../../../src/app/starter/starter-header/starter-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter-header/starter-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterHeaderComponent);
    return StarterHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter-left-side/starter-left-side.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter-left-side/starter-left-side.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n\n    <!-- Sidebar user panel (optional) -->\n    <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <p>Alexander Pierce</p>\n        <!-- Status -->\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n      </div>\n    </div>\n\n    <!-- search form (Optional) -->\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n        <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n      </div>\n    </form>\n    <!-- /.search form -->\n\n    <!-- Sidebar Menu -->\n    <ul class=\"sidebar-menu\">\n      <!--<li class=\"header\">HEADER</li>-->\n      <!-- Optionally, you can add icons to the links -->\n      <li class=\"active\"><a  routerLink='Mytimesheet'><i class=\"fa fa-sign-in\"></i> <span>My TimeSheet</span></a></li>\n     <!-- <li class=\"active\"><a routerLink='Notifications'><i class=\"fa fa-link\"></i> <span>Notifications</span></a></li>-->\n      <li class=\"active\"><a routerLink='TimeOffSubmission' ><i class=\"fa fa-clock-o\"></i> <span>TimeOff Submission</span></a></li>\n      <li class=\"active\"><a routerLink='TimesheetHistory'><i class=\"fa fa-history\"></i> <span>Timesheet History</span></a></li>\n<li class=\"active\"><a routerLink='TimeOffApprovals'><i class=\"fa fa-check\"></i> <span>TimeOff Approvals</span></a></li>\n<li class=\"active\"><a routerLink='TimesheetApprovals'><i class=\"fa fa-thumbs-up\"></i> <span>Timesheet Approvals</span></a></li>\n<li class=\"active\"><a routerLink='TeamAllocations'><i class=\"fa fa-tasks\"></i> <span>Team Allocations</span></a></li>\n  <li class=\"active\"><a routerLink='Kanban'><i class=\"fa fa-tasks\"></i> <span>Kanban</span></a></li>\n      \n    </ul>\n    <!-- /.sidebar-menu -->\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter-left-side/starter-left-side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterLeftSideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterLeftSideComponent = (function () {
    function StarterLeftSideComponent() {
    }
    StarterLeftSideComponent.prototype.ngOnInit = function () {
    };
    StarterLeftSideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter-left-side',
            template: __webpack_require__("../../../../../src/app/starter/starter-left-side/starter-left-side.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter-left-side/starter-left-side.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterLeftSideComponent);
    return StarterLeftSideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/starter/starter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      My Timesheet\n      <small>Current week timesheet</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\n      <li class=\"active\">Here</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n\n    <!-- Your Page Content Here -->\n    <div>\n      <div class=\"container-fluid\">\n      <div class=\"row bg-1\">\n        <div class=\"col-lg-12\">\n        <div id=\"topMenu\">\n        </div>\n        \n        \n        \n          \n        </div>\n      </div>\n      <div class=\"row bg-2\">\n        <div class=\"col-lg-12\">\n          <div class=\"relative\">\n            <div class=\"pos-abs lft-0 top-0 tmarg\">\n              <a  class=\"btnr bg-w txt-666 \" href=\"javascript:void(0)\">\n                <i class=\"fa fa-chevron-left\"></i>\n              </a>\n            </div>\n              <div class=\"ad-bar-1 ad-bar-1-tb-pad-0\">\n                <h2>January 22 - January 28, 2018</h2>\n                <span>Open</span>\n              </div>\n            <div class=\"pos-abs rft-0 top-0 tmarg\">\n              <a class=\"btnr bg-w txt-666 \" href=\"javascript:void(0)\">\n                <i class=\"fa fa-chevron-right\"></i>\n               \n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-hover table-h\" width=\"100%\">\n              <tbody>\n                <tr>\n                <td>\n                  <h6>Monday</h6>\n                  <span>January 22-2018</span>\n                </td>\n                <td>0.00 h</td>\n                <td class=\"text-center\">\n                                <a class=\"txt-666\" href=\"EditTimesheet.html\">\n                                    <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>Tuesday</h6>\n                  <span>January 22-2018</span>\n                </td>\n                <td>0.00 h</td>\n                <td class=\"text-center\">\n                                <a class=\"txt-666\" href=\"EditTimesheet.html\">\n                                    <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>Wednesday</h6>\n                  <span>January 22-2018</span>\n                </td>\n                <td>0.00 h</td>\n                <td class=\"text-center\">\n                                <a class=\"txt-666\" href=\"EditTimesheet.html\">\n                                    <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>Thursday</h6>\n                  <span>January 22-2018</span>\n                </td>\n                <td>0.00 h</td>\n                <td class=\"text-center\">\n                                <a class=\"txt-666\" href=\"EditTimesheet.html\">\n                                    <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>Friday</h6>\n                  <span>January 22-2018</span>\n                </td>\n                <td>0.00 h</td>\n                <td class=\"text-center\">\n                                <a class=\"txt-666\" href=\"EditTimesheet.html\">\n                                    <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>Saturday</h6>\n                  <span>January 22-2018</span>\n                </td>\n                <td>0.00 h</td>\n                <td class=\"text-center\">\n                                <a class=\"txt-666\" href=\"EditTimesheet.html\">\n                                    <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <h6>Sunday</h6>\n                  <span>January 22-2018</span>\n                </td>\n                <td>0.00 h</td>\n                <td class=\"text-center\">\n                                <a class=\"txt-666\" href=\"EditTimesheet.html\">\n                                    <i class=\"fa fa-arrow-circle-right\"></i>\n                                </a>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/starter/starter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterComponent = (function () {
    function StarterComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    StarterComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    StarterComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    StarterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starter',
            template: __webpack_require__("../../../../../src/app/starter/starter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/starter/starter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarterComponent);
    return StarterComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map