import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManNews = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-news_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-man-news_svg__cls-1"
      x={4}
      y={5}
      width={5}
      height={5}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="single-man-news_svg__cls-1"
      x={1}
      y={2}
      width={22}
      height={16}
      rx={1}
      ry={1}
    />,
    <path
      className="single-man-news_svg__cls-1"
      d="M12 18v4M4.5 22h15M20.5 15.5L17 14v-2s.866-.349.866-2.5c.684 0 .944-2-.007-2a2.627 2.627 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.429-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.151.945 2.5.945 2.5v2l-3.5 1.5"
    />
  );

export default SvgSingleManNews;
