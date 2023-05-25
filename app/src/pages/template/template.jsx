import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Template = () => {
    const { id } = useParams();
    const [template, setTemplate] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/template/${id}/`)
            .then((res) => {
                setTemplate(res.data);
            })
            .catch((error) => {
                console.error('Error fetching template:', error);
            });
    }, [id]);

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', padding: 30, backgroundColor: '#fc8686', fontFamily: '"Roboto", sans-serif' }}>
            {template.map((t) => (
                <div key={t.pk} className="card" style={{ padding: 20, borderRadius: 50, borderColor: 'white' }}>
                    <div className="card-header text-black"
                        style={{ backgroundColor: '#f76565', borderColor: 'black', borderWidth: 2, fontWeight: 'bold', fontSize: 30, padding: 10, borderRadius: 30 }}>
                        {t.fields.title}</div>
                    <div className="card-body" style={{ padding: 10 }}>
                        <p className="card-header text-black"
                            style={{ borderColor: 'black', textAlign: 'left', borderRadius: 30, borderWidth: 2, backgroundColor: '#fdeed0' }}>
                            {t.fields.content}</p>
                    </div>
                    <button type="button" className="btn btn-dark"
                        style={{ backgroundColor: '#f7c6c6', padding: 5, color: 'black', borderRadius: 30, fontWeight: 'bold' }}
                        onClick={handleButtonClick}>Homepage</button>
                </div>
            ))
            }
        </div >
    );
};

export default Template;
