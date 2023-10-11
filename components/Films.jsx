import { useEffect, useState } from 'react';
import Film from './Film';

export default function MainGenDataComponent({ config: { columns, fetcher } }) {
  const
    [data, setData] = useState(null),
    [search, setSearch] = useState('red'),
    [d,setD] =useState();
    let i='';

  useEffect(() => { fetcher(search).then(d => setData(d)); }, [d]);

  return <>
    <input value={search} onInput={evt => setSearch(evt.target.value)} />
    <button onClick={()=>setD(data)}>search</button><hr/>
    <div className='container'>
    {data && <Film columns={columns} data={data} search={search}/>}         
    </div>
  </>;
}
