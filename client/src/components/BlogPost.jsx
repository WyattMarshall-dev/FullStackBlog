import React from 'react';

const BlogPost = (props) => {

    // console.log("post", props);
    let date = props.date.split('T');

    return (
        <article className="blog-post">
                    <h2 className="blog-post-title">{props.title}</h2>
                    <p className="blog-post-meta">{date[0]} by <a href="www.facebook.com">Wyatt</a></p>

                    <p>{props.description}</p>
                    <hr />
                    <p>{props.body}</p>
      </article>
    );
}
 
export default BlogPost;