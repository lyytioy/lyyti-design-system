import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogSquare1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-square-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="cog-square-1_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <circle className="cog-square-1_svg__a" cx={11.997} cy={12.001} r={2.5} />,
    <path
      className="cog-square-1_svg__a"
      d="M11.1 6.051a1.22 1.22 0 001.81 0l.58-.651a1.219 1.219 0 012.122.879l-.045.872a1.221 1.221 0 001.28 1.28l.872-.045a1.219 1.219 0 01.879 2.122l-.648.585a1.218 1.218 0 000 1.81l.648.585a1.219 1.219 0 01-.879 2.122l-.872-.045a1.221 1.221 0 00-1.28 1.28l.045.872a1.219 1.219 0 01-2.122.879l-.585-.648a1.22 1.22 0 00-1.81 0l-.585.648a1.219 1.219 0 01-2.122-.879l.044-.872a1.219 1.219 0 00-1.279-1.28l-.872.045a1.219 1.219 0 01-.881-2.119l.648-.585a1.22 1.22 0 000-1.81l-.648-.585a1.219 1.219 0 01.879-2.122l.872.045a1.219 1.219 0 001.279-1.28l-.044-.872A1.219 1.219 0 0110.51 5.4z"
    />
  );

export default SvgCogSquare1;
