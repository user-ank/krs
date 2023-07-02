import data from './userData.json' 

export const check = ({email, pass}) =>{
    for(let i = 0; i < data.length; i++)
    {
        if(data[i].email === email)
        {
            if(data[i].password === pass)
                return {ok : true, user : data[i]};
            else 
                return {ok : false};
        }
    }
    return {ok : false};
    // console.log(data);
}