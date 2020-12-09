import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerPlaying = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <path d="M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-15c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z" />,
    <path d="M9.77 15.821a.774.774 0 01-.77-.853V9.032a.78.78 0 01.163-.56.768.768 0 01.607-.293c.157 0 .308.047.437.135l5.56 3.008c.282.152.444.4.444.678s-.161.525-.443.678l-5.561 3.009a.774.774 0 01-.437.134zM10 14.66L14.918 12 10 9.339v5.321z" />
  );

export default SvgVideoPlayerPlaying;
