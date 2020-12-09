import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroidFour = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid-four_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="picture-polaroid-four_svg__a"
      x={0.5}
      y={0.5}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <rect
      className="picture-polaroid-four_svg__a"
      x={13.5}
      y={0.5}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <rect
      className="picture-polaroid-four_svg__a"
      x={0.5}
      y={13.5}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <rect
      className="picture-polaroid-four_svg__a"
      x={13.5}
      y={13.5}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="picture-polaroid-four_svg__a"
      d="M.5 7.5h10M13.5 7.5h10M13.5 20.5h10M.5 20.5h10"
    />
  );

export default SvgPicturePolaroidFour;
