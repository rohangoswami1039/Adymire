import React from 'react'
import './ClientReviews.css'

const ClientReviews = () => {
  const reviews = [
    {
      name: 'Jack Smith',
      rating: 5,
      testimonial: 'Adymire has transformed our business with their exceptional digital solutions. Highly recommended!',
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      testimonial: 'The team at Adymire is professional, creative, and delivers results. Our website traffic has increased significantly.',
    },
    {
      name: 'Michael Brown',
      rating: 5,
      testimonial: 'Outstanding service and support. They truly understand our business needs and deliver beyond expectations.',
    },
  ]

  return (
    <section className="client-reviews">
      <div className="container">
        <div className="reviews-header">
          <h2 className="section-title">What clients say</h2>
          <div className="rating">
            {'⭐'.repeat(5)}
          </div>
          <p className="section-subtitle">See more than 200+ 5-star projects.</p>
        </div>
        <div className="reviews-section">
          <div className="reviews-section-header">
            <h3 className="reviews-title">Client Review</h3>
            <div className="rating">
              {'⭐'.repeat(5)}
            </div>
            <p className="reviews-subtitle">See what our clients say about Adymire.</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="review-avatar">👤</div>
                  <div className="review-info">
                    <h4 className="review-name">{review.name}</h4>
                    <div className="review-rating">
                      {'⭐'.repeat(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.testimonial}</p>
                <button className="btn-read-more">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientReviews

