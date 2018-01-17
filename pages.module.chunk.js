webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-blog container-fluid no-breadcrumbs with-maxwidth-md chapter\">\n  <article class=\"blog-item\" *ngFor=\"let post of posts\">\n    <h2><a href=\"javascript:;\">{{post.title}}</a></h2>\n    <div class=\"blog-info\">\n      <span><img [src]=\"post.avatar\" alt=\"avatar\" class=\"avatar\"></span>\n      <span><a href=\"javascript:;\" class=\"author\">{{post.author}}</a></span>\n      <span class=\"date\">10 June</span>\n      <span class=\"category\"><a href=\"javascript:;\">{{post.category}}</a></span>\n    </div>\n    <p class=\"desc\">Consequuntur hic eum ab consequatur, veniam laudantium placeat pariatur numquam quo voluptatem velit, labore voluptas tempore temporibus vitae tenetur porro eligendi exercitationem fugiat ipsum in ullam. Necessitatibus laboriosam enim ea eos, eveniet corporis impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n  </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/pages/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_service__ = __webpack_require__("../../../../../src/app/pages/pages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageBlogComponent = (function () {
    function PageBlogComponent(pagesService) {
        this.pagesService = pagesService;
    }
    PageBlogComponent.prototype.getPosts = function () {
        this.posts = this.pagesService.getPosts();
    };
    PageBlogComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    PageBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-page-blog',
            styles: [],
            template: __webpack_require__("../../../../../src/app/pages/blog/blog.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__pages_service__["a" /* PagesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pages_service__["a" /* PagesService */]])
    ], PageBlogComponent);
    return PageBlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter\">\n\n  <article class=\"article\">\n    <section class=\"hero\">\n      <div class=\"hero-content\">\n        <h1 class=\"hero-title\">How can we help you?</h1>\n      </div>\n      <p class=\"hero-tagline\">Feel free to contact us if you have any questions</p>\n    </section>\n  </article>\n\n  <article class=\"article article-dark\">\n    <h2 class=\"article-title text-center no-margin-top\">Contact Us</h2>\n    <div class=\"container-fluid with-maxwidth\">\n      <div class=\"row\">\n        <div class=\"col-xl-6\">\n          <div class=\"box box-transparent\">\n            <div class=\"box-body padding-lg-h\">\n              <h4>Get In Touch</h4>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur necessitatibus ea possimus est quis cumque vel saepe. Eum, quas, ducimus.</p>\n              <div class=\"divider divider-solid\"></div>\n              <p>123 Mountain View <br> Santa Clara, C.A. <br> USA</p>\n              <div class=\"divider divider-solid\"></div>\n              <p>\n                <strong>E:</strong> mail@site.com\n                <br>\n                <strong>P:</strong> +1 234 56789 \n                <br> \n                <strong>S:</strong> www.site.com\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <div class=\"box box-transparent\">\n            <div class=\"box-body padding-lg-h\">\n              <h4>Contact</h4>\n              <form name=\"contactForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                  <mat-input-container class=\"full-width\">\n                    <input matInput placeholder=\"Name\">\n                  </mat-input-container>\n                </div>\n                <div class=\"form-group\">\n                  <mat-input-container class=\"full-width\">\n                    <input matInput placeholder=\"Email\" type=\"email\">\n                  </mat-input-container>\n                </div>\n                <div class=\"form-group\">\n                  <mat-input-container class=\"full-width\">\n                    <textarea matInput placeholder=\"Message\" mat-maxlength=\"150\" rows=\"4\"></textarea>\n                  </mat-input-container>\n                </div>\n                <div class=\"divider\"></div>\n                <button mat-raised-button color=\"primary\" class=\"btn-w-md\" type=\"button\">Submit</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </article>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageContactComponent = (function () {
    function PageContactComponent() {
        this.submitted = false;
    }
    // use `type="button"` instead of `type="submit"` to avoid refreshing
    PageContactComponent.prototype.onSubmit = function () {
        event.preventDefault();
        this.submitted = true;
    };
    PageContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-page-contact',
            styles: [],
            template: __webpack_require__("../../../../../src/app/pages/contact/contact.component.html")
        })
    ], PageContactComponent);
    return PageContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PagesRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_blog_component__ = __webpack_require__("../../../../../src/app/pages/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms_component__ = __webpack_require__("../../../../../src/app/pages/terms/terms.component.ts");





var PagesRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_2__blog_blog_component__["a" /* PageBlogComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* PageContactComponent */] },
            { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_4__terms_terms_component__["a" /* PageTermsComponent */] },
        ]
    }
];
var PagesRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* RouterModule */].forChild(PagesRoutes);


