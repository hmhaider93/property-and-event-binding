import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'TestServer1',content:'This server is online!'}];

  gameData = [{type:'odd',num:3}];

  onServerAdded(serverData:{serverName:string,serverContent:string}){
      this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onCheckNumber(input:number){
    if(input%2 === 0){
      this.gameData.push({type:'even', num:input})
    }else this.gameData.push({type:'odd', num:input})
  }



}
