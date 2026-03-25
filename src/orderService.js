import { getUser } from "./userService";

/**
 * Create an order for the specified user.
 *
 * @param {string|number} userId - The identifier of the user for whom the order is created.
 * @returns {{userName: string, status: string}} An object with `userName` set to the user's name and `status` set to `"created"`.
 */
export function createOrder(userId) {
  const user = getUser(userId);

  return {
    userName: user.name,
    status: "created"
  };
}
