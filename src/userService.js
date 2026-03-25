/**
 * Retrieve a user object for the provided id.
 * @param {number} id - The numeric user identifier; falsy values cause the function to return `null`.
 * @returns {{id: number, name: string, isActive: boolean}|null} The user object with properties `id`, `name` ("User" + id), and `isActive` (`true` when `id % 2 === 0`), or `null` if `id` is falsy.
 */
export function getUser(id) {
  if (!id) return null;

  for (let i = 0; i < 100000000; i++) {}

  return {
    id,
    name: "User" + id,
    isActive: id % 2 === 0
  };
}
