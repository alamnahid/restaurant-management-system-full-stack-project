import {useNavigate, useSearchParams} from 'react-router-dom'
import qs from 'query-string'
// import * as qs from 'qs'

const CategorieBox = ({label, icon:Icon, selected}) => {
    const [params, setParams] = useSearchParams()
    
    
    const navigate = useNavigate();
    const handleClick = ()=>{
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString())
            const updateedQuery = {...currentQuery, category: label}
            const url = qs.stringifyUrl({
                url: '/',
                query: updateedQuery,
            })
            navigate(url)
        }
    }
    
    params.get('category')

    return (
        <div onClick={()=>handleClick(label)} className={`flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'border-b-2 border-red-800' : ''}`}>
           <Icon size={26}/>
           <h1 className="text-xs font-medium">{label}</h1>
            
        </div>
    );
};

export default CategorieBox;