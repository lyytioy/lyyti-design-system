import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsAddress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-address_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-address_svg__cls-1"
      d="M9 16.5H.5c.423-2.286.353-3.58 1.609-4.118L6.5 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l1.5.643"
    />,
    <circle
      className="single-man-actions-address_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={2.25}
    />,
    <path
      className="single-man-actions-address_svg__cls-1"
      d="M19.75 17.5v1.125a1.874 1.874 0 001.875 1.875 1.874 1.874 0 001.875-1.875v-.847a6.185 6.185 0 00-5.845-6.278 6 6 0 00-1.577 11.835 6.14 6.14 0 002.966-.038"
    />
  );

export default SvgSingleManActionsAddress;
