import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchMagicWand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-magic-wand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="retouch-magic-wand_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="retouch-magic-wand_svg__a"
      d="M10.464 12.914l2.122 2.122M3.564 19.815l9.022-9.022a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-8.825 8.825M7.5 7.5v2M8.5 8.5h-2M12.5 5.5v2M13.5 6.5h-2M18.5 9v3M20 10.5h-3"
    />
  );

export default SvgRetouchMagicWand;
