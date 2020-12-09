import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiColumns = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-columns_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="ui-columns_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="ui-columns_svg__a"
      d="M3.75 3.75h7.272M3.75 6.75l4.454.011M15 .75v9M19.5 3.75L18 5.25l1.5 1.5"
    />,
    <rect
      className="ui-columns_svg__a"
      x={0.75}
      y={14.25}
      width={22.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="ui-columns_svg__a"
      d="M3.75 17.25h7.272M3.75 20.25l4.454.011M15 14.25v9M19.5 17.25l-1.5 1.5 1.5 1.5"
    />
  );

export default SvgUiColumns;
