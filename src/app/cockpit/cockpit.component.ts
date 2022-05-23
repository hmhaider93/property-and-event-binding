import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  @ViewChild('serverContentInput') contentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer(inputElement) {
    this.serverCreated.emit({
      serverName: inputElement.value,
      serverContent: this.contentInput.nativeElement.value,
    });
  }

  onAddBlueprint(inputElement) {
    this.blueprintCreated.emit({
      serverName: inputElement.value,
      serverContent: this.contentInput.nativeElement.value,
    });
  }
}
