import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySpoilt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <circle cx={8.25} cy={9} r={1.125} />,
    <circle cx={15.75} cy={9} r={1.125} />,
    <path d="M16.5 18a.743.743 0 01-.53-.22l-1.72-1.72-1.72 1.72c-.141.142-.33.22-.53.22s-.389-.078-.53-.22l-1.72-1.72-1.72 1.72c-.141.142-.33.22-.53.22s-.389-.078-.53-.22a.752.752 0 010-1.061l2.25-2.25a.744.744 0 011.06 0l1.72 1.72 1.72-1.72a.744.744 0 011.06 0l2.25 2.25A.752.752 0 0116.5 18z" />
  );

export default SvgSmileySpoilt;
