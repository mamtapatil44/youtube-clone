import React, { useState } from 'react'
import { useEffect } from 'react'
import { VIDEO_CATEGORIES } from '../utils/constant'
import Button from './Button'

const ButtonList = () => {
  const [categoryList, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const data = await fetch(VIDEO_CATEGORIES);
    const jsonData = await data.json();
    setCategory(jsonData.items);
  };

  return (
    <div className="flex overflow-x-auto py-2 space-x-2">
      {categoryList.map((category) => (
        <Button key={category.id} name={category.snippet.title} />
      ))}
    </div>
  );
};

export default ButtonList