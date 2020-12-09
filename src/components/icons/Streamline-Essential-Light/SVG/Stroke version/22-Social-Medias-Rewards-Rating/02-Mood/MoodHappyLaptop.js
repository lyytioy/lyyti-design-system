import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodHappyLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-happy-laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mood-happy-laptop_svg__a"
      d="M9 7.5H5.167A1.667 1.667 0 003.5 9.167V20.5M20.5 20.5V14M23.5 20.5a3 3 0 01-3 3h-17a3 3 0 01-3-3zM15.25 4.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.75 4.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.5 8a2 2 0 01-4 0z"
    />,
    <path
      className="mood-happy-laptop_svg__a"
      d="M17.433.5A5.954 5.954 0 0011.5 6.567a5.94 5.94 0 00.781 3.192L10.5 13.5l3.741-1.782A6.064 6.064 0 1017.433.5z"
    />
  );

export default SvgMoodHappyLaptop;
