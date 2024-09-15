import React, { useState } from 'react';

const TranslatorPage = () => {
    const [text, setText] = useState('');
    const [translation, setTranslation] = useState('');

    const translateText = async () => {
        // Simulate translation
        setTranslation(`Translated: ${text}`);
    };

    return (
        <div className="translator-container">
            <div className="background-overlay"></div>
            <div className="content">
                <h1>Translator</h1>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text to translate"
                />
                <button onClick={translateText}>Translate</button>
                <p>{translation}</p>
            </div>
        </div>
    );
};

export default TranslatorPage;