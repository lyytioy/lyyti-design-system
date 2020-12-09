import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCertifiedDiploma = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".certified-diploma_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="certified-diploma_svg__a"
      cx={11.985}
      cy={11.992}
      r={3}
    />,
    <path
      className="certified-diploma_svg__a"
      d="M11.854 8.995l5.8-8.309c1.768 0 5.656 3.889 5.658 5.657l-8.322 5.825M8.989 11.848l-8.3 5.809c0 1.768 3.89 5.657 5.658 5.657l5.823-8.321"
    />,
    <path
      className="certified-diploma_svg__a"
      d="M14.995 12.167l6.198 6.198h-2.828v2.828l-6.198-6.197M9.878 14.122l-1.413 1.414M14.121 9.879l1.415-1.414"
    />
  );

export default SvgCertifiedDiploma;
