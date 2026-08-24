import glob
import os
import shutil

media_dir = "assets/pptx_extracted/ppt/media"
public_dir = "public/assets"
os.makedirs(f"{public_dir}/badges", exist_ok=True)
os.makedirs(f"{public_dir}/stickers", exist_ok=True)

# Let's inspect each SVG to identify the 2026 badges
# image10.svg, image11.svg, image12.svg, image13.svg, image14.svg, image16.svg, image17.svg, image18.svg, image19.svg, image20.svg, image21.svg, image9.svg
# Let's copy badges and stickers with clean names:
badge_map = {
    "image20.svg": "fallfest-badge-white.svg",
    "image21.svg": "fallfest-badge-pink.svg",
    "image12.svg": "fallfest-badge-wide-white.svg",
    "image16.svg": "fallfest-badge-wide-gray.svg",
    "image17.svg": "fallfest-badge-blue.svg",
    "image18.svg": "fallfest-badge-rev.svg",
    "image11.svg": "fallfest-mark-purple.svg",
    "image10.svg": "fallfest-mark-gray.svg",
    "image9.svg": "fallfest-mark-white.svg",
}

for src_name, target_name in badge_map.items():
    src_path = os.path.join(media_dir, src_name)
    if os.path.exists(src_path):
        shutil.copy(src_path, os.path.join(public_dir, "badges", target_name))
        print(f"Copied badge: {target_name}")

# Sticker PNGs
sticker_pngs = [
    "image22.png", "image23.png", "image24.png", "image25.png", "image26.png",
    "image27.png", "image28.png", "image29.png", "image30.png", "image31.png",
    "image32.png", "image33.png", "image3.png", "image4.png", "image5.png",
    "image6.png", "image7.png", "image8.png"
]

for idx, sp in enumerate(sticker_pngs):
    src_path = os.path.join(media_dir, sp)
    if os.path.exists(src_path):
        shutil.copy(src_path, os.path.join(public_dir, "stickers", f"sticker-{idx+1}.png"))
        # Also keep original name
        shutil.copy(src_path, os.path.join(public_dir, "stickers", sp))

print("Asset organization complete!")
