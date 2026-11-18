/**
 * Deployment-target detection.
 *
 * Notice is disabled by default so GitHub Pages (and all other hosts) serve
 * the full app normally. Set VITE_FORCE_MIGRATION_NOTICE=1 if the notice needs
 * to be previewed or re-enabled.
 */

/** Where the app lives now. */
export const NEW_SITE_URL = "https://gap.dtcwonders.online";

/** Hostname suffixes served by the retired deployment (if any). */
const RETIRED_HOST_SUFFIXES: string[] = [];

/**
 * True when the given hostname belongs to the retired GitHub Pages deployment.
 *
 * Only GitHub-owned hosts match. Local development (localhost, 127.0.0.1, LAN
 * IPs, *.local) and the live domain are all false, so the notice never blocks
 * local dev or the new site.
 */
export const isRetiredHost = (hostname: string): boolean => {
  const host = (hostname || "").trim().toLowerCase();
  if (!host) return false;
  return RETIRED_HOST_SUFFIXES.some(
    (suffix) => host === suffix || host.endsWith(`.${suffix}`)
  );
};

/**
 * Whether to show the "we have moved" notice instead of the app.
 *
 * Set VITE_FORCE_MIGRATION_NOTICE=1 to preview the notice on any host.
 */
export const shouldShowMigrationNotice = (): boolean => {
  if (import.meta.env?.VITE_FORCE_MIGRATION_NOTICE === "1") return true;
  if (typeof window === "undefined") return false;
  return isRetiredHost(window.location.hostname);
};
