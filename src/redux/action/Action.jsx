export const addToCart =(item)=>({
    type:'addToCart',
    payload:item
});

export const removeFromCart=(id)=>({
    type:'removeFromCart',
    payload:id
});