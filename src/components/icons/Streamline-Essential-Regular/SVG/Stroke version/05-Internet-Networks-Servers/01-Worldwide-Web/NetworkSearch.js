import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-search_svg__a" cx={15.75} cy={15.75} r={5.25} />,
    <path
      className="network-search_svg__a"
      d="M23.25 23.25l-3.788-3.788M12 23.25A11.25 11.25 0 1123.25 12"
    />,
    <path
      className="network-search_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25H9M2.999 5.25H21M2.048 17.25h5.166M14.711 1.079a16.184 16.184 0 012.2 6.416"
    />
  );

export default SvgNetworkSearch;
