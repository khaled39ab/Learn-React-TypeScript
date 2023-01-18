import React from 'react';
import Card from './Card';

const Post = () => {
    return (
        <div>
            <h2>Children Props</h2>
            <Card>
                <h3>Card Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut accusamus doloribus perspiciatis consectetur ullam optio odio quasi ipsum libero.</p>
            </Card>
            <Card>
                <h3>Card Title 2 </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe nisi aut non cum, ipsum labore voluptates aliquid rem maxime modi! Ipsam nostrum nulla minus.</p>
            </Card>
        </div>
    );
};

export default Post;