import { ThreeCircles } from 'react-loader-spinner';

import { LodeWrapper } from './loader.styled';


export const Loader = () => {
  return (
<LodeWrapper>
     <ThreeCircles
  height="50"
  width="50"
  color="#696969"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
      />
      </LodeWrapper>
  );
};