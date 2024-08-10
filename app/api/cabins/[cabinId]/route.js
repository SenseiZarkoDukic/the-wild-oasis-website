import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    if (!cabin) {
      return NextResponse.json({ message: "Cabin not found" }, { status: 404 });
    }

    return NextResponse.json({ cabin, bookedDates });
  } catch (error) {
    // Log the error (optional)
    console.error("Error querying the database:", error);

    // Return a 500 status code with the error message
    return NextResponse.json(
      { message: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

// export async function POST() {}
