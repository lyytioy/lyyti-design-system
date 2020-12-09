import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPin1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pin-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pin-1_svg__a"
      d="M6.547 9.674l7.778 7.778a4.363 4.363 0 00.9-4.435l5.965-5.964.177.176a1.25 1.25 0 001.768-1.767l-4.6-4.6a1.25 1.25 0 00-1.765 1.771l.177.177-5.965 5.965a4.366 4.366 0 00-4.435.899zM10.436 13.563L.5 23.499"
    />
  );

export default SvgPin1;
