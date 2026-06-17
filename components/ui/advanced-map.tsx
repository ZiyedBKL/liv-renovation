"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
const Circle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Circle),
  { ssr: false }
);

import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })
  ._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface AdvancedMapProps {
  center: [number, number];
  zoom?: number;
  markers?: Array<{
    position: [number, number];
    popup?: { title: string; content: string };
  }>;
  circle?: {
    center: [number, number];
    radius: number;
    color?: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

export function AdvancedMap({
  center,
  zoom = 9,
  markers = [],
  circle,
  className = "",
  style = { height: "500px", width: "100%" },
}: AdvancedMapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`w-full overflow-hidden rounded-xl border border-border bg-muted ${className}`}
        style={style}
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 size-12 animate-spin rounded-full border-4 border-border border-t-primary" />
            <p className="text-muted-foreground">Chargement de la carte…</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`advanced-map ${className}`} style={style}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
        className="rounded-xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {circle && (
          <Circle
            center={circle.center}
            radius={circle.radius}
            pathOptions={{
              color: circle.color ?? "#C9A961",
              fillColor: circle.color ?? "#C9A961",
              fillOpacity: 0.1,
              weight: 2,
            }}
          />
        )}

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            {marker.popup && (
              <Popup>
                <div className="p-2">
                  <h3 className="text-sm font-bold text-foreground">
                    {marker.popup.title}
                  </h3>
                  <p
                    className="mt-1 text-xs text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: marker.popup.content }}
                  />
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
