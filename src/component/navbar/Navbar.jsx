import { styled } from '@mui/material/styles';
import {TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import {useState} from "react";
import {FaCartShopping} from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";
// import myLogo from "../../asset/image.jpg"


const SearchField = styled(TextField)({
    backgroundColor: 'white',
    borderRadius: '50px',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#B3B3B3',
            borderRadius: '50px',
        },
        '&:hover fieldset': {
            borderColor: '#B3B3B3',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#B3B3B3',
        },
    },
});

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLoginClick = () => {
        navigate('/login');
    };
    const handleCartClick = () =>{
        navigate("/addCart")
    }

    const handleContactUsClick = () => {
        navigate('/contact')
    }

    const handleSignupClick = () => {
        navigate('/signUp');
    };
    const handleHomeClick = () => {
        navigate('/');
    };
    return(
        <div className='fixed top-0 left-0 right-0 z-50 mb-16 flex justify-between items-center p-4 shadow-md bg-[#006b9b]'>
            <div className='flex items-center mb-4'>
                {/*<img src={myLogo} alt="Shopper Logo" className='h-8 w-8 mr-2'/>*/}
                <p className='text-lg font-bold text-white'>DLC</p>
            </div>
            <div className='hidden md:flex space-x-6 text-lg pl-32'>
                <div onClick={handleHomeClick} className='hover:text-blue-300 cursor-pointer text-white'>Home</div>
                <div className='hover:text-blue-300 cursor-pointer text-white'
                     onClick={handleContactUsClick}
                >Contact us
                </div>
                <div className="flex items-center bg-white rounded-full px-3">
                    <SearchField
                        variant="outlined"
                        placeholder="Search for products"
                        size="small"
                        className="w-full"
                    />
                    <FaSearch className="text-gray-500 ml-2 cursor-pointer"/>
                </div>
                <div className='hover:text-blue-300 cursor-pointer text-white'>About us</div>
            </div>
            <div className='flex items-center space-x-4'>
                <button
                    className='bg-[#00ade2] text-white px-4 py-2 rounded-3xl hover:bg-[#0fffe6]'
                    onClick={handleLoginClick}
                >
                    Login
                </button>
                <button
                    className='bg-[#00ade2] text-white px-4 py-2 rounded-3xl hover:bg-[#0fffe6]'
                    onClick={handleSignupClick}
                >
                    Signup
                </button>
                <div onClick={handleCartClick} className="flex items-center space-x-2 text-white cursor-pointer hover:bg-[#0fffe6] rounded-3xl px-4 py-2">
                    <FaCartShopping className='text-2xl'/>
                    <span>My cart</span>
                </div>
                <HiMenu className="text-2xl md:hidden cursor-pointer hover:text-gray-600"
                        onClick={() => setMenuOpen(!menuOpen)}/>
            </div>
            {menuOpen && (
                <ul className='md:hidden absolute z-10 top-16 left-0 w-full bg-white shadow-md text-lg'>
                    <div className='hover:text-blue-300 cursor-pointer p-4 text-black'>Home</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Features</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Blog</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>About us</div>
                    <div className='hover:text-gray-600 cursor-pointer p-4 text-black'>Contact us</div>
                </ul>
            )}
        </div>
    );
}
export default Navbar