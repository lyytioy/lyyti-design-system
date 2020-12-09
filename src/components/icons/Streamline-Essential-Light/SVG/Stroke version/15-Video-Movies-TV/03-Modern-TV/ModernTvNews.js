import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvNews = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-news_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="modern-tv-news_svg__a"
      d="M13.5 19a7.889 7.889 0 001.5 4H9a7.889 7.889 0 001.5-4zM7.5 23h9M.5 16h23"
    />,
    <rect
      className="modern-tv-news_svg__a"
      x={0.5}
      y={1}
      width={23}
      height={18}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-news_svg__a"
      d="M7.5 14v2M12.4 16a5 5 0 00-9.8 0M8.667 7a5.805 5.805 0 002.286-.467 3.478 3.478 0 00-6.459-1.3A5.809 5.809 0 008.667 7z"
    />,
    <circle className="modern-tv-news_svg__a" cx={7.5} cy={7} r={3.5} />,
    <rect
      className="modern-tv-news_svg__a"
      x={13.5}
      y={4}
      width={8}
      height={5}
      rx={1}
      ry={1}
    />
  );

export default SvgModernTvNews;
