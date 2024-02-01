import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ShowList.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">TV Shows</h1>
      <div className="row">
        {shows.map(show => (
          <div key={show.show.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <p className="card-text">{show.show.summary}</p>
              </div>
              <div className="card-footer">
                <Link to={`/show/${show.show.id}`} className="btn btn-primary">View Summary</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
