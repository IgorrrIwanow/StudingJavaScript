'use strict';

const post = {
    author: "John",
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "Lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2,
            }
        },
        {
            userId: 5,
            userName: "Jane",
            text: "Lorem ipsum 2",
            rating: {
                likes: 3,
                dislikes: 21,
            }
        },
    ]
}

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);