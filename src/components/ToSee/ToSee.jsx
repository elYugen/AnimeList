import React from 'react';
import { Link } from "react-router-dom";
import './ToSee.css';

function ToSee() {
  return (
    <>
    <Link to="tosee">
    <div className="categoriesTitle">
      <h3>À voir</h3>
      <h3><i className="bi bi-arrow-right"></i></h3>
    </div>
    </Link>
    <section className="inProgress">
    <div className="inProgressCard">
        <div className="inProgressCardImage">
          <img src="https://placehold.co/150x200" alt="AnimeName"/>
        </div>
      </div>
      <div className="inProgressCard">
        <div className="inProgressCardImage">
          <img src="https://placehold.co/150x200" alt="AnimeName"/>
        </div>
      </div>
      <div className="inProgressCard">
        <div className="inProgressCardImage">
          <img src="https://placehold.co/150x200" alt="AnimeName"/>
        </div>
      </div>
    </section>
    </>
  );
};

export default ToSee;