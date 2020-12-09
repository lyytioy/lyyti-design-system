import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlashOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flash-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flash-off_svg__a"
      d="M16.961 12.747l.887-1.441a1.023 1.023 0 00-.871-1.559H13.5v-9L10.269 6M7.039 11.247l-.887 1.442a1.022 1.022 0 00.871 1.558H10.5v9L13.731 18M2.25 2.247l19.5 19.5"
    />
  );

export default SvgFlashOff;
