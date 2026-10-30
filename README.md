# E-commerce AI Customer Support Chatbot

This repository contains the delivery plan and operating documentation for a tightly scoped e-commerce support chatbot. The reference implementation uses Botpress Cloud, but an equivalent managed chatbot platform may be selected during kickoff if it meets the same security, ownership, testing, and handover requirements.

## Project outcome

The chatbot will:

- Answer approved questions about shipping, returns, exchanges, sizing, and products.
- Use only client-approved FAQs, policies, and product information.
- Avoid inventing answers when the approved knowledge base is insufficient.
- Offer a clear path to human support.
- Run as an embedded widget on one client website.
- Be tested against an agreed question set before launch.
- Remain under client ownership, including platform accounts, content, and business data.

## Documentation

| Document | Purpose |
| --- | --- |
| [Project plan](docs/PROJECT_PLAN.md) | Phases, timeline, milestones, roles, risks, and price assumptions |
| [Scope and requirements](docs/SCOPE_AND_REQUIREMENTS.md) | Included behavior, exclusions, inputs, and acceptance criteria |
| [Solution design](docs/SOLUTION_DESIGN.md) | Reference architecture, conversation behavior, fallback, and costs |
| [Security and data handling](docs/SECURITY_AND_DATA_HANDLING.md) | Account ownership, credential handling, privacy, and deletion rules |
| [Knowledge-base guide](docs/KNOWLEDGE_BASE_GUIDE.md) | Content preparation, updates, review, and versioning |
| [Test and acceptance plan](docs/TEST_AND_ACCEPTANCE_PLAN.md) | Test cases, scoring, defect handling, and launch gate |
| [Deployment runbook](docs/DEPLOYMENT_RUNBOOK.md) | Widget installation, configuration, rollback, and launch checks |
| [Handover and support](docs/HANDOVER_AND_SUPPORT.md) | Training, revisions, post-launch fixes, and ongoing ownership |
| [Supplier response template](docs/SUPPLIER_RESPONSE_TEMPLATE.md) | Comparable quotes, demos, recurring costs, and commitments |

## Working demo

The [Northstar Apparel demo package](demo/README.md) contains a fictional storefront, Botpress-ready knowledge, strict bot instructions, acceptance tests, and a client demonstration script. It uses synthetic business content and no customer data.

The [live Northstar Apparel storefront](https://storefront-tawny-phi.vercel.app/) is deployed from `demo/storefront`. The Vercel project is connected to this repository and deploys changes from `main`.

## Proposed delivery summary

- **Delivery target:** 5 business days after all approved inputs and access are received.
- **Client budget envelope:** ₹5,000–₹7,000 for the tightly scoped initial project.
- **Fixed-price target:** ₹6,500 for the defined initial scope.
- **Payment milestones:** 30% at kickoff, 40% after staging acceptance, and 30% after production launch and handover.
- **Included revisions:** Two consolidated revision rounds before launch.
- **Post-launch fixes:** Seven calendar days for defects against the accepted scope.
- **Recurring costs:** Paid directly by the client to the chosen platform provider. The freelancer must disclose the current plan and usage limits before kickoff.

The price and timeline become binding only after the client confirms the final platform, source-document volume, website technology, human-support channel, and test-question count.

## Definition of done

The project is complete when the chatbot is live on the agreed website, the acceptance test passes, fallback contact details work, the client can update the knowledge base, ownership is verified, credentials have been revoked or deleted, and the handover package has been delivered.

## Important constraints

- Never use real customer data in demos or tests.
- Never upload unapproved content to the knowledge base.
- Never share credentials in repository files, chat messages, or screenshots.
- The client creates and owns production accounts wherever the platform permits.
- Any feature outside the documented scope requires written approval and a separate estimate.
