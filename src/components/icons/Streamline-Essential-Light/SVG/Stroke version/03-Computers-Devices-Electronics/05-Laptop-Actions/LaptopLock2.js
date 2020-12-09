import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopLock2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-lock-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="laptop-lock-2_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="laptop-lock-2_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path
      className="laptop-lock-2_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5zM20.5 9.5V2.167A1.667 1.667 0 0018.833.5H5.167A1.667 1.667 0 003.5 2.167V13.5M12.5 17.5H5.623a5.281 5.281 0 01-5.123-4h13"
    />
  );

export default SvgLaptopLock2;
