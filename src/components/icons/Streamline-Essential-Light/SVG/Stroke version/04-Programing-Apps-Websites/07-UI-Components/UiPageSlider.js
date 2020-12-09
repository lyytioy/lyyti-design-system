import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiPageSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-page-slider_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ui-page-slider_svg__a"
      d="M17.249 23.5a1 1 0 00.966-.74A42.67 42.67 0 0019.5 12a42.67 42.67 0 00-1.285-10.76 1 1 0 00-.966-.74H6.751a1 1 0 00-.966.74A42.67 42.67 0 004.5 12a42.67 42.67 0 001.285 10.76 1 1 0 00.966.74zM5.274 3.5h13.452M5.274 20.5h13.452M4.71 16.5h14.58M4.71 7.5h14.58"
    />,
    <path
      className="ui-page-slider_svg__a"
      d="M11.485 10.5h.5a.5.5 0 01.5.5v3.5M11.485 14.5h2"
    />
  );

export default SvgUiPageSlider;
