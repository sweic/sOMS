import { useEffect, useState } from "react";

export const useCleanData = (newCacher: any) => {
  const [cleanedData, setCleanedData] = useState<any>({});
  useEffect(() => {
    if (newCacher === null || Object.keys(newCacher).length === 0) return;
    var tmpSections = [],
      tmpFoodItems = [];
    for (const item of newCacher.sections) {
      const newObj = Object.assign({}, item, {
        label: item["title"],
        value: item["id"],
      });
      tmpSections.push(newObj);
    }
    for (const item of newCacher.fooditems) {
      const newObj = Object.assign({}, item, {
        label: item["title"],
        value: item["id"],
      });
      tmpFoodItems.push(newObj);
    }
    setCleanedData({
      foodItems: tmpFoodItems,
      sections: tmpSections,
    });
  }, [newCacher]);

  return { cleanedData };
};
