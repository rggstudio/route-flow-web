import Image from "next/image";
import Link from "next/link";
import { ActionButtons } from "@/components/landing/ActionButtons";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { SectionHeading } from "@/components/landing/SectionHeading";
import styles from "./page.module.css";

const APP_STORE_URL = "https://www.apple.com/app-store/";
const GOOGLE_PLAY_URL = "https://play.google.com/store";

const featureItems = [
  {
    eyebrow: "Daily Command",
    title: "Track every ride without the notebook chaos",
    description:
      "Keep pickups, drop-offs, rider details, timing, and trip notes in one place so the day stays clear from first ride to last.",
  },
  {
    eyebrow: "Recurring Routes",
    title: "Build repeatable weekly workflows",
    description:
      "Set up recurring rides once, reuse familiar route patterns, and stop rebuilding the same schedule every week.",
  },
  {
    eyebrow: "On The Move",
    title: "Launch navigation and message riders fast",
    description:
      "Jump into directions, call up rider context, and send quick updates when timing changes without bouncing between apps.",
  },
  {
    eyebrow: "Earnings View",
    title: "See what each route is really worth",
    description:
      "Track trip-level earnings and weekly totals so you always know where time is paying off and where it is leaking.",
  },
  {
    eyebrow: "Weekly Share",
    title: "Wrap the week with share-ready summaries",
    description:
      "Turn completed rides into polished reporting cards that make it easy to review performance or send clean updates.",
  },
];

const steps = [
  {
    number: "01",
    title: "Add the rides you need to run",
    body: "Create one-off trips or set repeat routes for the week so your schedule starts organized instead of reactive.",
  },
  {
    number: "02",
    title: "Run the day from one mobile workflow",
    body: "Open navigation, confirm rider details, send updates, and keep each stop moving without losing context.",
  },
  {
    number: "03",
    title: "Review totals and share your week",
    body: "Close out with clear earnings, completed-route visibility, and a polished summary you can keep or send.",
  },
];

const benefits = [
  "Save time on trip setup and day-of coordination",
  "Stay organized across repeat rides and changing schedules",
  "Reduce missed rider details, addresses, and communication gaps",
  "See earnings clearly so every week is easier to evaluate",
];

const proofPoints = [
  {
    stat: "5",
    label: "core driver workflows united in one mobile flow",
  },
  {
    stat: "3",
    label: "clear steps from route setup to weekly wrap-up",
  },
  {
    stat: "1",
    label: "command center for routes, riders, navigation, and earnings",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <div className={styles.nav}>
          <div className={styles.brandLockup}>
            <Image
              src="/routeflow-icon.png"
              alt="RouteFlow Mobile icon"
              width={40}
              height={40}
              className={styles.brandIcon}
              priority
            />
            <div>
              <p className={styles.brandName}>RouteFlow Mobile</p>
              <p className={styles.brandTag}>Your rides. Finally organized.</p>
            </div>
          </div>
          <a className={styles.navLink} href="#features">
            Explore features
          </a>
        </div>

        <div className={styles.heroBody}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Built for route-based drivers</p>
            <h1>
              The mobile command center for drivers who manage real routes, real
              riders, and real weekly earnings.
            </h1>
            <p className={styles.heroText}>
              RouteFlow keeps rides, recurring trips, navigation, rider
              communication, and weekly reporting in one clean flow so you can
              run the day with less friction.
            </p>
            <div className={styles.heroActions}>
              <ActionButtons
                primary={{ href: "#get-started", label: "Get Started" }}
                secondary={{ href: "#how-it-works", label: "Track Your First Ride" }}
              />
            </div>
            <div className={styles.storeBadges}>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Download RouteFlow on the App Store"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={53}
                  className={styles.storeBadgeImage}
                />
              </a>
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Get RouteFlow on Google Play"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={54}
                  className={styles.storeBadgeImage}
                />
              </a>
            </div>
            <div className={styles.heroHighlights}>
              <span>Daily ride command center</span>
              <span>Repeat-route friendly</span>
              <span>Weekly summaries included</span>
            </div>
          </div>

          <div className={styles.visualWrap} aria-hidden="true">
            <div className={styles.visualHalo} />
            <div className={styles.deviceFrame}>
              <div className={styles.deviceHeader}>
                <Image
                  src="/routeflow-badge-dark.svg"
                  alt=""
                  width={154}
                  height={28}
                  className={styles.deviceBadge}
                />
                <span>Driver overview</span>
              </div>
              <div className={styles.deviceContent}>
                <div className={styles.routeCard}>
                  <div>
                    <p>Today&apos;s route</p>
                    <strong>3 rides across 2 recurring runs</strong>
                  </div>
                  <span>Live</span>
                </div>
                <div className={styles.routeMap}>
                  <div className={styles.routeLine} />
                  <div className={styles.routeNodeTop}>Pickup</div>
                  <div className={styles.routeNodeMiddle}>Message rider</div>
                  <div className={styles.routeNodeBottom}>Weekly total</div>
                </div>
                <div className={styles.metricRow}>
                  <div>
                    <p>Week earnings</p>
                    <strong>$1,480</strong>
                  </div>
                  <div>
                    <p>Completed rides</p>
                    <strong>37</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.floatingPanel}>
              <Image
                src="/routeflow-app-logo.svg"
                alt=""
                width={48}
                height={48}
              />
              <div>
                <p>Share-ready summary</p>
                <strong>Built for fast weekly reporting</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="features">
        <SectionHeading
          eyebrow="Core Features"
          title="Everything RouteFlow helps drivers stay on top of"
          description="Designed for independent drivers, medical transport operators, and anyone running repeat routes that need structure without extra overhead."
        />
        <FeatureGrid items={featureItems} />
      </section>

      <section className={styles.section} id="how-it-works">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple enough to start today, strong enough for every week after"
          description="RouteFlow keeps the workflow tight so you can get set up fast and stay in motion once the day starts."
        />
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <article key={step.number} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.benefitsLayout}>
          <div>
            <SectionHeading
              eyebrow="Why Drivers Use It"
              title="Less scrambling, fewer missed details, clearer earnings"
              description="The app is built to reduce the small operational misses that stack up when routes, riders, and payments are spread across too many tools."
            />
          </div>
          <div className={styles.benefitList}>
            {benefits.map((benefit) => (
              <div key={benefit} className={styles.benefitItem}>
                <span />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading
          eyebrow="Product Proof"
          title="A polished workflow that earns trust fast"
          description="Instead of made-up testimonials, the page leads with concrete product signals that show how RouteFlow is structured for day-to-day driver work."
        />
        <div className={styles.proofGrid}>
          {proofPoints.map((item) => (
            <article key={item.label} className={styles.proofCard}>
              <strong>{item.stat}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} id="get-started">
        <div className={styles.finalGlow} />
        <SectionHeading
          eyebrow="Ready To Roll"
          title="RouteFlow gives your week a cleaner route from the first pickup to the final summary."
          description="Start with the rides you already run, keep the day organized, and finally see the whole week clearly."
          centered
        />
        <ActionButtons
          centered
          primary={{ href: "#top", label: "Get Started" }}
          secondary={{ href: "#features", label: "See The Driver Workflow" }}
        />
      </section>

      <footer className={styles.footer}>
        <p>RouteFlow Mobile</p>
        <div className={styles.footerLinks}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </footer>
    </main>
  );
}
