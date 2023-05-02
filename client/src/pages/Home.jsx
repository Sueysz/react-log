import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const posts =[
        {
            id: 1,
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed blanditiis harum natus obcaecati iusto.",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed blanditiis harum natus obcaecati iusto.",
            img:"https://picsum.photos/200/300?random=1"
        },
        {
            id: 2,
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed blanditiis harum natus obcaecati iusto.",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed blanditiis harum natus obcaecati iusto.",
            img:"https://picsum.photos/200/300?random=2"
        },
        {
            id: 3,
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed blanditiis harum natus obcaecati iusto.",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed blanditiis harum natus obcaecati iusto.",
            img:"https://picsum.photos/200/300?random=3"
        },
    ]

    return (
        <div className='home'>
            <div className="posts">
                {posts.map(post=>(
                    <div className="post"key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                            <div className='bg'></div>
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home