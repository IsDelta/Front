import {Component} from '@angular/core';

@Component({
    selector: 'hello-ang',
    template: `
    <h1>{{title}}</h1>
    <ul>
        <li *ngFor="let  name of names">Name {{name}}</li>
    </ul>
         <input type="text" >
`
})
export class HelloAng {

    names: string[];
    title: string;
    constructor() {
        this.names = ['Nik', 'asdddd', 'asd'];
        this.title = 'assssssd';
    }

}
