"use server";

import { signIn, signOut } from "./auth";

export async function updateGuest() {
  console.log("Server action: updateProfile");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
