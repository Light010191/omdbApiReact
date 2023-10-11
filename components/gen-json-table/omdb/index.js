const
  API_URL = 'https://www.omdbapi.com/?apikey=7a08d12c&s=',
  config = {
    API_URL,
    columns: [
      { title: 'Id', getVal: ({ id }) => id },
      { title: 'Title', getVal: obj => obj.Title },
      { title: 'Year', getVal: ({ Year }) => Year },
      { title: 'Img', getVal: ({ Poster }) => Poster },
      { title: 'Poster', getVal: ({ Poster }) => <img src={Poster} alt={name} /> },
    ],
    async fetcher(search) {
      const
        response = await fetch(API_URL+search);
      if (!response.ok) throw new Error('fetch ' + response.status);
      return (await response.json()).Search.map(obj => Object.assign(obj, { id: obj.imdbID }));
    }
  };

export default config;