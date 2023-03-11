import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { LogoNerdbord } from "../components/LogoNerdbord";

import styles from "../styles/index.module.css";

import { animals } from "@/data/animals";
import { animalType } from "@/types/animalType";
import { Animal } from "@/components/Animal";
import { useState } from "react";

export default function Home() {
  const [activeAnimal, setActiveAnimal] = useState<animalType["name"]>(
    animals[0].name
  );
  return (
    <div className={`${styles.wrapper} ${inter.className}`}>
      <LogoNerdbord />
      <h1 className={inter.className}>
        Recruitment task for Javascript Trainee
      </h1>
      <div className={styles.animals}>
        {animals.map((animal) => (
          <Animal
            key={animal.name}
            animal={animal}
            setActiveAnimal={setActiveAnimal}
          />
        ))}
      </div>
    </div>
  );
}
