import React from 'react'
import Edit from '../img/edition.png'
import Delete from '../img/supprimer.png'
import { Link } from 'react-router-dom'
import Menu from '../components/menu'

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://picsum.photos/200/300?random=1" alt="" />
                <div className='user'>
                    <img src="https://picsum.photos/200/300?random=2" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className='edit'>
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        {/* <link> */}
                        <img src={Delete} alt="" />
                        {/* </link> */}
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quisquam.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur rerum autem sapiente distinctio aliquid explicabo tempore nam molestiae atque.
                    <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi maxime officia placeat, reprehenderit modi illum minus asperiores ex, quam consequuntur, perferendis amet vero saepe. Quos quidem distinctio minima ratione, porro, totam impedit tempore sit cumque veniam officiis dolorem praesentium?</p>
                    <br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ex? Voluptatum dolore beatae voluptatibus quibusdam aspernatur facere quisquam saepe laudantium tempore omnis delectus excepturi dolorum praesentium quod laborum consequuntur veniam iure fugiat libero, voluptatem, consequatur illo nostrum alias corrupti? Eveniet.</p>
                </p>
            </div>

            <Menu />
        </div>
    )
}

export default Single