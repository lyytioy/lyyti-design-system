import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cog-play_svg__a"
      d="M10.544 2.439a1.959 1.959 0 002.908 0l.94-1.042A1.959 1.959 0 0117.8 2.81l-.072 1.4a1.96 1.96 0 002.057 2.057l1.4-.072A1.959 1.959 0 0122.6 9.607l-1.042.94a1.959 1.959 0 000 2.908l1.042.94a1.959 1.959 0 01-1.413 3.411l-1.4-.072a1.961 1.961 0 00-2.057 2.057l.072 1.4a1.959 1.959 0 01-3.411 1.413l-.94-1.042a1.959 1.959 0 00-2.908 0L9.6 22.605a1.959 1.959 0 01-3.411-1.413l.072-1.4a1.96 1.96 0 00-2.057-2.057l-1.4.072a1.959 1.959 0 01-1.41-3.407l1.042-.94a1.959 1.959 0 000-2.908l-1.042-.94A1.959 1.959 0 012.807 6.2l1.4.072a1.958 1.958 0 002.058-2.061l-.072-1.4A1.959 1.959 0 019.6 1.4z"
    />,
    <path
      className="cog-play_svg__a"
      d="M14.998 12.235l-6-3.515v7.031l6-3.516z"
    />
  );

export default SvgCogPlay;
