import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cloud-search_svg__a" cx={15.75} cy={15.75} r={5.25} />,
    <path
      className="cloud-search_svg__a"
      d="M23.25 23.25l-3.787-3.787M23.113 12.026A4.878 4.878 0 0018.375 6a4.844 4.844 0 00-2.764.865A7.5 7.5 0 107.5 15.713"
    />
  );

export default SvgCloudSearch;
