import Navbar from "../../component/navbar/Navbar";
import background from "../../asset/image.jpg";
import {useNavigate} from "react-router-dom";


const Homepage = () =>{
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/signUp');
    };
    return(
        <div className="overflow-x-hidden mt-16 pt-3">
            <Navbar/>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
                }}>
                <div className='w-1/2'>
                    <h1 className='justify-center text-white p-24'>
                        <span className='font-extrabold text-3xl flex'>Experience the convenience of online shopping with fast, reliable shipping and exceptional customer service, available 24/7</span>
                    </h1>

                    <div className='flex justify-center w-1/2'>
                        <button
                            onClick={handleGetStarted}
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
                        >
                            Get Started
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Homepage;