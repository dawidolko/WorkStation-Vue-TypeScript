import { WorkStationDataType } from "./component-types";

export const WorkStationData: WorkStationDataType = {
  pc: [
    {
      id: 1,
      category: "pc",
      name: "Gaming PC",
      model: "Ryzen 7 5800X + RX 9070xt",
      specs: [
        "Case: Phanteks NV7",
        "CPU: AMD Ryzen 7 5800X",
        "GPU: NVIDIA RX 9070xt",
        "RAM: 64GB DDR4 3200MHz Corsair",
        "Storage: Lexar 890 Pro M.2 NVMe",
        "Storage: SSD 512GB",
        "Motherboard: ASUS Strix ROG B550 White",
        "Cooling: AORUS 360 AIO Water Cooling",
        "Fans: 9x Phanteks Fans",
        "PSU: SilentiumPC 700W",
      ],
      description:
        "My main computer for work and gaming. Powerful machine with Ryzen 7 5800X and RX 9070xt.",
      image: "/products/pc/main-pc.webp",
      detailImages: [
        "/products/pc/pc-inside.webp",
        "/products/pc/pc-back.webp",
        "/products/pc/pc-rgb.webp",
      ],
      type: "main",
    },
  ],

  laptop: [
    {
      id: 1,
      category: "laptop",
      name: "MacBook Pro",
      model: 'MacBook Pro M3 16"',
      specs: [
        "Chip: Apple M3",
        "Screen: 16 inch",
        "Storage: 512GB",
        "RAM: 18GB",
      ],
      description:
        "Laptop for mobile work and projects. Perfect for programming and development.",
      image: "/products/laptop/macbook.webp",
      type: "main",
    },
  ],

  monitors: [
    {
      id: 1,
      category: "monitors",
      name: "Main Monitor x2",
      model: "IIYAMA G-MASTER GB2530HSU",
      specs: [
        "Size: 25 inch (x2)",
        "Refresh Rate: 75Hz",
        "Resolution: 1920x1080",
      ],
      description:
        "Two identical IIYAMA monitors as main setup for productivity.",
      image: "/products/monitors/iiyama.webp",
      type: "main",
    },
    {
      id: 2,
      category: "monitors",
      name: "Gaming Monitor",
      model: "HP 25x",
      specs: [
        "Size: 24.5 inch",
        "Refresh Rate: 144Hz",
        "Resolution: 1920x1080",
        "Response Time: 1ms",
      ],
      description: "Third HP monitor with high refresh rate for gaming.",
      image: "/products/monitors/hp-25x.webp",
      type: "secondary",
    },
  ],

  peripherals: [
    {
      id: 1,
      category: "peripherals",
      name: "Keyboard",
      model: "Razer BlackWidow Pro V4",
      specs: [
        "Type: Mechanical Gaming Keyboard",
        "Switches: Razer Mechanical",
        "Backlight: RGB",
      ],
      description: "Mechanical Razer keyboard for gaming and work.",
      image: "/products/peripherals/keyboard.webp",
      type: "main",
    },
    {
      id: 2,
      category: "peripherals",
      name: "Main Mouse",
      model: "Razer Viper V2 Pro",
      specs: [
        "Type: Wireless Gaming Mouse",
        "Sensor: Focus Pro 30K",
        "Weight: Ultra-light",
      ],
      description: "Wireless gaming mouse from Razer.",
      image: "/products/peripherals/mouse-razer.webp",
      type: "main",
    },
    {
      id: 3,
      category: "peripherals",
      name: "Laptop Mouse",
      model: "Logitech MX3",
      specs: [
        "Type: Productivity Mouse",
        "Connection: Wireless",
        "Features: Multi-device",
      ],
      description: "Productivity mouse for laptop work.",
      image: "/products/peripherals/mouse-logitech.webp",
      type: "secondary",
    },
    {
      id: 4,
      category: "peripherals",
      name: "Headset",
      model: "Razer BlackShark V2 Pro",
      specs: [
        "Type: Wireless Gaming Headset",
        "Audio: THX Spatial Audio",
        "Connection: 2.4GHz Wireless",
      ],
      description: "Wireless gaming headset.",
      image: "/products/peripherals/headset.webp",
      type: "main",
    },
    {
      id: 5,
      category: "peripherals",
      name: "Mouse Bungee",
      model: "Razer Mouse Bungee",
      specs: ["Type: Cable Management", "Compatibility: Universal"],
      description: "Mouse cable holder.",
      image: "/products/peripherals/mouse-bungee.webp",
      type: "secondary",
    },
  ],

  audio: [
    {
      id: 1,
      category: "audio",
      name: "Speakers",
      model: "EDIFIER R1855DB 2.0",
      specs: [
        "Type: Active Speakers",
        "Color: Black",
        "Connectivity: Bluetooth, RCA, AUX",
      ],
      description: "Active EDIFIER speakers.",
      image: "/products/audio/speakers.webp",
      type: "main",
    },
    {
      id: 2,
      category: "audio",
      name: "Microphone",
      model: "HyperX QuadCast S",
      specs: [
        "Type: USB Condenser Microphone",
        "RGB Lighting: Dynamic effects",
        "Polar Patterns: 4 selectable patterns",
        "Use: Streaming and recording",
      ],
      description:
        "Professional RGB USB condenser microphone with excellent sound quality.",
      image: "/products/audio/microphone.webp",
      type: "main",
    },
  ],

  workspace: [
    {
      id: 1,
      category: "workspace",
      name: "Desk",
      model: "Custom with oak wood top",
      specs: [
        "Material: Oak wood top",
        "Height Range: 60cm - 125cm",
        "Features: Electric height adjustment",
      ],
      description: "Custom desk with height adjustment.",
      image: "/products/workspace/desk1.webp",
      detailImages: [
        "/products/workspace/desk2.webp",
        "/products/workspace/desk3.webp",
        "/products/workspace/desk4.webp",
      ],
      type: "main",
    },
    {
      id: 2,
      category: "workspace",
      name: "Chair",
      model: "Ergonomic office chair",
      specs: [
        "Type: Ergonomic Office Chair",
        "Features: Full ergonomic support",
      ],
      description: "Ergonomic office chair.",
      image: "/products/workspace/chair1.webp",
      detailImages: [
        "/products/workspace/chair2.webp",
        "/products/workspace/chair3.webp",
        "/products/workspace/chair4.webp",
      ],
      type: "main",
    },
  ],
};
