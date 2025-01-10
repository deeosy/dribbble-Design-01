// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { services } from './servicesList';

//  const ServiceDetails = () => {
//   const { id } = useParams();
//   const [servicesData, setServicesData] = useState(null);

//   useEffect(() => {
//     const filteredData = services.filter((item) => item.id === id);
//     setServicesData(filteredData);
//   }, [id]);

//   useEffect(() => {
//     console.log('Filtered services data:', servicesData);
//   }, [servicesData]); 

//   return (
//     <div className="h-[90vh]">
//       <p>Service ID: {id}</p>
//       {servicesData.length > 0 ? (
//         servicesData.map((item) => (
//           <div key={item.id}>
//             <h2>{item.name}</h2>
//             <p>{item.description}</p>
//           </div>
//         ))
//       ) : (
//         <p>No service found for this ID.</p>
//       )}
//     </div>
//   );
// };

// export default ServiceDetails


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from './servicesList';
import arrowLeft from '../assets/icons/arrow-left.svg'

const ServiceDetails = () => {
  const { id } = useParams(); // Extract the id from the route params
  const [service, setService] = useState(null); // State for the selected service
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Filter the service based on the provided id
    const selectedService = services.find((item) => item.id === id);

    if (selectedService) {
      setService(selectedService); // Set the matching service
      setError(null); // Clear any previous errors
    } else {
      setService(null); // Clear the service if no match found
      setError('Service not found'); // Set an error message
    }
  }, [id]); // Re-run whenever the ID changes

  return (
    <div className="h-[90vh] flex flex-col items-center justify-center text-center text-gray-200 ">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : service ? (
        <>
        <div className="flex justify-between items-center gap-x-10">
          <Link to='/services' >
            <img src={arrowLeft} alt="" className='h-[28px] hover:cursor-pointer p-1 rounded-full border border-white bg-blue-400 ' />
          </Link>
          <h1 className="text-3xl font-semibold">{service.name}</h1>
        </div>
          <img
            src={service.bgImage}
            alt={service.name}
            className="w-80 h-40 object-cover rounded-lg mt-4"
          />
          <p className="mt-4 text-gray-700">{service.description || 'No description available.'}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ServiceDetails;