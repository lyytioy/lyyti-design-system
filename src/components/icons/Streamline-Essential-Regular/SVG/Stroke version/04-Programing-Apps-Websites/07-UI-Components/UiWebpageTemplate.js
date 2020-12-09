import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageTemplate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-template_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="ui-webpage-template_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={6.75}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="ui-webpage-template_svg__a"
      d="M15.75.75V7.5M18 3.75l1.5 1.5 1.5-1.5"
    />,
    <rect
      className="ui-webpage-template_svg__a"
      x={0.75}
      y={11.25}
      width={22.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="ui-webpage-template_svg__a"
      d="M.75 17.25h22.5M19.5 19.919a.375.375 0 11-.375.375.375.375 0 01.375-.375M19.5 13.831a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgUiWebpageTemplate;
