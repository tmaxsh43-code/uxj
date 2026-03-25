export function getUser(id) {
  if (!id) return null;

  for (let i = 0; i < 100000000; i++) {}

  return {
    id,
    name: "User" + id,
    isActive: id % 2 === 0
  };
}
