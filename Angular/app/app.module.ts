import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import {HelloAng} from './app.component';
@NgModule({
    imports: [BrowserModule],
    declarations: [HelloAng],
    bootstrap: [HelloAng]

})

export class HelloAngAppModule {
}