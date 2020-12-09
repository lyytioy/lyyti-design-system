import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionAt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-at_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-at_svg__a"
      d="M14.25 15.75v4.768a2.732 2.732 0 01-2.733 2.732H4.983a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 014.983 2.25H6.75M2.25 18.75h12"
    />,
    <circle className="phone-action-at_svg__a" cx={15.75} cy={6.75} r={2.25} />,
    <path
      className="phone-action-at_svg__a"
      d="M18 6.75v1.125a1.874 1.874 0 001.875 1.875 1.874 1.874 0 001.875-1.875v-.846A6.186 6.186 0 0015.905.752a6 6 0 00-1.577 11.835 6.152 6.152 0 002.966-.037"
    />
  );

export default SvgPhoneActionAt;
