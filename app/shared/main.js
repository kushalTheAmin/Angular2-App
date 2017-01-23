"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core"); // this will import angular2 library
// import is used to import function, objects, or primitives.
// Component is function which will allow to make our function.It cntroll the portion of screen..
// NgModule is "root module"
var platform_browser_1 = require("@angular/platform-browser");
// This module is requier for rendering angular website...
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//this module need for rendering the website...This will allow us to bootstrap,or launch, the application...
//decoretor adds more behaviour to our class from outside of class.decorator code must be declare immediately before the class.
//decorator turns our plain old JavaScript class into a Component.It is one type of metadata...
/*@Component({  // @Component is used to apply our Component decorator to our class.
    selector: 'pm-app', // selector is an object. It is CSS selector for the HTML element where we want the Component to load.
    template : `<h1>Direct Global Supplies</h1>
                 <h2>{{title}}</h2>
                 <div> {{object.FirstName}}</div><br>
                 <div>{{object.MiddleName}}</div><br>
                 <div>{{object.LastName}}</div>`  // It has content we want to load inside the selector..
                // hear {{title}} is "INTERPOLATION" which allow to load Component properties...
})
export class AppComponent{
    title = 'We will Send you whatever you want !!!'; //this are properties of our application...
    object = {FirstName : "Amin",
              MiddleName : "Kushal",
              LastName : "Dhirendrakumar" };
 }*/
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        imports: [platform_browser_1.BrowserModule],
        bootstrap: [app_component_1.AppComponent] // It will indicate root Component that shouls be loaded first when Angular application launch.
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule); ///render application using platformBrowserDynamic module...
//# sourceMappingURL=main.js.map