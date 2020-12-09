import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiScrollDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-scroll-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ui-scroll-down_svg__a"
      d="M2.062.542h20a.5.5 0 01.5.5v21.5a1 1 0 01-1 1h-19a1 1 0 01-1-1v-21.5a.5.5 0 01.5-.5z"
    />,
    <path
      className="ui-scroll-down_svg__a"
      d="M10.063 20.042l2 1.5 2-1.5M5.563 5.542h13M5.563 8.542h13M5.563 11.542h13M5.563 14.542h9"
    />
  );

export default SvgUiScrollDown;
