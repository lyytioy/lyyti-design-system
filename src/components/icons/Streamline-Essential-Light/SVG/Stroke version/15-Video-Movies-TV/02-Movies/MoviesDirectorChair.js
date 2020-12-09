import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesDirectorChair = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-director-chair_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="movies-director-chair_svg__a"
      d="M5.5 14.5V.5M18.5 14.5V.5M5.5 1.5h13v10h-13zM18.5 14.5h-13l-1.293 1.293a1 1 0 00.707 1.707h14.172a1 1 0 00.707-1.707zM3.917 16.578L2.5 9.5M20.083 16.578L21.5 9.5M5.5 9.5h-5M18.5 9.5h5M17 17.5l-10 6M7 17.5l10 6"
    />,
    <path
      className="movies-director-chair_svg__a"
      d="M11.753 3.674a.276.276 0 01.494 0l.8 1.6a.278.278 0 00.181.145l1.56.39a.275.275 0 01.2.207.278.278 0 01-.093.274l-1.111.926a.277.277 0 00-.093.273l.373 1.68a.276.276 0 01-.416.294l-1.506-.941a.278.278 0 00-.294 0l-1.506.941a.276.276 0 01-.416-.294l.373-1.68a.277.277 0 00-.093-.273L9.1 6.294a.278.278 0 01-.093-.274.275.275 0 01.2-.207l1.56-.39a.278.278 0 00.181-.145z"
    />
  );

export default SvgMoviesDirectorChair;
