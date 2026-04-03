import Link from "next/link";
import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | RouteFlow Mobile",
  description: "Terms of Service for RouteFlow Mobile.",
};

const sections = [
  {
    title: "Use Of The Service",
    body: "RouteFlow Mobile is provided for drivers and route-based operators to organize rides, manage recurring trips, review earnings, and generate reports. You agree to use the service lawfully and only for authorized business or personal transportation workflow purposes.",
  },
  {
    title: "Accounts And Access",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for activity that occurs under your account. You must provide accurate information and keep it current.",
  },
  {
    title: "Driver Data And Content",
    body: "You retain responsibility for the information you enter into RouteFlow, including ride details, rider notes, earnings data, and shared summaries. You represent that you have the right to use and store that information in connection with your work.",
  },
  {
    title: "Acceptable Use",
    body: "You may not misuse the service, interfere with its operation, attempt unauthorized access, reverse engineer protected features, or use RouteFlow in a way that violates law, privacy obligations, or third-party rights.",
  },
  {
    title: "Availability And Changes",
    body: "We may update, improve, suspend, or discontinue parts of the service at any time. We aim to keep RouteFlow reliable, but we do not guarantee uninterrupted or error-free availability.",
  },
  {
    title: "Disclaimers And Liability",
    body: "RouteFlow is provided on an as-is and as-available basis to the fullest extent permitted by law. We are not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the service.",
  },
  {
    title: "Contact",
    body: "If you have questions about these Terms of Service, contact the RouteFlow team using the support or business contact associated with the product.",
  },
];

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Link href="/" className={styles.backLink}>
          Back to RouteFlow
        </Link>
        <article className={styles.panel}>
          <p className={styles.eyebrow}>Legal</p>
          <h1>Terms of Service</h1>
          <p className={styles.lede}>
            These Terms of Service govern access to and use of RouteFlow Mobile.
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
