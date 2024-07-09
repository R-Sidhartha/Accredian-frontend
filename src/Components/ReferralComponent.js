import React from "react";
import ReferralStep from "./ReferralStep";
import { FaUserPlus, FaGift, FaHandshake } from "react-icons/fa";
import Button from "./UI/Button";

const ReferralComponent = ({openModal}) => {
  return (
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-12">How Do I <span className="text-blue-500">Refer?</span></h2>
      <div className="flex gap-16 justify-center items-center">
        <ReferralStep
          Icon={FaUserPlus}
          text="Submit referrals easily via our website's referral section."
        />{" "}
         <ReferralStep 
          Icon={FaGift} 
          text="Earn rewards once your referral joins an Accreditation program." 
        />
        <ReferralStep 
          Icon={FaHandshake} 
          text="Both parties receive a bonus 30 days after program enrollment." 
        />
      </div>
      <div className="text-center flex justify-center items-center mt-20">
       <Button title="Refer Now" type='button' handleOnClick={openModal}/>
      </div>
    </div>
  );
};

export default ReferralComponent;
