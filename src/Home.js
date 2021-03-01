import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Team is your second personality', body: 'lorem ipsum...', author: 'ilya', id: 1 },
        { title: 'Work is done! What did they say?', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips for React developers', body: 'lorem ipsum...', author: 'ilya', id: 3 }
    ])

    const [name, setName] = useState('mario')

    const handleDelete = id => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('use effect ran')
        console.log(name)
    }, [name]);                                           

    return (
        <div className="home">         
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'ilya')} title="Ilya's Blogs" /> */}
            <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{ name }</p>
        </div>
    )
}

export default Home
