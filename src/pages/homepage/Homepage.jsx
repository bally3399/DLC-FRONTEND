import Navbar from "../../component/navbar/Navbar";
import background from "../../asset/image.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/footer/Footer";

const Homepage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/signUp');
    };

    return (
        <div className="overflow-x-hidden mt-16 pt-3">
            <Navbar />
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh'
                }}
                className="flex items-center justify-center"
            >
                <div className="w-full md:w-1/2 px-6">
                    <h1 className="text-white text-center md:text-left p-8 md:p-24">
                        <span className="font-extrabold text-2xl md:text-3xl">
                            Experience the convenience of online shopping with fast, reliable shipping and exceptional customer service, available 24/7
                        </span>
                    </h1>

                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={handleGetStarted}
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;
