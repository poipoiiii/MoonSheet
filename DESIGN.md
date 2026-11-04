# MoonSheet Design System

**Theme: warm paper precision.** A calm editorial shell around a dense, precise spreadsheet grid. The grid is the product; chrome stays quiet, typography carries the character.

## Color palette

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F5F1E8` | Page background |
| `--surface` | `#FFFDF8` | Cards, formula bar, cells |
| `--surface-2` | `#F1EADF` | Column/row headers |
| `--ink` | `#1E1B17` | Primary text |
| `--muted` | `#6E675D` | Secondary text |
| `--line` | `#E3DCCF` | Grid and card borders |
| `--accent` | `#B9502E` | Terracotta: primary actions, selection |
| `--accent-soft` | `#F3DED4` | Selected cell tint, chips |
| `--dep` | `#2E5E8C` | Dependency highlight (blue) |
| `--dep-soft` | `#E7EEF7` | Dependency cell tint |
| `--success` | `#2F6B4F` | OK states |
| `--error` | `#A32A1F` | Error cells and destructive states |

Never put gray text on a colored fill; never use purple-blue gradients.

## Typography

| Role | Family | Size | Weight |
|---|---|---|---|
| Display / brand | `Instrument Serif` | 28–34px | 400 |
| UI labels | `Instrument Sans` | 13–14px | 400/500/600 |
| Numbers, formulas, addresses | `JetBrains Mono` | 11–13px | 400/500 |

Fallbacks: `ui-serif, Georgia`; `ui-sans-serif, -apple-system, Segoe UI`; `ui-monospace, Consolas`.

## Spacing and shape

- 4px spacing scale: 4 / 8 / 12 / 16 / 24 / 32.
- Cards: radius 16px, 1px `--line` border, soft shadow `0 18px 40px -30px rgba(30,27,23,.5)`.
- Cells: 34px tall, 1px grid lines, no radius.
- Buttons: radius 9px, 1px border, 7px 12px padding.

## Components

- **Top bar**: brand mark (terracotta square, serif initials), serif title, muted subtitle, actions right-aligned.
- **Formula bar**: `fx` chip, selected address chip, mono input, dark Apply button.
- **Grid**: sticky column/row headers; numbers right-aligned mono; text left-aligned sans; formula cells get a small terracotta corner mark; selected cell gets a 2px inset accent ring; dependency cells get a blue tint and 1px inset ring.
- **Inspector**: stacked cards for Cell, Engine, and Try. Facts use a 2-column label/value grid; values are mono.
- **Toast**: dark ink pill, appears above the status bar for 2.2s.

## Motion

- 140–200ms ease for hover, selection, and toast.
- Respect `prefers-reduced-motion`: disable transforms and transitions.

## Do / Don't

- Do keep the grid dense and scannable; the sheet is the hero.
- Do use mono for any number, formula, or cell address.
- Do make empty/error/formula states visibly different.
- Don't card-in-card inside the grid.
- Don't add decorative gradients inside cells.
- Don't use more than one accent hue; blue is reserved for dependency relationships.
