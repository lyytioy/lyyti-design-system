import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCertifiedCertificate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".certified-certificate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="certified-certificate_svg__a"
      d="M6.75 18.75V21a2.25 2.25 0 01-2.25 2.25H15A2.25 2.25 0 0017.25 21V3.91c0-.566.438-3.16 3-3.16a3 3 0 013 3v3h-6M20.25.75h-9M2.737 8.983l-.805 5.879a.751.751 0 001.269.666l2.049-2.05 2.05 2.05a.751.751 0 001.269-.666l-.8-5.879"
    />,
    <circle
      className="certified-certificate_svg__a"
      cx={5.25}
      cy={5.25}
      r={4.5}
    />,
    <path
      className="certified-certificate_svg__a"
      d="M5.25 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgCertifiedCertificate;
