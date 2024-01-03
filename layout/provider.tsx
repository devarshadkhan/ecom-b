import dynamic from 'next/dynamic';
import { Persistor } from 'redux-persist';
import VisuallyHidden from './visually-hidden';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  persistor: Persistor;
};

const PersistGateComponent = dynamic(() =>
  import('redux-persist/integration/react').then((mod) => mod.PersistGate)
);

const SSROutset = ({ children, persistor }: Props) => {
  if (typeof window !== 'undefined') {
    return (
      <PersistGateComponent persistor={persistor}>
        {children}
      </PersistGateComponent>
    );
  }
  return <VisuallyHidden>{children}</VisuallyHidden>;
};

export default SSROutset;
