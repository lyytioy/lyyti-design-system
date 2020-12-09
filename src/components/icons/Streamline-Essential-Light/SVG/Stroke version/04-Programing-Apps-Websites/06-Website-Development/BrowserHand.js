import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="browser-hand_svg__a"
      x={1}
      y={15.5}
      width={4}
      height={8}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="browser-hand_svg__a"
      d="M5 22.5h17c0-1.5-3.5-3-7.5-3h-7M5 16.5h3.5c2.353 0 3.5 2.5 4 3M3 21.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M3 13V2.5a2.006 2.006 0 012-2h16a2.006 2.006 0 012 2v12a2.006 2.006 0 01-2 2h-4M3 4.5h20M6 2.25"
    />,
    <path
      className="browser-hand_svg__a"
      d="M6 2.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M8 2.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M10 2.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgBrowserHand;
