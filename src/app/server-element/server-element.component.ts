import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit, 
  AfterViewChecked,
  AfterViewInit,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {
  // tslint:disable-next-line:max-line-length
  // this is TypeScript syntax for defining the type to make sure that element may only have this type and we then know that an element will have what we're trying to access
  // tslint:disable-next-line:max-line-length
  // this is TypeScript syntax for defining the type to make sure that element may only have this type and we then know that an element will have what we're trying to access
  // tslint:disable-next-line:max-line-length
  // You can assign an alias, you can pass an argument to @input with the property name as you want to have it outside of this component, so srvElement could be added here and now from the outside, so from the component where you implement this component, you now have to target srvElement if you want to bind to this property. Element will no longer work,
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  constructor() {
    console.log('constructor is called');
  }

  ngOnInit(): void {
    console.log('ngonit is called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('do checked!');
  }

  ngAfterContentInit() {
    console.log('ngaftercontentinit');
  }

  ngAfterViewChecked() {
    console.log('ngafterviewchecked');
  }

  ngAfterViewInit() {
    console.log('ngafterviewinit');
  }

  ngOnDestroy() {
    console.log('ngondestroy')
  }

}
