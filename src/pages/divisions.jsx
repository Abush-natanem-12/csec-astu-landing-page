import DivisionsComponent from "../components/divisions";
import HeaderComponent from "../components/header";
import Footer from "../components/footer";

const Divisions = function () {
  return (
    <div className="w-full flex flex-col">
      <HeaderComponent />
      <DivisionsComponent />
      <Footer />
    </div>
  );
};

export default Divisions;
