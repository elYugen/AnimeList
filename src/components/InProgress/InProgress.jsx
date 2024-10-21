import React from 'react';
import { Link } from "react-router-dom";
import './InProgress.css';

function InProgress() {
  return (
    <>
    <Link to="inprogress">
    <div className="categoriesTitle">
      <h3>En cours de visionnage</h3>
      <h3><i className="bi bi-arrow-right"></i></h3>
    </div>
    </Link>
    <section className="inProgress">
    <div className="inProgressCard">
        <div className="inProgressCardImage">
          <img src="https://placehold.co/150x200" alt="AnimeName"/>
        </div>
        <div className="inProgressTitle">
          <p>Titre</p>
        </div>
        <div className="inProgressRecap">
          <p>Saison 1, Episode 1</p>
        </div>
      </div>
      <div className="inProgressCard">
        <div className="inProgressCardImage">
          <img src="https://placehold.co/150x200" alt="AnimeName"/>
        </div>
        <div className="inProgressTitle">
          <p>Titre</p>
        </div>
        <div className="inProgressRecap">
          <p>Saison 1, Episode 1</p>
        </div>
      </div>
      <div className="inProgressCard">
        <div className="inProgressCardImage">
          <img src="https://placehold.co/150x200" alt="AnimeName"/>
        </div>
        <div className="inProgressTitle">
          <p>Titre</p>
        </div>
        <div className="inProgressRecap">
          <p>Saison 1, Episode 1</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default InProgress;