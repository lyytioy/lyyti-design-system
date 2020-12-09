import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeDislike = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-dislike_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-dislike_svg__a"
      d="M7.5 9.308q.294-.151.59-.3c3.637-1.838 3.459-1.48 6.573-1.48 1.3 0 1.961.846 2.345 2.085v.008l.945 3.154v.006a.987.987 0 01-.948 1.274h-2.43a1 1 0 00-.785.384.981.981 0 00-.173.854l.437 1.649a.838.838 0 01-.161.745.851.851 0 01-1.353-.045l-2.423-3.725a1 1 0 00-.81-.417H7.5M6.5 14.5h1v-7h-1"
    />,
    <circle className="like-dislike_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgLikeDislike;
