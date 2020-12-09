import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapHorizontalExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-horizontal-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-horizontal-expand_svg__a"
      d="M.501 11.501h3M2.501 14.001l-2-2.5 2-2.5M23.501 11.501h-3M21.501 14.001l2-2.5-2-2.5M6.488 15.447a6.5 6.5 0 1111.012.013"
    />,
    <path
      className="gesture-tap-horizontal-expand_svg__a"
      d="M10.5 11.482a1 1 0 012 0v4.754l3.92 1.17a1.28 1.28 0 01.893 1.519c-.13.564-.745 4-.849 4.576h-6.12l-3.06-4.589c-1.215-1.858 1.836-2.5 3.217.589z"
    />
  );

export default SvgGestureTapHorizontalExpand;
