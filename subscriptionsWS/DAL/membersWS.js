const URL = "https://jsonplaceholder.typicode.com/users";

const getAllMembers = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getAllMembers };
