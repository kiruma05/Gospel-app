import React, { useEffect, useState } from 'react';
import Nav from './Nav';

const YoutubeApi = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Use effect to perform the fetch when the component mounts

    fetch(
      'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUZ33NX7K06dJnAF0P4fO8eQ&key=AIzaSyBinuwJMV-TSXqFYj51qkxWLiKiGOdai_g'
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items); // Assuming the videos are in the 'items' property of the response
      });
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

  return (
    <>
      <Nav />
      <div className="container-fluid bg-secondary min-vh-100" style={{ height: "590px", overflowY: "scroll" }}>
      <div className="text-danger text-center h3 text-shadow">Mahubiri Tv</div>

        <div className="row">
          
          {videos.map((video) => (
            <div key={video.id} className="col-md-4">
              {/* Adjust the code below based on the structure of your video data */}
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>{video.snippet.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YoutubeApi;
