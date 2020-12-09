import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCog2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cog-2_svg__a" cx={12} cy={12.001} r={2.5} />,
    <circle className="cog-2_svg__a" cx={12} cy={12.001} r={8} />,
    <path
      className="cog-2_svg__a"
      d="M12 4.001v-3.5M17.657 6.344l2.475-2.475M20 12.001h3.5M17.657 17.658l2.475 2.475M12 20.001v3.5M6.343 17.658l-2.475 2.475M4 12.001H.5M6.343 6.344L3.868 3.869"
    />
  );

export default SvgCog2;
