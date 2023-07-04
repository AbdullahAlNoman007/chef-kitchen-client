import React from 'react';

const Fooditem = ({food}) => {
    const {image,title}=food
    return (
        <div className='my-4'>
        <p className='flex items-center foodtitle'> <img src={image} style={{height:'64px',width:'64px'}} className='mr-3' alt="" /> <span className='text-3xl font-lg'>{title}</span></p>
        <p className='text-slate-500'>Falli quidam ea mea, mea at gubergren incorr. <br />paulo postea eam, an cum laoreet maiorum, at atqui laur eum. Quas <br />omnium mea etr ea dolor tamquam nost.</p>
    </div>
    );
};

export default Fooditem;