# Northstar Apparel Botpress Demo

Northstar Apparel is a fictional fashion store built to demonstrate a grounded Botpress customer-support chatbot without using real customer or client data.

## Included files

| File | Purpose |
| --- | --- |
| [Botpress knowledge](botpress/KNOWLEDGE_BASE.md) | Synthetic shipping, returns, exchanges, sizing, product, and support facts |
| [Bot instructions](botpress/BOT_INSTRUCTIONS.md) | Grounding, fallback, privacy, and tone rules |
| [Acceptance tests](botpress/TEST_CASES.csv) | 15 supported, unsupported, privacy, and handoff tests |
| [Botpress setup](botpress/SETUP.md) | Current account configuration and webchat installation checklist |
| [Client demo script](CLIENT_DEMO_SCRIPT.md) | A focused 12-minute sales demonstration |
| [Storefront](storefront/index.html) | Responsive website containing the generated Botpress embed location |

## Preview the storefront

From `demo/storefront`, run:

```sh
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

The page intentionally contains no fake Botpress identifier. After the bot is published, copy its exact generated embed from **Webchat → Deploy Settings** into the marked location in `storefront/index.html`.

## Demo safety

- Use only fictional questions and references.
- Do not paste real names, orders, addresses, phone numbers, payment data, or passwords.
- Make clear that Northstar Apparel is fictional.
- Do not claim order tracking, refunds, cancellations, inventory access, or other integrations that are not implemented.
- Remove test conversations from the Botpress workspace after the demo if they are no longer required.
