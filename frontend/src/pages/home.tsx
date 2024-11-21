import ThreeDLogo from './ThreeDLogo';
function Home() {
    return (
        <div className="app-container">
            <div className="navbar">
                <button className="nav-button">home</button>
                <button className="nav-button">plan</button>
                <button className="nav-button">nutr</button>
            </div>
            <div className="app-container">
                <ThreeDLogo/>
                <h1>nutri !!</h1>
                <p>
                    a fitness web application designed to help you meet your personal <br />
                    fitness goals. made by jay + nathan + danny @ webjam 24'
                </p>
                <button className="start-button">start here !! ↩</button>
                <p className="plans-intro">...or check out some of our plans</p>
                <div className="tabs">
                    <button className="tab">bodybuilding</button>
                    <button className="tab">weight loss</button>
                    <button className="tab">health</button>
                </div>
                <div className="plan-container">
                    <div className="plan">
                        <h3>✤ bodybuilding</h3>
                        <p>
                            Bodybuilding focuses on building muscle mass and strength through targeted weight training. It helps sculpt your body, improve metabolism, and increase overall vitality. Perfect for those looking to gain muscle while reducing body fat.
                        </p>
                    </div>
                    <div className="plan">
                        <h3>✤ weight loss</h3>
                        <p>
                            Weight loss involves a combination of calorie management, cardiovascular exercise, and strength training. It’s designed to reduce body fat and improve fitness levels, leading to better health, more energy, and an overall improved sense of well-being.
                        </p>
                    </div>
                    <div className="plan">
                        <h3>✤ health</h3>
                        <p>
                            Health focuses on holistic well-being, including improving cardiovascular fitness, flexibility, and mental health. This plan is great for anyone seeking to enhance their quality of life, reduce stress, and develop sustainable healthy habits.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;