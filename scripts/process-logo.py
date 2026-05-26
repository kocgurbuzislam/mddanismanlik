from collections import deque
import os
import sys

from PIL import Image

CREAM = (250, 247, 242)


def is_background(c: tuple[int, int, int]) -> bool:
    r, g, b = c
    if r < 45 and g < 45 and b < 45:
        return True
    if r > 240 and g > 238 and b > 232:
        return True
    if max(r, g, b) - min(r, g, b) < 20 and r > 210 and g > 205:
        return True
    return False


def is_cream(c: tuple[int, int, int]) -> bool:
    r, g, b = c
    return abs(r - 250) <= 6 and abs(g - 247) <= 6 and abs(b - 242) <= 6


def process(src: str, out: str) -> None:
    img = Image.open(src).convert("RGB")
    w, h = img.size
    px = img.load()

    visited: set[tuple[int, int]] = set()
    queue: deque[tuple[int, int]] = deque()

    for x in range(w):
        queue.append((x, 0))
        queue.append((x, h - 1))
    for y in range(h):
        queue.append((0, y))
        queue.append((w - 1, y))

    while queue:
        x, y = queue.popleft()
        if (x, y) in visited:
            continue
        visited.add((x, y))
        if not is_background(px[x, y]):
            continue
        px[x, y] = CREAM
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h:
                queue.append((nx, ny))

    mask = Image.new("L", (w, h), 0)
    mp = mask.load()
    for y in range(h):
        for x in range(w):
            if not is_cream(px[x, y]):
                mp[x, y] = 255

    bbox = mask.getbbox()
    if bbox:
        img = img.crop(bbox)

    pad = 10
    padded = Image.new("RGB", (img.width + pad * 2, img.height + pad * 2), CREAM)
    padded.paste(img, (pad, pad))

    rgba = padded.convert("RGBA")
    px = rgba.load()
    for y in range(rgba.height):
        for x in range(rgba.width):
            if is_cream(px[x, y][:3]):
                px[x, y] = (250, 247, 242, 0)

    rgba.save(out, "PNG", optimize=True)
    print(f"saved {out} ({rgba.width}x{rgba.height})")


if __name__ == "__main__":
    candidates = [
        sys.argv[1] if len(sys.argv) > 1 else "",
        r"C:\Users\iso\.cursor\projects\c-Users-iso-Desktop-websitelercursor\assets\c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_548711ed9370daeab0ea6050ea8bd151_images_image-99e914bf-a91a-4802-8515-0065ede26fe7.png",
        r"c:\Users\iso\Desktop\websitelercursor\md-danismanlik\public\references\nusret.png",
    ]
    src = next((p for p in candidates if p and os.path.exists(p)), None)
    if not src:
        raise SystemExit("Kaynak görsel bulunamadı")
    out = (
        sys.argv[2]
        if len(sys.argv) > 2
        else r"c:\Users\iso\Desktop\websitelercursor\md-danismanlik\public\references\processed.png"
    )
    process(src, out)
