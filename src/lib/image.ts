/**
 * An image slot in the content JSON holds either a real asset reference — a URL
 * or a root-relative `/images/…` path — or a plain text label that stands in
 * until an asset exists. This narrows the first case from the second (and from
 * `undefined`).
 */
export function isImageSrc(value: string | undefined): value is string {
  return !!value && /^(https?:\/\/|\/)/.test(value);
}
