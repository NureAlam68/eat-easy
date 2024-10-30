import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Triangle } from "react-loader-spinner";

const Home = () => {
  const navigation = useNavigation();

  return (
    <div className="max-w-[1600px] container mx-auto">
      <Header></Header>
      {navigation.state === "loading" ? (
        <div className="max-w-[1600px] flex justify-center">
            <Triangle
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
