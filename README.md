# Helldivers 2 Loadout Randomiser

<div align="center">

The ultimate loadout randomization tool for Helldivers 2 - helping Super Earth's finest discover new weapon combinations and stratagem synergies.

**[View Live Site](https://helldivers2randomiser.xyz/)**

![Angular](https://img.shields.io/badge/Angular-17.3-dd0031)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178c6)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

<details open>
<summary><h2>✨ Features</h2></summary>

### 🔄 Complete Loadout Randomization

- Generate full loadouts including primary weapons, secondary weapons, grenades, stratagems, and boosters
- Discover powerful weapon and stratagem synergies you might not have considered
- Break free from your comfort zone and experience all Helldivers 2 has to offer

### 🎯 Comprehensive Filtering System

- Filter by Warbond to quickly exclude content you don't own
- Toggle individual weapons, stratagems, or entire categories
- Specialized options like "Guarantee Backpack" or "Only One Support Weapon"
- Save your filter preferences between sessions

### 💾 Advanced Settings Storage

- Save your filter configurations to browser local storage
- Automatic loading of saved settings when you return
- Smart version handling with update notifications
- Recovery features for partial loading when settings change

### 📊 Strategic Information

- Detailed breakdown of weapon systems and categories
- Comprehensive stratagem categorization
- Mission-specific loadout recommendations
- Team composition strategies and synergistic combinations

### 📱 Responsive Design

- Optimized for both desktop and mobile devices
- Clean, intuitive interface inspired by Helldivers 2's aesthetic
- Collapsible sections for easy navigation
</details>

<details open>
<summary><h2>🚀🌍 Getting Started</h2></summary>

The Helldivers 2 Loadout Randomiser is hosted online and ready to use. Simply visit [helldivers2randomiser.site](https://helldivers2randomiser.site/) to start discovering new loadout combinations.

### Basic Usage

1. **Visit the site** - Open [helldivers2randomiser.site](https://helldivers2randomiser.site/) in any modern browser
2. **Click "Randomise"** - Instantly generate a random loadout
3. **Adjust Filters** - Customize what items are included in the randomization
4. **Save Your Settings** - Store your preferences for future visits

### Pro Tips

- Use Warbond filters to quickly disable items you don't own
- Try the "Guarantee Support Weapon" option for more balanced loadouts
- Save your settings after configuring filters to preserve them between visits
- Use the Learn More section to discover game mechanics and strategic recommendations
</details>

<details open>
<summary><h2>🛠️ For Developers</h2></summary>

### Prerequisites

- Node.js 18.0 or later
- npm or your preferred package manager

### Local Development Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/helldivers-loadout-randomiser.git
cd helldivers-loadout-randomiser
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run start
```

4. **Access the development site**

- Open [http://localhost:4200](http://localhost:4200) in your browser

### Building for Production

1. **Generate a production build**

```bash
npm run build
```

This will:

- Update the build timestamp
- Create an optimized production build
- Generate preload links for images
- Output the files to the `dist/helldivers-loadout` directory

2. **Testing the production build locally**

```bash
npx serve dist/helldivers-loadout/browser
```

### Project Structure

- **src/app/randomisers/** - Randomization components
- **src/app/filters/** - Filter components and services
- **src/app/displays/** - UI display components
- **src/app/services/** - Core services including data access and state management
- **src/app/learn-more/** - Educational content about game mechanics
- **src/app/shared/** - Reusable components like collapsible sections
- **src/assets/** - Images and static assets

</details>

<details open>
<summary><h2>💻 Technology Stack</h2></summary>

- **Framework**: [Angular 17](https://angular.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: SCSS with custom variables and responsive design
- **Storage**: Browser LocalStorage for user preferences
- **Analytics**: Google Analytics integration
- **Build Tools**: Angular CLI & custom build scripts
- **Deployment**: Cloudflare Pages Static hosting with preload optimizations

</details>

<details open>
<summary><h2>🎮 Use Cases</h2></summary>

- **New Players**: Discover different loadout options while learning the game
- **Veterans**: Break out of stale gameplay patterns with fresh loadout combinations
- **Challenge Seekers**: Create themed or restricted loadouts for added difficulty
- **Content Creators**: Showcase interesting or unusual loadout combinations

</details>

<details open>
<summary><h2>🤝 Contributing</h2></summary>

Contributions are welcome! If you'd like to improve the Helldivers 2 Loadout Randomiser, please feel free to submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Ideas

- UI/UX improvements
- Additional filter options
- Performance optimizations
- Bug fixes and edge case handling
- SEO enhancements

</details>

<details open>
<summary><h2>📋 Credits</h2></summary>

- Created for the Helldivers 2 community
- Not affiliated with Arrowhead Game Studios
- Helldivers 2 game content belongs to Arrowhead Game Studios and Sony Interactive Entertainment

</details>

<details open>
<summary><h2>📝 License</h2></summary>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

</details>

---

<div align="center">

Made with ❤️ for democracy, by Roan Latham

[Report Bug](https://github.com/RoanLatham/helldivers-loadout-randomiser/issues) · [Request Feature](https://github.com/RoanLatham/helldivers-loadout-randomiser/issues)

</div>
