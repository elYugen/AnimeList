import React from 'react';
import './InProgress.css';

function InProgress() {
  return (
    <>
    <div className="categoriesTitle">
      <h3>En cours de visionnage</h3>
    </div>
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