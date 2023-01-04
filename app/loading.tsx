"use client";
import React from "react";
import { ProgressBar } from "react-loader-spinner";

function loading() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#199feb"
        barColor="#3786f3"
      />
    </div>
  );
}

export default loading;
