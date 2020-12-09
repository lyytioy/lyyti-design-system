import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgForceTouchDoubleTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".force-touch-double-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="force-touch-double-tap_svg__a"
      d="M23.5 16l-1.886-1.886a3.335 3.335 0 00-4.714 0l-1.178 1.179-3.182-3.182a1.5 1.5 0 00-2.122 2.121l4.95 4.95-1.674.148a1.25 1.25 0 10-.229 2.49l3.862.355M4.987 19.5H.5M7 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <path
      className="force-touch-double-tap_svg__a"
      d="M11.5 23.5h-9a2 2 0 01-2-2v-19a2 2 0 012-2h9a2 2 0 012 2v2M10.488 17.371a4 4 0 114.874-4.916M10.017 20.343a7 7 0 118.021-9.35"
    />
  );

export default SvgForceTouchDoubleTap;
