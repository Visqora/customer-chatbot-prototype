# Project Plan

## 1. Objective

Build, test, deploy, and hand over one website chatbot for one e-commerce store. The bot will answer common support questions from approved content and transfer unsupported questions to a human-support channel.

## 2. Assumptions

- The client supplies final, approved FAQs, store policies, brand guidance, and product or sizing content.
- Source content is supplied in readable text, PDF, DOCX, CSV, or public web pages without access restrictions.
- The client identifies one human-support destination, such as an email address, helpdesk URL, contact form, or live-agent queue.
- The initial acceptance set contains no more than 50 questions.
- Installation requires one standard JavaScript widget snippet and no custom checkout or account integration.
- The website platform permits custom scripts or has a supported chatbot integration.
- English is the only launch language unless agreed otherwise.

Any failed assumption triggers a scope review before implementation continues.

## 3. Delivery phases

| Phase | Activities | Deliverable | Target |
| --- | --- | --- | --- |
| 1. Kickoff | Confirm scope, platform, ownership, support route, and success criteria | Signed scope and access checklist | Day 1 |
| 2. Knowledge setup | Review, normalize, and upload approved content | Knowledge-base inventory | Day 1-2 |
| 3. Bot configuration | Configure instructions, brand voice, topics, fallback, and widget | Staging chatbot | Day 2-3 |
| 4. Testing | Run supplied questions, record evidence, correct defects | Completed acceptance report | Day 3-4 |
| 5. Deployment | Install widget, verify production behavior, and prepare rollback | Production chatbot | Day 5 |
| 6. Handover | Train owner, deliver documentation, and remove retained access | Handover sign-off | Day 5 |

Business-day targets begin when all required inputs and access are available. Client review delays move subsequent dates by the same duration.

## 4. Milestones and payments

| Milestone | Evidence | Payment |
| --- | --- | --- |
| Kickoff approved | Scope, platform, inputs, and access confirmed | 30% |
| Staging accepted | Core topics and fallback pass the agreed staging test | 40% |
| Launch and handover accepted | Production checks, ownership, training, and documents complete | 30% |

No milestone is accepted solely because time has elapsed. Acceptance is tied to the evidence listed above.

## 5. Roles

### Client

- Create and own production platform accounts.
- Supply approved content and confirm it is accurate.
- Provide least-privilege, time-limited access.
- Supply the test-question list and expected policy outcomes.
- Approve the staging bot and production launch.
- Inform the implementer before changing website security policies or widget code.

### Freelancer

- Configure only the agreed chatbot and widget.
- Identify ambiguous, contradictory, or missing source content.
- Keep client data and credentials secure.
- Maintain the test report and defect log.
- Deploy only after written staging approval.
- Deliver training and remove access when no longer required.

## 6. Commercial baseline

- **Proposed fixed price:** ₹6,500.
- **Included:** configuration, one widget installation, up to 20 source documents or pages, up to 50 acceptance questions, two consolidated revision rounds, deployment, documentation, and handover.
- **Post-launch defect period:** seven calendar days.
- **Not included:** platform subscriptions, paid plugins, helpdesk integration development, order-status APIs, custom analytics, multilingual content, copywriting, policy drafting, or ongoing content maintenance.
- **Change control:** work beyond this baseline requires a written description, price, and delivery impact approved before work begins.

## 7. Revision policy

A revision round is one consolidated client feedback list submitted after a review build. Included revisions may adjust wording, approved knowledge, widget appearance within standard platform controls, conversation instructions, and fallback text.

New integrations, new languages, new channels, major content additions, custom code, or changed business policies are scope changes rather than revisions.

## 8. Risks and controls

| Risk | Control |
| --- | --- |
| Inaccurate or conflicting policies | Flag conflicts and require written client clarification |
| Unsupported answer presented confidently | Restrict answers to approved sources and test fallback behavior |
| Website script blocked | Check CSP, consent manager, theme, and staging access early |
| Unexpected platform charges | Document plan limits and obtain client approval before enabling paid usage |
| Credentials retained after delivery | Use delegated access and complete an access-removal checklist |
| Content becomes outdated | Assign a client knowledge owner and periodic review schedule |
| Launch affects site behavior | Use staging first and retain a tested widget rollback procedure |

## 9. Communication and approvals

- One named approver represents the client.
- Scope, staging approval, production approval, and scope changes must be in writing.
- Questions blocking policy accuracy are paused until the client answers them.
- Feedback should be consolidated to protect the delivery schedule and revision allowance.

## 10. Completion checklist

- [ ] Scope and platform approved.
- [ ] Client-owned production account verified.
- [ ] Approved source inventory signed off.
- [ ] Human fallback tested.
- [ ] Acceptance threshold met.
- [ ] Production widget verified on desktop and mobile.
- [ ] Rollback method tested.
- [ ] Knowledge update training completed.
- [ ] Documentation delivered.
- [ ] Freelancer access removed or reduced as agreed.
- [ ] Post-launch support dates recorded.