/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagesComponent = (function () {
    function PagesComponent() {
    }
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-pages',
            styles: [],
            template: "<router-outlet></router-outlet>"
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__ = __webpack_require__("../../../../../src/app/pages/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_terms_component__ = __webpack_require__("../../../../../src/app/pages/terms/terms.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__["a" /* PagesRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__pages_component__["a" /* PagesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__["a" /* PageBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* PageContactComponent */],
                __WEBPACK_IMPORTED_MODULE_7__terms_terms_component__["a" /* PageTermsComponent */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagesService = (function () {
    function PagesService() {
    }
    PagesService.prototype.getPosts = function () {
        return [
            {
                title: 'Dolor sit amet, consectetur adipisicing elit.',
                avatar: 'assets/images-demo/avatars/1.jpg',
                author: 'Jason Bourne',
                category: 'Web Design'
            }, {
                title: 'Repellat quo rerum iure dolor cumque',
                avatar: 'assets/images-demo/avatars/2.jpg',
                author: 'Bella Swan',
                category: 'Development'
            }, {
                title: 'Eligendi doloribus quam amet provident est recusandae ipsum voluptatem',
                avatar: 'assets/images-demo/avatars/3.jpg',
                author: 'Min Chan',
                category: 'Web Design'
            }, {
                title: 'Laudantium possimus quia ducimus, iusto, placeat',
                avatar: 'assets/images-demo/avatars/4.jpg',
                author: 'Sophia Doe',
                category: 'Marketing'
            }, {
                title: 'Enim eius nemo natus magnam sed dolor eveniet architecto molestiae',
                avatar: 'assets/images-demo/avatars/5.jpg',
                author: 'Luna Doe',
                category: 'Development'
            }
        ];
    };
    PagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PagesService);
    return PagesService;
}());



/***/ }),

/***/ "../../../../../src/app/pages/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"chapter page-terms\">\n\n  <section class=\"hero\">\n    <div class=\"hero-content\">\n      <h1 class=\"hero-title\">Terms of Service</h1>\n    </div>\n    <p class=\"text-muted\">Effective Jan. 1st</p>\n  </section>\n\n  <article class=\"article padding-lg-v article-dark article-bordered\">\n\n    <div class=\"container-fluid with-maxwidth-sm\">\n\n      <h4>Scope and application</h4>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora consequuntur inventore animi iure ad voluptatem nobis eius odit excepturi nesciunt porro minus molestias provident necessitatibus, quos fuga hic dolorem dolore, autem totam. Quae vero, commodi? Aut, repellendus. Aliquam debitis ipsum nemo aperiam consequatur autem praesentium reiciendis tenetur et possimus architecto eaque, iusto obcaecati pariatur quasi maiores error corporis cumque. Fugit quaerat praesentium error, debitis excepturi porro autem recusandae commodi, est perferendis asperiores ut eum dolores exercitationem beatae facilis. Ipsa fugit modi totam laborum rem error quo aliquam minus eveniet ea! Quae, officiis dignissimos impedit obcaecati corporis odio modi sint!</p>\n\n      <h4>Collection of information</h4>\n      <p>Iure iste sit, dolor quam quisquam mollitia modi non! Corporis aut modi a fuga veritatis, ducimus assumenda quae distinctio vero amet quas tempora libero, harum. Tenetur eum nam numquam dolorum ipsam rem dolor. Laudantium ipsa earum, officiis, pariatur obcaecati molestiae dolorem ad alias iusto libero sapiente iste placeat quo, voluptates beatae a et. Quasi minus porro, vel dolor accusantium quibusdam ex doloremque cum sed voluptates iusto voluptate, asperiores dolores maiores et sint laudantium blanditiis aut itaque recusandae pariatur! Corporis quae quisquam eligendi cumque corrupti. Natus amet, laboriosam, excepturi error quaerat soluta officiis itaque, dolorem eaque recusandae, incidunt nemo perspiciatis autem eius aut minus! Architecto fugiat provident inventore laudantium sed expedita modi iure dignissimos atque, accusantium reprehenderit voluptatibus esse tenetur, doloribus laborum, dicta voluptates laboriosam, eum delectus? Repudiandae praesentium odio doloremque quos ullam harum sapiente distinctio. Minima, ad ab nobis nihil aut recusandae itaque ipsum, magnam animi repellat nemo vitae harum dignissimos quisquam dicta! </p>\n\n      <h4>Use of information</h4>\n      <p>Eius, maiores, eum. Quam eos est qui autem mollitia neque, esse quas voluptate ullam, voluptates, aspernatur doloremque harum cumque? Asperiores unde inventore ipsum nesciunt, odio aliquid voluptatum modi fuga molestias voluptatem, expedita veniam quibusdam iste laudantium voluptas molestiae? Similique aspernatur praesentium tempora, sed consequuntur officia quasi placeat adipisci quos fugit accusantium libero debitis sint cupiditate a, perspiciatis modi labore dolore error minus. Qui sequi est adipisci id nesciunt neque repellendus atque pariatur, doloremque quo eligendi, dolores iure impedit necessitatibus laudantium assumenda fugiat eum explicabo perspiciatis tempora corporis quasi.</p>\n      <p>A, incidunt, iste inventore consequuntur magnam voluptas quo suscipit excepturi, neque voluptates doloribus quasi ratione animi autem, vitae fugit enim ipsum laudantium? Deleniti facilis, aliquam harum maiores eveniet, modi hic, praesentium quidem ratione eius incidunt eligendi. Quas commodi ratione reiciendis sint temporibus sit placeat totam atque delectus minus quo reprehenderit perspiciatis ex laboriosam, rem dolores! Culpa ipsum commodi ea iure voluptas, nisi maxime inventore, saepe nesciunt nostrum iste quasi aliquid totam! Repudiandae obcaecati nobis unde sapiente reiciendis itaque iste eum dolorem dolores dolor tempora corporis nulla quisquam magnam nemo accusantium vero similique voluptate, ea quibusdam odio quod esse eveniet. Voluptatibus, earum delectus eos veniam magnam asperiores blanditiis. Voluptatum consequuntur voluptatem est facere aut dolorem suscipit similique voluptas labore explicabo sed excepturi, quo tenetur nesciunt maiores aliquid, cum optio obcaecati earum reiciendis, cumque!</p>\n\n      <h4>Sharing of information</h4>\n      <p>Libero porro, ipsum distinctio pariatur quidem fugiat iste sit natus fuga odit ipsa, facere sequi. Numquam delectus quod sequi beatae illo eos impedit sapiente corporis non possimus doloribus autem ducimus labore enim mollitia ipsa fuga totam modi libero sunt iure reiciendis, repudiandae. Aut est culpa quidem porro, possimus eaque tempora iste, cumque deserunt consequuntur doloribus distinctio quod soluta, natus sequi. Quis numquam at similique harum assumenda velit nostrum. Quas dicta possimus perferendis cum est consectetur ullam eum odit aperiam molestiae quis nihil dolore blanditiis ducimus incidunt temporibus corporis aliquam quod, ab? Obcaecati eveniet ducimus, iusto fugit autem quas consectetur sequi sit eos eius voluptatem in, nulla, cum, unde a earum. Nihil delectus praesentium eum odit aliquam rem consequatur atque maxime neque voluptate at culpa similique iste cupiditate ipsam nisi perferendis animi odio possimus facere, fuga, id cumque? Laudantium, id non?</p>\n      <ul>\n        <li>Illo voluptatum voluptatem ullam rem! Possimus, reiciendis, esse!</li>\n        <li> Ullam, et dolor eligendi. Nostrum explicabo beatae cupiditate qui ut. Expedita hic, enim quos velit inventore saepe, aliquam ratione asperiores nemo veniam beatae.</li>\n        <li>Quisquam cupiditate optio tenetur, possimus, id placeat atque necessitatibus illum provident dolorum eveniet odio voluptates temporibus.</li>\n        <li>Accusantium dignissimos, vero iusto similique cum, accusamus enim nisi tempora obcaecati iure!</li>\n        <li>Et quo, alias nemo maxime fugit quis voluptates architecto, eligendi atque officia corrupti omnis nihil sint cumque.</li>\n      </ul>\n      <p>Reprehenderit ipsum obcaecati deserunt ipsa adipisci dolorem vitae, porro cupiditate, praesentium unde tenetur impedit? Modi expedita quos quas ex nemo, assumenda vero velit repellat possimus molestiae tempore voluptatem, incidunt inventore quae? Saepe et pariatur, expedita, ex sit perferendis quasi officiis.</p>\n    </div>\n\n  </article>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageTermsComponent = (function () {
    function PageTermsComponent() {
    }
    PageTermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-page-terms',
            styles: [],
            template: __webpack_require__("../../../../../src/app/pages/terms/terms.component.html")
        })
    ], PageTermsComponent);
    return PageTermsComponent;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map