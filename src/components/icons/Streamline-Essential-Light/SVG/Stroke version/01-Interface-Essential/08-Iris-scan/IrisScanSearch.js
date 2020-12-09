import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan-search_svg__a"
      d="M21.559 17.03a4.53 4.53 0 11-4.53-4.53 4.53 4.53 0 014.53 4.53zM23.5 23.5l-3.268-3.268"
    />,
    <circle className="iris-scan-search_svg__a" cx={12} cy={7} r={3.5} />,
    <path
      className="iris-scan-search_svg__a"
      d="M12 5.5A1.5 1.5 0 1110.5 7M19.315 10.925a22.883 22.883 0 004.061-3.6.5.5 0 000-.656C22.213 5.352 17.562.5 12 .5S1.787 5.352.624 6.672a.5.5 0 000 .656c1.13 1.283 5.554 5.9 10.906 6.16"
    />
  );

export default SvgIrisScanSearch;
