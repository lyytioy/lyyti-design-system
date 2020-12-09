import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicDj = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-dj_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="modern-music-dj_svg__a" cx={12} cy={8} r={3.5} />,
    <path
      className="modern-music-dj_svg__a"
      d="M6.5 10.5a2 2 0 010-4M17.5 10.5a2 2 0 000-4M20.262 14.1a1 1 0 00-.916-.6H4.654a1 1 0 00-.916.6L.5 21.5h23z"
    />,
    <ellipse
      className="modern-music-dj_svg__a"
      cx={7}
      cy={17.5}
      rx={2.5}
      ry={2}
    />,
    <ellipse
      className="modern-music-dj_svg__a"
      cx={17}
      cy={17.5}
      rx={2.5}
      ry={2}
    />,
    <path
      className="modern-music-dj_svg__a"
      d="M11.5 17.5h1M10.5 19.5h3M7 17.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M17 17.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M.5 21.5h23v1a1 1 0 01-1 1h-21a1 1 0 01-1-1v-1zM17.5 10.5V6a5.5 5.5 0 00-11 0v4.5"
    />
  );

export default SvgModernMusicDj;
