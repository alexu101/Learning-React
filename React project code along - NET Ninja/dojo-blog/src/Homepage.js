import { useState } from 'react';

const Homepage = () => {


    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = function () {
        setName('luigi');
        setAge(20);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <p>{name} is {age}</p>
        </div>
    );
}

export default Homepage;