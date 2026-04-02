import styles from "./ActionButtons.module.css";

type LinkConfig = {
  href: string;
  label: string;
};

type ActionButtonsProps = {
  primary: LinkConfig;
  secondary: LinkConfig;
  centered?: boolean;
};

export function ActionButtons({
  primary,
  secondary,
  centered = false,
}: ActionButtonsProps) {
  return (
    <div className={`${styles.actions} ${centered ? styles.centered : ""}`}>
      <a className={styles.primary} href={primary.href}>
        {primary.label}
      </a>
      <a className={styles.secondary} href={secondary.href}>
        {secondary.label}
      </a>
    </div>
  );
}
