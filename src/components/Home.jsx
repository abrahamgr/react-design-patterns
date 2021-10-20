
import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ name }) => {
  return <h1>{name}!</h1>
};

const RightHandComponent = ({ name }) => {
  return <p>{name}!</p>
};

export const Home = () => {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHandComponent name="Hello"/>
      <RightHandComponent name="My friend"/>
    </SplitScreen>
  );
};