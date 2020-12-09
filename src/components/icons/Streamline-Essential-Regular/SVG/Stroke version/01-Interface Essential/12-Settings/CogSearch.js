import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="cog-search_svg__a"
      cx={9.81}
      cy={9.814}
      r={9.063}
      transform="rotate(-9.05 9.809 9.81)"
    />,
    <path className="cog-search_svg__a" d="M16.219 16.222l7.029 7.029" />,
    <circle className="cog-search_svg__a" cx={9.748} cy={9.751} r={3.75} />,
    <path
      className="cog-search_svg__a"
      d="M9.748 6.001v-1.8M9.748 15.301v-1.8M13.498 9.751h1.8M4.198 9.751h1.8M6.207 5.792l1.106 1.107M13.289 5.792l-1.107 1.107M6.207 13.71l1.106-1.106M13.289 13.71l-1.107-1.106M9.748 9a.75.75 0 11-.75.75.75.75 0 01.75-.75"
    />
  );

export default SvgCogSearch;
