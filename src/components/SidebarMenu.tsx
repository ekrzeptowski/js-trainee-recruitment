import { useState } from "react";
import Hamburger from "hamburger-react";

import styles from "../styles/SidebarMenu.module.css";
import { MenuItem } from "./MenuItem";

import { animalType } from "@/types/animalType";

export function SidebarMenu({
  animals,
  menuTitle,
  activeAnimal,
}: {
  animals: animalType[];
  menuTitle: string;
  activeAnimal: animalType["name"];
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={styles.sidebarMenu}>
      <div className={styles.sidebarMenuTitle}>
        <h1>{menuTitle}</h1>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <ul className={isOpen ? styles.open : ""}>
        {animals.map((animal) => (
          <MenuItem
            key={animal.name}
            animalName={animal.name}
            active={activeAnimal === animal.name}
            setIsOpen={setIsOpen}
          />
        ))}
      </ul>
    </aside>
  );
}
