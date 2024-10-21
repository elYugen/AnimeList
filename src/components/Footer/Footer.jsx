import React from 'react';
import './Footer.css';

function Footer() {
  const handleExport = () => {
    const data = {
      AnimesToSee: JSON.parse(localStorage.getItem('AnimesToSee')) || [],
      AnimesInProgress: JSON.parse(localStorage.getItem('AnimesInProgress')) || [],
      AnimesWatched: JSON.parse(localStorage.getItem('AnimesWatched')) || [],
    };

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob); 

    const a = document.createElement('a'); 
    a.href = url;
    a.download = 'localStorageData.json'; 
    a.click(); 
    URL.revokeObjectURL(url); 
  };


  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result); 
      localStorage.setItem('AnimesToSee', JSON.stringify(data.AnimesToSee));
      localStorage.setItem('AnimesInProgress', JSON.stringify(data.AnimesInProgress));
      localStorage.setItem('AnimesWatched', JSON.stringify(data.AnimesWatched));
      window.location.reload(); 
    };

    reader.readAsText(file);
  };

  return (
    <>
      <div className="Footer">
        <h4>Tu possèdes déjà des données ?</h4>
        <div className="footerButton">
          <button className="btn btn-primary" onClick={handleExport}>Exporter</button>
          <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} id="file-input" />
          <label htmlFor="file-input" className="btn btn-primary">Importer</label>
        </div>
        <h1>
          <a href="https://github.com/elYugen/AnimeList">
            <i className="bi bi-github"></i>
          </a>
        </h1>
        <h5>v2024.10.17</h5>
      </div>
    </>
  );
}

export default Footer;
