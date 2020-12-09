import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="picture-polaroid_svg__a"
      x={0.75}
      y={0.75}
      width={17.25}
      height={17.25}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="picture-polaroid_svg__a"
      d="M.75 13.5H18M7.612 21.205l10.524 2.008a2.046 2.046 0 002.393-1.625l2.684-14.064a2.046 2.046 0 00-1.625-2.393l-.383-.073"
    />
  );

export default SvgPicturePolaroid;
