import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureZoomIn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-zoom-in_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-zoom-in_svg__a"
      d="M22.484 22.338l.987-8.947a3.5 3.5 0 10-6.958-.766l-.986 8.945"
    />,
    <path
      className="gesture-zoom-in_svg__a"
      d="M18.5 12.844a1.5 1.5 0 112.981.33l-.164 1.49-2.982-.329zM1.5 22.338l-.986-8.947a3.5 3.5 0 116.958-.766l.988 8.945"
    />,
    <path
      className="gesture-zoom-in_svg__a"
      d="M5.484 12.844a1.5 1.5 0 10-2.981.33l.164 1.49 2.982-.329zM13.008 4.01c3.365.316 6.716 1.709 8.085 3.508M2.894 7.515c1.378-1.808 4.679-3.2 8.067-3.5"
    />,
    <path
      className="gesture-zoom-in_svg__a"
      d="M9.493 2.508l1.5 1.5-1 2M14.493 2.508l-1.5 1.5 1 2"
    />
  );

export default SvgGestureZoomIn;
