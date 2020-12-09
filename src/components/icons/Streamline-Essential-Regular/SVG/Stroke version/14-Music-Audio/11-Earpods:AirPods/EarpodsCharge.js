import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsCharge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-charge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="earpods-charge_svg__a"
      d="M6.75 10.744V9M3.75 5.625A.375.375 0 104.125 6a.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods-charge_svg__a"
      d="M9.75 6.289v7.961h-3v-3.506a5.252 5.252 0 01-6-1.07V2.326A5.231 5.231 0 014.2.758a5.447 5.447 0 015.55 5.531zM17.25 10.744V9M20.25 5.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods-charge_svg__a"
      d="M14.25 6.289v7.961h3v-3.506a5.252 5.252 0 006-1.07V2.326A5.231 5.231 0 0019.8.758a5.447 5.447 0 00-5.55 5.531zM17.25 23.25H6.75a4.5 4.5 0 01-4.5-4.5v-4.5h19.5v4.5a4.5 4.5 0 01-4.5 4.5z"
    />,
    <path
      className="earpods-charge_svg__a"
      d="M12 16.5L10.5 18l2.25 1.5-1.5 1.5"
    />
  );

export default SvgEarpodsCharge;
