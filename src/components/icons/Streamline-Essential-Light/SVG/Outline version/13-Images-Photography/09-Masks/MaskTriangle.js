import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 23.5c-.827 0-1.5-.673-1.5-1.5V2C.5 1.173 1.173.5 2 .5h20c.827 0 1.5.673 1.5 1.5v20c0 .827-.673 1.5-1.5 1.5H2zm0-22a.5.5 0 00-.5.5v20a.5.5 0 00.5.5h20a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2z" />,
    <path d="M4.953 19.504a.777.777 0 01-.768-.653.784.784 0 01.115-.552l7.026-13.585c.15-.288.395-.453.674-.453s.524.165.674.452L19.7 18.299a.779.779 0 01-.657 1.206.612.612 0 01-.074-.004H5.031a1.017 1.017 0 01-.078.003zM18.678 18.5L12 5.588 5.322 18.5h13.356z" />
  );

export default SvgMaskTriangle;
