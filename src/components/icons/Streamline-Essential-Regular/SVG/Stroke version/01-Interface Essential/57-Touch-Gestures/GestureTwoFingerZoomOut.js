import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingerZoomOut = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-finger-zoom-out_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-finger-zoom-out_svg__a"
      d="M15.75 23.248l.645-1.934a5.534 5.534 0 00-.645-4.814l2.178-3.937a1.5 1.5 0 00-2.628-1.455l-2.692 4.867-1.361-.227v-6a1.5 1.5 0 10-3 0V18l-1.174-.587a1.638 1.638 0 00-1.755 2.744l3.792 3.091M19.459 6.612l3.79-1.907-1.906-3.79M23.225 4.715a26.985 26.985 0 00-8.976-2.342M4.539 6.612L.749 4.705 2.655.915M.771 4.716a26.967 26.967 0 018.978-2.343"
    />
  );

export default SvgGestureTwoFingerZoomOut;
