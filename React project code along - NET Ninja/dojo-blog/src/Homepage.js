import { useState } from 'react';
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

    const handleDelete = function (id) {
        const newBlogs = blogs.filter(blog => id != blog.id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title={'All Blogs'} handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title={`Mario's blogs`} />
        </div>
    );
}

export default Homepage;