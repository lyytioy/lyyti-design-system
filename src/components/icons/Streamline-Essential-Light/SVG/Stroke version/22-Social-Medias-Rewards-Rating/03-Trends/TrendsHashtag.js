import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTrendsHashtag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".trends-hashtag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="trends-hashtag_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="trends-hashtag_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="trends-hashtag_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M11.5 9l-1 5.5M14.5 9l-1 5.5M10 10.5h5.5M9.5 12.5H15M20.5 9.466a3.251 3.251 0 01.262 4.269l-.26.336"
    />,
    <path
      className="trends-hashtag_svg__a"
      d="M21.005 7l.176.131a5.751 5.751 0 01.009 9.223l-.205.153M3.5 9.466a3.251 3.251 0 00-.262 4.269l.26.336"
    />,
    <path
      className="trends-hashtag_svg__a"
      d="M3 7l-.176.131a5.751 5.751 0 00-.009 9.223l.205.153"
    />
  );

export default SvgTrendsHashtag;
