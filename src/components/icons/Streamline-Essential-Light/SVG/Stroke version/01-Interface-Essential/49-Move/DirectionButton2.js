import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButton2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="direction-button-2_svg__a" cx={12} cy={11.998} r={2} />,
    <path
      className="direction-button-2_svg__a"
      d="M18.5 15.5a.5.5 0 00.835.372l4-3.5a.5.5 0 000-.744l-4-3.5a.5.5 0 00-.835.372zM5.5 8.5a.5.5 0 00-.835-.372l-4 3.5a.5.5 0 000 .744l4 3.5A.5.5 0 005.5 15.5zM15.5 5.5a.5.5 0 00.372-.835l-3.5-4a.5.5 0 00-.744 0l-3.5 4A.5.5 0 008.5 5.5zM8.5 18.5a.5.5 0 00-.372.835l3.5 4a.5.5 0 00.744 0l3.5-4a.5.5 0 00-.372-.835z"
    />
  );

export default SvgDirectionButton2;
