import React from 'react';

const ReferralStep = ({ Icon, text }) => {
  return (
    <div className="flex flex-col gap-3 p-6 text-center bg-white shadow-xl transition transform hover:scale-105 rounded-full justify-center items-center w-64 h-64">
      <Icon className="text-blue-500 text-5xl" />
      <p className="font-semibold text-wrap w-3/4 text-sm">
        {text}
      </p>
    </div>
  );
};

export default ReferralStep;
