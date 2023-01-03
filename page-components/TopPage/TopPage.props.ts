import {
  TopLevelCategory,
  TopPageModel,
} from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";

export interface TopPageProps extends React.ComponentProps<"div"> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
