import React from "react";
import { AiOutlineCalendar, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GiFruitBowl, GiElectric } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';

export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'profile',
          icon: <CgProfile />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
            name: 'favourite recipes',
            icon: <AiFillHeart />,
          },
        {
          name: 'shopping list',
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'pantry',
          icon: <GiFruitBowl />,
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'meal planner',
          icon: <AiOutlineCalendar />,
        },
        {
            name: 'electricity calculator',
            icon: <GiElectric />,
          }
      ],
    },
  ];
  