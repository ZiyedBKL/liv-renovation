"use client";

import { useState, FormEvent, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { X, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/schema-org";

const SERVICES = [
  "Serrurerie",
  "Vitrerie",
  "Peinture",
  "Plomberie",
  "Fenêtres & portes",
  "Volets roulants",
  "Électricité",
  "Revêtements & finitions",
  "Entretien & rénovation",
  "Dépannage urgent",
] as const;

const DELAYS = [
  "Urgent (< 24h)",
  "Cette semaine",
  "Sous 2 semaines",
  "Pas pressé",
] as const;

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setPhotos((prev) => [...prev, ...acceptedFiles].slice(0, 5));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".webp"] },
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024,
  });

  function removePhoto(idx: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
  }

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields = Object.fromEntries(data.entries()) as Record<string, string>;
    const payload = {
      ...fields,
      services: selectedServices,
      photoCount: photos.length,
    };

    // TODO: remplacer par POST webhook n8n quand URL fournie
    console.log("[QuoteForm] submission", payload, photos);

    const subject = `Devis LIV — ${fields.lastname ?? ""} — ${selectedServices.join(", ")}`;
    const body =
      `Nom : ${fields.firstname} ${fields.lastname}\n` +
      `Email : ${fields.email}\n` +
      `Téléphone : ${fields.phone}\n` +
      `Services : ${selectedServices.join(", ")}\n` +
      `Adresse : ${fields.address}\n` +
      `Délai : ${fields.delay}\n` +
      `Message : ${fields.message}\n` +
      (photos.length > 0 ? `\n[${photos.length} photo(s) jointes — à envoyer séparément]` : "");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-12 text-center max-w-3xl mx-auto">
        <p className="font-display text-4xl tracking-tight uppercase text-primary mb-4">
          Demande envoyée
        </p>
        <p className="font-sans text-base text-muted-foreground">
          Nous revenons vers vous sous 24h ouvrées avec un devis détaillé.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-2xl p-6 md:p-10 max-w-3xl mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="firstname">Prénom *</Label>
          <Input id="firstname" name="firstname" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastname">Nom *</Label>
          <Input id="lastname" name="lastname" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Téléphone *</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
      </div>

      <div className="grid gap-2">
        <Label>Services concernés *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
          {SERVICES.map((s) => {
            const active = selectedServices.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                className={`text-left rounded-lg px-3 py-2 text-sm transition-all border ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary/50"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="address">Adresse d&apos;intervention</Label>
        <Textarea id="address" name="address" rows={2} placeholder="Ville, arrondissement, code postal…" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="delay">Délai souhaité</Label>
        <select
          id="delay"
          name="delay"
          className="h-9 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Sélectionner…</option>
          {DELAYS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <Label>Photos du problème <span className="text-muted-foreground">(facultatif — accélère le devis)</span></Label>
        <div
          {...getRootProps()}
          className={`flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-8 cursor-pointer transition-colors ${
            isDragActive
              ? "border-primary bg-gold-soft"
              : "border-border hover:border-primary/50"
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="size-6 text-muted-foreground" />
          <p className="font-sans text-sm text-muted-foreground text-center">
            {isDragActive
              ? "Lâchez les fichiers ici…"
              : "Glissez-déposez ou cliquez pour ajouter (5 max, 5 Mo chacune)"}
          </p>
        </div>
        {photos.length > 0 && (
          <ul className="mt-3 space-y-1">
            {photos.map((p, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-md bg-background px-3 py-2 text-sm"
              >
                <span className="truncate">{p.name}</span>
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  aria-label="Retirer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Votre message</Label>
        <Textarea id="message" name="message" rows={4} placeholder="Décrivez le problème, vos contraintes, vos disponibilités…" />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Envoyer ma demande de devis
      </Button>
    </form>
  );
}
