import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroidLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="picture-polaroid-landscape_svg__a"
      x={0.75}
      y={0.75}
      width={15}
      height={16.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="picture-polaroid-landscape_svg__a"
      d="M15.75 12.75h-15M18.755 6.231l3.982 1.327a.75.75 0 01.474.949l-4.743 14.23a.75.75 0 01-.949.474L6.755 19.623"
    />,
    <path
      className="picture-polaroid-landscape_svg__a"
      d="M5.25 12.75L9.4 6.818a1.5 1.5 0 012.36-.128l3.99 4.56"
    />,
    <circle
      className="picture-polaroid-landscape_svg__a"
      cx={5.063}
      cy={5.063}
      r={1.688}
    />
  );

export default SvgPicturePolaroidLandscape;
