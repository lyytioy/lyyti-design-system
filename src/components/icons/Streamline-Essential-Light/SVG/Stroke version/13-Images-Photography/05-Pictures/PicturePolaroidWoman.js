import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroidWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="picture-polaroid-woman_svg__a"
      x={0.5}
      y={0.5}
      width={18}
      height={18}
      rx={1}
      ry={1}
    />,
    <path
      className="picture-polaroid-woman_svg__a"
      d="M.5 15.5h18M4.343 20.5l14.8 2.98a1 1 0 001.178-.783L23.48 7.012a1 1 0 00-.78-1.178l-2.2-.442"
    />,
    <path
      className="picture-polaroid-woman_svg__a"
      d="M11.413 12.191a6.158 6.158 0 004.252-1.128c-.643-.643-1.085-1.046-1.254-3.54C14.159 3.807 11.653 2.5 9.5 2.5S4.841 3.807 4.589 7.523c-.169 2.494-.611 2.9-1.254 3.54a6.177 6.177 0 004.276 1.127"
    />,
    <path
      className="picture-polaroid-woman_svg__a"
      d="M16.452 15.5a29.776 29.776 0 00-4.57-1.9.757.757 0 01-.493-.709v-1.38a.756.756 0 01.245-.557 2.718 2.718 0 00.888-2.029V7.033A4.9 4.9 0 019.5 5.324a4.9 4.9 0 01-3.022 1.709v1.889a2.718 2.718 0 00.888 2.029.756.756 0 01.245.557v1.38a.757.757 0 01-.493.709 29.732 29.732 0 00-4.57 1.9"
    />
  );

export default SvgPicturePolaroidWoman;
