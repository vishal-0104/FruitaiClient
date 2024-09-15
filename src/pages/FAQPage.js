import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FAQPage = () => {
    const [faqs, setFaqs] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');

    const fetchFaqs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/faqs');
            setFaqs(response.data);
        } catch (error) {
            console.error('Error fetching FAQs', error);
        }
    };

    const addFaq = async () => {
        try {
            await axios.post('http://localhost:5000/faqs', {
                question: newQuestion,
                answer: newAnswer
            });
            fetchFaqs();
            setNewQuestion('');
            setNewAnswer('');
        } catch (error) {
            console.error('Error adding FAQ', error);
        }
    };

    const deleteFaq = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/faqs/${id}`);
            fetchFaqs();
        } catch (error) {
            console.error('Error deleting FAQ', error);
        }
    };

    useEffect(() => {
        fetchFaqs();
    }, []);

    return (
        <div className="faq-container">
            <div className="background-overlay"></div>
            <div className="content">
                <h1>FAQs</h1>
                <div className="grid-container">
                    {faqs.map((faq) => (
                        <div key={faq._id} className="grid-item">
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                            <button onClick={() => deleteFaq(faq._id)}>Delete</button>
                        </div>
                    ))}
                </div>
                <div className="add-faq">
                    <input
                        type="text"
                        placeholder="Question"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Answer"
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                    />
                    <button onClick={addFaq}>Add FAQ</button>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;