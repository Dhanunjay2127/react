async function getUserData() {
  let user = await fetch("https://randomuser.me/api/");
  return user.json();
}
export default getUserData;
