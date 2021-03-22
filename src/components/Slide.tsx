import { Slide as MuiSlide, SlideProps as MuiSlideProps } from '@material-ui/core';

export type SlideProps = MuiSlideProps;

const Slide = (props: SlideProps): JSX.Element => {
  return <MuiSlide {...props} />;
};

Slide.defaultProps = {
  direction: 'left',
};

export default Slide;
