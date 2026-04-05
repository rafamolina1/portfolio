"use client";

import { track } from "@vercel/analytics";
import { Copy, Mail, X } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface ContactDialogTriggerProps {
  email: string;
  location: string;
  className?: string;
  children: ReactNode;
}

export default function ContactDialogTrigger({
  email,
  location,
  className,
  children,
}: ContactDialogTriggerProps) {
  const t = useTranslations("contact");
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const openDialog = () => {
    track("contact_dialog_open", { location });
    setCopied(false);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setCopied(false);
    setIsOpen(false);
  };

  const handleCopy = async () => {
    let copiedSuccessfully = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        copiedSuccessfully = true;
      }
    } catch {
      copiedSuccessfully = false;
    }

    if (!copiedSuccessfully) {
      copiedSuccessfully = fallbackCopyToClipboard(email);
    }

    if (copiedSuccessfully) {
      setCopied(true);
      track("email_copy", { location });

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } else {
      setCopied(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <button type="button" onClick={openDialog} className={className}>
        {children}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 whitespace-normal">
          <button
            type="button"
            aria-label={t("close")}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeDialog}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            className="relative z-10 w-full max-w-md overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950/95 p-6 text-left whitespace-normal shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.08),transparent_28%)]" />

            <div className="relative flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/80 text-cyan-300">
                  <Mail size={20} />
                </div>
                <h3 id="contact-dialog-title" className="text-xl font-semibold text-zinc-100">
                  {t("title")}
                </h3>
                <p className="mt-2 max-w-full text-sm leading-6 text-zinc-400">
                  {t("description")}
                </p>
              </div>

              <button
                type="button"
                aria-label={t("close")}
                onClick={closeDialog}
                className="shrink-0 rounded-full border border-zinc-800 bg-zinc-900/70 p-2 text-zinc-400 transition-colors hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {t("emailLabel")}
              </p>
              <p className="mt-2 break-all text-base font-medium text-zinc-100">
                {email}
              </p>
            </div>

            <div className="relative mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-cyan-500/40 hover:bg-zinc-800"
              >
                <Copy size={16} />
                {copied ? t("copied") : t("copyEmail")}
              </button>

              <a
                href={`mailto:${email}`}
                onClick={() => track("email_mailto_click", { location })}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
              >
                <Mail size={16} />
                {t("openMail")}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function fallbackCopyToClipboard(value: string) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, value.length);

  const copiedSuccessfully = document.execCommand("copy");
  document.body.removeChild(textarea);

  return copiedSuccessfully;
}
