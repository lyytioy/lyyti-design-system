import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsAddress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-address_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-actions-address_svg__cls-1"
      cx={17.25}
      cy={17.251}
      r={2.25}
    />,
    <path
      className="single-woman-actions-address_svg__cls-1"
      d="M19.5 17.251v1.125a1.875 1.875 0 001.875 1.875 1.876 1.876 0 001.875-1.875v-.847a6.187 6.187 0 00-5.845-6.277 6 6 0 00-1.577 11.835 6.141 6.141 0 002.966-.037"
    />,
    <circle
      className="single-woman-actions-address_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-address_svg__cls-1"
      d="M10.5 10.8a5.28 5.28 0 00-1.615-1.685L6 13.5 3.114 9.115A5.244 5.244 0 00.75 13.5v2.25H3l.75 7.5h4.5l.6-6M3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />
  );

export default SvgSingleWomanActionsAddress;
