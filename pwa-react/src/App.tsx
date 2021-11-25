import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

interface IVideo {
  id: string;
  video_url: string;
  name: string;
  description: string;
  duration: string;
  created_by: string;
  image: string;
  thumbnail: string;
  cropped: string;
  file_name_original: string;
  popularity: string;
  category_id: string;
  category: string;
  keywords: string;
}

const App = () => {

  const [ data, setData ] = useState<IVideo[]>([]);

  useEffect(() => {
    
    const fetchData = async() => {
      const result = await fetch("http://orangevalleycaa.org/api/videos")
      .then(data => data.json());
      setData(result);
    };

    fetchData();
    }, []);

  return (
    <div className="App">
      <header>
        <h1>Art Video</h1>
      </header>
      {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          {/* <img src={video.thumbnail} /> */}
          <video 
            src={video.video_url}
            controls={true}
            width="300px"
            >
          </video>
        </div>
      ))}
    </div>
  );
};

export default App;
