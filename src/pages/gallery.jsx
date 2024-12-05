import Footer from "../components/footer";
import Galleries from "../components/galleries";
import HeaderComponent from "../components/header";

const Gallerry = function () {
  return (
    <div className="w-full flex flex-col gap-5">
      <HeaderComponent />
      <Galleries />
      <Footer />
    </div>
  );
};

export default Gallerry;
