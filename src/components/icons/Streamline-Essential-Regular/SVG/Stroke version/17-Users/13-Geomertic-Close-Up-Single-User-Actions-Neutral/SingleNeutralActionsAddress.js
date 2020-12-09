import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsAddress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-address_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-address_svg__cls-1"
      d="M.75 17.25a6.753 6.753 0 019.4-6.208"
    />,
    <circle
      className="single-neutral-actions-address_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <circle
      className="single-neutral-actions-address_svg__cls-1"
      cx={17.25}
      cy={17.25}
      r={2.25}
    />,
    <path
      className="single-neutral-actions-address_svg__cls-1"
      d="M19.5 17.25v1.125a1.875 1.875 0 001.875 1.875 1.876 1.876 0 001.875-1.875v-.847a6.186 6.186 0 00-5.845-6.276 6 6 0 00-1.577 11.834 6.128 6.128 0 002.966-.037"
    />
  );

export default SvgSingleNeutralActionsAddress;
