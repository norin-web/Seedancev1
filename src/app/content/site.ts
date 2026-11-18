// Every brand / app fact lives here — pages never hard-code names, IDs or emails.
// PLACEHOLDER values are still waiting for the owner: App Store ID, operator,
// support email. When the app is live, refresh `app` from
// https://itunes.apple.com/lookup?id=<ID>&country=us

export const site = {
  brand: "Seedance",
  email: "support@example.com", // PLACEHOLDER
  operator: "", // PLACEHOLDER — company or person from the legal documents
  year: new Date().getFullYear(),
  // PLACEHOLDER — replace with the trademark wording from the owner's documents
  disclaimer: "AI video generator for iPhone.",
};

const APP_ID = "0000000000"; // PLACEHOLDER

export const app = {
  id: APP_ID,
  url: `https://apps.apple.com/app/id${APP_ID}`,
  minIOS: "", // PLACEHOLDER — fill from the store lookup after release
  category: "", // PLACEHOLDER
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Template names exactly as they appear on the app's Templates screen.
export const templates = [
  { name: "Rooftop Sunset", img: "/images/tpl-rooftop-sunset.webp" },
  { name: "Neon Nights", img: "/images/tpl-neon-nights.webp" },
  { name: "Rainy Night", img: "/images/tpl-rainy-night.webp" },
  { name: "Cozy Moments", img: "/images/tpl-cozy-moments.webp" },
  { name: "Underwater Escape", img: "/images/tpl-underwater-escape.webp" },
  { name: "Flower Market", img: "/images/tpl-flower-market.webp" },
];

// Style names from the app's Styles screen.
export const styles = ["Editorial", "Fantasy Realism", "Film", "Y2K", "Dreamy", "Golden Hour"];

export const steps = [
  { title: "Get Seedance", text: "Download the app from the App Store and open it on your iPhone." },
  { title: "Describe or upload", text: "Type what should happen in the scene, or start from a photo of your own." },
  { title: "Save and share", text: "Watch the result, save it to your phone or send it straight to a friend." },
];

// The Home "Features" switcher — every tab shows the matching app screen.
export const features = [
  {
    key: "text",
    title: "Text to Video",
    text: "Describe your idea and bring it to life as a video. Pick a style, set the length, aspect ratio and resolution, then tap Start Creating.",
    img: "/images/phone-create.webp",
    alt: "Create Video screen with a Y2K prompt and 5s, 1:1 and 1080p settings",
  },
  {
    key: "styles",
    title: "Styles and templates",
    text: "Not sure where to start? Try a style like Film, Y2K or Golden Hour, or open a ready-made prompt template.",
    img: "/images/phone-styles.webp",
    alt: "Styles screen with Editorial, Fantasy Realism, Film, Y2K, Dreamy and Golden Hour",
  },
  {
    key: "result",
    title: "Result you can keep",
    text: "Play the clip, copy the prompt behind it, then save the video or share it in one tap.",
    img: "/images/phone-result.webp",
    alt: "Result screen with a generated video, its prompt and a Save button",
  },
  {
    key: "chat",
    title: "AI Chat",
    text: "Ask anything — from how to phrase a prompt to ideas for your next scene. You can attach an image too.",
    img: "/images/phone-chat.webp",
    alt: "AI Chat screen with a question and an answer",
  },
];

export const proIncludes = [
  "Unlimited video creation",
  "Text to Video and Image to Video",
  "Prompt templates and styles",
  "Prompt enhancing",
  "Duration, aspect ratio and resolution settings",
  "History of your generations",
];

// App page — screen reel and feature rows.
export const reel = [
  { img: "/images/phone-home.webp", alt: "Seedance home screen with Prompt Templates, Image to Video and Text to Video" },
  { img: "/images/phone-create.webp", alt: "Create Video screen" },
  { img: "/images/phone-styles.webp", alt: "Styles screen" },
  { img: "/images/phone-result.webp", alt: "Result screen" },
  { img: "/images/phone-history.webp", alt: "History screen with recent generations" },
  { img: "/images/phone-chat.webp", alt: "AI Chat screen" },
];

export const appRows = [
  {
    title: "Two ways to start",
    text: "Image to Video brings your image to life with smooth, natural motion. Text to Video turns a written idea into a clip. Both live on the home screen, one tap away.",
    img: "/images/phone-home.webp",
    alt: "Home screen with Image to Video and Text to Video",
  },
  {
    title: "Control the output",
    text: "Set duration, aspect ratio and resolution before you generate, and let Prompt Enhancing polish your description when you want more detail.",
    img: "/images/phone-create.webp",
    alt: "Create Video screen with duration, aspect ratio and resolution",
  },
  {
    title: "Everything you made, in History",
    text: "Every generation is saved with its prompt. Filter by type, mark favorites and reuse a prompt when you want another take.",
    img: "/images/phone-history.webp",
    alt: "History screen listing generations with their prompts",
  },
];

export const specs: [string, string][] = [
  ["Platform", "iPhone"],
  ["Create from", "A text prompt or a photo"],
  ["Settings", "Duration, aspect ratio, resolution"],
  ["Extras", "Styles, prompt templates, prompt enhancing, AI Chat"],
  ["Library", "History with favorites"],
  ["Price", "Free download, unlimited creation with a subscription"],
  ...(app.minIOS ? [["Compatibility", `iOS ${app.minIOS} or later`] as [string, string]] : []),
  ...(app.category ? [["Category", app.category] as [string, string]] : []),
];

export const faq = [
  { q: "How do I make my first video?", a: "Open Seedance and tap Text to Video. Describe the scene, choose a style if you like, check the duration, aspect ratio and resolution, then tap Start Creating. The finished clip opens on the Result screen." },
  { q: "Can I turn a photo into a video?", a: "Yes. Choose Image to Video on the home screen, pick a photo from your library and describe how it should move." },
  { q: "What are styles and templates?", a: "Styles such as Film, Y2K or Golden Hour set the look of your video. Prompt templates are ready-to-use prompts for faster creation — open one, adjust it and generate." },
  { q: "What does Prompt Enhancing do?", a: "It adds detail to a short description so the model has more to work with. You can still edit the text before you start." },
  { q: "Where are my videos?", a: "Every generation is kept in History together with its prompt. From the Result screen you can save a video to your phone or share it." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are billed through your Apple ID. Go to Settings → your name → Subscriptions on your iPhone and cancel there. Deleting the app does not cancel an active subscription." },
  { q: "How do I restore a purchase?", a: "Open the subscription screen in the app and tap Restore. Use the same Apple ID you subscribed with. Refunds and billing are handled by Apple." },
  { q: "How do I contact support?", a: `Write to us from the Contact page or by email — we'll get back to you.` },
];
