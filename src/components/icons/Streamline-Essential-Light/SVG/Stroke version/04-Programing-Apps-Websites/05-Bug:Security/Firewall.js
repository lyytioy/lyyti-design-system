import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFirewall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".firewall_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="firewall_svg__a"
      x={0.5}
      y={13.5}
      width={23}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="firewall_svg__a"
      d="M8.164 11.507a5.321 5.321 0 012.693-3.944.5.5 0 01.729.581 3.943 3.943 0 00.32 3.023 1.23 1.23 0 001.233-.645.5.5 0 01.763-.108 2.875 2.875 0 01.722 1.086"
    />,
    <path
      className="firewall_svg__a"
      d="M18.549 11.5a7.476 7.476 0 00-.921-6.734h-.261L15.5 7.106a9.514 9.514 0 01-.014-5.879.5.5 0 00-.545-.649 9.511 9.511 0 00-7.077 4.884L6.536 4.168a.5.5 0 00-.73.035A7.474 7.474 0 004.45 11.5M.5 16.5h23M.5 20h23M4.5 13.5v3M11 17v3M16.5 13.5v3M4.5 20v3.5M16.5 20v3.5"
    />
  );

export default SvgFirewall;
