import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroidHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="picture-polaroid-human_svg__a"
      x={0.5}
      y={0.5}
      width={18}
      height={18}
      rx={1}
      ry={1}
    />,
    <path
      className="picture-polaroid-human_svg__a"
      d="M.5 15.5h18M4.343 20.5l14.8 2.98a1 1 0 001.178-.783L23.48 7.012a1 1 0 00-.78-1.178l-2.2-.442"
    />,
    <path
      className="picture-polaroid-human_svg__a"
      d="M3 15.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 019.5 2.5a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124A7.089 7.089 0 0116 15.5z"
    />
  );

export default SvgPicturePolaroidHuman;
