import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingerZoomOut = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-finger-zoom-out_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-finger-zoom-out_svg__a"
      d="M16 5c3.364.314 6.131 1.7 7.5 3.5M.5 8.5C1.88 6.694 4.613 5.307 8 5"
    />,
    <path
      className="gesture-two-finger-zoom-out_svg__a"
      d="M21.002 8.503h2.5v-2.5M3.002 8.503h-2.5v-2.5M9.5 10.483a1 1 0 012 0v4.754l1 .246 1.5-4.816a.93.93 0 011.8.454l-1.3 4.862c1.02.472 2.08.776 1.811 1.943-.13.564-.747 4-.85 4.577H9.346l-3.061-4.59c-1.215-1.858 1.836-2.5 3.217.59z"
    />
  );

export default SvgGestureTwoFingerZoomOut;
