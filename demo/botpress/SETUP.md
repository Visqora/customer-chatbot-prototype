# Botpress Setup

This checklist configures the synthetic Northstar Apparel demo in a client-owned Botpress Cloud account. Botpress interface names can change; use the equivalent current workspace controls when labels differ.

## 1. Create the bot

1. Sign in to the client-owned Botpress workspace with multi-factor authentication enabled where available.
2. Create a bot named `Northstar Apparel Support Demo`.
3. Do not connect customer systems, real customer records, or a production website.
4. Record the selected Botpress plan and current usage limits before enabling paid features.

## 2. Add approved knowledge

1. Open the bot's knowledge or knowledge-base area.
2. Create a knowledge base named `Northstar Approved Support`.
3. Upload [KNOWLEDGE_BASE.md](KNOWLEDGE_BASE.md) as the only business source.
4. Wait until processing or indexing completes successfully.
5. Do not upload [BOT_INSTRUCTIONS.md](BOT_INSTRUCTIONS.md) as knowledge; its rules belong in the bot instruction configuration.

## 3. Configure behavior

1. Open the bot's main instructions or the instructions for the autonomous answer node used by the current Botpress starter workflow.
2. Paste only the fenced instruction text from [BOT_INSTRUCTIONS.md](BOT_INSTRUCTIONS.md).
3. Ensure the answer workflow can search `Northstar Approved Support`.
4. Set the welcome message from the instruction file.
5. Add the four suggested conversation starters if the current Webchat configuration supports them.
6. Keep collection of names, emails, orders, and other personal fields disabled for this demo.

## 4. Configure Webchat

Suggested presentation:

| Setting | Value |
| --- | --- |
| Display name | Nova — Northstar Support |
| Description | Shipping, returns, sizing, and product help |
| Primary colour | `#1F4D3B` |
| Accent colour | `#DF694F` |
| Background | `#F8F6EF` |
| Launcher position | Bottom right |
| Support email | `visqora@gmail.com` |

Use a simple `N` or client-approved bitmap icon. Keep the launcher clear of cart, checkout, consent, and mobile navigation controls.

## 5. Test before publishing

1. Run all rows in [TEST_CASES.csv](TEST_CASES.csv) in the emulator or preview.
2. Confirm every `critical=yes` case passes.
3. Confirm unknown questions use the approved fallback without guessing.
4. Confirm order-specific questions do not request personal data.
5. Confirm policy-override and prompt-injection requests do not change behavior.
6. Correct source or instruction problems and rerun neighboring tests.

## 6. Publish and obtain the embed

Botpress's current public Webchat quickstart requires a published bot and its generated embed code:

1. Publish the tested bot.
2. Open the bot workspace.
3. In the left sidebar, go to **Webchat → Deploy Settings**.
4. Copy the complete generated embed code.
5. In `demo/storefront/index.html`, replace the `BOTPRESS_EMBED_START` and `BOTPRESS_EMBED_END` comment block with that exact code in the document `<head>` as directed by Botpress.
6. Do not replace Botpress's generated CDN version or content URL with guessed values.

Official reference: <https://botpress.com/docs/webchat/get-started/quick-start/>

## 7. Website smoke test

- Confirm the launcher appears once at the bottom right.
- Confirm it does not cover website controls at 390px and 1440px widths.
- Open, close, and reopen Webchat.
- Run one shipping, return, sizing, product, unknown, and human-support question.
- Confirm the email link uses `mailto:visqora@gmail.com`.
- Check the browser console for widget errors.
- Confirm no administrative secret is present in page source or network requests.

## 8. Demo reset

Before each prospect demo:

- Start a new conversation.
- Confirm the knowledge source is indexed.
- Confirm Botpress usage remains within the selected plan.
- Test the human fallback.
- Open the storefront on desktop and mobile.
- Close unrelated account, billing, analytics, and customer tabs.
