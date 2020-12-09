import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySilent = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <circle cx={8.5} cy={8} r={0.75} />,
    <circle cx={15.5} cy={8} r={0.75} />,
    <path d="M15 19.5a.503.503 0 01-.319-.115L12 17.151l-2.68 2.233a.501.501 0 01-.64-.769l2.539-2.116-2.539-2.115a.5.5 0 01.64-.769L12 15.849l2.68-2.233a.501.501 0 01.704.063.502.502 0 01-.063.705l-2.54 2.116 2.539 2.116a.5.5 0 01-.32.884z" />
  );

export default SvgSmileySilent;
