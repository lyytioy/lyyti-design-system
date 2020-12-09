import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-brightness_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="settings-brightness_svg__a"
      x={5.251}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="settings-brightness_svg__a"
      d="M5.251 7.5h13.5M12.001 13.5v-.75M12.001 20.25v-.75M15.001 16.5h.75M8.251 16.5h.75M14.122 14.379l.53-.53M9.349 19.152l.53-.53M14.122 18.622l.53.53M9.349 13.849l.53.53M12 16.125a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgSettingsBrightness;
