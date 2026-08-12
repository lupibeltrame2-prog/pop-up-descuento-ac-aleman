import base64
import json
import urllib.request

owner = "lupibeltrame2-prog"
repo = "pop-up-descuento-ac-aleman"
path = "bg-image.png"

with open("Opera Captura de pantalla_2026-08-07_182510_dailyfreshcomfort.com.png", "rb") as f:
    content_b64 = base64.b64encode(f.read()).decode("utf-8")

print(f"Base64 length: {len(content_b64)}")
