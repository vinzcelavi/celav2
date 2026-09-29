# Vidéo avant / après

Prompt à redonner à Claude pour produire une vidéo comparative de deux captures,
comme celle du projet Lemrock (`lemrock-before-after.mp4`), qui montre
l'interface chargée puis sa version allégée.

## Prompt

> Écris un script rapide pour faire une vidéo qui présente l'avant/après de ces
> deux images :
>
> - avant : `~/Downloads/escale-voyages--case-dark.png`
> - après : `~/Downloads/dashboard--case-dark.png`
>
> Avec un trait de séparation vertical qui bouge de droite à gauche et un hand
> cursor assez gros. La vidéo ne doit pas durer plus de 15 s.
>
> - Quand tu drag la barre, va jusqu'au bout vers la gauche.
> - Mouvement un poil rapide, en conservant la même timeline.
> - Floute « Lemrock » (logo et nom) en bas à gauche.

## Résultat attendu

- 12 s, 1920×1200, 60 fps, H.264, sans audio.
- À gauche du trait l'image « avant », à droite l'image « après ». Les
  étiquettes « Avant » et « Après » suivent le trait, de part et d'autre.
- La main (curseur macOS, agrandi) arrive ouverte, saisit la poignée, balaie
  jusqu'au bord gauche, marque une pause, ramène le trait au milieu puis lâche.

| Temps       | Action                                  |
|-------------|-----------------------------------------|
| 0 → 1,2 s   | la main arrive et saisit la poignée     |
| 1,2 → 4,4 s | balayage de 90 % jusqu'au bord gauche   |
| 4,4 → 6,7 s | pause sur l'« après »                   |
| 6,7 → 8,7 s | retour au milieu                        |
| 9,4 s       | la main lâche la poignée et s'éloigne   |

## Refaire la vidéo sans Claude

Le script existe déjà : `~/.local/bin/before-after` (Python, Pillow et ffmpeg).
Les curseurs sont rendus une fois depuis ceux de macOS et mis en cache dans
`~/.cache/before-after`.

```bash
before-after ~/Downloads/escale-voyages--case-dark.png ~/Downloads/dashboard--case-dark.png \
  --blur before:182,1730,205,56 \
  -o ~/Downloads/lemrock-before-after.mp4
```

Options :

- `--width 1920`, `--fps 60` : taille et cadence de sortie.
- `--labels "Avant,Après"` ou `--no-labels`.
- `--blur before:X,Y,W,H` (ou `after:`) : floute une zone, en pixels de l'image
  source ; à répéter pour plusieurs zones.
- Le minutage se règle dans la constante `TIMELINE`, en haut du script.

Les captures font 2880×1800 (16:10). Pour un asset du site, qui attend du 6:5
(vidéo 2160×1800), il faudra recadrer.
