import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScan2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan-2_svg__a"
      d="M12 1.5v-1M6.978 2.779L6.5 1.901M3.18 6.304l-.84-.543M17.022 2.779l.478-.878M20.82 6.304l.84-.543M12 22.5v1M6.978 21.222L6.5 22.1M3.18 17.697l-.84.542M17.022 21.222l.478.878M20.82 17.697l.84.542"
    />,
    <circle className="iris-scan-2_svg__a" cx={12} cy={12} r={7} />,
    <path
      className="iris-scan-2_svg__a"
      d="M23.5 12s-5 7-11.5 7S.5 12 .5 12s5-7 11.5-7 11.5 7 11.5 7z"
    />,
    <circle className="iris-scan-2_svg__a" cx={12} cy={12} r={4} />,
    <path
      className="iris-scan-2_svg__a"
      d="M12 7v2M12 15v2M7 12h2M15 12h2M12 11.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgIrisScan2;
