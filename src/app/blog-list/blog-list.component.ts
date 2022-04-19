import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPosts:BlogPost[]=[];
  constructor() { }

  ngOnInit(): void {
    this.blogPosts.push(new BlogPost("Blog Title One","Summary One"));
    this.blogPosts.push(new BlogPost("Blog Title Two","Summary Two"));
    this.blogPosts.push(new BlogPost("Blog Title Three","Summary Three"));
  }

}
