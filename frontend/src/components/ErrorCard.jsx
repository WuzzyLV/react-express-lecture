import React, { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { MessageContext } from "../context/useMessages";
import { msToTime } from "../utils/timeConversion";
import { XIcon } from "./XIcon";

export const ErrorCard = () => {
  const { errors, setErrors, success, setSuccess } = useContext(MessageContext);

  const Cross = ({ type }) => {
    return (
      <button
        className="absolute right-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-xl"
        onClick={() => {
          if (type === "error") setErrors(null);
          if (type === "success") setSuccess(null);
        }}
      >
        <XIcon color={"#999"} width="12px" height="12px" />
      </button>
    );
  };

  return (
    <div className="relative h-28">
      {success && (
        <div className="absolute bottom-0 w-full border border-success text-success text-center py-2">
          {success}
          <Cross type="success" />
        </div>
      )}
      {errors && (
        <div className="absolute bottom-0 w-full border border-error text-error text-center py-2">
          {errors}
          <Cross type={"error"} />
        </div>
      )}
    </div>
  );
};
