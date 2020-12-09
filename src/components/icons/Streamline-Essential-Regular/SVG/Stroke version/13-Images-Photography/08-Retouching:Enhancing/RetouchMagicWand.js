import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchMagicWand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-magic-wand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="retouch-magic-wand_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="retouch-magic-wand_svg__a"
      d="M9.233 13.53l2.698 2.697M3.451 19.313l8.48-8.48a1.27 1.27 0 011.8 0l.9.9a1.272 1.272 0 010 1.8L6.4 21.759M12.75 3.75v3M14.25 5.25h-3M6.75 7.5v3M8.25 9h-3M18.75 9v2.935M20.25 10.5h-2.935"
    />
  );

export default SvgRetouchMagicWand;
