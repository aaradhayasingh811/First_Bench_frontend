import React from "react";

export const BasicSelect = () => {
  return (
    <div className="w-max h-min">
      <select name="Profile" id="cars" className="w-max text-white bg-black">
        {/* <optgroup label="Swedish Cars"> */}
          <option value="profile" className="text-gray-950 bg-white">Profile</option>
          <option value="setting" className="text-gray-950 bg-white">Settings</option>
          <option value="account" className="text-gray-950 bg-white"> Accounts</option>
          <option value="privacy" className="text-gray-950 bg-white">Privacy </option>
        {/* </optgroup> */}
      </select>
    </div>
  );
};
