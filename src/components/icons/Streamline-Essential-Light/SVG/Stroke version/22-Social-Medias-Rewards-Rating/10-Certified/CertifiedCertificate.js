import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCertifiedCertificate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".certified-certificate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="certified-certificate_svg__a"
      d="M10 .5h10.5A2.5 2.5 0 0018 3v18a2.5 2.5 0 01-2.5 2.5M5 18.5v-4"
    />,
    <circle
      className="certified-certificate_svg__a"
      cx={20.5}
      cy={3}
      r={2.5}
    />,
    <path
      className="certified-certificate_svg__a"
      d="M15.5 23.5a2.5 2.5 0 010-5H5a2.5 2.5 0 000 5zM5 8.5a3.983 3.983 0 01-2-.535V13l2-1.5L7 13V7.965A3.973 3.973 0 015 8.5z"
    />,
    <circle className="certified-certificate_svg__a" cx={5} cy={4.5} r={4} />,
    <circle className="certified-certificate_svg__a" cx={5} cy={4.5} r={1.5} />
  );

export default SvgCertifiedCertificate;
