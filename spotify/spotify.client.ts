import axios from 'axios';

export const retrieveArtists = async (token: string, ids: string[]) => {
  try {
    const { data } = await axios.get(`https://api.spotify.com/v1/artists?ids=${ids.join(',')}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const artists = data.artists;
    return artists.reduce((acc: unknown[], item: { id: string }) => {
      if (ids.includes(item.id)) {
        acc.push({
          slug: item.id,
          name: data.name,
          followers: data.followers.total,
          musicTags: data.genres,
          image: data.images[0].url
        });
      }
    });
  } catch (error: any) {
    console.error(`Failed to retrieve artist with ID: ${id}`, error?.message);
    return [];
  }
};
