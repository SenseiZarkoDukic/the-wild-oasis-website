import { getCabins } from "../_lib/data-service";

async function CabinNumber() {
  const cabins = await getCabins();
  const cabinNumber = cabins.length;
  return <span className="text-inherit">{` ${cabinNumber} `}</span>;
}

export default CabinNumber;
