# Gut Reset Masterclass Landing Page (React + Vite + Tailwind)

## Run
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build in /dist

## Configure (src/data/config.js)
- WHATSAPP_NUMBER / WHATSAPP_MESSAGE: floating WhatsApp button link.
- FORM_ENDPOINT: URL that accepts a JSON POST {name, whatsapp, email}
  (Google Apps Script, Formspree, your own API). While empty, the form validates
  but shows a "not connected yet" notice and stores nothing. After a successful POST
  (HTTP 2xx) the visitor is sent to the thank-you page (#thank-you).

## Structure
public/images        all images (served as /images/...)
public/favicon.svg
src/components       Hero, About, WhoFor, WhyJoin, WhyAttend, Learn, Bonuses, MasterclassDetails,
                     LeadForm, FAQ, FinalCTA, Footer, Header, Logo, Floating, ThankYou, ui (shared)
src/data             content.js (all copy), config.js (WhatsApp, form endpoint, analytics IDs)
src/hooks, src/utils scroll reveal, tracking
Edit copy in src/data/content.js.

## Notes
- Fonts (Fraunces, Hind) load from Google Fonts; the site falls back to system fonts offline.
- Images are large PNGs; compress them (e.g. squoosh.app) before deploying.

## Analytics / KPI tracking
Set GA4_ID and/or META_PIXEL_ID in src/data/config.js (empty = tracking disabled).
Events sent: cta_click (label, target), form_start, form_error, registration
(Meta standard event "Lead"; fires only after the endpoint returns success),
whatsapp_click, scroll_depth (25/50/75/100).
KPIs: conversion rate = registration / visitors; form completion = registration / form_start.
In GA4 mark `registration` as a Key Event to see it in conversion reports.
