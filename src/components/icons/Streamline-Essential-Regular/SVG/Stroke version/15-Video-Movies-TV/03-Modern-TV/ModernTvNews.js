import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvNews = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-news_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="modern-tv-news_svg__a"
      d="M15.75 22.5h-7.5L9 18h6l.75 4.5zM6 22.5h12M.75 15h22.5"
    />,
    <rect
      className="modern-tv-news_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={16.5}
      rx={2}
      ry={2}
    />,
    <circle className="modern-tv-news_svg__a" cx={8.25} cy={7.5} r={3} />,
    <path
      className="modern-tv-news_svg__a"
      d="M11.925 15a3.751 3.751 0 00-7.35 0"
    />,
    <rect
      className="modern-tv-news_svg__a"
      x={14.25}
      y={4.5}
      width={6}
      height={3.75}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgModernTvNews;
