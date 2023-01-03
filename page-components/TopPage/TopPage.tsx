import { TopPageProps } from "./TopPage.props";

export function TopPageComponent({
  page,
  products,
  firstCategory,
}: TopPageProps): JSX.Element {
  return <div>{products && products.length}</div>;
}
