# 🗂️ Product Requirements Document (PRD)

## 1. Product Overview

**Product Name (placeholder):** *Chattr*
**Purpose:**
Chattr is a beautifully designed conversation starter app that helps people connect through meaningful, fun, or thought-provoking discussions. Using digital “cards” with curated questions, users can find inspiration for conversations with friends, partners, or groups.

Designed to sit face-up in the middle of the table, Conversify brings human connection back into focus — through intentional design, elegant simplicity, and engaging prompts.

**Tagline:** *Good conversations start here.*

---

## 2. Goals & Objectives

* Help users **start and sustain conversations** when ideas run out.
* Provide **high-quality, well-written prompts** in curated categories.
* Offer a **visually pleasing, minimal interface** that feels handcrafted.
* Be intuitive enough to use without instructions — simple, beautiful, and social.

---

## 3. Target Users

* **Friends** hanging out or hosting casual get-togethers.
* **Couples** looking to deepen connection or spark new dialogue.
* **Groups** seeking engaging or polemic discussion topics.
* **Hosts / facilitators** who want quick conversation starters.

---

## 4. Core Features (V0)

### 4.1 Conversation Cards

* Each card contains **one unique conversation question or prompt.**
* Cards appear one at a time in a **centered, minimal interface** (large text, soft background).
* Users can:

  * **Swipe / tap** to reveal the next card.
  * **Skip / pass** a question if they don’t like it.
* Optional *“Back”* action to revisit the previous card.

**Categories (4 total):**

1. **Friends** – 
2. **Couples** – romantic, emotional, or intimacy-focused prompts.
3. **Philosophical** – deep, abstract, or reflective discussions.
4. **Spicy / Polemic** – bold, controversial, or debate-style topics.

> 🔒 **All 4 base categories are free.**
> 💬 **Additional card packs** (more questions per category) can be paid expansions in future versions.

---

### 4.2 Timer Functionality

* Users can start a **discussion timer** for each card.
* **Preset durations only:** 5 min, 10 min, 15 min.
* Clean, subtle countdown animation on screen.
* Optional gentle sound or vibration when time ends.
* Timer is visual and non-intrusive — meant to guide, not distract.

---

### 4.3 Category Selection

* Home screen shows 4 category icons.
* Users can:

  * Select **one** category for focused conversation, 

---

### 4.4 Skip / Pass Feature

* Always-available button to skip a question.
* Smooth card transition animation.
* Optional *“previous card”* gesture for review.

---

### 4.5 Aesthetic & UX Requirements

* Designed for **shared use** — phone placed **face-up on the table.**
* **Dark mode by default**, with warm, elegant accents (e.g., off-black, beige, muted red).
* **Typography:** Large, readable, balanced text; minimal clutter.
* Subtle **haptics and animations** for physical feel.
* **Minimal chrome:** No visible menus; settings accessible via small icon or swipe gesture.
* Clean transitions, rounded corners, and card-like motion.

---

## 5. Non-Functional Requirements

| Category          | Requirement                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| **Performance**   | Smooth transitions; no lag or stutter between cards.                                         |
| **Accessibility** | Large font options, voice-over support, color contrast compliance.                           |
| **Offline Use**   | Cards remain available offline after initial load.                                           |
| **Platform**      | iOS & Android (built with  React Native).                                          |
| **Aesthetic**     | Premium feel; minimal UI; handcrafted typography.                                            |
| **Orientation**   | Works in both portrait and landscape. Designed primarily for portrait when placed on table. |

---

## 6. Content & Moderation

* All questions are **hand-curated and uploaded manually** by the application creator.
* No user-generated submissions in V0.
* Content reviewed to ensure quality, tone, and safety (especially in “Spicy / Polemic” category).
* Option to tag or rate future questions (for internal iteration, not public display).

---

## 7. User Flow

1. **Launch App →** Splash / logo animation.
2. **Category Selection →** Choose 1–4 categories or mix mode.
3. **Card View →** Displays first question card.

   * *Options:* Start Timer / Skip / Next.
4. **Start Timer →** Countdown (5, 10, or 15 mins).
5. **Time’s Up →** Gentle alert (sound/vibration).
6. **Next Card →** Swipe / tap to continue.
7. **Session End →** Option to restart or change categories.

---

## 8. Success Metrics

* **Engagement:** Average session ≥ 10 minutes.
* **Return Rate:** ≥ 30% of users open the app weekly.
* **Satisfaction:** App Store rating ≥ 4.5/5.
* **Visual Feedback:** Users describe the design as “calming,” “beautiful,” or “polished.”

---

## 9. Future Enhancements (Not in V0)

* **Custom Timers:** User-defined durations.
* **Favorites / Saved Cards.**
* **Daily Question Notification.**
* **Theming / Visual Skins.**

---

## 10. Summary

Conversify V0 is a **minimal, high-quality conversation starter app** designed for elegance and ease of use. It provides curated prompts (aka questions) in four categories with optional timed sessions, a skip feature, and handcrafted visual design — all optimized for shared, in-person experiences.

The app’s success depends on **simplicity, design quality, and question depth**, not on gamification or social features.

