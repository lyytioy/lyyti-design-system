import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroidFour = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid-four_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="picture-polaroid-four_svg__a"
      x={0.75}
      y={13.5}
      width={9.75}
      height={9.75}
      rx={1}
      ry={1}
    />,
    <path className="picture-polaroid-four_svg__a" d="M.75 19.5h9.75" />,
    <rect
      className="picture-polaroid-four_svg__a"
      x={0.75}
      y={0.75}
      width={9.75}
      height={9.75}
      rx={1}
      ry={1}
    />,
    <path className="picture-polaroid-four_svg__a" d="M.75 6.75h9.75" />,
    <rect
      className="picture-polaroid-four_svg__a"
      x={13.5}
      y={0.75}
      width={9.75}
      height={9.75}
      rx={1}
      ry={1}
    />,
    <path className="picture-polaroid-four_svg__a" d="M13.5 6.75h9.75" />,
    <rect
      className="picture-polaroid-four_svg__a"
      x={13.5}
      y={13.5}
      width={9.75}
      height={9.75}
      rx={1}
      ry={1}
    />,
    <path className="picture-polaroid-four_svg__a" d="M13.5 19.5h9.75" />
  );

export default SvgPicturePolaroidFour;
