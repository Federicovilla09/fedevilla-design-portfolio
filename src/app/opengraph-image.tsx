import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "fedevilla.design · Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const satoshi = await readFile(join(process.cwd(), "src/fonts/Satoshi-Bold.otf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: "#F7F5F0",
          backgroundImage: "radial-gradient(circle at 70% 85%, rgba(219,149,88,0.55), rgba(247,245,240,0) 45%)",
          fontFamily: "Satoshi",
          color: "#171717",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#171717",
              color: "#F7F5F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
            }}
          >
            fv
          </div>
          <div style={{ fontSize: 30 }}>fedevilla.design</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 190, letterSpacing: -8, lineHeight: 1 }}>Portfolio</div>
          <div style={{ fontSize: 30, color: "#6E6A64", marginTop: 20 }}>
            Diseñador UX/UI que también desarrolla · 2026
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Satoshi", data: satoshi, weight: 700 }] },
  );
}