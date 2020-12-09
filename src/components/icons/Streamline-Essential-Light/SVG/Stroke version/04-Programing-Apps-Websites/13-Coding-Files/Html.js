import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHtml = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".html_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="html_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="html_svg__a"
      d="M5.5 9.004v6M2.5 15.004v-6M2.5 12.004h3M7.5 9.004h4M9.5 9.004v6M13.5 15.004v-6l1.5 3 1.5-3v6M18.5 9v5a1 1 0 001 1h2"
    />
  );

export default SvgHtml;
