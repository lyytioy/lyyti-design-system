import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 24A2.252 2.252 0 010 21.75v-10.5a.75.75 0 01.75-.75h.75V9H.75A.75.75 0 010 8.25v-6A2.252 2.252 0 012.25 0h10.56c.644 0 1.256.276 1.684.757l4.417 4.283a2.245 2.245 0 01.589 1.514V9A.75.75 0 0118 9V6.555a.756.756 0 00-.162-.466l-4.411-4.277a.556.556 0 01-.047-.05.753.753 0 00-.57-.262H2.25a.75.75 0 00-.75.75V7.5h.75a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H1.5v9.75c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z" />,
    <path d="M6.75 7.5A.75.75 0 016 6.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM11.25 7.5a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM13.645 24a3.015 3.015 0 01-1.457-.377 3.004 3.004 0 01-1.165-4.08l3.676-6.617a2.996 2.996 0 012.617-1.543c1.092 0 2.099.591 2.627 1.543l3.679 6.616A3 3 0 0121.001 24h-7.356zm3.672-11.117a1.494 1.494 0 00-1.307.771l-3.676 6.617c-.194.35-.241.754-.13 1.14a1.497 1.497 0 001.442 1.088H21c.401 0 .777-.156 1.061-.439a1.497 1.497 0 00.25-1.789l-3.68-6.617a1.501 1.501 0 00-1.314-.771z" />,
    <path d="M17.25 18.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V18a.75.75 0 01-.75.75z" />,
    <circle cx={17.321} cy={20.25} r={1.125} />
  );

export default SvgSdCardWarning;