import { useQuery } from '@apollo/client';
// import React from 'react';
import {QUERY_SPIRIT, QUERY_INGREDIENT} from "../../utils/queries"


const useQueryMultiple = () => {
   
    const res1 = useQuery(QUERY_SPIRIT);
    const res2 = useQuery(QUERY_INGREDIENT);
    return [res1, res2];
    
}


export default useQueryMultiple;