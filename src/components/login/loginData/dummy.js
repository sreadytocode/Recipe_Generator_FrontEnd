import React from "react";
import { FiShoppingBag } from 'react-icons/fi';
import { AiOutlineCalendar, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';

export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'profile',
          icon: <IoMdContacts />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'shopping list',
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'pantry',
          icon: <FiShoppingBag />,
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'calendar',
          icon: <AiOutlineCalendar />,
        },
      ],
    },
  ];
  