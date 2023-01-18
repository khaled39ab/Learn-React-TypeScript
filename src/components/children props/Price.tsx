import React from 'react';
import Card2 from './Card2';

const Price = () => {
    return (
        <div>

            <h2>Package</h2>
            <div className='card-container'>
                <Card2>
                    <h3>Basic</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam minima ab at qui doloribus. Dicta quas neque ut doloremque qui enim iste non molestias!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam minima ab at qui doloribus. Dicta quas neque ut doloremque qui enim iste non molestias!</p>
                    <button>$ 0</button>
                </Card2>

                <Card2>
                    <h3>Prime</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam minima ab at qui doloribus. Dicta quas neque ut doloremque qui enim iste non molestias!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam minima ab at qui doloribus. Dicta quas neque ut doloremque qui enim iste non molestias!</p>
                    <button>$ 100</button>
                </Card2>

                <Card2>
                    <h3>Advance</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam minima ab at qui doloribus. Dicta quas neque ut doloremque qui enim iste non molestias!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam minima ab at qui doloribus. Dicta quas neque ut doloremque qui enim iste non molestias!</p>
                    <button>$ 500</button>
                </Card2>
            </div>
        </div>
    );
};

export default Price;