import EventsComponent from "../components/event";
import HeaderComponent from "../components/header";
import Footer from "../components/footer";

const Events = function () {
  return (
    <div className="w-full flex flex-col">
      <HeaderComponent />
      <EventsComponent />
      <Footer />
    </div>
  );
};

export default Events;
