import React from 'react'

const Menu = () => {

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
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map(post=>(
                <div className='post' key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu