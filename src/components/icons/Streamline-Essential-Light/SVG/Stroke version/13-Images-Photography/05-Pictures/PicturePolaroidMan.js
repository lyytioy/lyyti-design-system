import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroidMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="picture-polaroid-man_svg__a"
      x={0.5}
      y={0.5}
      width={18}
      height={18}
      rx={1}
      ry={1}
    />,
    <path
      className="picture-polaroid-man_svg__a"
      d="M.5 15.5h18M4.343 20.5l14.8 2.98a1 1 0 001.178-.783L23.48 7.012a1 1 0 00-.78-1.178l-2.2-.442"
    />,
    <path
      className="picture-polaroid-man_svg__a"
      d="M17 15.5a1.991 1.991 0 00-1.066-1.118L11.543 12.5v-2s.866-.35.866-2.5c.684 0 .944-2-.008-2a2.629 2.629 0 00.441-2c-.491-2-5.331-2-5.822 0-2.066-.43-.42 1.712-.42 2-.981 0-.981 2 0 2 0 2.15.945 2.5.945 2.5v2l-4.393 1.882A1.991 1.991 0 002.086 15.5z"
    />
  );

export default SvgPicturePolaroidMan;
