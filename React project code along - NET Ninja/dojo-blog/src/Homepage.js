import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Homepage = () => {


    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

    const handleDelete = function (id) {
        const newBlogs = blogs.filter(blog => id != blog.id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={data} title={'All Blogs'} handleDelete={handleDelete} />}
        </div>
    );
}

export default Homepage;