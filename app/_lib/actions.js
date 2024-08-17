"use server";

import { auth, signIn, signOut } from "./auth";

export async function updateGuest(formData) {
  const session = await auth();

  if (!session)
    throw new Error("You need to be signed in to update your profile.");

  const nationalID = formData.get("nationalID");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
