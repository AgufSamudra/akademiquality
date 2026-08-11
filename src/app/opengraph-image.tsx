import { ImageResponse } from "next/og";

export const alt = "Akademi Quality - Training QHSE dan Rumah Sakit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(135deg, #050505 0%, #171217 58%, #3b1423 100%)",
        color: "white",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040, width: "100%" }}>
        <div style={{ color: "#f0a0bc", display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>AKADEMI QUALITY</div>
        <div style={{ display: "flex", fontSize: 66, fontWeight: 800, letterSpacing: -2, lineHeight: 1.08, marginTop: 34 }}>Training QHSE dan Rumah Sakit untuk kompetensi yang siap diterapkan.</div>
        <div style={{ color: "rgba(255,255,255,.72)", display: "flex", fontSize: 27, marginTop: 36 }}>Online, offline, dan in-house training di Indonesia</div>
      </div>
    </div>,
    size,
  );
}
