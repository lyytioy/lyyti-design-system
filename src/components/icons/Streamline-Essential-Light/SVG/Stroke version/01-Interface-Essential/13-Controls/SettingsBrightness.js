import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-brightness_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="settings-brightness_svg__a"
      x={6.5}
      y={0.501}
      width={11}
      height={23}
      rx={2}
      ry={2}
    />,
    <path className="settings-brightness_svg__a" d="M6.5 7.501h11" />,
    <circle
      className="settings-brightness_svg__a"
      cx={12}
      cy={18.001}
      r={1.5}
    />,
    <path
      className="settings-brightness_svg__a"
      d="M12 15.001v-.5M15 18.001h.5M12 21.001v.5M9 18.001h-.5M14.121 15.879l.354-.353M14.121 20.122l.354.354M9.879 20.122l-.354.354M9.879 15.879l-.354-.353"
    />
  );

export default SvgSettingsBrightness;
