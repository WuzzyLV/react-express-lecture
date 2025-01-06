import React, { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { MessageContext } from "../context/useMessages";
import { msToTime } from "../utils/timeConversion";

export const ErrorCard = () => {
  const { errors, success } = useContext(MessageContext);

  return (
    <div className="relative h-28">
      {success && <div className="absolute bottom-0 w-full border border-success text-success text-center py-2">{success}</div>}
      {errors && <div className="absolute bottom-0 w-full border border-error text-error text-center py-2">{errors}</div>}
    </div>
  );
};
