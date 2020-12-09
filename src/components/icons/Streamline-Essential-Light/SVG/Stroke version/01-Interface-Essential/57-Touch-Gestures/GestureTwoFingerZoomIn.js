import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingerZoomIn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-finger-zoom-in_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-finger-zoom-in_svg__a"
      d="M13 4c3.365.316 6.731 1.711 8.1 3.509M2.905 7.51C4.283 5.7 7.615 4.307 11 4"
    />,
    <path
      className="gesture-two-finger-zoom-in_svg__a"
      d="M9.503 2.503l1.5 1.5-1 2M14.503 2.503l-1.5 1.5 1 2M9.5 10.483a1 1 0 012 0v4.754l1 .246 1.5-4.816a.93.93 0 011.8.454l-1.3 4.862c1.02.472 2.08.776 1.811 1.943-.13.564-.746 4-.85 4.577H9.347l-3.061-4.59c-1.214-1.858 1.836-2.5 3.217.59z"
    />
  );

export default SvgGestureTwoFingerZoomIn;
