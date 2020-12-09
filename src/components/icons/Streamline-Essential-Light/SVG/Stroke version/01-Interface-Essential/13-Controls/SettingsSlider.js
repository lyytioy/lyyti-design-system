import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-slider_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="settings-slider_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <circle className="settings-slider_svg__a" cx={9} cy={6.501} r={3} />,
    <circle className="settings-slider_svg__a" cx={15.5} cy={17.501} r={3} />,
    <path
      className="settings-slider_svg__a"
      d="M12.5 17.501h-9M20.5 17.501h-2M12 6.501h8.5M3.5 6.501H6M9 6.251a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 17.251a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSettingsSlider;
