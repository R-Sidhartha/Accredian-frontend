import React, { useState } from "react";
import Menu from "./Menu";
import bg from "./Pics/refer-and-earn.png";
import Button from "./UI/Button";
import ReferralComponent from "./ReferralComponent";
import ReferralBenefits from "./ReferralBenefits";
import FAQComponent from "./FAQComponent";
import Footer from "./Footer";
import ReferralModal from "./ReferralModal";
function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="flex flex-col gap-5 mt-8 items-center">
      <Menu />
      <div id="refer" className="flex gap-3 border border-blue-500/25 shadow-xl rounded-xl w-3/4 justify-center items-center mt-5">
        <img src={bg} width={500} alt="" />
        <div className="flex gap-3 flex-col justify-center w-3/4 p-2">
          <h2 className="text-6xl">Let's Learn & Earn</h2>
          <h4 className="text-2xl">
            Get a chance to win upto{" "}
            <span className="text-3xl text-blue-500 font-semibold">
              Rs. 15000
            </span>
          </h4>
          <Button title="Refer Now" type="button" className="w-1/3 mt-28" handleOnClick={openModal} />
        </div>
      </div>
      <div className=" mt-10 w-full">
      {isModalOpen && <ReferralModal closeModal={closeModal} setModalOpen={setModalOpen}/>}
      </div>
      <div className=" mt-10 w-full">
      <ReferralComponent openModal={openModal}/>
      </div>
      <div className="mt-10">
        <ReferralBenefits openModal={openModal}/>
      </div>
      <div className="mt-10">
        <FAQComponent/>
      </div>
      <div className="mt-10 w-full">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
