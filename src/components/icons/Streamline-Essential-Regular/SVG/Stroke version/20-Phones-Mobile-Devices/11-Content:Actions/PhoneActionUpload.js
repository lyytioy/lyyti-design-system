import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-upload_svg__a"
      d="M14.25 15.75v4.768a2.732 2.732 0 01-2.733 2.732H4.983a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 014.983 2.25H6.75M2.25 18.75h12"
    />,
    <circle
      className="phone-action-upload_svg__a"
      cx={15.75}
      cy={6.75}
      r={6}
    />,
    <path
      className="phone-action-upload_svg__a"
      d="M13.5 6l2.25-2.25L18 6M15.75 3.75v6"
    />
  );

export default SvgPhoneActionUpload;
