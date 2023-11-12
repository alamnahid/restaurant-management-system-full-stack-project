import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import CategorieBox from "./CategorieBox";
import { categories } from "./categoriesData"

const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')

    return (
        <div>
            <Container>
                <div className="pt-4 mb-8 flex justify-between items-center overflow-x-auto">
                    {
                        categories?.map(item => <CategorieBox
                            key={item.label} 
                            icon={item.icon} 
                            label={item.label}
                            selected={category === item.label}
                        ></CategorieBox>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default Categories;