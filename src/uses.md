---
title: "My Setup"
layout: "base.njk"
---

# My Setup

I work from a gaming laptop, which I acquired exactly because I wanted to sporadically play some recent games. I've been relying on this laptop since Nov 2018 and it's been an excellent machine.

<div class="my-10">
  <h2>Hardware details</h2>

  <ul class="list-disc ml-8">
    <li>Laptop vendor/model: Dell G7 7588</li>
    <li>Processor: Intel Core i7-8750H @ 2.20GHz (up to 4.10GHz)</li>
    <li>RAM: Crucial 32GB DDR4 2666MHz</li>
    <li>Primary SSD: Corsair MP510 NVMe 480GB</li>
    <li>Secondary SSD: Liteon CV8 256GB</li>
    <li>GPU: NVIDIA Geforce GTX 1060 Max-Q 6GB</li>
  </ul>
</div>

I've been working from home since early 2018 and made several upgrades to my peripherals that I really enjoy:

<div class="my-10">
  <h2>Peripherals</h2>

  <ul>
    <li>Monitor: LG Ultrawide 29WK500</li>
    <li>Keyboard: Razer Blackwidow Lite</li>
    <li>Mouse: Logitech MX Master 2S</li>
    <li>Headphones: Sennheiser HD 350BT</li>
    <li>Ear buds: Edifier TWS1</li>
    <li>Webcam: Logitech C922 Pro Stream (the embedded microphone is amazing for calls)</li>
    <li>Speakers: Logitech Z50</li>
    <li>Microphone: Blue Snowball iCE (used only to record screencasts)</li>
    <li>Key Lights: 2x Elgato Key Light Air</li>
  </ul>
</div>

Those are my ergonomics accessories:

<div class="my-10">
  <h2>Ergonomics</h2>

  <ul>
    <li>Chair: Alpha Gamer Vega</li>
    <li>Monitor mount: ELG F80n</li>
    <li>Desk mat: Husky Gaming 890x440mm</li>
  </ul>
</div>

And last but not least, the software I use everyday:

<div class="my-10">
  <h2>Software</h2>

  <ul>
    <li>Boot loader: OpenCore ❤️</li>
    <li>Primary OS: macOS Big Sur</li>
    <li>Secondary OS: Windows 10 Pro</li>
    <li>Preferred browsers: Chrome and Firefox</li>
    <li>Cloud storage: Google Drive</li>
    <li>Note taking: Notion mostly, legacy stuff on Obsidian</li>
    <li>Shell: Terminal.app or Windows Terminal, both with ohmyzsh and plugins</li>
    <li>Editor and terminal theme: Dracula</li>
    <li>Coding font: Mono Lisa</li>
    <li>Code editor: VS Code (my <a href="https://gist.github.com/fmoliveira/8bbbbecc8cbb35a0da3e66b52522318e#file-settings-json" target="_blank" rel="noopener noreferrer">settings</a> and <a href="https://gist.github.com/fmoliveira/8bbbbecc8cbb35a0da3e66b52522318e#file-extensions-json" target="_blank" rel="noopener noreferrer">extensions</a>)</li>
  </ul>
</div>

<div class="my-10">
  <h2>VS Code Extensions</h2>

  <ul>
    {% for extension in extensions %}
  <li><a href="{{ extension.url }}" target="_blank" rel="noopener noreferrer">{{ extension.name }}</a></li>
    {% endfor %}
  </ul>
</div>

<p>Thanks for checking out my setup, I hope it inspires you in some way!</p>
