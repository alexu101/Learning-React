import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Homepage = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = function (id) {
        const newBlogs = blogs.filter(blog => id != blog.id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json();
            })
            .then(data => { setBlogs(data) })
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={'All Blogs'} handleDelete={handleDelete} />}
        </div>
    );
}

export default Homepage;