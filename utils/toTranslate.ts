// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import translate from "translate";
import { MenuItem, PageItem } from "../interfaces/menu.interface";

export default async function toTranslate(
  menu: MenuItem[]
): Promise<MenuItem[]> {
  let translatedMenu: MenuItem[] = [];

  await Promise.all(
    menu.map(async (el) => {
      let translatedPages: PageItem[] = [];

      // translateing title and category in menu item object
      await Promise.all(
        el.pages.map(async (page) => ({
          ...page,
          category: await translate(page.category, {
            from: "ru",
          }),
          title: await translate(page.title, {
            from: "ru",
          }),
        }))
      ).then((res: PageItem[]) => {
        // uppercase first latter in category field
        translatedPages = res.map((el) => ({
          ...el,
          category: el.category[0].toUpperCase() + el.category.slice(1),
        }));
      });

      return {
        ...el,
        _id: {
          secondCategory: await translate(el._id.secondCategory, {
            to: "en",
            from: "ru",
          }),
        },
        pages: translatedPages,
      };
    })
  ).then((res) => {
    translatedMenu = res;
  });

  return translatedMenu;
}
