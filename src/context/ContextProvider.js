import React,{ useState } from 'react' ;
import CreateContext from './CreateContext';

const ContectProvider = (props) => {
    const[userId,setUserId] = useState(0) ;

        return (
            <>
                <CreateContext.Provider value = { {
                    userId:userId ,
                    setUserId:setUserId 
                    }}>

                    {props.children}   

                </CreateContext.Provider> 
             </>
        )
}

export default ContectProvider ;