import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  // this is TypeScript syntax for defining the type to make sure that element may only have this type and we then know that an element will have what we're trying to access
  // tslint:disable-next-line:max-line-length
  // this is TypeScript syntax for defining the type to make sure that element may only have this type and we then know that an element will have what we're trying to access
  @Input() element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }

}
