import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTakingPicturesCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm5.5 16.5h-11a2 2 0 01-2-2v-5a2 2 0 012-2H8a.913.913 0 00.5-.207L9.793 6A1.872 1.872 0 0111 5.5h2a1.872 1.872 0 011.207.5L15.5 7.293a.913.913 0 00.5.207h1.5a2 2 0 012 2v5a2 2 0 01-2 2z" />,
    <circle cx={12} cy={12} r={3} />
  );

export default SvgTakingPicturesCircle;
