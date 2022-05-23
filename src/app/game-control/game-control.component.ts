import { Component, OnInit , EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  incNum = 0;

  @Output() numemit = new EventEmitter<number>();

  constructor() {



  }

  myInterval : NodeJS.Timeout ;

  onStartClicked(){
    console.log("started")
    this.myInterval = setInterval(()=>{
      this.numemit.emit(this.incNum++);
      console.log(this.incNum)
    }, 1000)
  }

  onStopClicked(){
    clearInterval(this.myInterval);
  }


  ngOnInit(): void {
  }



}
