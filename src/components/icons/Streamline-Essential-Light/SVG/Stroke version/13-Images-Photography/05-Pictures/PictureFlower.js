import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureFlower = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-flower_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="picture-flower_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="picture-flower_svg__a"
      d="M11.5 15.5v4M.5 19.5h23M12.953 9.519a3.825 3.825 0 012.422-1.074c1.354.007 2.746.224 2.906 1.076-.125.921-1.54 1.141-2.781 1.089a3.6 3.6 0 01-2.547-1.091zM9.984 9.519a3.825 3.825 0 00-2.422-1.074c-1.354.007-2.746.224-2.906 1.076.125.921 1.54 1.141 2.781 1.089a3.6 3.6 0 002.547-1.091zM10.611 7.982a3.816 3.816 0 00-.236-2.638c-.665-1.181-1.53-2.291-2.354-2.017-.744.557-.248 1.9.4 2.959a3.593 3.593 0 002.19 1.696zM12.224 7.982a3.819 3.819 0 01.237-2.638c.664-1.181 1.529-2.291 2.352-2.017.746.557.248 1.9-.4 2.959a3.592 3.592 0 01-2.189 1.696zM10.6 10.986a3.822 3.822 0 01-.237 2.639c-.664 1.181-1.529 2.291-2.352 2.017-.746-.556-.248-1.9.4-2.96a3.6 3.6 0 012.189-1.696zM12.217 10.986a3.825 3.825 0 00.236 2.639c.665 1.181 1.53 2.291 2.354 2.017.744-.556.248-1.9-.4-2.96a3.6 3.6 0 00-2.19-1.696z"
    />
  );

export default SvgPictureFlower;
