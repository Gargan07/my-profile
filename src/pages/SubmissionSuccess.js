import React from "react";
import './styles/submission.css';

const SubmissionSuccess = (props) => {
    return (
        <div className="submission-success">
            <h1>Thank you, {props.name}! Your Message has been sent.</h1>
            <h5>Name: {props.name}</h5>
            <h5>Email: {props.email}</h5>
            <h5>Message: {props.message}</h5>
        </div>
    );
};

export default SubmissionSuccess;