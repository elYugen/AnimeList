import React from 'react';
import './Topbar.css';

function Topbar() {
  return (
    <>
    <div className="topbar">
      <div className="topbarYou">
        <div className="topbarLogo">
          <img src="favicon.png" alt="Logo"/>
        </div>
        <h3>What To See Now</h3>
      </div>
      <div className="topbarPicture">
        <i class="bi bi-bell"></i>
      </div>
    </div>
    </>
  );
};

export default Topbar;