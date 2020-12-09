import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".brightness_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="brightness_svg__a" cx={12} cy={12.001} r={4} />,
    <path
      className="brightness_svg__a"
      d="M12 .501v4M12 19.501v4M3.868 3.869l2.829 2.828M17.303 17.304l2.829 2.829M.5 12.001h4M19.5 12.001h4M3.868 20.133l2.829-2.829M17.303 6.697l2.829-2.828"
    />
  );

export default SvgBrightness;
