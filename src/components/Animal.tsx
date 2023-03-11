import { animalType } from "@/types/animalType";
import { useInView } from "react-intersection-observer";

import styles from "@/styles/Animal.module.css";

export function Animal({
  animal,
  setActiveAnimal,
}: {
  animal: animalType;
  setActiveAnimal: (animalName: animalType["name"]) => void;
}) {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActiveAnimal(animal.name);
      }
    },
  });
  return (
    <div ref={ref} id={animal.name} className={styles.animal}>
      <h1>{animal.name}</h1>
      <h2 dangerouslySetInnerHTML={{ __html: animal.text }}></h2>
      <img src={animal.image} alt={animal.name} />
    </div>
  );
}
