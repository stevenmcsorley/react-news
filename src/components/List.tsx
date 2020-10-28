import React from 'react';
const List = (props: { space: any; }) => {
  const { space } = props;
  if (!space || space.length === 0) return <p>No images</p>;
  return (
    <div>
      
      <div className="grid-layout">   
      {space.map((nasa: { href: string | number | null | undefined; links: { href: string; }[]; }) => {
        return (
          <div key={nasa.href} className='grid-item'>
            <img src={nasa.links[0].href} loading="lazy" className='nasa-img' alt=''/>
          </div>
        );
      })}
      </div>
    </div>
  );
};
export default List;
