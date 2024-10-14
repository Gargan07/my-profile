import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './styles/contact.css';
import { useState } from 'react';
import SubmissionSuccess from './SubmissionSuccess';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const hasName = Boolean(name);
        const hasEmail = Boolean(email);
        const hasMessage = Boolean(message);

        if (!(hasName && hasEmail && hasMessage)) {
            setError('All fields are required');
            return;
        }

        const isValidEmail = Boolean(/\S+@\S+\.\S+/.test(email));

        if (!isValidEmail) {
            setError('Email is invalid');
            return;
        }

        if(hasName && hasEmail && hasMessage) {
            setIsSubmitted(true);
        }
    };

    return (
        isSubmitted ? (
            <SubmissionSuccess name={name} email={email} message={message} />
        ) : (
            <div className='contact-container'>
                <h2 className='contact-header'>
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>
                    <span> </span>
                    <span>M</span>
                    <span>e</span>
                </h2>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                        />
                    </Form.Group>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div> 
        )
    );
}

export default Contact;
