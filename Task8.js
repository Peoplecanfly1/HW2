const getUsers = async (url) => await fetch(url);

export default async function getUsersAsync(url) {
  try {
    const resposne = await getUsers(url);
    const [user] = await resposne.json();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

// getUsersAsync("https://jsonplaceholder.typicode.com/users");
