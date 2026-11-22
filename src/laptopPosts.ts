import macbook from './assets/laptops/macbook-landscape.webp'
import dellXps from './assets/laptops/dell-xps-landscape.webp'
import lenovoThinkpad from './assets/laptops/lenovo-thinkpad-landscape.webp'
import asusRog from './assets/laptops/asus-rog-landscape.webp'

export const laptopPosts = [
  {
    title: 'MacBook Air 13',
    image: macbook,
    width: 1536,
    height: 1024,
    alt: 'MacBook Air 13 for Swift and web coding. Apple M5, 16 GB memory, 512 GB SSD, 13.6-inch display. India launch price ₹1,19,900.',
    description: 'Build iPhone apps with Swift and Xcode, or develop and test websites on macOS.',
    referenceUrl: 'https://www.apple.com/in/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5/',
  },
  {
    title: 'Dell XPS 13',
    image: dellXps,
    width: 1536,
    height: 1024,
    alt: 'Dell XPS 13 for coding and daily work. Intel Core 5 320, 16 GB RAM, 512 GB SSD, 13.4-inch touchscreen. India reference price ₹94,990.',
    description: 'Write code, test websites, and handle everyday projects on Windows.',
    referenceUrl: 'https://www.dell.com/en-in/shop/business-pcs-desktop-computers/sr/all-products/desktops',
  },
  {
    title: 'ThinkPad E14 Gen 7',
    image: lenovoThinkpad,
    width: 1536,
    height: 1024,
    alt: 'ThinkPad E14 Gen 7 for development and office work. Intel Core Ultra 5 225H, 16 GB RAM, 512 GB SSD, 14-inch display. India reference price ₹1,37,490.',
    description: 'Switch between a code editor, documentation, spreadsheets, and video calls.',
    referenceUrl: 'https://www.lenovo.com/in/en/p/laptops/thinkpad/thinkpade/thinkpad-e14-gen-7-14-inch-intel/21sys1ac00',
  },
  {
    title: 'ROG Strix G16',
    image: asusRog,
    width: 1536,
    height: 1024,
    alt: 'ROG Strix G16 for plugged-in GTA V gaming. Intel Core Ultra 7 255HX, RTX 5060, 16 GB RAM, 1 TB SSD. India reference price ₹2,39,990.',
    description: 'Play GTA V and other PC games with the laptop plugged into its power adapter.',
    referenceUrl: 'https://in.store.asus.com/rog/gaming-laptop-rog-strix-g16-g615lm-ts268ws.html',
  },
]
