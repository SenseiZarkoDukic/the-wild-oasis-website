import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation() {
  const [cabin, settings, bookedDates] = await Promise.all([
    getCabin(params.cabinId),
    getSettings(),
    getBookedDatesByCabinId(params.cabinId),
  ]);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}

export default Reservation;
