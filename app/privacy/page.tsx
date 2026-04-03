import Link from "next/link";
import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | RouteFlow Mobile",
  description: "Privacy Policy for RouteFlow Mobile.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "RouteFlow may collect information you provide directly, such as account details, trip information, rider notes, communication details, and support requests. We may also collect technical information needed to operate the app, such as device identifiers, diagnostics, and usage data.",
  },
  {
    title: "How We Use Information",
    body: "We use information to provide RouteFlow features, organize rides and recurring routes, support navigation and rider communication workflows, improve app reliability, generate reports, and respond to support needs.",
  },
  {
    title: "Sharing Of Information",
    body: "We do not sell personal information. We may share information with service providers that help us operate the app, comply with legal obligations, protect users, or process infrastructure needed to deliver RouteFlow features.",
  },
  {
    title: "Data Retention",
    body: "We retain information for as long as reasonably necessary to operate the service, comply with legal requirements, resolve disputes, and maintain records related to route history, reporting, and account administration.",
  },
  {
    title: "Security",
    body: "We use reasonable administrative, technical, and organizational measures to protect data. No system is completely secure, so we cannot guarantee absolute security.",
  },
  {
    title: "Your Choices",
    body: "You may contact us to request access, correction, or deletion of your information where applicable. Depending on your jurisdiction, you may also have additional privacy rights.",
  },
  {
    title: "Contact",
    body: "For privacy questions about RouteFlow Mobile, contact the RouteFlow team using the support channel or business contact associated with your account.",
  },
];

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Link href="/" className={styles.backLink}>
          Back to RouteFlow
        </Link>
        <article className={styles.panel}>
          <p className={styles.eyebrow}>Legal</p>
          <h1>Privacy Policy</h1>
          <p className={styles.lede}>
            This Privacy Policy explains how RouteFlow Mobile collects, uses,
            and protects information when drivers use the service.
          </p>
          <div className={styles.sectionList}>
            {sections.map((section) => (
              <section key={section.title} className={styles.section}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
