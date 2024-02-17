import react from 'react';

export const Each =({render,of}) =>
Children.toArray(of.map((items,index)=>render(items,index)))