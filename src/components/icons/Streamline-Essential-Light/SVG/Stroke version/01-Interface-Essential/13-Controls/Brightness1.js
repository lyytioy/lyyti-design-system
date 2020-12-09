import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrightness1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".brightness-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="brightness-1_svg__a" cx={12} cy={12.001} r={2} />,
    <path
      className="brightness-1_svg__a"
      d="M5.5 12.001h2M7.403 16.597l1.414-1.413M12 18.501v-2M16.596 16.597l-1.414-1.414M18.5 12.001h-2M16.596 7.406L15.182 8.82M12 5.501v2M7.403 7.406L8.817 8.82"
    />
  );

export default SvgBrightness1;
