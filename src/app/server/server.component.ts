import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: white;
    }
  `]
})
export class ServerComponent{
  serverID = 10;
  serverStatus = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  // tslint:disable-next-line:typedef
  getServerStatus(){
    return this.serverStatus;
  }

  // tslint:disable-next-line:typedef
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
