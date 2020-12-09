import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorPage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-page_svg__a"
      d="M21.5 5.5h1a1 1 0 011 1v13a1 1 0 01-1 1h-21a1 1 0 01-1-1v-13a1 1 0 011-1h1M7 23.5h10M10.5 20.5v3M13.5 20.5v3"
    />,
    <path
      className="monitor-page_svg__a"
      d="M4.5 15.5v-14a1 1 0 011-1h13a1 1 0 011 1v14"
    />,
    <rect
      className="monitor-page_svg__a"
      x={6.5}
      y={7.501}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="monitor-page_svg__a"
      d="M12.601 10.501H17.5M12.601 8.001H17.5M6.5 13.5h11M.5 17.5h23M4.5 4.5h15M6.75 2.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M8.75 2.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.75 2.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMonitorPage;
