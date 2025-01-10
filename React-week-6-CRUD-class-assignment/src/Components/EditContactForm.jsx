import React, { useState } from 'react';

const EditContactModal = ({contactInfo, hadndleEditContact}) => {
  const [isOpen, setIsOpen] = useState(false);  
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [name, setName] = useState(contactInfo.name);
  const handleName = (e) => {
    setName(e.target.value)
  }
  const [phoneNumber, setPhoneNumber] = useState(contactInfo.phoneNumber);
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }
  const [location, setLocation] = useState(contactInfo.location)
  const handleLocation = (e) => {
    setLocation(e.target.value)
  }
  const handleConfirmEdit = (e) => {
    e.preventDefault();    
    let editedContact = {name, phoneNumber, location, id:contactInfo.id,}
    hadndleEditContact(contactInfo.id, editedContact);
    closeModal();
  }

  return (
    <div>
      <button className="btn bg-green-500 px-3 text-white py-[1px] rounded-md " onClick={openModal}>Edit</button>
      
      {isOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Edit Contact Information</h3>
            <form className='flex flex-col w-[280px] mx-auto '>
              <input value={name} onChange={handleName} type="text" placeholder='Name' className='border border-black py-1 rounded-md placeholder:text-center outline-none' required />
              {/* <input value={phoneNumber} onChange={handlePhoneNumber} type="tel" placeholder='Phone Number' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4} ' className='border border-black py-1 rounded-md my-3 placeholder:text-center outline-none '/> */}
              <div className="flex flex-col my-3">
                <input onChange={handlePhoneNumber} value={phoneNumber} type="tel" id="phone" name="phone" 
                pattern="^\+?\d{1,4}?\s?\(?\d{1,3}?\)?[\s.-]?\d{1,3}[\s.-]?\d{1,4}$"
                placeholder="Enter your phone number" required className='border border-black py-1 rounded-md placeholder:text-center outline-none' />
                <small>Example: +1 234-567-8901</small>
              </div>
              <input value={location} onChange={handleLocation} type="text" placeholder='Location' className='border border-black py-1 rounded-md placeholder:text-center outline-none'/>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button type="button" className="btn" onClick={handleConfirmEdit}>Confirm</button>
                {/* Close button */}
                <button type="button" className="btn " onClick={closeModal}>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default EditContactModal;