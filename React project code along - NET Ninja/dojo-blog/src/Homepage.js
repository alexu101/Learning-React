import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Homepage = () => {

    const [blogs, setBlogs] = useState([
        {
            title: 'My new website',
            body: 'lorem ipsum....',
            author: 'mario',
            id: 1
        },
        {
            title: 'Welcome to my party!',
            body: 'lorem ipsum....',
            author: 'yoshi',
            id: 2
        },
        {
            title: 'Web dev top tips',
            body: 'lorem ipsum....',
            author: 'mario',
            id: 3
        }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = function (id) {
        const newBlogs = blogs.filter(blog => id != blog.id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title={'All Blogs'} handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Homepage;