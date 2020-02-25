import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  // add parentheses in the end to call the constructor of eventEmitter and create a new eventEmitter object which is now stored in serverCreated.
  // eventEmitter is an object in the Angular framework which allows you to emit your own events.
  // tslint:disable-next-line:max-line-length
  // it's not input because we're not getting something passed into this component, it's @output with parentheses because we're passing something out of the component, we're passing our event out of the component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  // without two way binding but with local references past two methods or local references fetched through view child.

  // onAddServer(nameInput: HTMLInputElement) {
  //   this.serverCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.newServerContent
  //   });
  // }

  // onAddBlueprint(nameInput: HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      // with this we get direct access to elements in our Dom in our template through at view child.
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
