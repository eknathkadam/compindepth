import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPages: any;
  pages:number[];
  constructor() { }
  @Output() pageNumberClick=new EventEmitter<number>();

  ngOnInit(): void {
    this.pages=new Array(this.numberOfPages);
  }
pageNumberClicked(pageNumber:number){
  this.pageNumberClick.emit(pageNumber);
  console.log("event emmited"+pageNumber);
}
}
