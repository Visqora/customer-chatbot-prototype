# Security and Data Handling

## 1. Ownership principles

- The client owns production platform accounts, bots, content, domains, configuration, conversation data, analytics, and business data.
- The client controls provider billing and recovery methods.
- The freelancer receives collaborator access rather than account-owner credentials wherever possible.
- The freelancer may not reuse client content, transcripts, branding, or configuration in a demo or portfolio without written permission.

## 2. Account setup

The preferred setup is:

1. Client creates the production account using a client-controlled email address.
2. Client enables multi-factor authentication where available.
3. Client stores recovery information in its approved password manager.
4. Client invites the freelancer using the least-privilege role needed.
5. Client removes or downgrades freelancer access at handover.

Shared accounts should be avoided. Production ownership must not depend on a freelancer's personal email, phone, payment card, or social-login identity.

## 3. Credential handling

- Never place passwords, API keys, tokens, recovery codes, or private widget credentials in this repository.
- Use delegated access, provider invitations, or a client-approved password manager.
- Never request secrets through ordinary email, chat, forms, screenshots, or project documents.
- Do not download credentials to unmanaged devices.
- Do not reuse credentials across client systems.
- Revoke temporary tokens and delete local credential material as soon as access is no longer needed.
- Record access removal in the handover checklist without recording the secret itself.

Public website widget identifiers may appear in website code only when the provider documents them as safe for browser exposure.

## 4. Data minimization

Development, demonstrations, and acceptance tests use synthetic names, orders, email addresses, and scenarios. Real customer transcripts or account information must not be used to prove functionality.

Only approved business content required for the chatbot is uploaded. Before upload, remove:

- Customer records and order histories.
- Employee-only notes not needed for answers.
- Credentials, tokens, and internal system details.
- Payment data and government identifiers.
- Draft or superseded policies.
- Contractual or commercially sensitive content unrelated to support answers.

## 5. Visitor data behavior

The chatbot should discourage visitors from entering sensitive information. The initial bot does not need full names, payment data, passwords, or government identifiers.

If a visitor voluntarily provides personal data, handling follows the client's privacy policy and the selected provider's controls. The freelancer must not export or retain it unless the client explicitly authorizes a support investigation.

## 6. Privacy and provider review

Before launch, the client and freelancer record:

- Provider legal entity and service region, where configurable.
- Provider privacy policy, data-processing terms, and subprocessors.
- Conversation and log retention settings.
- Whether provider data is used for model training and available opt-out controls.
- Data deletion and export procedures.
- Client privacy-policy or cookie-consent changes required for the widget.

The freelancer identifies technical settings but does not provide legal advice. The client is responsible for legal approval.

## 7. Website access

- Prefer a staging environment and a restricted website role.
- Limit access to theme, tag manager, or integration settings needed for widget installation.
- Do not alter checkout, payment, customer, DNS, or unrelated production settings.
- Record the exact widget change and rollback procedure.
- Remove website access after production verification unless ongoing support is separately agreed.

## 8. Incident handling

If a credential, personal-data exposure, unauthorized access, or unexpected data transfer is suspected:

1. Stop using the affected access without destroying evidence.
2. Notify the named client contact promptly through the agreed channel.
3. Revoke or rotate exposed credentials under client direction.
4. Preserve only necessary timestamps and non-sensitive evidence.
5. Document scope, actions, and remaining risk.
6. Delete incident working copies after the client confirms closure.

The freelancer must not conceal, independently publicize, or use client incidents as portfolio material.

## 9. Retention and deletion

At handover or termination, the freelancer must:

- Return or confirm client access to all deliverables.
- Delete local copies of source documents, exports, transcripts, screenshots, and credentials unless retention is legally required or separately approved.
- Empty temporary sharing locations under freelancer control.
- Remove saved browser sessions and local tokens.
- Confirm deletion in writing.

The client decides production conversation-retention periods and manages deletion within its provider accounts.

## 10. Security acceptance checklist

- [ ] Production accounts use client-controlled ownership and billing.
- [ ] Multi-factor authentication is enabled where available.
- [ ] Freelancer access is named, limited, and time-bound.
- [ ] No secrets are stored in repository files or documentation.
- [ ] Source documents contain no customer data or credentials.
- [ ] Synthetic test data is confirmed.
- [ ] Provider privacy and retention settings are recorded.
- [ ] Website rollback procedure is documented.
- [ ] Access removal and local deletion are confirmed at handover.
