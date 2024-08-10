import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return NextResponse.json({ cabin, bookedDates });
  } catch (error) {
    return NextResponse.json({ message: error.message }, 500);
  }
}

// export async function POST() {}
