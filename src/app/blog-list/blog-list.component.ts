import { Component, OnInit, QueryList, ViewChild, ViewChildren,  } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPosts:BlogPost[][];
  constructor(private blogDataService:BlogDataService) { }
  currentPage:number;
  @ViewChildren('bpTile') blogPostTileComonents: QueryList<BlogPostTileComponent>;

  ngOnInit(): void {
    this.currentPage=0;
    this.blogPosts=this.blogDataService.getData();

  }

  updatePage(newPage:number){
    console.log("Event consumed with page number"+newPage);
    this.currentPage=newPage;
  }
  expandAll(){
    this.blogPostTileComonents
    .forEach(element => element.expandSummary());
  }
  
}
