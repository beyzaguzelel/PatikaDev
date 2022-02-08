const posts = [
    { post: "Post 1", user: "User 1" },
    { post: "Post 2", user: "User 2" },
    { post: "Post 3", user: "User 3" },
  ];

const listPosts=()=>{
    posts.map((post)=>{
        console.log(post.post);
    })
}

listPosts();

const addPost=(newPost)=>{
    const promise1=new Promise((resolve,reject)=>{
        try {
            posts.push(newPost);
            resolve(posts);
          } catch (err) {
            reject("Something went wrong ${err}");
          }

        
    })

    return promise1;
}

async function showPosts(){
    try {
        await addPost({ post: "Post 4", user: "User 4" });
        listPosts();
      } catch (error) {
        console.log(error);
      }

}

showPosts();

