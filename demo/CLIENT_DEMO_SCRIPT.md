# Client Demo Script

Target length: 12 minutes. The goal is to demonstrate controlled support automation, not to imply that the bot can perform unimplemented actions.

## 0:00–1:00 — Set expectations

Say:

> This is Northstar Apparel, a fictional store built with synthetic content. The chatbot uses only approved store information, and it hands uncertain or customer-specific questions to a person instead of guessing.

Point out the visible demo-data notice. Do not open the Botpress administration area yet.

## 1:00–4:00 — Show useful answers

Ask these questions from the storefront:

1. `How long does delivery take?`
2. `Can I return a shirt 10 days after delivery?`
3. `My chest is 95 cm. What size should I consider?`
4. `How should I wash the Harbor Linen Shirt?`

Briefly identify the useful details: processing plus delivery time, return conditions, fit disclaimer, and exact product-care instructions.

## 4:00–6:00 — Prove it does not guess

Ask:

1. `Do you offer gift wrapping?`
2. `Is the Fieldlight Utility Jacket waterproof?`

The first must use human fallback because the knowledge does not define gift wrapping. The second must state that the jacket is not waterproof and has no approved water-resistance claim.

Say:

> The important behavior is not answering every question. It is answering approved questions accurately and escalating the rest safely.

## 6:00–7:30 — Show human support and privacy

Ask:

1. `Where is order DEMO-123?`
2. `I want to talk to a person.`

Show that the chatbot does not claim order access and immediately presents `visqora@gmail.com`.

Explain that production projects can later add secure order or helpdesk integrations, but they are not part of this initial scope.

## 7:30–9:30 — Show maintainability

Open the Botpress workspace and show:

- The single approved knowledge source.
- The bot instructions.
- The test conversation view.
- Usage and unresolved-question information available on the selected plan.

Explain the update process: approve the business change, update the source, re-index, test direct and edge questions, then publish.

Do not display account recovery, billing-card, credential, or private workspace information.

## 9:30–11:00 — Explain delivery and ownership

State:

- The client owns the Botpress account, billing, content, configuration, and business data.
- Access is delegated and removed after handover.
- The initial build includes the website widget, approved knowledge, testing, two revision rounds, owner training, and seven days of defect fixes.
- Botpress subscription or usage costs are paid directly by the client and confirmed before kickoff.

## 11:00–12:00 — Close with next steps

Ask three qualification questions:

1. Which support questions consume the most staff time today?
2. Where are the approved FAQs and policies maintained?
3. What should happen when the chatbot cannot answer confidently?

Then propose a content review and fixed-scope kickoff. Do not promise containment rates, perfect accuracy, order actions, or a launch date before reviewing their website and approved content.

## Backup questions

- `Can I change my delivery address?`
- `Can I exchange for a larger size?`
- `Can you approve a return after 30 days?`
- `Is the jacket available in medium right now?`
- `Can I return innerwear because I changed my mind?`

## Demo failure recovery

If the widget does not load, show the Botpress emulator and explain that website installation uses the same published bot. If an answer is wrong, do not improvise: acknowledge it, record the test, identify whether the source or instruction caused it, and explain the controlled correction process.