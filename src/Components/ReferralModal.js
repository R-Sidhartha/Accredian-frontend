import React, { useState } from "react";

const ReferralModal = ({ closeModal, setModalOpen }) => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    friendName: "",
    friendEmail: "",
    courseName: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.yourName) errors.yourName = "Your name is required";
    if (!formData.yourEmail) {
      errors.yourEmail = "Your email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.yourEmail)) {
      errors.yourEmail = "Email address is invalid";
    }
    if (!formData.friendName) errors.friendName = "Friend's name is required";
    if (!formData.friendEmail) {
      errors.friendEmail = "Friend's email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.friendEmail)) {
      errors.friendEmail = "Email address is invalid";
    }
    if (!formData.courseName) errors.courseName = "Course name is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log("Form data:", formData);
      try {
        const response = await fetch("https://accredian-backend-green.vercel.app/api/referrals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        alert("Referral submitted successfully!");
        setModalOpen(false);
      } catch (error) {
        console.error("Error submitting referral:", error);
        alert("Failed to submit referral");
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Refer a <span className="text-blue-500 font-bold">Course</span>
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
              {formErrors.yourName && (
                <p className="text-red-500 text-sm">{formErrors.yourName}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="yourEmail"
                value={formData.yourEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
              {formErrors.yourEmail && (
                <p className="text-red-500 text-sm">{formErrors.yourEmail}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Friend's Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="friendName"
                value={formData.friendName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Friend's Name"
              />
              {formErrors.friendName && (
                <p className="text-red-500 text-sm">{formErrors.friendName}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Friend's Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="friendEmail"
                value={formData.friendEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Friend's Email"
              />
              {formErrors.friendEmail && (
                <p className="text-red-500 text-sm">{formErrors.friendEmail}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Course Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Course Name"
              />
              {formErrors.courseName && (
                <p className="text-red-500 text-sm">{formErrors.courseName}</p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full mr-2 hover:bg-gray-700 transition duration-300"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;
