import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeRibbon1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-ribbon-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-ribbon-1_svg__a"
      d="M15.3 11.568a1.6 1.6 0 01-1.531.932h-1.605c-1.664 0-1.166-1-3.666-1v-3h.337C10.291 8.5 11.159 6.821 12 5c.275-.6 1.5-1 1.5.28V7.5h2.62a.661.661 0 01.624.666zM19.961 14.631l2.878 4.984c.275.476.056.791-.487.7l-2.865-.484-.987 2.728c-.188.517-.571.553-.852.079L14.893 18M4.039 14.631l-2.878 4.984c-.275.476-.056.791.487.7l2.865-.484L5.849 23.5 9.1 18"
    />,
    <path
      className="like-ribbon-1_svg__a"
      d="M20 8.5a2.781 2.781 0 00-1.755-2.586 2.784 2.784 0 00-3.658-3.658 2.783 2.783 0 00-5.173 0 2.784 2.784 0 00-3.661 3.658 2.782 2.782 0 000 5.172 2.784 2.784 0 003.658 3.658 2.783 2.783 0 005.173 0 2.784 2.784 0 003.658-3.658A2.781 2.781 0 0020 8.5z"
    />
  );

export default SvgLikeRibbon1;
