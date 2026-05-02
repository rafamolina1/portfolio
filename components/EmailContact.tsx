"use client";

import { Check, Copy, ExternalLink, Mail, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

type EmailContactProps = {
  email: string;
  label: string;
  className?: string;
  iconSize?: number;
  messages?: {
    kicker: string;
    title: string;
    description: string;
    addressLabel: string;
    open: string;
    copy: string;
    copied: string;
    close: string;
    closeWindow: string;
  };
};

const defaultMessages = {
  kicker: "Contato direto",
  title: "Como prefere continuar?",
  description: "Escolha abrir seu app de e-mail ou copiar o endereço para usar no canal que preferir.",
  addressLabel: "E-mail de contato",
  open: "Abrir e-mail",
  copy: "Copiar e-mail",
  copied: "Copiado",
  close: "Fechar",
  closeWindow: "Fechar janela",
};

export function EmailContact({ email, label, className = "button", iconSize = 18, messages = defaultMessages }: EmailContactProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <>
      <button className={className} type="button" onClick={() => setIsOpen(true)}>
        <Mail size={iconSize} aria-hidden="true" />
        {label}
      </button>

      {isOpen
        ? createPortal(
            <div
              className="email-modal-backdrop"
              role="presentation"
              onPointerDown={(event) => {
                if (event.target === event.currentTarget) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="email-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
            <button className="email-modal-close" type="button" onClick={() => setIsOpen(false)} aria-label={messages.close}>
                  <X size={18} aria-hidden="true" />
                  <span>{messages.close}</span>
                </button>

                <span className="email-modal-kicker">{messages.kicker}</span>
                <h2 id={titleId}>{messages.title}</h2>
                <p>{messages.description}</p>

                <div className="email-address" aria-label={messages.addressLabel}>
                  {email}
                </div>

                <div className="email-modal-actions">
                  <a className="button primary" href={`mailto:${email}`} onClick={() => setIsOpen(false)}>
                    <ExternalLink size={18} aria-hidden="true" />
                    {messages.open}
                  </a>
                  <button className="button" type="button" onClick={copyEmail}>
                    {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                    {copied ? messages.copied : messages.copy}
                  </button>
                  <button className="button email-modal-dismiss" type="button" onClick={() => setIsOpen(false)}>
                    <X size={18} aria-hidden="true" />
                    {messages.closeWindow}
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
