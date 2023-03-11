import { animalType } from "@/types/animalType";

import styles from "../styles/SidebarMenu.module.css";

export function MenuItem({
  animalName,
  active,
  setIsOpen,
}: {
  animalName: animalType["name"];
  active: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <li className={active ? styles.activeAnimal : ""}>
      <a href={`#${animalName}`} onClick={() => setIsOpen(false)}>
        {animalName}
      </a>
    </li>
  );
}
