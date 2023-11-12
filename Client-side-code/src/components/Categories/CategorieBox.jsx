

const CategorieBox = ({label, icon:Icon}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
           <Icon/>
           <h1 className="text-xs font-medium">{label}</h1>
            
        </div>
    );
};

export default CategorieBox;