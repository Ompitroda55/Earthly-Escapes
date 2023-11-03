'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill,
  GiGrass,
  GiHut, 
  GiOakLeaf,
  GiHealing,
  GiAxeInStump,
  GiAxeSword,
  GiAxeInLog,
  GiHolyOak,
  GiFarmer,
  GiForest,
  GiGalaxy,
  GiPalmTree,
  GiHills,
  GiCondorEmblem,
  GiDekuTree,
  GiTempleGate,
  GiDesert,
  GiFarmTractor,
  GiHutsVillage,
  GiVanillaFlower,

} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


// export const categories = [
//   {
//     label: 'Beach',
//     icon: TbBeach,
//     description: 'This property is close to the beach!',
//   },
//   {
//     label: 'Windmills',
//     icon: GiWindmill,
//     description: 'This property is has windmills!',
//   },
//   {
//     label: 'Modern',
//     icon: MdOutlineVilla,
//     description: 'This property is modern!'
//   },
//   {
//     label: 'Countryside',
//     icon: TbMountain,
//     description: 'This property is in the countryside!'
//   },
//   {
//     label: 'Pools',
//     icon: TbPool,
//     description: 'This is property has a beautiful pool!'
//   },
//   {
//     label: 'Islands',
//     icon: GiIsland,
//     description: 'This property is on an island!'
//   },
//   {
//     label: 'Lake',
//     icon: GiBoatFishing,
//     description: 'This property is near a lake!'
//   },
//   {
//     label: 'Skiing',
//     icon: FaSkiing,
//     description: 'This property has skiing activies!'
//   },
//   {
//     label: 'Castles',
//     icon: GiCastle,
//     description: 'This property is an ancient castle!'
//   },
//   {
//     label: 'Caves',
//     icon: GiCaveEntrance,
//     description: 'This property is in a spooky cave!'
//   },
//   {
//     label: 'Camping',
//     icon: GiForestCamp,
//     description: 'This property offers camping activities!'
//   },
//   {
//     label: 'Arctic',
//     icon: BsSnow,
//     description: 'This property is in arctic environment!'
//   },
//   {
//     label: 'Desert',
//     icon: GiCactus,
//     description: 'This property is in the desert!'
//   },
//   {
//     label: 'Barns',
//     icon: GiBarn,
//     description: 'This property is in a barn!'
//   },
//   {
//     label: 'Lux',
//     icon: IoDiamond,
//     description: 'This property is brand new and luxurious!'
//   }
// ]

export const categories = [
  {
    label: 'ForestLodge',
    icon: GiForestCamp,
    description: 'Stay in serene forest lodges.'
  },
  {
    label: 'TeaRetreat',
    icon: GiForest,
    description: 'Experience tea plantation life.'
  },
  {
    label: 'TribeQuest',
    icon: GiAxeInLog,
    description: 'Immerse in tribal culture.'
  },
  {
    label: 'GreenStays',
    icon: GiFarmer,
    description: 'Live on eco-friendly farms.'
  },
  {
    label: 'ZenHaven',
    icon: GiGalaxy,
    description: 'Rejuvenate in wellness retreats.'
  },
  {
    label: 'MangroveLife',
    icon: GiDekuTree,
    description: 'Explore mangrove plantations.'
  },
  {
    label: 'HimalayaHome',
    icon: GiHills,
    description: 'Experience the Himalayas.'
  },
  {
    label: 'AyurBliss',
    icon: GiCondorEmblem,
    description: 'Heal with Ayurvedic practices.'
  },
  {
    label: 'FarmTrek',
    icon: GiFarmer,
    description: 'Learn about sustainable farming.'
  },
  {
    label: 'TempleTrek',
    icon: GiTempleGate,
    description: 'Explore ancient temples.'
  },
  {
    label: 'DesertCamp',
    icon: GiDesert,
    description: 'Camp in the desert.'
  },
  {
    label: 'PunjabFarm',
    icon: GiFarmTractor,
    description: 'Experience farm life in Punjab.'
  },
  {
    label: 'KutchHuts',
    icon: GiHutsVillage,
    description: 'Stay in traditional Kutchi huts.'
  },
  {
    label: 'SpitiStay',
    icon: GiForestCamp,
    description: 'Experience Spiti Valley.'
  },
  {
    label: 'FarmLife',
    icon: GiVanillaFlower,
    description: 'Engage in rural farm activities.'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;