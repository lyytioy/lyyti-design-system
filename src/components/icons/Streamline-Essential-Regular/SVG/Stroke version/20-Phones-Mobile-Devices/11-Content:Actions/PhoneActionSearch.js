import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-search_svg__a"
      d="M14.25 12.75v7.768a2.732 2.732 0 01-2.733 2.732H4.983a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 014.983 2.25H8.25M2.25 18.75h12"
    />,
    <circle className="phone-action-search_svg__a" cx={15} cy={5.25} r={4.5} />,
    <path className="phone-action-search_svg__a" d="M18.18 8.43L21.75 12" />
  );

export default SvgPhoneActionSearch;
