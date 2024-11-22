import { useState, useEffect } from 'react';
import ThreeDLogo from '../components/ThreeDLogo';
import { Button } from "@/components/ui/button"; 
import BiometricFormDialog from '../components/BiometricFormDialog';
import { Link, useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN
 } from '@/constants';
function Home() {
    const navigate = useNavigate();
    
    // Check if the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
    useEffect(() => {
      
      if (localStorage.getItem(ACCESS_TOKEN)) {
        console.log('poop')
        console.log('fart')
        setIsLoggedIn(true); // User is logged in
      } 
    }, []);

    const handleStartClick = () => {
      if (!isLoggedIn) {
        // If not logged in, redirect to the login page
        navigate('/login');
        alert('Please login first!')
      }
    };

  return (
    <div className="app-container">
      {/* Main Content */}
      <div className="app-container">
        <ThreeDLogo />
        {isLoggedIn && (
          <p>welcome back, { localStorage.getItem('name') }</p>
        )}
        <h1>nutri !!</h1>
        <p>
          A fitness web application designed to help you meet your personal <br />
          fitness goals. Made by Jay + Nathan + Danny @ WebJam '24 ᕕ( ᐛ )ᕗ.
        </p>

        {/* Dialog with BiometricsForm */}
        <div className="middle-tabs">
        {!isLoggedIn && (
          <Link to="/login">
            <Button variant="outline" className="start-button">
                  start here !! ↩
            </Button>
          </Link>
        )}
        <BiometricFormDialog triggerButtonText="import biometrics ↺"/>

        {isLoggedIn && (
        <Link to="/profile">
          <Button variant="outline" className="start-button" onClick={handleStartClick}>
                dashboard ↩
          </Button>
        </Link>
        )}
        </div>

        <p className="plans-intro">... our personalized plans include</p>

        {/* Tab Section */}
        {isLoggedIn && (
        <div className="tabs">
          <Link to="/bodybuilding" className="tab">bodybuilding</Link>
          <Link to="/weightloss" className="tab">weight loss</Link>
          <Link to="/health" className="tab">general health</Link>
        </div>
        )}

        {!isLoggedIn && (
          <div className="tabs">
              <Link to="/" className="tab">bodybuilding</Link>
              <Link to="/" className="tab">weight loss</Link>
              <Link to="/" className="tab">general health</Link>
          </div>
          )}

        {/* Plan Content */}
        <div className="plan-container">
          <div className="plan hover:scale-105 transition-transform duration-200">
            <h3>✤ bodybuilding | 健美</h3>
            <p>
              Bodybuilding focuses on building muscle mass and strength through targeted weight training. It helps sculpt your body, improve metabolism, and increase overall vitality. Perfect for those looking to gain muscle while reducing body fat.
            </p>
          </div>
          <div className="plan hover:scale-105 transition-transform duration-200">
            <h3>✤ weight loss | 减肥</h3>
            <p>
              Weight loss involves a combination of calorie management, cardiovascular exercise, and strength training. It's designed to reduce body fat and improve fitness levels, leading to better health, more energy, and an overall improved sense of well-being.
            </p>
          </div>
          <div className="plan hover:scale-105 transition-transform duration-200">
            <h3>✤ general health | 健康</h3>
            <p>
              General Health focuses on holistic well-being, including improving cardiovascular fitness, flexibility, and mental health. This plan is great for anyone seeking to enhance their quality of life, reduce stress, and develop sustainable healthy habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
