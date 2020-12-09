import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingerZoomIn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-finger-zoom-in_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-finger-zoom-in_svg__a"
      d="M15.75 23.248l.645-1.934a5.534 5.534 0 00-.645-4.814l2.178-3.937a1.5 1.5 0 00-2.628-1.455l-2.692 4.867-1.361-.227v-6a1.5 1.5 0 10-3 0V18l-1.174-.587a1.638 1.638 0 00-1.755 2.744l3.792 3.091M6.562 6.711l2.644-3.318L5.889.748M9.2 3.407A35.977 35.977 0 00.749 5.1M17.437 6.711l-2.645-3.318L18.11.748M14.8 3.407A35.978 35.978 0 0123.249 5.1"
    />
  );

export default SvgGestureTwoFingerZoomIn;
