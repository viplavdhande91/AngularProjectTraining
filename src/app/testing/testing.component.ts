import { Component, Input,OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() othersVote = 0;
  @Input() myVote = 0;
  
  @Output() myVoteChanged = new EventEmitter();
  
  upVote(){
      if (this.myVote == 1)
          return;
      
      this.myVote++;

      this.myVoteChanged.emit({ myVote: this.myVote });
  }
  
  downVote(){
      if (this.myVote == -1)
          return;
          
      this.myVote--;
      
      this.myVoteChanged.emit({ myVote: this.myVote });
  }

  get totalVotes(): number { 
    return this.othersVote + this.myVote;
  }

}
