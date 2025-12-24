import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const Contactinfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="sahil.maholi@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 9621707292" Image={FiPhone} />
      <SingleInfo text="Vikas Nagar, Maholi (Sitapur), Uttar Pradesh" Image={IoLocationOutline} />
    </div>
  )
}

export default Contactinfo
