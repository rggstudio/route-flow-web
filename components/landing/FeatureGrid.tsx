import styles from "./FeatureGrid.module.css";

type FeatureItem = {
  eyebrow: string;
  title: string;
  description: string;
};

type FeatureGridProps = {
  items: FeatureItem[];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.title} className={styles.card}>
          <p className={styles.eyebrow}>{item.eyebrow}</p>
          <h3>{item.title}</h3>
          <p className={styles.body}>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
