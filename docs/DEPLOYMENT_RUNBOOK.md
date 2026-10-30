# Deployment Runbook

## 1. Purpose

This runbook covers safe installation, verification, and rollback of the chatbot website widget. Complete the environment-specific fields before deployment.

## 2. Deployment record

| Field | Value |
| --- | --- |
| Client/store | TBD |
| Chatbot platform | TBD |
| Bot/workspace ID | TBD; record public identifier only |
| Staging URL | TBD |
| Production URL | TBD |
| Website platform/theme | TBD |
| Installation method | Native app / theme code / tag manager / other |
| Approved pages | TBD |
| Excluded pages | TBD |
| Consent requirement | TBD |
| Deployment owner | TBD |
| Client approver | TBD |
| Launch window | TBD |
| Rollback owner | TBD |

Never record passwords, API keys, access tokens, recovery codes, or private administrative identifiers in this document.

## 3. Pre-deployment gate

- [ ] Written staging acceptance received.
- [ ] Critical tests pass and no Severity 1 or 2 defect is open.
- [ ] Client-owned production account and billing are verified.
- [ ] Production knowledge sources are approved and indexed.
- [ ] Human-support destination and wording are approved.
- [ ] Privacy notice, consent behavior, retention, and allowed domains are configured.
- [ ] Widget appearance is approved on desktop and mobile.
- [ ] Existing website backup, theme version, or change snapshot is available.
- [ ] Exact rollback action and responsible person are confirmed.
- [ ] Client technical contact is available during the launch window.

## 4. Obtain the widget safely

1. Sign in through the client-approved delegated account.
2. Open the platform's official webchat or embed settings.
3. Select the production bot and verify the production domain.
4. Copy the provider-generated installation snippet or use its official integration.
5. Confirm the snippet contains only browser-safe public identifiers.
6. Do not manually add server API keys or administrative tokens.
7. Save the provider documentation URL and configuration version in the change record.

Use the current provider-generated snippet rather than a copied example from an old project.

## 5. Installation options

Choose one method supported by the website and client change process.

### Native platform or chatbot app

1. Install the official integration in the client account.
2. Grant only required permissions.
3. Connect the approved production bot.
4. Enable it only on approved pages or themes.
5. Record the app name, publisher, version, and uninstall procedure.

### Shopify theme or custom pixel area

1. Duplicate the live theme or use a development theme.
2. Add the official snippet in the location recommended by the provider and Shopify.
3. Avoid editing checkout unless the client's plan and policy explicitly permit it.
4. Preview and test the unpublished theme.
5. Publish only after approval and retain the prior theme for rollback.

### WordPress/WooCommerce

1. Use the provider's maintained plugin when trustworthy and supported; otherwise use the site's approved script-injection mechanism.
2. Avoid modifying parent-theme files directly.
3. Clear relevant caches after the controlled change.
4. Verify cart, checkout, consent, and mobile layouts.
5. Record plugin settings and the disable/uninstall procedure.

### Tag manager

1. Create a dedicated tag with a descriptive name and owner.
2. Restrict triggers to approved domains and pages.
3. Integrate with consent mode where required.
4. Use preview mode and verify the tag fires once.
5. Publish a named container version and record the previous version for rollback.

### Direct code installation

1. Create a small, isolated change in the site's approved global layout or script loader.
2. Load the widget asynchronously when supported.
3. Apply approved domain, page, and consent conditions.
4. Review the code change through the site's normal release process.
5. Retain a precise revert change.

## 6. Content Security Policy

If the site uses a Content Security Policy, identify the exact provider origins required for scripts, frames, network requests, images, and styles from official documentation and browser console evidence. Add only the minimum origins; do not weaken the policy with broad wildcards or unsafe directives solely to make the widget load.

Client technical approval is required for policy changes.

## 7. Staging verification

Verify:

- Widget loads once and opens, closes, scrolls, and resets as designed.
- Greeting, bot name, colors, icon, and privacy link are correct.
- Human-support action reaches the approved destination.
- Critical knowledge and fallback tests pass.
- No browser console error is caused by the widget.
- No administrative token is visible in page source or network requests.
- Widget does not cover navigation, cookie controls, product actions, cart, or checkout controls.
- Keyboard focus and basic screen-reader labels are usable where the platform supports them.
- Page load and primary interaction remain acceptable.
- Consent behavior matches the agreed requirement.

Record screenshots or transcripts using synthetic data only.

## 8. Production deployment

1. Confirm launch approval and support contacts.
2. Record the current website/theme/tag-manager version.
3. Apply the accepted installation through the approved release method.
4. Confirm the widget loads only on approved production domains and pages.
5. Run the production smoke tests below.
6. If a blocking issue appears, execute rollback immediately.
7. Record completion time, installer, version, and outcome.

## 9. Production smoke tests

- [ ] Open and close widget on desktop home and product pages.
- [ ] Open and close widget on mobile home and product pages.
- [ ] Ask one approved question from each core topic.
- [ ] Ask one unsupported question and confirm fallback.
- [ ] Request a human and activate the support route.
- [ ] Verify cart and checkout controls where the widget is enabled.
- [ ] Confirm widget does not appear on excluded pages.
- [ ] Check consent behavior in a fresh private browser session.
- [ ] Check browser console and network failures.
- [ ] Confirm platform logs receive the synthetic test conversation as expected.

## 10. Rollback

Rollback triggers include a broken site journey, exposed secret, unusable mobile layout, failed support route, incorrect production bot, repeated widget loading, privacy/consent failure, or any Severity 1 defect.

Rollback procedure:

1. Disable the integration, unpublish the tag, remove the isolated snippet, or restore the previous theme/version.
2. Clear caches only when required by the website platform.
3. Confirm the widget no longer loads and the website journey works normally.
4. Preserve non-sensitive error evidence and timestamps.
5. Notify the client approver and record the reason.
6. Correct and retest in staging before attempting another launch.

Do not delete the client-owned bot or knowledge base as a website rollback action.

## 11. Deployment sign-off

| Field | Value |
| --- | --- |
| Production version/change ID | TBD |
| Deployment time | TBD |
| Smoke-test result | Pass / Fail |
| Rollback test or method verified | Yes / No |
| Open issues | TBD |
| Client approval | Name/date |
| Support-period end date | TBD |
