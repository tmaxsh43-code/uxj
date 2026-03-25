import { getUser } from "./userService";

export function createOrder(userId) {
  const user = getUser(userId);
  return { user, status: "created" };
}
