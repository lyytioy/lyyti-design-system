import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroidHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="picture-polaroid-human_svg__a"
      x={0.75}
      y={0.75}
      width={15}
      height={18}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="picture-polaroid-human_svg__a"
      d="M15.75 14.25h-15M18.755 6.231l3.982 1.327a.75.75 0 01.474.949l-4.743 14.23a.75.75 0 01-.949.474l-6.269-2.089"
    />,
    <circle
      className="picture-polaroid-human_svg__a"
      cx={8.25}
      cy={6.375}
      r={2.625}
    />,
    <path
      className="picture-polaroid-human_svg__a"
      d="M3.75 14.25a4.5 4.5 0 019 0z"
    />
  );

export default SvgPicturePolaroidHuman;
