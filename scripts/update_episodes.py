import re
import json
import urllib.request

URL = "https://www.webtoons.com/en/canvas/bugs-bugs/list?title_no=1139195&page=1"

# Webtoon blocks default Python user-agent, so we fake a browser
req = urllib.request.Request(URL, headers={
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36"
})

with urllib.request.urlopen(req) as response:
    html = response.read().decode("utf-8")

# Find all episode_no=X values in the page and take the highest
episode_numbers = re.findall(r"episode_no=(\d+)", html)
count = max(int(n) for n in episode_numbers)

with open("episodes.json", "w") as f:
    json.dump({"count": count}, f)

print(f"Updated episode count: {count}")
