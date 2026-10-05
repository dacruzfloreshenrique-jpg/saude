// Analytics abstraction - configurable for future integration
// Set VITE_ANALYTICS_ENABLED=true and VITE_ANALYTICS_PROVIDER to enable

const ANALYTICS_ENABLED = import.meta.env.VITE_ANALYTICS_ENABLED === 'true';

export type AnalyticsEvent =
  | 'tool_started'
  | 'tool_completed'
  | 'recipe_viewed'
  | 'recipe_saved'
  | 'calculator_completed'
  | 'plate_builder_completed'
  | 'product_cta_clicked'
  | 'email_signup'
  | 'external_checkout_clicked';

export function trackEvent(event: AnalyticsEvent, data?: Record<string, unknown>) {
  if (!ANALYTICS_ENABLED) {
    if (import.meta.env.DEV) {
      console.log('[Analytics]', event, data);
    }
    return;
  }

  // Future: integrate with actual analytics provider
  // e.g., window.gtag, Plausible, PostHog, etc.
  try {
    const payload = {
      event,
      timestamp: new Date().toISOString(),
      ...data,
    };
    // Placeholder for actual implementation
    console.log('[Analytics]', payload);
  } catch (e) {
    // Silently fail - analytics should never break the app
  }
}

export function trackProductCTA(location: string) {
  trackEvent('product_cta_clicked', { location });
}

export function trackExternalCheckout(source: string) {
  trackEvent('external_checkout_clicked', { source });
}
