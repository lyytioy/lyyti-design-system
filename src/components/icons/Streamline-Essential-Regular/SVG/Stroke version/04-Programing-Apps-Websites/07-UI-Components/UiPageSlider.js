import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiPageSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-page-slider_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ui-page-slider_svg__a"
      d="M17.024 23.25a1.087 1.087 0 001.063-.724A37.431 37.431 0 0019.5 12a37.431 37.431 0 00-1.413-10.526A1.086 1.086 0 0017.024.75H6.976a1.087 1.087 0 00-1.063.724A37.431 37.431 0 004.5 12a37.431 37.431 0 001.413 10.526 1.086 1.086 0 001.063.724zM5.337 3.75h13.326M5.337 20.25h13.326M4.742 16.5h14.516M4.742 7.5h14.526"
    />,
    <path
      className="ui-page-slider_svg__a"
      d="M10.5 9.75h.75a.75.75 0 01.75.75v3.75M10.5 14.25h3"
    />
  );

export default SvgUiPageSlider;
