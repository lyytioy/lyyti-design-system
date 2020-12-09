import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySick = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sick_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-sick_svg__a"
      d="M23.25 18.353a3.4 3.4 0 00-3.4-3.4 3.349 3.349 0 00-2.264.876c-2.558 2.322-2.765-2.332-4.045-2.332a.971.971 0 00-.971.971 7.28 7.28 0 007.28 7.279 3.4 3.4 0 003.4-3.394z"
    />,
    <path
      className="smiley-sick_svg__a"
      d="M14.277 23.019A11.251 11.251 0 1123.25 12q0 .422-.031.835"
    />,
    <path
      className="smiley-sick_svg__a"
      d="M9.95 14.743a4.507 4.507 0 00-2.359 3.1.759.759 0 00.744.9H10.5M6 8.947a1.8 1.8 0 003 0M15 8.947a1.8 1.8 0 003 0"
    />
  );

export default SvgSmileySick;
