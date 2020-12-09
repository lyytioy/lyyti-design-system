import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionBin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-bin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-bin_svg__a"
      d="M14.625 13.5v7.018a2.732 2.732 0 01-2.733 2.732H5.358a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 015.358 2.25h3.267M2.625 18.75h12M10.875.75h10.5M17.736 10.5h-3.222a1.5 1.5 0 01-1.495-1.385L12.375.75h7.5l-.643 8.365a1.5 1.5 0 01-1.496 1.385zM16.125.75v9.75M12.721 5.25h6.808"
    />
  );

export default SvgPhoneActionBin;
