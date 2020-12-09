import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-edit_svg__a"
      d="M15.75 12.75v7.768a2.732 2.732 0 01-2.733 2.732H6.483a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 016.483 2.25h4.767M3.75 18.75h12"
    />,
    <path
      className="phone-action-edit_svg__a"
      d="M19.63 4.37L12 12l-3.75.75L9 9l7.63-7.63a2.116 2.116 0 012.992 0l.008.009a2.113 2.113 0 010 2.991z"
    />
  );

export default SvgPhoneActionEdit;
