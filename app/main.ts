import {NgModule, Component} from '@angular/core'; // this will import angular2 library
// import is used to import function, objects, or primitives.
// Component is function which will allow to make our function.It cntroll the portion of screen..
// NgModule is "root module"
import {BrowserModule} from '@angular/platform-browser';
// This module is requier for rendering angular website...
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//this module need for rendering the website...This will allow us to bootstrap,or launch, the application...
import {AppModule} from './app.module';

//decoretor adds more behaviour to our class from outside of class.decorator code must be declare immediately before the class.
//decorator turns our plain old JavaScript class into a Component.It is one type of metadata...


platformBrowserDynamic().bootstrapModule(AppModule); ///render application using platformBrowserDynamic module...

