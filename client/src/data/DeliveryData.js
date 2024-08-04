import Burger from '../assets/images/burger.png';
import AllItems from '../assets/icons/AllItems.png';
import Burgers from '../assets/icons/Burgers.png';
import Buriyani from '../assets/icons/Buriyani.png';
import Combas from '../assets/icons/Combos.png';
import IceCreams from '../assets/icons/IceCreams.png';
import KidsLove from '../assets/icons/KidsLove.png';
import RiceItems from '../assets/icons/RiceItems.png';
import Shakes from '../assets/icons/Shakes.png';
import Submarines from '../assets/icons/Submarines.png';

export const items = [
    {
      id: 1,
      image: Burger,
      name: 'Beef Burger',
      description: 'Description for Item 3',
      sizes: [
        {size: 'Small', price: 1200 },
        {size: 'Medium', price: 3000 }
      ],
      normalPrice: 1200,
      category: 'Ice Cream'
    },
    {
      id: 2,
      image: Burger,
      name: 'Chicken Bulty Burger',
      description: 'Description for Item 1',
      sizes: [
        {size: 'Small', price: 1000 },
        {size: 'Large', price: 1999 }
      ],
      normalPrice: 1000,
      category: 'Burgers'
    },
    {
      id: 3,
      image: Burger,
      name: 'Item 2',
      description: 'Description for Item 2',
      sizes: [
        { size: 'Small', price: 1200 },
        { size: 'Medium', price: 1800 }
      ],
      normalPrice: 1500,
      category: 'Submarine'
    },
    {
      id: 4,
      image: Burger,
      name: 'Item 3',
      description: 'Description for Item 3',
      sizes: [
        { size: 'Small', price: 1200 },
        { size: 'Medium', price: 1008 }
      ],
      normalPrice: 1000,
      category: 'Combos'
    },
    {
      id: 5,
      image: Burger,
      name: 'Burger',
      description: 'Description for Item 1',
      sizes: [
        { size: 'Small', price: 1000 },
        { size: 'Large', price: 1500 }
      ],
      normalPrice: 1250,
      category: 'Burgers'
    },
    
  ];


  export const categories = [
    { name: 'All Items', image: AllItems },
    { name: 'Combos', image: Combas },
    { name: 'Burgers', image: Burgers },
    { name: 'Submarine', image: Submarines },
    { name: 'Rice Items', image: RiceItems },
    { name: 'Buriyani', image: Buriyani },
    { name: 'Kids Love', image: KidsLove },
    { name: 'Ice Cream', image: IceCreams },
    { name: 'Shakes', image: Shakes },
];
  