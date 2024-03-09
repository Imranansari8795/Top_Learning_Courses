import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { filterData, apiUrl } from './Data';
import { toast } from 'react-toastify';
import './App.css'

function App() {

  const [courses, setCourses] = useState('');
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title); 
  const fetchData = async () => {
    setLoading(true);
    try {

      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);

    } catch (error) {
      toast.error("Something is wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-[#343b48]'>
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <Filter filterData={filterData}
          category = {category}
          setCategory = {setCategory}
         />
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>

          {
            loading ? (<Spinner />) : (<Cards courses={courses} category ={category} />) 
          }

        </div>
      </div>
    </div>
  );
}

export default App;
