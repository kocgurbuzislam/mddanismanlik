export function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

export function mailtoHref(email: string) {
  return `mailto:${email}`;
}

export function mapsSearchHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function mapsEmbedSrc(address: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&hl=tr&z=11&output=embed`;
}
