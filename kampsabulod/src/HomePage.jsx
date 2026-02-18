import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";



export default function HomePage() {

  const navigate = useNavigate();
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg"
  ];

  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const displayImages = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (current > images.length - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        setCurrent(0);
        track.style.transform = "translateX(0)";
        setTimeout(() => {
          track.style.transition = "transform 0.8s ease";
        }, 50);
      }, 800);
    }
  }, [current, images.length]);

  return (
    <div className="homepage">

      {/* HERO */}
      <section className="backgroundpic">
        <div className="backgroundpic-overlay"></div>

        <div className="backgroundpic-content">
          <h1>Kamp Sa Bulod</h1>
          <p className="tagline">Where nature slows you down.</p>
      
<button
  className="primary-btn"
  onClick={() => navigate("/login")}
>
  Book Your Stay
</button>
        
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <span>🏕️</span>
          <h3>Peaceful Campsites</h3>
          <p>Wide open spaces surrounded by fresh air and greenery.</p>
        </div>
        <div className="feature-card">
          <span>🔥</span>
          <h3>Campfire Nights</h3>
          <p>Unwind under the stars with cozy campfire moments.</p>
        </div>
        <div className="feature-card">
          <span>🌄</span>
          <h3>Scenic Views</h3>
          <p>Wake up to breathtaking views of nature all around.</p>
        </div>
        <div className="feature-card">
          <span>🌿</span>
          <h3>Eco-Friendly</h3>
          <p>Designed to respect and preserve the environment.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-text">
          <h2>About Kamp Sa Bulod</h2>
          <p>
            Kamp Sa Bulod is a peaceful campsite for families, barkadas,
            and adventurers who want to disconnect from the city and
            reconnect with nature.
          </p>
          <p>
            Relax, explore, and create unforgettable memories surrounded
            by natural beauty.
          </p>
        </div>

        <div className="about-carousel">
          <div
            className="carousel-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${current * 100}%)`,
              transition: "transform 0.8s ease"
            }}
          >
            {displayImages.map((src, idx) => (
              <img key={idx} src={src} alt={`Slide ${idx}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready for Your Nature Escape?</h2>
        <p>
          Book your camping experience today and discover the calm,
          beauty, and adventure waiting for you.
          
        </p>
        <button className="secondary-btn">Contact Us</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Kamp Sa Bulod. All rights reserved.
      </footer>

    </div>
  );
}
