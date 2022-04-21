import { Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

@ContentChild('appHeader') headerEle:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit():void{
    console.log(this.headerEle);
  }
}
