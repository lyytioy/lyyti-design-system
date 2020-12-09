import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-refresh_svg__a"
      d="M13.5 15.75v4.768a2.732 2.732 0 01-2.733 2.732H4.233A2.732 2.732 0 011.5 20.518V4.983A2.733 2.733 0 014.233 2.25H9M1.5 18.75h12M18.75 5.25h3.75V.75M22.311 5.25a6 6 0 10-1.121 5.243"
    />
  );

export default SvgPhoneActionRefresh;
