import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
