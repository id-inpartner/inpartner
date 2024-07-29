interface Window {
  gtag: (
    type: string,
    googleAnalyticsId: string,
    config: { page_path: string }
  ) => void
}
