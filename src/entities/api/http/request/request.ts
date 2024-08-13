import { instance } from "../../../../shared/api/service/instance";

const URL = instance;

export const fetchService =  {
  getCategoryList: async (): Promise<string[]> => {
    const data = await fetch(`${URL}/products/category-list`);

    return await data.json();
  },
  postCategoryAdd: async (body: {title: string}): Promise<{ title: string, id: number }> => {
    const data = await fetch(`${URL}/products/add`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    return await data.json();
  },
};
