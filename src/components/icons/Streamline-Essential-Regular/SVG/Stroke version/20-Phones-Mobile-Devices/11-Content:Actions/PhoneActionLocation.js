import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-location_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-location_svg__a"
      d="M14.625 15v5.518a2.732 2.732 0 01-2.733 2.732H5.358a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 015.358 2.25h4.017M2.625 18.75h12"
    />,
    <path
      className="phone-action-location_svg__a"
      d="M20.042.83L9.954 5.154A.954.954 0 009.9 6.885l3.558 1.779 1.779 3.559a.955.955 0 001.731-.051L21.3 2.084A.955.955 0 0020.042.83z"
    />
  );

export default SvgPhoneActionLocation;
