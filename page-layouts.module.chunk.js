webpackJsonp(["page-layouts.module"],{

/***/ "../../../../../src/app/page-layouts/centered/centered.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid with-maxwidth-md chapter\">\n\n  <article class=\"article\">\n    <h2 class=\"article-title\">Blank</h2>\n\n  </article>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/page-layouts/centered/centered.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLayoutCenteredComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageLayoutCenteredComponent = (function () {
    function PageLayoutCenteredComponent() {
    }
    PageLayoutCenteredComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-page-layout-centered',
            styles: [],
            template: __webpack_require__("../../../../../src/app/page-layouts/centered/centered.component.html")
        })
    ], PageLayoutCenteredComponent);
    return PageLayoutCenteredComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-layouts/full-width/full-width.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\n\n  <ul class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Page</a></li>\n    <li class=\"breadcrumb-item active\">Blank</li>\n  </ul>\n\n  <div class=\"article-title\">Blank</div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/page-layouts/full-width/full-width.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLayoutFullWidthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageLayoutFullWidthComponent = (function () {
    function PageLayoutFullWidthComponent() {
    }
    PageLayoutFullWidthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-page-layout-full-width',
            styles: [],
            template: __webpack_require__("../../../../../src/app/page-layouts/full-width/full-width.component.html")
        })
    ], PageLayoutFullWidthComponent);
    return PageLayoutFullWidthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-layouts/page-layouts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageLayoutsRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLayoutsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_layouts_component__ = __webpack_require__("../../../../../src/app/page-layouts/page-layouts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__centered_centered_component__ = __webpack_require__("../../../../../src/app/page-layouts/centered/centered.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_width_full_width_component__ = __webpack_require__("../../../../../src/app/page-layouts/full-width/full-width.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with_tabs_with_tabs_component__ = __webpack_require__("../../../../../src/app/page-layouts/with-tabs/with-tabs.component.ts");





var PageLayoutsRoutes = [
    {
        // pglayout instead of "page-layout", otherwise myHighlightActiveItems will also highlights /page routes
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__page_layouts_component__["a" /* PageLayoutsComponent */],
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'centered', component: __WEBPACK_IMPORTED_MODULE_2__centered_centered_component__["a" /* PageLayoutCenteredComponent */] },
            { path: 'full-width', component: __WEBPACK_IMPORTED_MODULE_3__full_width_full_width_component__["a" /* PageLayoutFullWidthComponent */] },
            { path: 'with-tabs', component: __WEBPACK_IMPORTED_MODULE_4__with_tabs_with_tabs_component__["a" /* PageLayoutWidthTabsComponent */] },
        ]
    }
];
var PageLayoutsRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* RouterModule */].forChild(PageLayoutsRoutes);


/***/ }),

/***/ "../../../../../src/app/page-layouts/page-layouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLayoutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageLayoutsComponent = (function () {
    function PageLayoutsComponent() {
    }
    PageLayoutsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-page-layouts',
            styles: [],
            template: "<router-outlet></router-outlet>"
        })
    ], PageLayoutsComponent);
    return PageLayoutsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-layouts/page-layouts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function() { return PageLayoutsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_layouts_routing_module__ = __webpack_require__("../../../../../src/app/page-layouts/page-layouts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_layouts_component__ = __webpack_require__("../../../../../src/app/page-layouts/page-layouts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__centered_centered_component__ = __webpack_require__("../../../../../src/app/page-layouts/centered/centered.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__full_width_full_width_component__ = __webpack_require__("../../../../../src/app/page-layouts/full-width/full-width.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__with_tabs_with_tabs_component__ = __webpack_require__("../../../../../src/app/page-layouts/with-tabs/with-tabs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PageLayoutsModule = (function () {
    function PageLayoutsModule() {
    }
    PageLayoutsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__page_layouts_routing_module__["a" /* PageLayoutsRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__page_layouts_component__["a" /* PageLayoutsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__centered_centered_component__["a" /* PageLayoutCenteredComponent */],
                __WEBPACK_IMPORTED_MODULE_5__full_width_full_width_component__["a" /* PageLayoutFullWidthComponent */],
                __WEBPACK_IMPORTED_MODULE_6__with_tabs_with_tabs_component__["a" /* PageLayoutWidthTabsComponent */],
            ]
        })
    ], PageLayoutsModule);
    return PageLayoutsModule;
}());



/***/ }),

/***/ "../../../../../src/app/page-layouts/with-tabs/with-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-with-tabs\">\n\n  <div class=\"page-title\">\n    <h2>Page Title</h2>\n  </div>\n\n  <mat-tab-group>\n    <mat-tab label=\"One\">\n      <section class=\"container-fluid\">\n        <div class=\"article-title\">Blank 1</div>\n      </section>\n    </mat-tab>\n    <mat-tab label=\"Two\">\n      <section class=\"container-fluid\">\n        <div class=\"article-title\">Blank 2</div>\n      </section>\n    </mat-tab>\n    <mat-tab label=\"Three\">\n      <section class=\"container-fluid\">\n        <div class=\"article-title\">Blank 3</div>\n      </section>\n    </mat-tab>\n  </mat-tab-group>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/page-layouts/with-tabs/with-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLayoutWidthTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageLayoutWidthTabsComponent = (function () {
    function PageLayoutWidthTabsComponent() {
    }
    PageLayoutWidthTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-page-layout-with-tabs',
            styles: [],
            template: __webpack_require__("../../../../../src/app/page-layouts/with-tabs/with-tabs.component.html")
        })
    ], PageLayoutWidthTabsComponent);
    return PageLayoutWidthTabsComponent;
}());



/***/ })

});
//# sourceMappingURL=page-layouts.module.chunk.js.map