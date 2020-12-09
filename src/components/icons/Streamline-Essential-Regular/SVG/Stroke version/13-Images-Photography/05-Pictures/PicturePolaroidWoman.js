import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroidWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="picture-polaroid-woman_svg__a"
      cx={8.25}
      cy={6.083}
      r={2.333}
    />,
    <path
      className="picture-polaroid-woman_svg__a"
      d="M5.917 6.083S5.917 9 4.167 9M10.583 6.083S10.583 9 12.333 9"
    />,
    <rect
      className="picture-polaroid-woman_svg__a"
      x={0.75}
      y={0.75}
      width={15}
      height={18}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="picture-polaroid-woman_svg__a"
      d="M15.75 14.25h-15M18.755 6.231l3.982 1.327a.75.75 0 01.474.949l-4.743 14.23a.75.75 0 01-.949.474l-6.269-2.089M3.75 14.25a4.5 4.5 0 019 0z"
    />
  );

export default SvgPicturePolaroidWoman;
