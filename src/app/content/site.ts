// Every brand / app fact lives here — pages never hard-code names, IDs or emails.
// Facts follow the operator's Privacy Policy and Terms of Use (19 November 2026).
// The app isn't in the store yet (lookup returns 0 results); after release,
// refresh minIOS and category from https://itunes.apple.com/lookup?id=6829185092

export const site = {
  brand: "Seedance",
  email: "martincao@cermak.click",
  operator: "Martin Cermak",
  city: "Madrid, Spain",
  year: new Date().getFullYear(),
  // wording follows Terms §10 / Privacy §12
  disclaimer:
    "AI video generator for iPhone by Martin Cermak. The SEEDANCE name is used under a Brand Authorization and Trademark License Agreement with Spring Technology Services Ltd. This is an independently developed app, not an official ByteDance product.",
};

const APP_ID = "6829185092";

export const app = {
  id: APP_ID,
  url: `https://apps.apple.com/app/id${APP_ID}`,
  minIOS: "", // fill from the store lookup after release
  category: "", // fill from the store lookup after release
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
    text: "Play the clip, copy the prompt behind it, then save the video to Photos or share it.",
    img: "/images/phone-result.webp",
    alt: "Result screen with a generated video, its prompt and a Save button",
  },
  {
    key: "chat",
    title: "AI Chat",
    text: "Ask for help with a prompt or ideas for your next scene, and attach a photo if it helps. AI Chat comes with Premium.",
    img: "/images/phone-chat.webp",
    alt: "AI Chat screen with a question and an answer",
  },
];

// Subscription facts from Terms §8.
export const proIncludes = [
  "Auto-renewable subscription through Apple In-App Purchase",
  "Term, price and renewal conditions shown before you confirm",
  "Cancel anytime in Settings → Apple Account → Subscriptions",
  "Cancelling stops renewal and keeps the time you already paid for",
  "Deleting the app does not cancel the subscription",
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
    text: "Every generation is saved on your iPhone with its prompt. Filter by type, mark favorites, reuse a prompt for another take, or delete what you no longer need.",
    img: "/images/phone-history.webp",
    alt: "History screen listing generations with their prompts",
  },
];

export const specs: [string, string][] = [
  ["Platform", "iPhone"],
  ["Create from", "A text prompt or a photo"],
  ["Settings", "Duration, aspect ratio, resolution"],
  ["Extras", "Styles, prompt templates, prompt enhancing, AI Chat (Premium)"],
  ["Library", "History with favorites, stored on your device"],
  ["Account", "No registration"],
  ["AI providers", "fal.ai (PixVerse V6) for video, OpenAI (GPT-4o-mini) for AI Chat"],
  ["Price", "Free download, Premium as an auto-renewable subscription"],
  ["Age", "16+"],
  ["Developer", "Martin Cermak, Madrid, Spain"],
  ...(app.minIOS ? [["Compatibility", `iOS ${app.minIOS} or later`] as [string, string]] : []),
  ...(app.category ? [["Category", app.category] as [string, string]] : []),
];

export const faq = [
  { q: "How do I make my first video?", a: "Open Seedance and tap Text to Video. Describe the scene, choose a style if you like, check the duration, aspect ratio and resolution, then tap Start Creating. The finished clip opens on the Result screen." },
  { q: "Can I turn a photo into a video?", a: "Yes. Choose Image to Video on the home screen, pick a photo from your library and describe how it should move." },
  { q: "What are styles and templates?", a: "Styles such as Film, Y2K or Golden Hour set the look of your video. Prompt templates are ready-to-use prompts for faster creation — open one, adjust it and generate." },
  { q: "What does Prompt Enhancing do?", a: "It adds detail to a short description so the model has more to work with. You can still edit the text before you start." },
  { q: "Where are my videos?", a: "Every generation is kept in History on your iPhone together with its prompt. From the Result screen you can save a video to Photos or share it. You can delete single videos or clear the whole history in History." },
  { q: "Do I need an account?", a: "No. Seedance doesn't require registration. Your history, videos and chats are stored locally on your device." },
  { q: "Who processes my prompts and photos?", a: "Video generation runs on PixVerse V6 through fal.ai, so your prompt and any photo you pick are sent there. AI Chat uses OpenAI GPT-4o-mini and receives the current chat, including attached images. Please don't upload anything you wouldn't want an external provider to process. Details are in the Privacy Policy." },
  { q: "Is AI Chat free?", a: "AI Chat helps with ideas and video prompts. It accepts text and photos and requires an active Premium subscription." },
  { q: "How do I cancel my subscription?", a: "Premium is billed through Apple. On your iPhone go to Settings → Apple Account → Subscriptions and cancel before the renewal date. Cancelling stops future renewals, and deleting the app does not cancel an active subscription." },
  { q: "How do I restore a purchase?", a: "Open the subscription screen in the app and tap Restore, signed in with the same Apple account you subscribed with. Refunds and billing are handled by Apple." },
  { q: "Who can use Seedance?", a: "The app is intended for people aged 16 or older, or older where local law sets a higher minimum age." },
  { q: "Is Seedance an official ByteDance app?", a: "No. Seedance is developed and supported independently by Martin Cermak. The SEEDANCE name is used under a Brand Authorization and Trademark License Agreement with Spring Technology Services Ltd." },
  { q: "How do I contact support?", a: "Write to us from the Contact page or by email, and we’ll get back to you." },
];
