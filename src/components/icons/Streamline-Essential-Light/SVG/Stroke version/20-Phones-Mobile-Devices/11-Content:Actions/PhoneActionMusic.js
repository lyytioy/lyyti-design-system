import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-music_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-music_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-music_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3"
    />,
    <circle
      className="phone-action-music_svg__a"
      cx={9.25}
      cy={14.25}
      r={1.25}
    />,
    <circle
      className="phone-action-music_svg__a"
      cx={14.25}
      cy={12.75}
      r={1.25}
    />,
    <path
      className="phone-action-music_svg__a"
      d="M10.5 14.25V9.721a1 1 0 01.684-.949l3-.833a1 1 0 011.316.948V12.5"
    />
  );

export default SvgPhoneActionMusic;
