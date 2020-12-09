import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneAntenna = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-antenna_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-antenna_svg__a"
      d="M14 11.5a1 1 0 011-1h6a1 1 0 011 1v11a1 1 0 01-1 1h-6a1 1 0 01-1-1zM14 19.5h8"
    />,
    <path
      className="phone-antenna_svg__a"
      d="M18 21.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.846 7.832a5.224 5.224 0 007.333-1.055L4.791.5a5.224 5.224 0 001.055 7.332zM10.424 1.715l-1.44 1.924"
    />,
    <path
      className="phone-antenna_svg__a"
      d="M5.351 7.412l-3.029 3.7c-.174.213-.092.387.183.387H8.2c.275 0 .358-.174.183-.387zM13.5 3.5H20v5M11.5 20.5H5v-6.544"
    />
  );

export default SvgPhoneAntenna;
