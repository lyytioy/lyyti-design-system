import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesReel = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-reel_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="movies-reel_svg__a" cx={15.5} cy={8.5} r={8} />,
    <path
      className="movies-reel_svg__a"
      d="M10.209 14.5H3a2.5 2.5 0 000 5h17.5a2 2 0 010 4h-10"
    />,
    <circle className="movies-reel_svg__a" cx={15.5} cy={8.5} r={1.5} />,
    <path
      className="movies-reel_svg__a"
      d="M16.839 5.288L17.8 3a6.412 6.412 0 00-4.6-.021v-.011l.957 2.3a3.489 3.489 0 012.678.006zM12.5 7.16L10 6.2a6.4 6.4 0 00-.021 4.6h-.012l2.422-.956a2.911 2.911 0 01.111-2.682zM14.16 11.5L13.2 14a6.406 6.406 0 004.59.022v.011l-.957-2.422a2.909 2.909 0 01-2.678-.111zM18.5 9.841l2.5.959a6.414 6.414 0 00.022-4.6h.01l-2.421.957a2.912 2.912 0 01-.111 2.681z"
    />
  );

export default SvgMoviesReel;
