import { OnInit } from '@angular/core';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  Component,
  Directive,
  Renderer,
  ElementRef,
  NgModule,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
//import * as AppComponent from "../../main";
//import {AppComponent} from "../../main";


@Component({
  selector: 'app-graphs',
  template: `
<joke-list></joke-list>
  `

})

@Component({
  selector: 'joke',
  template: `
<div class="card card-block" ccCardHover>
  <h4 class="card-title">{{data.setup}}</h4>
  <p class="card-text"
     [hidden]="data.hide">{{data.punchline}}</p>
  <button (click)="data.toggle()"
     class="btn btn-primary">Tell Me
  </button>
</div>
  `
})

@Component({
  selector: 'joke-list',
  template: `
<joke *ngFor="let j of jokes" [joke]="j"></joke>
  `
})

class JokeComponent {
  @Input('joke') data: Joke;
}

/*@Directive({
  selector:".ccCardHover"
})*/
@Directive({
  selector: "[ccCardHover]"
})

export class GraphsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

class CardHoverDirective {

  constructor(private el: ElementRef,
              private renderer: Renderer) {
    alert('aa');
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray !important');
  }
}

class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

class JokeListComponent {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }
}

@Component({
  selector: 'app',
  template: `
<joke-list></joke-list>
  `
})
/*class AppComponent2 {
}*/

@NgModule({
  imports: [BrowserModule],
  declarations: [
    //AppComponent2,
    JokeComponent,
    JokeListComponent,
    CardHoverDirective,
    GraphsComponent
  ],
  entryComponents: [
    GraphsComponent
  ]
  //bootstrap: [AppComponent2]
})

export class AppModule {
}

//platformBrowserDynamic().bootstrapModule();
