import { getUser } from "./userService";

export function createOrder(userId) {
  const user = getUser(userId);

  return {
    userName: user.name,
    status: "created"
  };
}
