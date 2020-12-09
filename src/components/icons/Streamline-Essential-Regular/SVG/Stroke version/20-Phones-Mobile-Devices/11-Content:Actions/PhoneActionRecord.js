import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-record_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-record_svg__a"
      d="M14.625 14.25v6.268a2.732 2.732 0 01-2.733 2.732H5.358a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 015.358 2.25h3.267M2.625 18.75h12"
    />,
    <circle
      className="phone-action-record_svg__a"
      cx={16.125}
      cy={6}
      r={5.25}
    />,
    <path
      className="phone-action-record_svg__a"
      d="M16.125 5.625A.375.375 0 1016.5 6a.375.375 0 00-.375-.375"
    />
  );

export default SvgPhoneActionRecord;
