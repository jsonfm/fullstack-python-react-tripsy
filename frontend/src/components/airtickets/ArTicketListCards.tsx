import React from "react";
import { AirTicketCard } from "./AirTicketCard";

export const ArTicketListCards = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="snap-x flex gap-6 overflow-x-auto py-6">
      {items?.map((item) => (
        <AirTicketCard key={`airticket-${item}`} />
      ))}
    </div>
  );
};
