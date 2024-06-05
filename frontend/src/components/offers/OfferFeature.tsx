import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  feature: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const OfferFeature = ({ feature }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Icon icon="material-symbols:wifi" fontSize={18} />
      <p className="text-xs">Lorem ipsum dolor sit amet</p>
    </div>
  );
};
