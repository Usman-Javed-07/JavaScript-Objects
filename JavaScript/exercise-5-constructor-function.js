


// constructor function
let blogPost = new Post ('a' , 'b' , 'c');
console.log(blogPost);

function Post (title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.Comment = [];
    this.isLive = false;
}