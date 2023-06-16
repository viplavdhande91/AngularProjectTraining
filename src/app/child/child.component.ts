import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
 //  changeDetection: ChangeDetectionStrategy.OnPush, // (only allows Immutability)
})
export class ChildComponent implements OnInit {
  name: string | undefined;
  experience: number | undefined;

  @Input() data: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    this.name = this.data?.name;
    this.experience = this.data?.experience;
  }
}