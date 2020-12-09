import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiColumns = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-columns_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="ui-columns_svg__a"
      x={0.5}
      y={2.5}
      width={23}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="ui-columns_svg__a"
      d="M3 4.5h8M3 6.5h5M3 8.5h3.5M15.5 2.5v8M21 5.54a.5.5 0 00-.812-.39l-1.2.96a.5.5 0 000 .78l1.2.96A.5.5 0 0021 7.46z"
    />,
    <rect
      className="ui-columns_svg__a"
      x={0.5}
      y={13.5}
      width={23}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="ui-columns_svg__a"
      d="M3 15.5h8M3 17.5h5M3 19.5h3.5M15.5 13.5v8M21 16.54a.5.5 0 00-.812-.39l-1.2.96a.5.5 0 000 .78l1.2.96a.5.5 0 00.812-.39z"
    />
  );

export default SvgUiColumns;
