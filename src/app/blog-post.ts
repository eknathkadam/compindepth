export class BlogPost {
    constructor(public title:string, public summary:string, public isFav?:boolean){
        this.title=title;
        this.summary=summary;
        this.isFav=false;
    }
}
