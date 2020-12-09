import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".key-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="key-lock_svg__a"
      d="M5.979 12.53a5.5 5.5 0 105.32 7.005h1.213l1 .966 1-.961h1l1 .954 1-.954 1.5-.007 1.493-1.558L19 16.53h-7.716a5.515 5.515 0 00-5.305-4z"
    />,
    <circle className="key-lock_svg__a" cx={4.005} cy={18.03} r={1.5} />,
    <path
      className="key-lock_svg__a"
      d="M17 10.03a.25.25 0 11-.249.251.251.251 0 01.249-.251M17 10.53l.005 2.5"
    />,
    <path
      className="key-lock_svg__a"
      d="M22.505 17.505a1 1 0 001-1l.009-7.97a1 1 0 00-1-.995l-11-.009a1 1 0 00-.995 1v3.029M12.516 7.53l-.011-2.48a4.5 4.5 0 119-.04l.011 2.52"
    />
  );

export default SvgKeyLock;
