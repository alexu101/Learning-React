import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Homepage = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const handleDelete = function (id) {
        const newBlogs = blogs.filter(blog => id != blog.id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false)
            })
        }, 1000)
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={'All Blogs'} handleDelete={handleDelete} />}
        </div>
    );
}

export default Homepage;