const API_PREFIX = 'https://whatever';

export default async function handler(req, res) {
  console.log(req.body);
  // const user = await Axios.get(`/${API_PREFIX}/createUser`, req.payload);

  try {
    res.status(200).json({ message: 'User was successfully created' });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
