import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';
@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css'],
  //changeDetection:ChangeDetectionStrategy.OnPush,
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPost;
  fullSummary: string;
  constructor(private truncatePipe:TruncatePipe) {

  }

  ngOnInit(): void {
    this.fullSummary =this.post.summary;
    this.post.summary=this.truncatePipe.transform(this.post.summary,30);

  }
expandSummary(){
this.post.summary=this.fullSummary;
}
toggleFavorite(){
  this.post.isFav=!this.post.isFav;
}
}
