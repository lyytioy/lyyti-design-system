import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDialFinger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dial-finger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="dial-finger_svg__a"
      d="M2.5 2.5h2M2.5 6.5h2M2.5 10.5h2M7.5 2.5h2M7.5 6.5h2M7.5 10.5h2M12.5 2.5h2M20 23.5l1.47-6.37a1.165 1.165 0 00-.761-1.366L15.5 14V9a1.5 1.5 0 10-3 0v8.693s-.629-.817-1.265-1.6A1.592 1.592 0 0010 15.5h-.5a1.171 1.171 0 00-1.019 1.744L12 23.5"
    />
  );

export default SvgDialFinger;
