import React from 'react';
import Button from './UI/Button';

const ReferralBenefits = ({openModal}) => {
  return (
    <div id='benefits' className="bg-gray-50 min-h-screen p-8 rounded-lg">
      <h2 className="text-xl font-bold text-center mb-8">
        What Are The <span className="text-blue-500">Referral Benefits?</span>
      </h2>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-4">All Programs</h3>
          <ul>
            <li className="mb-2">
              <button className="w-full text-left py-2 px-4 bg-blue-500 text-white rounded-lg">
                All Programs
              </button>
            </li>
            {[
              'Product Management',
              'Strategy & Leadership',
              'Business Management',
              'Fintech',
              'Senior Management',
              'Data Science',
              'Digital Transformation',
              'Business Analytics'
            ].map((program, index) => (
              <li key={index} className="mb-2">
                <button className="w-full text-left py-2 px-4 hover:bg-blue-500/25 rounded-lg">
                  {program}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 ml-4 p-4 bg-white shadow-lg rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <div className="flex items-center">
              <span className="mr-2">Enrolled</span>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Programs</th>
                <th className="py-2 px-4">Referrer Bonus</th>
                <th className="py-2 px-4">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Professional Certificate Program in Product Management', referrer: '₹ 7,000', referee: '₹ 9,000' },
                { name: 'PG Certificate Program in Strategic Product Management', referrer: '₹ 9,000', referee: '₹ 11,000' },
                { name: 'Executive Program in Data Driven Product Management', referrer: '₹ 10,000', referee: '₹ 10,000' },
                { name: 'Executive Program in Product Management and Digital Transformation', referrer: '₹ 10,000', referee: '₹ 10,000' },
                { name: 'Executive Program in Product Management', referrer: '₹ 10,000', referee: '₹ 10,000' },
                { name: 'Advanced Certification in Product Management', referrer: '₹ 10,000', referee: '₹ 10,000' },
                { name: 'Executive Program in Product Management and Project Management', referrer: '₹ 10,000', referee: '₹ 10,000' },
              ].map((program, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm0 18.5A8.5 8.5 0 1118.5 10 8.51 8.51 0 0110 18.5zM9 14.75h2v-2H9v2zm0-4h2V5.25H9V10.75z"/>
                    </svg>
                    {program.name}
                  </td>
                  <td className="py-2 px-4">{program.referrer}</td>
                  <td className="py-2 px-4">{program.referee}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-end">
            <Button title='Show more' type='button'/>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center mt-12">
      <Button title='Refer Now' type='button' handleOnClick={openModal}/>
      </div>
    </div>
  );
};

export default ReferralBenefits;
