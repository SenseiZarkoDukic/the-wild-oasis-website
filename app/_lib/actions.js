import { signIn } from "./auth";

export default async function signInAction() {
  await signIn();
}
