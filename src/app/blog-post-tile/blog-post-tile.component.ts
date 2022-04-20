import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';
@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css'],
})
export class BlogPostTileComponent implements OnInit {

  @Input() aPost: BlogPost;
  fullSummary: string;
  constructor(private truncatePipe:TruncatePipe) {

  }

  ngOnInit(): void {
    this.fullSummary =this.aPost.summary;
    this.aPost.summary=this.truncatePipe.transform(this.aPost.summary,30);

  }
expandSummary(){
this.aPost.summary=this.fullSummary;
}
}
