import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGiftBox1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gift-box-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gift-box-1_svg__a"
      d="M18.75 13.5H5.25v8.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5z"
    />,
    <rect
      className="gift-box-1_svg__a"
      x={3.75}
      y={9}
      width={16.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="gift-box-1_svg__a"
      d="M12 9v14.25M12 2.25V.75M17.25 3.311l1.061-1.061M20.307 6.287l1.386-.574M6.75 3.311L5.689 2.25M3.693 6.287l-1.386-.574"
    />
  );

export default SvgGiftBox1;
