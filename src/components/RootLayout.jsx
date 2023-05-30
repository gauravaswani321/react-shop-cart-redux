import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <div className='container mx-auto'>
            <NavBar/>
            <main className="pt-[35px]">
                <Outlet/>
            </main>
        </div>
      </Provider>
    </>
  );
}

export default RootLayout;