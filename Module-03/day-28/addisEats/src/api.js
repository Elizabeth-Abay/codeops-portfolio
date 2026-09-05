const apiRequester = async () => {
    try{
        let res = await fetch('../public/dishes.json');

        
        if (!res.ok) throw Error('Error happened')

        let response = await res.json();

        return response;
    } catch(err){
        console.log(`Error ${err.message}`)
        throw Error('Error happened while catching')
    }
}

export default apiRequester;