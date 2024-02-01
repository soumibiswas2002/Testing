import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/ShowDetails.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShow();
  }, [id]);

  if (!show) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">{show.name}</h1>
      <p>{show.summary}</p>
    </div>
  );
};

export default ShowDetails;
