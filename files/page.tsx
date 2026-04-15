"use client";

import Image from "next/image";
import { useState } from "react";

const LINKS = [
  {
    label: "Spotify — Perfil del artista",
    sub: "toda nuestra discografía",
    href: "https://open.spotify.com/intl-es/artist/65GGdrZ3ogiqwCjrlWogMw?si=Jr9HrCe2SRqigfQ85rKhAg",
    icon: "spotify",
  },
  {
    label: "EP La Memoria",
    sub: "escuchar en Spotify",
    href: "https://open.spotify.com/intl-es/album/7GDT28NSRE7Dgj3ZBUCHUv?si=MQn1gwVoRECZaOfXaqLsGg",
    icon: "spotify",
  },
  {
    label: "EP La Caída",
    sub: "escuchar en Spotify",
    href: "https://open.spotify.com/intl-es/album/2Nsqo0OnvNOXZ2gbWjuEJZ?si=5Y7oFFhHQlCeAzbvtBW3tA",
    icon: "spotify",
  },
  {
    label: "Sesiones Crepusculares Vol. I",
    sub: "live sessions en YouTube",
    href: "https://www.youtube.com/playlist?list=PLcVisHgHbKJIboeXgy_yzZ29HknRpanjK",
    icon: "youtube",
  },
  {
    label: "Instagram",
    sub: "@eldomingoeterno",
    href: "https://instagram.com/eldomingoeterno",
    icon: "instagram",
  },
];

const SHOWS = [
  {
    date: "05 de Junio, 2025",
    venue: "Niceto Bar",
    city: "Buenos Aires",
    support: "con Gainza",
    ticketsUrl: "#",
  },
];

function SpotifyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function LinkIcon({ type }: { type: string }) {
  if (type === "spotify") return <SpotifyIcon />;
  if (type === "youtube") return <YoutubeIcon />;
  if (type === "instagram") return <InstagramIcon />;
  return null;
}

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>

      {/* FONDO — foto banda B&N */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}>
        <Image
          src="https://res.cloudinary.com/djhwpne8h/image/upload/v1776209618/banda_ezvktf.jpg" 
          alt="El Domingo Eterno"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(100%) contrast(1.1) brightness(0.55)",
          }}
        />
        {/* Overlay: oscuro arriba, crimson abajo */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
                        180deg,
                        rgba(0,0,0,0.75) 0%,
                        rgba(0,0,0,0.1) 20%,
                        rgba(0,0,0,0.0) 45%,
                        rgba(0,0,0,0.0) 60%,
                        rgba(0,0,0,0.5) 80%,
                        rgba(0,0,0,0.85) 100%
          )`,
        }} />
      </div>

      {/* CONTENIDO */}
      <div style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        maxWidth: "480px",
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "clamp(40px, 8vh, 80px)",
        paddingBottom: "60px",
      }}>

        {/* NOMBRE DE LA BANDA */}
        <div className="animate-fade-up delay-1" style={{ textAlign: "center", marginBottom: "8px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "12px",
          }}>
            <div style={{ flex: 1, height: "0.5px", background: "linear-gradient(90deg, transparent, rgba(255,225,132,0.4))" }} />
            <span style={{ color: "rgba(255,225,132,0.5)", fontSize: "10px" }}>✦</span>
            <div style={{ flex: 1, height: "0.5px", background: "linear-gradient(90deg, rgba(255,225,132,0.4), transparent)" }} />
          </div>

          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(28px, 7vw, 42px)",
            fontWeight: 700,
            color: "#FFE184",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            lineHeight: 1.1,
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          }}>
            El Domingo<br />Eterno
          </h1>

          <p style={{
            fontFamily: "'IM Fell English', serif",
            fontStyle: "italic",
            fontSize: "13px",
            color: "rgba(255,225,132,0.6)",
            letterSpacing: "0.1em",
            marginTop: "8px",
          }}>
            Buenos Aires · Rock Alternativo
          </p>
        </div>

        {/* ESPACIADOR — empuja el contenido hacia abajo en pantallas grandes */}
        <div style={{ flex: 1, minHeight: "clamp(120px, 25vh, 280px)" }} />

        {/* LINKS */}
        <div className="animate-fade-up delay-2" style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "24px",
        }}>
          {LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`animate-fade-up delay-${i + 3}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                background: hoveredIndex === i
                  ? "rgba(200, 0, 32, 0.75)"
                  : "rgba(0, 0, 0, 0.5)",
                border: `0.5px solid ${hoveredIndex === i ? "rgba(255,225,132,0.5)" : "rgba(255,225,132,0.2)"}`,
                borderRadius: "3px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                cursor: "pointer",
              }}
            >
              {/* Ícono */}
              <div style={{
                color: hoveredIndex === i ? "#FFE184" : "rgba(255,225,132,0.6)",
                flexShrink: 0,
                transition: "color 0.2s ease",
                display: "flex",
                alignItems: "center",
              }}>
                <LinkIcon type={link.icon} />
              </div>

              {/* Texto */}
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: hoveredIndex === i ? "#FFE184" : "rgba(255,225,132,0.9)",
                  transition: "color 0.2s ease",
                }}>
                  {link.label}
                </div>
                <div style={{
                  fontFamily: "'IM Fell English', serif",
                  fontStyle: "italic",
                  fontSize: "11px",
                  color: "rgba(255,225,132,0.45)",
                  marginTop: "2px",
                }}>
                  {link.sub}
                </div>
              </div>

              {/* Flecha */}
              <div style={{
                color: "rgba(255,225,132,0.35)",
                fontSize: "14px",
                transition: "transform 0.2s ease, color 0.2s ease",
                transform: hoveredIndex === i ? "translateX(3px)" : "translateX(0)",
              }}>
                ›
              </div>
            </a>
          ))}
        </div>

        {/* SHOWS */}
        <div className="animate-fade-up delay-9" style={{ width: "100%" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "12px",
          }}>
            <div style={{ flex: 1, height: "0.5px", background: "rgba(255,225,132,0.2)" }} />
            <span style={{
              fontFamily: "'IM Fell English', serif",
              fontStyle: "italic",
              fontSize: "11px",
              color: "rgba(255,225,132,0.45)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>
              próximos shows
            </span>
            <div style={{ flex: 1, height: "0.5px", background: "rgba(255,225,132,0.2)" }} />
          </div>

          {SHOWS.map((show, i) => (
            <div key={i} style={{
              padding: "14px 16px",
              background: "rgba(0, 0, 0, 0.5)",
              border: "0.5px solid rgba(255, 225, 132, 0.2)",
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}>
              <div>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#FFE184",
                  letterSpacing: "0.05em",
                }}>
                  {show.date}
                </div>
                <div style={{
                  fontFamily: "'IM Fell English', serif",
                  fontStyle: "italic",
                  fontSize: "12px",
                  color: "rgba(255,225,132,0.6)",
                  marginTop: "3px",
                }}>
                  {show.venue} · {show.city}
                </div>
                <div style={{
                  fontFamily: "'IM Fell English', serif",
                  fontStyle: "italic",
                  fontSize: "11px",
                  color: "rgba(255,225,132,0.4)",
                  marginTop: "2px",
                }}>
                  {show.support}
                </div>
              </div>
              {show.ticketsUrl !== "#" && (
                <a
                  href={show.ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#FFE184",
                    border: "0.5px solid rgba(255,225,132,0.4)",
                    padding: "6px 10px",
                    borderRadius: "2px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    transition: "background 0.2s ease",
                  }}
                >
                  Entradas
                </a>
              )}
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div style={{
          marginTop: "40px",
          textAlign: "center",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            justifyContent: "center",
          }}>
            <div style={{ width: "20px", height: "0.5px", background: "rgba(255,225,132,0.2)" }} />
            <span style={{ color: "rgba(255,225,132,0.2)", fontSize: "8px" }}>✦</span>
            <div style={{ width: "20px", height: "0.5px", background: "rgba(255,225,132,0.2)" }} />
          </div>
        </div>

      </div>
    </main>
  );
}
