import React from "react";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import IronIcon from '@mui/icons-material/Iron';
const fourSection = () => {
  return (
    <div className="p-6 shadow-lg border-t-[#eee] border-t-[1px] bg-white mb-[40px]">
      <div id="wrapper" className="bg-white">
        <center>
          <div className="flex flex-wrap flex-row justify-between items-center bg-white">
            <div className="flex-[1]">
              <p className="font-semibold text-[10px] text-gray-500 uppercase">
                <DryCleaningIcon /> Dry Cleaning
              </p>
            </div>
            <div className="flex-[1]">
              <p className="font-semibold text-[10px] text-gray-500 uppercase">
                <CheckroomIcon /> Wash & Fold
              </p>
            </div>
            <div className="flex-[1]">
              <p className="font-semibold text-[10px] text-gray-500 uppercase">
                <IronIcon /> Steam Ironing
              </p>
            </div>
            <div className="flex-[1]">
              <p className="font-semibold text-[10px] text-gray-500 uppercase">
                <LocalLaundryServiceIcon /> Wash & Steam Iron
              </p>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default fourSection;
