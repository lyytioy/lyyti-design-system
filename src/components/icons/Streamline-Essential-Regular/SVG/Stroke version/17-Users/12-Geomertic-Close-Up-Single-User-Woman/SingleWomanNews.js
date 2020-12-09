import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanNews = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-news_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-woman-news_svg__cls-1"
      x={1.5}
      y={2.25}
      width={21}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-woman-news_svg__cls-1"
      d="M12 18.75v3M4.5 21.75h15M4.5 5.25H9v4.5H4.5zM19.224 15.75a4.51 4.51 0 00-2.383-2.591L15 15.75l-1.841-2.591a4.515 4.515 0 00-2.384 2.591"
    />,
    <circle className="single-woman-news_svg__cls-1" cx={15} cy={8.25} r={3} />,
    <path
      className="single-woman-news_svg__cls-1"
      d="M12 8.25S12 12 9.75 12M18 8.25S18 12 20.25 12"
    />
  );

export default SvgSingleWomanNews;
