import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsAddress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-address_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-address_svg__cls-1"
      d="M10.782 10.513A6.052 6.052 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-address_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-address_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-address_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />,
    <circle
      className="multiple-actions-address_svg__cls-1"
      cx={17.25}
      cy={17.25}
      r={2.25}
    />,
    <path
      className="multiple-actions-address_svg__cls-1"
      d="M19.5 17.25v1.125a1.874 1.874 0 001.875 1.875 1.874 1.874 0 001.875-1.875v-.847a6.185 6.185 0 00-5.845-6.276 6 6 0 00-1.577 11.835 6.14 6.14 0 002.966-.038"
    />
  );

export default SvgMultipleActionsAddress;
