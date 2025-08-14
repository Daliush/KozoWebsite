import React, { useEffect } from 'react';
import './css/GalaxyAnimation.css';

function GalaxyAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Galaxy scroll animation for desktop only
      if (window.innerWidth > 768) {
        const galaxyStars = document.querySelectorAll('.galaxy-star');
        const galaxyParticles = document.querySelectorAll('.galaxy-particle');
        
        galaxyStars.forEach((star, index) => {
          // Disable CSS animation and enable transform
          star.classList.add('scroll-animate');
          star.style.animation = 'none';
          
          const speed = (index % 4 + 1) * 0.5;
          const lateralMovement = (scrollY * speed * 0.1) % (window.innerWidth + 200) - 100;
          const verticalMovement = scrollY * speed * 0.3;
          
          const transform = `translate(${lateralMovement}px, ${verticalMovement}px)`;
          star.style.transform = transform;
          star.style.opacity = '1';
        });

        galaxyParticles.forEach((particle, index) => {
          // Disable CSS animation and enable transform
          particle.classList.add('scroll-animate');
          particle.style.animation = 'none';
          
          const speed = (index % 3 + 1) * 0.3;
          const lateralMovement = (scrollY * speed * 0.08) % (window.innerWidth + 150) - 75;
          const verticalMovement = scrollY * speed * 0.2;
          
          const transform = `translate(${lateralMovement}px, ${verticalMovement}px)`;
          particle.style.transform = transform;
          particle.style.opacity = '1';
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial animation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="galaxy-animation">
      <div className="galaxy-star" style={{top: '5%', left: '15%'}}></div>
      <div className="galaxy-star" style={{top: '15%', left: '75%'}}></div>
      <div className="galaxy-star" style={{top: '25%', left: '25%'}}></div>
      <div className="galaxy-star" style={{top: '35%', left: '85%'}}></div>
      <div className="galaxy-star" style={{top: '45%', left: '10%'}}></div>
      <div className="galaxy-star" style={{top: '55%', left: '65%'}}></div>
      <div className="galaxy-star" style={{top: '65%', left: '40%'}}></div>
      <div className="galaxy-star" style={{top: '75%', left: '20%'}}></div>
      <div className="galaxy-star" style={{top: '85%', left: '80%'}}></div>
      <div className="galaxy-star" style={{top: '95%', left: '50%'}}></div>
      <div className="galaxy-star" style={{top: '12%', left: '45%'}}></div>
      <div className="galaxy-star" style={{top: '28%', left: '60%'}}></div>
      <div className="galaxy-star" style={{top: '42%', left: '90%'}}></div>
      <div className="galaxy-star" style={{top: '58%', left: '5%'}}></div>
      <div className="galaxy-star" style={{top: '72%', left: '70%'}}></div>
      
      <div className="galaxy-particle" style={{top: '8%', left: '35%'}}></div>
      <div className="galaxy-particle" style={{top: '18%', left: '55%'}}></div>
      <div className="galaxy-particle" style={{top: '32%', left: '30%'}}></div>
      <div className="galaxy-particle" style={{top: '48%', left: '75%'}}></div>
      <div className="galaxy-particle" style={{top: '62%', left: '15%'}}></div>
      <div className="galaxy-particle" style={{top: '78%', left: '60%'}}></div>
      <div className="galaxy-particle" style={{top: '88%', left: '25%'}}></div>
      <div className="galaxy-particle" style={{top: '22%', left: '10%'}}></div>
      <div className="galaxy-particle" style={{top: '38%', left: '45%'}}></div>
      <div className="galaxy-particle" style={{top: '52%', left: '85%'}}></div>
    </div>
  );
}

export default GalaxyAnimation;