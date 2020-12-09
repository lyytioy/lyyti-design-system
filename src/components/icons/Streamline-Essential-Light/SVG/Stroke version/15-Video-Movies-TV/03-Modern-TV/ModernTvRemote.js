import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvRemote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-remote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="modern-tv-remote_svg__a"
      d="M9.5 16.5H2A1.505 1.505 0 01.5 15V2A1.5 1.5 0 012 .5h20A1.5 1.5 0 0123.5 2v13a1.505 1.505 0 01-1.5 1.5h-1.5"
    />,
    <rect
      className="modern-tv-remote_svg__a"
      x={11.5}
      y={13.5}
      width={7}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-remote_svg__a"
      d="M14 15.75a.25.25 0 00-.25-.25.25.25 0 10.25.25M16.5 15.75a.25.25 0 00-.25-.25.25.25 0 10.25.25M14 18.25a.25.25 0 00-.25-.25.25.25 0 10.25.25M16.5 18.25a.25.25 0 00-.25-.25.25.25 0 10.25.25M14 20.75a.25.25 0 00-.25-.25.25.25 0 10.25.25M16.5 20.75a.25.25 0 00-.25-.25.25.25 0 10.25.25M18.274 7.457a6.5 6.5 0 00-6.548-.141M17.267 9.16a4.5 4.5 0 00-4.534-.1M16.256 10.868a2.492 2.492 0 00-2.512-.05"
    />
  );

export default SvgModernTvRemote;
