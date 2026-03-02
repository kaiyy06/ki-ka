# Codebase Flaws Audit

## Scope
- Frontend-only React + Vite codebase (`src/`), no backend service, no persistence layer.
- Goal: identify practical architecture/product flaws before implementing fixes.

## High-priority flaws

1. **No backend/data model for photos or content (hardcoded assets/strings)**
   - Photo lists and timeline/reason images are hardcoded in `src/assets.ts` and component-level arrays.
   - Text content (letter, quiz questions, anthology chapters, timeline metadata) is embedded in TSX files.
   - Impact: no runtime updates, no user uploads, no moderation workflow, no role-based editing, no auditability.
   - Files:
     - `src/assets.ts`
     - `src/components/Journey.tsx`
     - `src/components/ReasonsGallery.tsx`
     - `src/components/Quiz.tsx`
     - `src/components/Letter.tsx`
     - `src/components/Anthology.tsx`

2. **Images depend on third-party remote URLs (Unsplash) with no ownership guarantees**
   - Gallery/Journey/Reasons images are loaded from external URLs.
   - Impact: content can disappear/change, legal/licensing risk, network/privacy dependence, mixed performance by geography.
   - File: `src/assets.ts`.

3. **No upload pipeline or storage abstraction**
   - There is no API client/service layer for image CRUD, metadata, tagging, or sorting.
   - Impact: impossible to evolve toward cloud object storage + DB indexing without reworking components.
   - Evidence: all components read in-memory constants; no `fetch`/API module exists.

4. **Accessibility gaps in interactive controls**
   - Gallery drag interaction is pointer-driven and lacks keyboard controls/focus semantics.
   - Modal in quiz has no explicit dialog semantics (`role="dialog"`, `aria-modal`, focus trap, ESC handling).
   - Impact: keyboard and assistive-tech usability issues.
   - Files:
     - `src/components/Gallery.tsx`
     - `src/components/Quiz.tsx`

5. **Potential state update after unmount in quiz**
   - `setTimeout` in `handleAnswer` is not cleared on unmount.
   - Impact: occasional React warnings and subtle race conditions.
   - File: `src/components/Quiz.tsx`.

## Medium-priority flaws

6. **No error/loading states for media fetch failures**
   - `<img>` tags have no fallback UI on broken URLs.
   - Impact: blank cards and degraded UX when remote images fail.
   - Files: image-rendering components across `src/components/*`.

7. **No content schema/versioning**
   - There is no typed domain model for entities like `Photo`, `JourneyStep`, `QuizQuestion`.
   - Impact: hard to validate/transform data when moving to API-backed content.

8. **No test harness (unit/integration/e2e)**
   - `package.json` has no test scripts and repo has no test files.
   - Impact: regressions likely during refactors (especially animation-heavy UI).
   - File: `package.json`.

9. **No lint/format static quality gate**
   - No ESLint/Prettier scripts configured.
   - Impact: style drift and potential bug patterns not caught early.
   - File: `package.json`.

10. **Animation/accessibility preference not respected globally**
   - Heavy framer-motion usage without clear reduced-motion strategy.
   - Impact: motion-sensitive users may have poor experience.
   - Files: multiple components using Framer Motion.

## Recommended target architecture (for your photos concern)

### Data + storage baseline
- **Database**: PostgreSQL (or managed equivalent).
- **Object storage**: S3-compatible bucket for original/derived images.
- **Tables** (minimum):
  - `photos(id, storage_key, title, caption, taken_at, created_by, visibility, sort_order, created_at)`
  - `albums(id, name, slug, created_at)`
  - `album_photos(album_id, photo_id, sort_order)`
  - `journey_steps(id, title, date_label, description, photo_id, sort_order)`
  - `reasons(id, caption, photo_id, sort_order)`

### API shape
- `GET /api/gallery/photos`
- `POST /api/photos/presign-upload` (server issues signed upload URL)
- `POST /api/photos` (store metadata after upload)
- `GET /api/journey`
- `GET /api/reasons`
- Optional admin endpoints for reordering and edits.

### Frontend integration
- Replace `src/assets.ts` constants with API hooks/service layer.
- Keep a local placeholder image while loading.
- Add retry/fallback for broken image resources.

## Suggested implementation order
1. Introduce backend + DB schema + object storage integration.
2. Migrate `assets.ts` image lists to DB-backed API endpoints.
3. Add admin upload + metadata flow.
4. Add accessibility fixes (keyboard gallery, modal semantics/focus trap).
5. Add tests + linting pipeline.
