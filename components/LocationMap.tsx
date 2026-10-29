import { SITE } from "@/lib/site";

type LocationMapProps = {
  className?: string;
  label?: string;
};

export default function LocationMap({
  className = "",
  label = "Open Zoelex Pharma in Google Maps",
}: LocationMapProps) {
  return (
    <a
      className={`location-map ${className}`.trim()}
      href={SITE.mapUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <span className="location-map__frame" aria-hidden="true">
        <iframe
          src={SITE.mapEmbedUrl}
          title=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
          aria-hidden="true"
        />
      </span>
      <span className="location-map__caption">
        Zoelex Pharma <span aria-hidden="true">↗</span>
      </span>
    </a>
  );
}
