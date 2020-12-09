import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionRing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-ring_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-ring_svg__a"
      d="M15 15v5.518a2.732 2.732 0 01-2.733 2.732H5.733A2.732 2.732 0 013 20.518V4.983A2.733 2.733 0 015.733 2.25H9M3 18.75h12"
    />,
    <path
      className="phone-action-ring_svg__a"
      d="M15.75.75A3.75 3.75 0 0119.5 4.5v3A1.5 1.5 0 0021 9H10.5A1.5 1.5 0 0012 7.5v-3A3.75 3.75 0 0115.75.75zM15.75 11.25a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgPhoneActionRing;
