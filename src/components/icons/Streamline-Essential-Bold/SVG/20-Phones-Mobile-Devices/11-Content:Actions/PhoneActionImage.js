import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17 0H7a3 3 0 00-3 3v18a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3zm1 19a.5.5 0 01-.5.5h-11A.5.5 0 016 19V3.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5z" />,
    <path d="M15.509 10.927a1 1 0 00-1.588-.068L12.258 13l-1.775-1.357a1 1 0 00-1.274.207l-1.478 2.386a.5.5 0 00.425.764H16.5a.5.5 0 00.46-.7z" />,
    <circle cx={9.258} cy={7.5} r={1.5} />
  );

export default SvgPhoneActionImage;
