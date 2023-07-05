"use client";
import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  { label: "Beach", icon: TbBeach, description: "Property close to the beach" },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "Property has  windmills",
  },
  { label: "Modern", icon: MdOutlineVilla, description: "Property is modern " },
  {
    label: "Coutryside",
    icon: TbMountain,
    description: "Property is in the countryside",
  },
  { label: "Pools", icon: TbPool, description: "Property has a pool" },
  { label: "Islands", icon: GiIsland, description: "Property is on an island" },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "Property is close to a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "Property has skiing activities",
  },
  { label: "Castles", icon: GiCastle, description: "Property is in a castle" },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Property has camping activities",
  },
  { label: "Arctic", icon: BsSnow, description: "Property is in the arctic" },
  { label: "Cave", icon: GiCaveEntrance, description: "Property is in a cave" },
  { label: "Desert", icon: GiCactus, description: "Property is in the desert" },
  { label: "Barns", icon: GiBarn, description: "Property is in the barn" },
  { label: "Lux", icon: IoDiamond, description: "Property is luxurious" },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname == "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category == item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
