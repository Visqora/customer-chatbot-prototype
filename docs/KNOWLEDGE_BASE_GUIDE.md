# Knowledge-Base Guide

## 1. Purpose

The knowledge base is the chatbot's approved source of truth. Updating it changes what the bot may answer, so every update should be treated as a controlled content release rather than an informal upload.

## 2. Source inventory

Maintain an inventory for every source:

| Field | Description |
| --- | --- |
| Source ID | Stable short name, such as `returns-policy` |
| Topic | Shipping, returns, exchanges, sizing, product, or contact |
| Title | Human-readable source title |
| Owner | Person responsible for business accuracy |
| Location | File name or canonical URL |
| Effective date | Date the policy became valid |
| Review date | Next planned review |
| Status | Draft, approved, superseded, or retired |
| Notes | Conflicts, audience, region, or product limits |

Only sources marked approved may be published to the chatbot.

## 3. Content preparation rules

- Use clear headings and one policy topic per section.
- State exact windows, conditions, exclusions, regions, units, and fees.
- Use consistent product names and terminology.
- Keep tables simple and include column headings.
- Replace image-only text with accessible text.
- Link to a canonical public page where available.
- Remove navigation, cookie banners, promotional content, and unrelated boilerplate from copied pages.
- Remove duplicate, expired, draft, and contradictory material.
- Do not include customer records, credentials, or internal notes unrelated to chatbot answers.

When two approved sources conflict, pause publication and ask the client content owner which rule controls.

## 4. Initial import process

1. Receive approved sources through the agreed secure channel.
2. Record them in the source inventory.
3. Scan for sensitive data, conflicts, missing dates, and unreadable content.
4. Normalize headings and obvious formatting issues without changing policy meaning.
5. Upload or synchronize the sources in the client-owned platform account.
6. Confirm indexing or processing completed successfully.
7. Run at least one direct, paraphrased, edge-case, and unsupported question per topic.
8. Record results in the acceptance report.
9. Obtain client approval before production publication.

## 5. Updating knowledge after launch

The client knowledge owner should use this release process:

1. Update the canonical policy or product source.
2. Obtain internal approval for the business change.
3. Mark the previous source version superseded or replace it in place.
4. Upload or resynchronize the approved source.
5. Wait for platform indexing to complete.
6. Test the changed rule, nearby edge cases, and one unsupported question.
7. Publish the update.
8. Record the date, editor, sources changed, tests run, and outcome.

Avoid leaving old and new policy versions active at the same time.

## 6. Minimum regression questions

After any content update, test:

- A direct question using the same wording as the source.
- A customer-style paraphrase.
- A boundary or exception question.
- A question whose answer should remain unchanged.
- A question that the bot still should not answer.
- The human-support request.

## 7. Change log template

| Date | Editor | Source IDs | Change summary | Test evidence | Approved by |
| --- | --- | --- | --- | --- | --- |
| YYYY-MM-DD | Name | IDs | Summary | Report/link | Name |

## 8. Routine review

Recommended monthly review:

- Check unresolved and fallback questions for missing approved content.
- Verify contact details and support hours.
- Confirm policy effective dates and links.
- Remove retired products and expired campaigns.
- Review usage against platform limits.

Recommended immediate review triggers:

- Shipping provider, region, rate, or timeframe changes.
- Return or exchange policy changes.
- New sizing standards or product collections.
- Repeated wrong or incomplete answers.
- Legal, privacy, or support contact changes.

## 9. Troubleshooting

### Correct source exists but answer is wrong

- Confirm the latest source is indexed and active.
- Remove duplicates and conflicting versions.
- Make the relevant section explicit and self-contained.
- Retest with direct and paraphrased wording.
- Review bot instructions only after source quality is confirmed.

### Bot cannot find a source

- Confirm supported file format and successful processing.
- Check permissions for synchronized URLs or drives.
- Replace scanned image PDFs with searchable text.
- Split very large mixed-topic documents into focused sources.

### Bot answers beyond approved content

- Strengthen the approved-source-only instruction.
- Lower or tighten the platform's knowledge/fallback threshold where available.
- Add negative tests and confirm fallback wording.
- Escalate to the platform provider if behavior cannot be controlled reliably.

## 10. Knowledge-owner handover check

The owner should be able to demonstrate, without freelancer assistance:

- Finding the active source list.
- Adding or replacing an approved source.
- Removing a superseded source.
- Waiting for indexing and identifying an error.
- Running a test conversation.
- Reviewing fallback questions.
- Recording a knowledge change.