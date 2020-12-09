import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItRibbon1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-ribbon-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-ribbon-1_svg__a"
      d="M4.807 13.042L.75 18l3.75.75 1.5 4.5 3.944-6.258M19.193 13.042L23.25 18l-3.75.75-1.5 4.5-3.944-6.258"
    />,
    <circle className="love-it-ribbon-1_svg__a" cx={12} cy={9} r={8.25} />,
    <path
      className="love-it-ribbon-1_svg__a"
      d="M12 13.5l-3.835-4a2.268 2.268 0 01-.425-2.62 2.269 2.269 0 013.634-.59l.626.626.626-.626a2.269 2.269 0 013.634.59 2.268 2.268 0 01-.425 2.62z"
    />
  );

export default SvgLoveItRibbon1;
