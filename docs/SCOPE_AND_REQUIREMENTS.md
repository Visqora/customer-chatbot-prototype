# Scope and Requirements

## 1. Included scope

The initial project includes:

- One chatbot for one e-commerce website and one production domain.
- One managed chatbot workspace or bot owned by the client.
- Knowledge configuration from up to 20 approved documents or web pages.
- Support for shipping, returns, exchanges, sizing, and product-information questions.
- Branded greeting, concise response style, and standard widget styling.
- A visible human-support fallback using one agreed support route.
- Up to 50 supplied acceptance questions.
- One staging installation and one production installation when staging is available.
- Two consolidated revision rounds.
- Launch checks, handover documentation, and one owner-training session of up to 45 minutes.
- Seven calendar days of post-launch defect correction.

## 2. Functional requirements

### FR-01: Approved knowledge only

The bot must answer factual store questions only from approved knowledge sources. It must not invent policy terms, delivery dates, prices, stock levels, product claims, or contact details.

### FR-02: Supported topics

The bot must recognize and answer approved questions in these categories:

- Shipping regions, methods, costs, and expected timeframes.
- Return eligibility, windows, conditions, and process.
- Exchange eligibility, process, and limitations.
- Size guides and fit information present in approved content.
- Product facts present in approved content.

### FR-03: Clarification

When a question is ambiguous, the bot should ask one concise clarifying question before attempting an answer or fallback.

### FR-04: Human fallback

When knowledge is missing, confidence is low, the user requests a person, or the issue requires account-specific action, the bot must:

1. State that it cannot confirm the answer.
2. Avoid guessing.
3. Present the agreed contact route.
4. Preserve only the conversation information permitted by the client's privacy policy.

### FR-05: Restricted actions

Unless separately scoped and integrated, the bot must not claim to:

- Access, cancel, refund, edit, or track an order.
- View customer accounts or payment details.
- Guarantee inventory, delivery, fit, or return approval.
- Make exceptions to published policy.
- Collect passwords, full payment-card data, government identifiers, or other unnecessary sensitive data.

### FR-06: Widget behavior

The widget must:

- Load on agreed pages without blocking the website.
- Work on current desktop and mobile browsers.
- Use approved display name, colors, icon, greeting, and fallback text.
- Avoid covering checkout controls, cookie controls, navigation, or key mobile actions.
- Respect the client's consent and privacy requirements.

### FR-07: Basic operational visibility

The client owner must be able to review platform-provided conversation logs, usage, unresolved questions, and knowledge configuration subject to the selected plan's features.

## 3. Non-functional requirements

- **Ownership:** Client owns accounts, configuration, content, conversation data, and business data.
- **Security:** Access is least-privilege and removed after delivery.
- **Privacy:** Synthetic data is used for development and acceptance tests.
- **Performance:** Widget loading must not materially block primary page interaction.
- **Maintainability:** A trained client owner can replace or update knowledge without developer assistance.
- **Traceability:** Every acceptance question has a recorded result and disposition.
- **Availability:** Platform availability follows the selected provider's service terms; no custom uptime guarantee is included.

## 4. Client inputs

Before configuration begins, the client supplies:

- Approved FAQ and policy files.
- Product and sizing sources to include.
- Brand name, tone, colors, logo or widget icon, and greeting.
- Human-support contact route and operating hours, if applicable.
- Website platform details and staging access.
- Privacy-policy URL and cookie-consent requirements.
- Test questions and expected answers or policy references.
- Named business approver and technical contact.

Content requiring legal or policy judgment remains the client's responsibility.

## 5. Out of scope

- Order management or order-status API integrations.
- Customer authentication or personalized account support.
- Helpdesk ticket creation unless available as a no-code feature and explicitly approved.
- Voice, WhatsApp, social messaging, mobile app, or multiple websites.
- Multilingual translation or localization.
- Custom model training, fine-tuning, or self-hosted infrastructure.
- Policy writing, legal review, product copywriting, or data cleansing beyond basic formatting.
- Custom dashboards, CRM synchronization, or advanced analytics.
- Guaranteed containment, sales conversion, or model accuracy percentages.
- Ongoing monitoring after the documented support period.

## 6. Acceptance criteria

The release is accepted when:

- 100% of critical tests pass.
- At least 90% of applicable supplied questions pass overall.
- No answer contradicts an approved policy.
- Unsupported and account-specific questions trigger the correct fallback.
- Human contact links and details work.
- Widget installation passes desktop and mobile checks on agreed pages.
- No critical website regression is introduced.
- Client ownership and knowledge-update access are demonstrated.
- Documentation, training, and access removal are complete.

An answer fails if it materially changes policy meaning, invents a fact, omits a required restriction, exposes private data, or fails to offer fallback when required.

## 7. Scope confirmation record

Complete before kickoff:

| Item | Agreed value |
| --- | --- |
| Client / store | TBD |
| Website and platform | TBD |
| Chatbot platform and plan | TBD |
| Source count | TBD |
| Acceptance question count | TBD |
| Human fallback route | TBD |
| Launch language | English / TBD |
| Staging URL | TBD |
| Production URL | TBD |
| Target launch date | TBD |
| Client approver | TBD |
| Fixed price | TBD |