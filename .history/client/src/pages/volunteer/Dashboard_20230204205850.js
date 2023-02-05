import React, { useState } from "react";
import "./institute.css";
import StudentTrack from "./StudentTrack";
import DragnDrop from "./DragnDrop";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [number, setNumber] = useState(1);

  return (
    <div className="StudentTrack_container">
      <div class="Side-bar">
        <div class="Box-logo">Edc.IO</div>
        <div class="Box-menu">
          <ul class="ul-menu">
            <li class="li-mneu Active-menu">
              <svg
                class="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                />
                <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
                <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
                <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
              </svg>
              <div class="title-menu" onClick={() => setNumber(1)}>
                Dashboard{" "}
              </div>
            </li>
            <li class="li-mneu">
              <svg
                class="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                />
                <path d="M22.5,21H5.5A2.5,2.5,0,0,1,3,18.5V1.5a1.5,1.5,0,0,0-3,0v17A5.506,5.506,0,0,0,5.5,24h17a1.5,1.5,0,0,0,0-3Z" />
                <path d="M9.5,9A1.5,1.5,0,0,0,8,10.5v7a1.5,1.5,0,0,0,3,0v-7A1.5,1.5,0,0,0,9.5,9Z" />
                <path d="M14,13.5v4a1.5,1.5,0,0,0,3,0v-4a1.5,1.5,0,0,0-3,0Z" />
                <path d="M20,9.5v8a1.5,1.5,0,0,0,3,0v-8a1.5,1.5,0,0,0-3,0Z" />
                <path d="M6,7.5a1.487,1.487,0,0,0,.936-.329L9.214,5.35a2.392,2.392,0,0,1,3.191.176,5.43,5.43,0,0,0,7.3.3l3.764-3.185A1.5,1.5,0,1,0,21.531.355L17.768,3.54A2.411,2.411,0,0,1,14.526,3.4a5.389,5.389,0,0,0-7.186-.4L5.063,4.829A1.5,1.5,0,0,0,6,7.5Z" />
              </svg>
              <div class="title-menu" onClick={() => setNumber(2)}>
                Student Track
              </div>
            </li>
            <li class="li-mneu">
              <div class="title-menu" onClick={() => setNumber(3)}>
                Upload Data
              </div>
            </li>
            <li class="li-mneu"></li>
            <li class="li-mneu">
              <div class="title-menu">Setting</div>
            </li>
            <li class="li-mneu logout">
              <svg
                class="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                />
                <path d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z" />
                <path d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414L21.13,10.97,6,11a1,1,0,0,0,0,2H6l15.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z" />
              </svg>
              <div class="title-menu">Logout</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="Page">
        <div class="Box-header">
          <div class="box-alert-infomation">
            <div class="box-alert">
              <div class="staus-box-alert"></div>
              <svg
                class="icon-alert"
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-custom-link"
                />
                <link
                  xmlns=""
                  type="text/css"
                  rel="stylesheet"
                  id="dark-mode-general-link"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-custom-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-style"
                />
                <style
                  xmlns=""
                  lang="en"
                  type="text/css"
                  id="dark-mode-native-sheet"
                />
                <path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z" />
              </svg>
            </div>
            <div class="box-infomation">
              <div class="info-name">Volunteer</div>
            </div>
          </div>
        </div>

        {/* added dragbox */}

        <div class="box-element-flex">
          <div class="stocks ">
            <div class="title-element">Request for LOR</div>

            <div class="stocks-main">
              <div class="sub-stocks">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png"
                  alt=""
                />
                <button
                  type="button"
                  class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 sm:ml-64">
        {number == 2 ? <StudentTrack /> : number == 3 ? <DragnDrop /> : null}
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <div class="p-4 sm:ml-64">
  {number == 1 ? (
    <Admin_User />
  ) : number == 2 ? (
    <Admin_Institute />
  ) : number == 3 ? (
    <Admin_Volunteer />
  ) : null}
</div>; */
}
