
import './Spinner.css'
function Spinner(){

    return (
        <div className='flex flex-col items-center space-y-2'>
            <div className="spinner"></div>
            <h1 className=' text-lg font-semibold text-white ml-6'>Loading.....</h1>
        </div>
    );
}

export default Spinner;