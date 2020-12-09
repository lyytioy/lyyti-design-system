import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ranking-ribbon_svg__a"
      d="M4.391 16.8L.5 19.72l2.5.5-.5 2.5s4-1.5 4-3.5-3.5-2.5-3.5-4M7 8.5a19.5 19.5 0 00-3.47 1.421A1 1 0 003 10.8v4.417a18.819 18.819 0 019-2.5 18.819 18.819 0 019 2.5V10.8a1 1 0 00-.529-.883 19.619 19.619 0 00-3.426-1.41M6.5 19.221v-5.564M19.606 16.8l3.894 2.92-2.5.5.5 2.5s-4-1.5-4-3.5 3.5-2.5 3.5-4M17.5 19.221v-5.564"
    />,
    <path
      className="ranking-ribbon_svg__a"
      d="M11.863 1.478c.076-.264.2-.264.275 0L13 4.5h3.5c.275 0 .327.144.116.32L14 7l1.324 3.532c.1.258-.008.336-.231.178L12 8.5l-3.093 2.206c-.224.159-.328.08-.231-.178L10 7 7.384 4.817c-.211-.176-.159-.32.116-.32H11z"
    />
  );

export default SvgRankingRibbon;
