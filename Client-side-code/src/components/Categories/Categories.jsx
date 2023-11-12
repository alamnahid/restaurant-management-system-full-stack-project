import Container from "../Shared/Container";
import CategorieBox from "./CategorieBox";
import { categories } from "./categoriesData"

const Categories = () => {
    return (
        <div>
            <Container>
                <div className="pt-4 flex justify-between items-center overflow-x-auto">
                    {
                        categories?.map(categorie => <CategorieBox
                            key={categorie.label} icon={categorie.icon} label={categorie.label}
                        ></CategorieBox>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default Categories;