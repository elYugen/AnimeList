import React from 'react';
import './ToSee.css';

function ToSee() {
  return (
    <>
    <div className="categoriesTitle">
      <h3>A voir</h3>
      <h3><i class="bi bi-arrow-right"></i></h3>
    </div>
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