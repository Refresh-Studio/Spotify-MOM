import axios from 'axios';

export const retrieveArtist = async (token: string, id: string) => {
  try {
    const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    return {
      slug: id,
      name: data.name,
      followers: data.followers.total,
      musicTags: data.genres,
      image: data.images[0].url
    };
  } catch (error: any) {
    console.error(`Failed to retrieve artist with ID: ${id}`, error?.message);
    const { data } = await axios.get(`https://api.spotify.com/v1/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    return {
      slug: id,
      name: data.display_name,
      followers: data.followers.total,
      musicTags: data.genres,
      image: data.images[0].url
    };
  }
};
