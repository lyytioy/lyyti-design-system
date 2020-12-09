import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-focus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-focus_svg__a"
      d="M6.75 7.125h1.307a1.5 1.5 0 001.269-.7l.534-.848a1.5 1.5 0 011.269-.7h1.742a1.5 1.5 0 011.269.7l.534.848a1.5 1.5 0 001.269.7h1.307a1.5 1.5 0 011.5 1.5v6.692a1.562 1.562 0 01-1.558 1.558H6.808a1.562 1.562 0 01-1.558-1.558V8.625a1.5 1.5 0 011.5-1.5z"
    />,
    <circle
      className="camera-settings-focus_svg__a"
      cx={12}
      cy={11.625}
      r={2.25}
    />,
    <path
      className="camera-settings-focus_svg__a"
      d="M.75 4.81a2.935 2.935 0 012.935-2.935M.75 19.19a2.935 2.935 0 002.935 2.935M23.25 4.81a2.935 2.935 0 00-2.935-2.935M23.25 19.19a2.935 2.935 0 01-2.935 2.935"
    />
  );

export default SvgCameraSettingsFocus;
