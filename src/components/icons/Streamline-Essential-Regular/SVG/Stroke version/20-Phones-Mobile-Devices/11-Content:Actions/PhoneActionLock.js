import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-lock_svg__a"
      d="M15 15.75v4.768a2.732 2.732 0 01-2.733 2.732H5.733A2.732 2.732 0 013 20.518V4.983A2.733 2.733 0 015.733 2.25H9M3 18.75h12"
    />,
    <rect
      className="phone-action-lock_svg__a"
      x={12}
      y={5.25}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-action-lock_svg__a"
      d="M16.5.75a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM16.5 8.655a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgPhoneActionLock;
