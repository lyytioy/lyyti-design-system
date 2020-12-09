import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroidLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="picture-polaroid-landscape_svg__a"
      d="M15.543 15.543l-2.628-6.571c-.2-.511-.558-.519-.785-.018l-2.087 4.589-1.859-2.231a.667.667 0 00-1.155.089l-2.486 4.142"
    />,
    <rect
      className="picture-polaroid-landscape_svg__a"
      x={1.543}
      y={1.543}
      width={17}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="picture-polaroid-landscape_svg__a"
      d="M20.551 7.424l1 .091a1 1 0 01.901 1.085l-1.181 12.948a1 1 0 01-1.087.9L6.243 21.18M1.543 15.543h17"
    />,
    <circle
      className="picture-polaroid-landscape_svg__a"
      cx={6.043}
      cy={6.043}
      r={1.5}
    />
  );

export default SvgPicturePolaroidLandscape;
