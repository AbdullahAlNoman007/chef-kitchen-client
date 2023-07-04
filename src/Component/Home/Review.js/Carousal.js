import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import comma from '../../../Assets/comma.png'
import './Review.css'

const Carousal = ({datam}) => {
    return (
        <div className='w-10/12 lg:w-2/5 border p-5 rounded-xl'>
                <div className='flex items-center justify-between'>
                    <img src={comma} alt="" />
                    <div className='flex'>
                        <FaStar className='reviewstar'/>
                        <FaStar className='reviewstar'/>
                        <FaStar className='reviewstar'/>
                        <FaStar className='reviewstar'/>
                        <FaStarHalfAlt className='reviewstar'/>
                    </div>
                </div>
                <h3 className='text-lg  text-gray-600'><strong>{datam.title}</strong></h3>
                <p className='text-lg  text-gray-500'>{datam.details}</p>
                <div className='flex items-center'>
                    <img src={datam.img} alt="" style={{height:'64px',width:'64px'}} />
                    <p className='text-lg  text-gray-600 ml-3'><strong>{datam.author}</strong></p>
                </div>
            </div>
      
    );
};

export default Carousal;