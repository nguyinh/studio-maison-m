import { NextRequest, NextResponse } from "next/server";
import { SupportedLocales } from "./app/[lang]/dictionaries";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales: SupportedLocales[] = ["en", "fr"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  let headers = { "accept-language": "en-US,en;q=0.5" };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "fr";

  return match(languages, locales, defaultLocale);
  // return "fr";
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|mp3|video|email).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};

// TODO: look at https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing to integrate routing
