import React, { useState } from 'react'
import './SampleVideo.css'

const SampleVideo = () => {
  const [activeService, setActiveService] = useState('Designing')

  const services = [
    'Designing',
    'Development',
    'Marketing',
    'Animation',
    'Video Editing',
    'AI Automation',
  ]

  const videos = [
    { id: 1, thumbnail: '👥' },
    { id: 2, thumbnail: '👩‍💼' },
    { id: 3, thumbnail: '👩' },
    { id: 4, thumbnail: '👩' },
  ]

  return (
    <section className="sample-video">
      <div className="container">
        <h2 className="section-title">Sample video</h2>
        <div className="sample-video-content">
          <div className="video-thumbnails">
            {videos.map((video) => (
              <div key={video.id} className="video-thumbnail">
                <div className="thumbnail-placeholder">{video.thumbnail}</div>
                <div className="play-overlay">▶</div>
              </div>
            ))}
          </div>
          <div className="services-list">
            {services.map((service) => (
              <button
                key={service}
                className={`service-btn ${activeService === service ? 'active' : ''}`}
                onClick={() => setActiveService(service)}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SampleVideo

