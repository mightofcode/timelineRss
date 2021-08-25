import { MenuBar } from '@/components';
import { useLocation } from 'umi';
import { StoreProvider } from 'think-react-store';
import * as store from '../stores';
import Tooltip from "../components/tooltip";

function BasicLayout(props) {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];

  console.log(location.pathname);

  return (
    <StoreProvider store={store}>
      {/*<MenuBar*/}
      {/*  show={paths.includes(location.pathname)}*/}
      {/*  pathname={location.pathname}*/}
      {/*/>*/}
      {props.children}

    </StoreProvider>
  );
}

export default BasicLayout;
