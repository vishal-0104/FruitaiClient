import React, { useState } from 'react';

const ChatbotPage = () => {
    const [fruitList] = useState([
        { name: 'Apple', details: 'A sweet, crunchy fruit.' },
        { name: 'Banana', details: 'A soft, yellow fruit.' },
    ]);
    const [selectedFruit, setSelectedFruit] = useState(null);

    return (
        <div className="chatbot-container">
            <div className="background-overlay"></div>
            <div className="content">
                <h1>Chatbot</h1>
                <div className="flex-container">
                    {fruitList.map((fruit, index) => (
                        <div
                            key={index}
                            className="flex-item"
                            onClick={() => setSelectedFruit(fruit)}
                        >
                            {fruit.name}
                        </div>
                    ))}
                </div>
                {selectedFruit && (
                    <div className="fruit-details">
                        <h2>{selectedFruit.name}</h2>
                        <p>{selectedFruit.details}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatbotPage;