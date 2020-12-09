import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsAddress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-address_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-address_svg__cls-1"
      d="M10.232 12.382A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1"
    />,
    <circle
      className="single-neutral-actions-address_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <circle
      className="single-neutral-actions-address_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={2.25}
    />,
    <path
      className="single-neutral-actions-address_svg__cls-1"
      d="M19.75 17.5v1.125a1.874 1.874 0 001.875 1.875 1.874 1.874 0 001.875-1.875v-.847a6.185 6.185 0 00-5.845-6.278 6 6 0 00-1.577 11.835 6.14 6.14 0 002.966-.038"
    />
  );

export default SvgSingleNeutralActionsAddress;
