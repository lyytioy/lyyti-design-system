import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserGauge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-gauge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="browser-gauge_svg__a"
      x={0.75}
      y={2.25}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="browser-gauge_svg__a"
      d="M.75 6.75h22.5M13.591 18.091a2.25 2.25 0 01-3.182-3.182c.879-.879 6.364-3.182 6.364-3.182s-2.304 5.485-3.182 6.364zM4.5 17.25H6M6.696 11.946l1.226 1.226M12 9.75v.75M19.5 17.25H18"
    />
  );

export default SvgBrowserGauge;
