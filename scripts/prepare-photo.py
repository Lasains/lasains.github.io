"""Menyiapkan foto profil untuk web.

Memotong foto asli ke potret badan atas (rasio 3:4), lalu menyimpannya dalam dua
ukuran terkompresi. Jalankan ulang kalau foto sumbernya diganti:

    python3 scripts/prepare-photo.py public/images/_candidate.jpg
"""

import sys
from pathlib import Path

from PIL import Image, ImageOps

# Area potong pada foto asli (piksel): kepala sampai sekitar pinggang.
CROP_BOX = (859, 1354, 859 + 1588, 1354 + 2109)

OUTPUTS = [
    ("public/images/lasains.jpg", 800),
    ("public/images/lasains@2x.jpg", 1200),
]


def main() -> int:
    source = Path(sys.argv[1] if len(sys.argv) > 1 else "public/images/_candidate.jpg")

    if not source.exists():
        print(f"Foto sumber tidak ditemukan: {source}")
        return 1

    image = ImageOps.exif_transpose(Image.open(source)).convert("RGB")
    cropped = image.crop(CROP_BOX)

    for target, width in OUTPUTS:
        height = round(width * cropped.height / cropped.width)
        resized = cropped.resize((width, height), Image.LANCZOS)
        path = Path(target)
        resized.save(path, "JPEG", quality=82, optimize=True, progressive=True)
        print(f"{path} -> {resized.width}x{resized.height}, {path.stat().st_size // 1024} kB")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
