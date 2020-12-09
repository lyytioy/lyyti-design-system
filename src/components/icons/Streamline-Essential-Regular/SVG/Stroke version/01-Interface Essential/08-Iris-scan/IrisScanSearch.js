import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan-search_svg__a"
      d="M21.75 9.7a19.96 19.96 0 001.073-1.093 1.662 1.662 0 000-2.226C20.2 3.5 16.031.684 12 .751 7.969.684 3.8 3.5 1.179 6.385a1.663 1.663 0 000 2.226 18.849 18.849 0 007.082 4.955M9.745 10.5a3.75 3.75 0 116.005-3"
    />,
    <circle
      className="iris-scan-search_svg__a"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path className="iris-scan-search_svg__a" d="M23.25 23.25l-3.764-3.764" />
  );

export default SvgIrisScanSearch;
