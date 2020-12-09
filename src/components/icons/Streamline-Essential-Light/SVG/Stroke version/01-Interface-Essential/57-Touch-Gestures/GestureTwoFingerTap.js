import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingerTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-finger-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-finger-tap_svg__a"
      d="M9.506 10.483a1 1 0 012 0v4.754l1 .246 1.5-4.816a.929.929 0 011.8.454l-1.3 4.862c1.019.472 2.08.776 1.81 1.943-.13.564-.746 4-.849 4.577H9.349l-3.06-4.59c-1.215-1.858 1.836-2.5 3.217.59zM7.006 10a3.5 3.5 0 016.328-2.06M16.489 7.822a3.519 3.519 0 011.023 5.624M4.506 10a6.006 6.006 0 0110.47-4M17.5 5.541a6.008 6.008 0 011.507 9.932"
    />
  );

export default SvgGestureTwoFingerTap;
