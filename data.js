const SITES = [
  {
    "name": "AEJuice",
    "url": "https://aejuice.com",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "After Effects & Premiere plugins, transitions, titles",
    "desc_ar": "إضافات After Effects وPremiere، انتقالات، عناوين",
    "tags": "after effects,premiere,plugins"
  },
  {
    "name": "Mt. Mograph",
    "url": "https://mtmograph.com",
    "cat": "plugins",
    "price": "freemium",
    "desc_en": "AE plugins, scripts, motion tools",
    "desc_ar": "إضافات وسكربتات After Effects",
    "tags": "after effects,scripts"
  },
  {
    "name": "Motion Boutique",
    "url": "https://motionboutique.com",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Motion graphics plugins & tools",
    "desc_ar": "إضافات و أدوات موشن جرافيك",
    "tags": "plugins,motion"
  },
  {
    "name": "Red Giant (Maxon)",
    "url": "https://www.maxon.net/en/red-giant",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "VFX, color, particles, Universe",
    "desc_ar": "تأثيرات VFX، لون، جسيمات",
    "tags": "vfx,color,plugins"
  },
  {
    "name": "Boris FX",
    "url": "https://borisfx.com",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Continuum, Sapphire, Mocha Pro",
    "desc_ar": "Continuum, Sapphire, Mocha Pro",
    "tags": "vfx,tracking,plugins"
  },
  {
    "name": "NewBlue FX",
    "url": "https://newbluefx.com",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Video effects & transitions plugins",
    "desc_ar": "مؤثرات وانتقالات فيديو",
    "tags": "effects,plugins"
  },
  {
    "name": "FilmConvert",
    "url": "https://www.filmconvert.com",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Film grain & color grading",
    "desc_ar": "حبوب فلم وتدرج لون",
    "tags": "color,plugins"
  },
  {
    "name": "Neat Video",
    "url": "https://www.neatvideo.com",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Noise reduction plugin",
    "desc_ar": "تقليل الضوضاء",
    "tags": "denoise,plugins"
  },
  {
    "name": "Twixtor",
    "url": "https://revisionfx.com/products/twixtor",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Slow motion / retiming",
    "desc_ar": "حركة بطيئة وإعادة توقيت",
    "tags": "retiming,plugins"
  },
  {
    "name": "Magic Bullet (Maxon)",
    "url": "https://www.maxon.net/en/red-giant/magic-bullet-suite",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Color correction suite",
    "desc_ar": "مجموعة تصحيح الألوان",
    "tags": "color,plugins"
  },
  {
    "name": "Video Copilot",
    "url": "https://www.videocopilot.net",
    "cat": "plugins",
    "price": "freemium",
    "desc_en": "AE tutorials, plugins, Element 3D",
    "desc_ar": "دروس، إضافات، Element 3D",
    "tags": "after effects,3d"
  },
  {
    "name": "Toolfarm",
    "url": "https://www.toolfarm.com",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Plugins marketplace",
    "desc_ar": "سوق الإضافات",
    "tags": "marketplace,plugins"
  },
  {
    "name": "Plugin Everything",
    "url": "https://plugineverything.com",
    "cat": "plugins",
    "price": "freemium",
    "desc_en": "AE scripts & plugins",
    "desc_ar": "سكربتات وإضافات AE",
    "tags": "after effects,scripts"
  },
  {
    "name": "aescripts + aeplugins",
    "url": "https://aescripts.com",
    "cat": "plugins",
    "price": "freemium",
    "desc_en": "AE scripts marketplace",
    "desc_ar": "سوق سكربتات AE",
    "tags": "after effects,marketplace"
  },
  {
    "name": "ProductionCrate",
    "url": "https://www.productioncrate.com",
    "cat": "effects",
    "price": "freemium",
    "desc_en": "VFX, SFX, templates, 3D",
    "desc_ar": "تأثيرات VFX، صوت، قوالب، 3D",
    "tags": "vfx,templates"
  },
  {
    "name": "FootageCrate",
    "url": "https://footagecrate.com",
    "cat": "effects",
    "price": "freemium",
    "desc_en": "Stock footage & VFX",
    "desc_ar": "لقطات وتأثيرات VFX",
    "tags": "footage,vfx"
  },
  {
    "name": "ActionVFX",
    "url": "https://www.actionvfx.com",
    "cat": "effects",
    "price": "paid",
    "desc_en": "Cinema-grade VFX elements",
    "desc_ar": "عناصر VFX سينمائية",
    "tags": "vfx,elements"
  },
  {
    "name": "RocketStock",
    "url": "https://www.rocketstock.com",
    "cat": "effects",
    "price": "paid",
    "desc_en": "AE templates & VFX",
    "desc_ar": "قوالب AE وتأثيرات",
    "tags": "templates,vfx"
  },
  {
    "name": "MotionElements",
    "url": "https://www.motionelements.com",
    "cat": "effects",
    "price": "freemium",
    "desc_en": "Motion graphics & VFX",
    "desc_ar": "موشن جرافيك وتأثيرات",
    "tags": "motion,vfx"
  },
  {
    "name": "Videezy",
    "url": "https://www.videezy.com",
    "cat": "effects",
    "price": "freemium",
    "desc_en": "Free HD/4K video & VFX",
    "desc_ar": "فيديو HD/4K وتأثيرات",
    "tags": "footage,vfx"
  },
  {
    "name": "Mixkit",
    "url": "https://mixkit.co",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free video clips & templates",
    "desc_ar": "لقطات وقوالب مجانية",
    "tags": "free,footage"
  },
  {
    "name": "Coverr",
    "url": "https://coverr.co",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free stock video",
    "desc_ar": "فيديو مجاني",
    "tags": "free,footage"
  },
  {
    "name": "Mazwai",
    "url": "https://mazwai.com",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free creative commons video",
    "desc_ar": "فيديو Creative Commons",
    "tags": "free,footage"
  },
  {
    "name": "Vidsplay",
    "url": "https://www.vidsplay.com",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free stock footage",
    "desc_ar": "لقطات مجانية",
    "tags": "free,footage"
  },
  {
    "name": "Dareful",
    "url": "https://dareful.com",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free 4K stock video",
    "desc_ar": "فيديو 4K مجاني",
    "tags": "free,4k"
  },
  {
    "name": "Life of Vids",
    "url": "https://www.lifeofvids.com",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free videos & clips",
    "desc_ar": "فيديوهات ولقطات مجانية",
    "tags": "free,footage"
  },
  {
    "name": "Splitshire",
    "url": "https://www.splitshire.com",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free stock photos & video",
    "desc_ar": "صور وفيديو مجاني",
    "tags": "free,media"
  },
  {
    "name": "XStockVideo",
    "url": "https://xstockvideo.com",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free stock video",
    "desc_ar": "فيديو مجاني",
    "tags": "free,footage"
  },
  {
    "name": "OpenFootage",
    "url": "https://www.openfootage.net",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free HD footage",
    "desc_ar": "لقطات HD مجانية",
    "tags": "free,footage"
  },
  {
    "name": "Freesound",
    "url": "https://freesound.org",
    "cat": "sfx",
    "price": "free",
    "desc_en": "Collaborative sound library",
    "desc_ar": "مكتبة صوت تعاونية",
    "tags": "free,sfx"
  },
  {
    "name": "Zapsplat",
    "url": "https://www.zapsplat.com",
    "cat": "sfx",
    "price": "freemium",
    "desc_en": "Free & paid SFX",
    "desc_ar": "ساوند افكت مجاني ومدفوع",
    "tags": "sfx"
  },
  {
    "name": "SoundBible",
    "url": "https://soundbible.com",
    "cat": "sfx",
    "price": "free",
    "desc_en": "Free sound clips",
    "desc_ar": "لقطات صوت مجانية",
    "tags": "free,sfx"
  },
  {
    "name": "99Sounds",
    "url": "https://99sounds.org",
    "cat": "sfx",
    "price": "free",
    "desc_en": "Free sound packs",
    "desc_ar": "حزم صوت مجانية",
    "tags": "free,sfx"
  },
  {
    "name": "BBC Sound Effects",
    "url": "https://sound-effects.bbcrewind.co.uk",
    "cat": "sfx",
    "price": "free",
    "desc_en": "BBC archive SFX",
    "desc_ar": "أرشيف BBC للساوند افكت",
    "tags": "free,sfx"
  },
  {
    "name": "YouTube Audio Library",
    "url": "https://www.youtube.com/audiolibrary",
    "cat": "sfx",
    "price": "free",
    "desc_en": "Free music & SFX",
    "desc_ar": "موسيقى وساوند افكت مجانية",
    "tags": "free,sfx,music"
  },
  {
    "name": "Facebook Sound Collection",
    "url": "https://www.facebook.com/sound/collection",
    "cat": "sfx",
    "price": "free",
    "desc_en": "Free sounds for creators",
    "desc_ar": "أصوات مجانية للمبدعين",
    "tags": "free,sfx"
  },
  {
    "name": "Pixabay Music",
    "url": "https://pixabay.com/music",
    "cat": "sfx",
    "price": "free",
    "desc_en": "Free music & SFX",
    "desc_ar": "موسيقى وساوند افكت مجانية",
    "tags": "free,sfx,music"
  },
  {
    "name": "Mixkit Sound Effects",
    "url": "https://mixkit.co/free-sound-effects",
    "cat": "sfx",
    "price": "free",
    "desc_en": "Free SFX",
    "desc_ar": "ساوند افكت مجاني",
    "tags": "free,sfx"
  },
  {
    "name": "Epidemic Sound",
    "url": "https://www.epidemicsound.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Music & SFX subscription",
    "desc_ar": "اشتراك موسيقى وساوند افكت",
    "tags": "music,sfx,subscription"
  },
  {
    "name": "Artlist",
    "url": "https://artlist.io",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Music & SFX for creators",
    "desc_ar": "موسيقى وساوند افكت للمبدعين",
    "tags": "music,sfx,subscription"
  },
  {
    "name": "PremiumBeat",
    "url": "https://www.premiumbeat.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Royalty-free music",
    "desc_ar": "موسيقى بدون حقوق",
    "tags": "music,paid"
  },
  {
    "name": "AudioJungle",
    "url": "https://audiojungle.net",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Audio marketplace",
    "desc_ar": "سوق الصوت",
    "tags": "marketplace,audio"
  },
  {
    "name": "Soundstripe",
    "url": "https://www.soundstripe.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Music licensing",
    "desc_ar": "ترخيص موسيقى",
    "tags": "music,subscription"
  },
  {
    "name": "Musicbed",
    "url": "https://www.musicbed.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Music licensing",
    "desc_ar": "ترخيص موسيقى",
    "tags": "music,subscription"
  },
  {
    "name": "SoundSnap",
    "url": "https://www.soundsnap.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "SFX library",
    "desc_ar": "مكتبة ساوند افكت",
    "tags": "sfx,paid"
  },
  {
    "name": "SoundDogs",
    "url": "https://www.sounddogs.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Sound effects",
    "desc_ar": "ساوند افكت",
    "tags": "sfx,paid"
  },
  {
    "name": "Sonniss GDC Audio",
    "url": "https://sonniss.com/gameaudiogdc",
    "cat": "sfx",
    "price": "free",
    "desc_en": "Free game audio bundle",
    "desc_ar": "حزمة صوت ألعاب مجانية",
    "tags": "free,sfx,games"
  },
  {
    "name": "Soundly",
    "url": "https://www.getsoundly.com",
    "cat": "sfx",
    "price": "freemium",
    "desc_en": "Cloud SFX library",
    "desc_ar": "مكتبة ساوند افكت سحابية",
    "tags": "sfx,cloud"
  },
  {
    "name": "Pro Sound Effects",
    "url": "https://www.prosoundeffects.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Professional SFX",
    "desc_ar": "ساوند افكت احترافي",
    "tags": "sfx,pro"
  },
  {
    "name": "Boom Library",
    "url": "https://www.boomlibrary.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Cinematic SFX",
    "desc_ar": "ساوند افكت سينمائي",
    "tags": "sfx,cinematic"
  },
  {
    "name": "Sound Ideas",
    "url": "https://www.sound-ideas.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Sound effects library",
    "desc_ar": "مكتبة ساوند افكت",
    "tags": "sfx,library"
  },
  {
    "name": "Unsplash",
    "url": "https://unsplash.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free high-res photos",
    "desc_ar": "صور عالية الدقة مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Pexels",
    "url": "https://www.pexels.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free stock photos & video",
    "desc_ar": "صور وفيديو مجاني",
    "tags": "free,photos"
  },
  {
    "name": "Pixabay",
    "url": "https://pixabay.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free images, video, music",
    "desc_ar": "صور، فيديو، موسيقى مجانية",
    "tags": "free,media"
  },
  {
    "name": "Freepik",
    "url": "https://www.freepik.com",
    "cat": "images",
    "price": "freemium",
    "desc_en": "Vectors, photos, PSD",
    "desc_ar": "متجهات، صور، PSD",
    "tags": "vectors,photos"
  },
  {
    "name": "Shutterstock",
    "url": "https://www.shutterstock.com",
    "cat": "images",
    "price": "paid",
    "desc_en": "Stock photos & media",
    "desc_ar": "صور ووسائط",
    "tags": "photos,paid"
  },
  {
    "name": "Adobe Stock",
    "url": "https://stock.adobe.com",
    "cat": "images",
    "price": "paid",
    "desc_en": "Stock assets",
    "desc_ar": " didSelect أصول",
    "tags": "assets,paid"
  },
  {
    "name": "Getty Images",
    "url": "https://www.gettyimages.com",
    "cat": "images",
    "price": "paid",
    "desc_en": "Premium stock photos",
    "desc_ar": "صور premium",
    "tags": "photos,paid"
  },
  {
    "name": "Rawpixel",
    "url": "https://www.rawpixel.com",
    "cat": "images",
    "price": "freemium",
    "desc_en": "Stock photos & vectors",
    "desc_ar": "صور ومتجهات",
    "tags": "photos,vectors"
  },
  {
    "name": "Vecteezy",
    "url": "https://www.vecteezy.com",
    "cat": "images",
    "price": "freemium",
    "desc_en": "Vectors & photos",
    "desc_ar": "متجهات وصور",
    "tags": "vectors,photos"
  },
  {
    "name": "Burst (Shopify)",
    "url": "https://burst.shopify.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free stock photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "StockSnap",
    "url": "https://stocksnap.io",
    "cat": "images",
    "price": "free",
    "desc_en": "Free CC0 photos",
    "desc_ar": "صور CC0 مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Kaboompics",
    "url": "https://kaboompics.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free lifestyle photos",
    "desc_ar": "صور أسلوب حياة مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Gratisography",
    "url": "https://gratisography.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Quirky free photos",
    "desc_ar": "صور غريبة مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Picjumbo",
    "url": "https://picjumbo.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free stock photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Reshot",
    "url": "https://www.reshot.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free icons & photos",
    "desc_ar": "أيقونات وصور مجانية",
    "tags": "free,icons,photos"
  },
  {
    "name": "ISO Republic",
    "url": "https://isorepublic.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free stock photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Negative Space",
    "url": "https://negativespace.co",
    "cat": "images",
    "price": "free",
    "desc_en": "Free stock photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Foodiesfeed",
    "url": "https://www.foodiesfeed.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free food photos",
    "desc_ar": "صور طعام مجانية",
    "tags": "free,food"
  },
  {
    "name": "Skitterphoto",
    "url": "https://skitterphoto.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free public domain photos",
    "desc_ar": "صور public domain",
    "tags": "free,photos"
  },
  {
    "name": "New Old Stock",
    "url": "https://nos.twnsnd.co",
    "cat": "images",
    "price": "free",
    "desc_en": "Vintage photos",
    "desc_ar": "صور كلاسيكية",
    "tags": "free,vintage"
  },
  {
    "name": "Life of Pix",
    "url": "https://www.lifeofpix.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free high-res photos",
    "desc_ar": "صور عالية الدقة مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Death to Stock",
    "url": "https://deathtothestockphoto.com",
    "cat": "images",
    "price": "freemium",
    "desc_en": "Creative stock photos",
    "desc_ar": "صور إبداعية",
    "tags": "photos,creative"
  },
  {
    "name": "Stocksy",
    "url": "https://www.stocksy.com",
    "cat": "images",
    "price": "paid",
    "desc_en": "Curated stock photos",
    "desc_ar": "صور منتقاة",
    "tags": "photos,paid"
  },
  {
    "name": "Offset",
    "url": "https://www.offset.com",
    "cat": "images",
    "price": "paid",
    "desc_en": "High-end stock photos",
    "desc_ar": "صور high-end",
    "tags": "photos,paid"
  },
  {
    "name": "500px",
    "url": "https://500px.com",
    "cat": "images",
    "price": "freemium",
    "desc_en": "Photo community & licensing",
    "desc_ar": "مجتمع صور وترخيص",
    "tags": "photos,community"
  },
  {
    "name": "Flickr CC",
    "url": "https://www.flickr.com/creativecommons",
    "cat": "images",
    "price": "free",
    "desc_en": "Creative Commons photos",
    "desc_ar": "صور Creative Commons",
    "tags": "free,cc"
  },
  {
    "name": "Wikimedia Commons",
    "url": "https://commons.wikimedia.org",
    "cat": "images",
    "price": "free",
    "desc_en": "Free media repository",
    "desc_ar": "مستودع وسائط مجاني",
    "tags": "free,media"
  },
  {
    "name": "Openverse",
    "url": "https://openverse.org",
    "cat": "images",
    "price": "free",
    "desc_en": "Open licensed media",
    "desc_ar": "وسائط مرخصة مفتوحة",
    "tags": "free,media"
  },
  {
    "name": "Flaticon",
    "url": "https://www.flaticon.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Icons & animated icons",
    "desc_ar": "أيقونات وأيقونات متحركة",
    "tags": "icons,vectors"
  },
  {
    "name": "Icons8",
    "url": "https://icons8.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Icons, illustrations, photos",
    "desc_ar": "أيقونات، رسوم، صور",
    "tags": "icons,illustrations"
  },
  {
    "name": "The Noun Project",
    "url": "https://thenounproject.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Icons & photos",
    "desc_ar": "أيقونات وصور",
    "tags": "icons,photos"
  },
  {
    "name": "Iconfinder",
    "url": "https://www.iconfinder.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Icon marketplace",
    "desc_ar": "سوق الأيقونات",
    "tags": "icons,marketplace"
  },
  {
    "name": "Iconmonstr",
    "url": "https://iconmonstr.com",
    "cat": "icons",
    "price": "free",
    "desc_en": "Free simple icons",
    "desc_ar": "أيقونات بسيطة مجانية",
    "tags": "free,icons"
  },
  {
    "name": "Feather Icons",
    "url": "https://feathericons.com",
    "cat": "icons",
    "price": "free",
    "desc_en": "Open source icons",
    "desc_ar": "أيقونات مفتوحة",
    "tags": "free,icons"
  },
  {
    "name": "Heroicons",
    "url": "https://heroicons.com",
    "cat": "icons",
    "price": "free",
    "desc_en": "Tailwind icons",
    "desc_ar": "أيقونات Tailwind",
    "tags": "free,icons"
  },
  {
    "name": "Lucide",
    "url": "https://lucide.dev",
    "cat": "icons",
    "price": "free",
    "desc_en": "Open source icon library",
    "desc_ar": "مكتبة أيقونات مفتوحة",
    "tags": "free,icons"
  },
  {
    "name": "Phosphor Icons",
    "url": "https://phosphoricons.com",
    "cat": "icons",
    "price": "free",
    "desc_en": "Flexible icon family",
    "desc_ar": "عائلة أيقونات مرنة",
    "tags": "free,icons"
  },
  {
    "name": "Tabler Icons",
    "url": "https://tabler-icons.io",
    "cat": "icons",
    "price": "free",
    "desc_en": "Free SVG icons",
    "desc_ar": "أيقونات SVG مجانية",
    "tags": "free,icons"
  },
  {
    "name": "Bootstrap Icons",
    "url": "https://icons.getbootstrap.com",
    "cat": "icons",
    "price": "free",
    "desc_en": "Bootstrap icon library",
    "desc_ar": "مكتبة أيقونات Bootstrap",
    "tags": "free,icons"
  },
  {
    "name": "Material Symbols",
    "url": "https://fonts.google.com/icons",
    "cat": "icons",
    "price": "free",
    "desc_en": "Google Material icons",
    "desc_ar": "أيقونات Material من Google",
    "tags": "free,icons"
  },
  {
    "name": "Font Awesome",
    "url": "https://fontawesome.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Icon library",
    "desc_ar": "مكتبة أيقونات",
    "tags": "icons"
  },
  {
    "name": "Iconstore",
    "url": "https://iconstore.co",
    "cat": "icons",
    "price": "free",
    "desc_en": "Free icon packs",
    "desc_ar": "حزم أيقونات مجانية",
    "tags": "free,icons"
  },
  {
    "name": "Iconshock",
    "url": "https://www.iconshock.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Icon sets",
    "desc_ar": "مجموعات أيقونات",
    "tags": "icons"
  },
  {
    "name": "Animated Icons (Lordicon)",
    "url": "https://lordicon.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Animated icons library",
    "desc_ar": "مكتبة أيقونات متحركة",
    "tags": "animated,icons"
  },
  {
    "name": "LottieFiles",
    "url": "https://lottiefiles.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Lottie animations & icons",
    "desc_ar": "رسوم متحركة Lottie وأيقونات",
    "tags": "lottie,animated"
  },
  {
    "name": "Iconscout",
    "url": "https://iconscout.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Icons, illustrations, 3D",
    "desc_ar": "أيقونات، رسوم، 3D",
    "tags": "icons,3d,illustrations"
  },
  {
    "name": "Pexels Videos",
    "url": "https://www.pexels.com/videos",
    "cat": "videos",
    "price": "free",
    "desc_en": "Free stock videos",
    "desc_ar": "فيديوهات مجانية",
    "tags": "free,videos"
  },
  {
    "name": "Pixabay Videos",
    "url": "https://pixabay.com/videos",
    "cat": "videos",
    "price": "free",
    "desc_en": "Free stock videos",
    "desc_ar": "فيديوهات مجانية",
    "tags": "free,videos"
  },
  {
    "name": "Videvo",
    "url": "https://www.videvo.net",
    "cat": "videos",
    "price": "freemium",
    "desc_en": "Free & paid footage",
    "desc_ar": "لقطات مجانية ومدفوعة",
    "tags": "footage"
  },
  {
    "name": "Videezy",
    "url": "https://www.videezy.com",
    "cat": "videos",
    "price": "freemium",
    "desc_en": "Free HD/4K footage",
    "desc_ar": "لقطات HD/4K مجانية",
    "tags": "footage,4k"
  },
  {
    "name": "Storyblocks",
    "url": "https://www.storyblocks.com",
    "cat": "videos",
    "price": "paid",
    "desc_en": "Unlimited stock media",
    "desc_ar": "وسائط غير محدودة",
    "tags": "subscription,media"
  },
  {
    "name": "Artgrid",
    "url": "https://artgrid.io",
    "cat": "videos",
    "price": "paid",
    "desc_en": "Cinematic footage",
    "desc_ar": "لقطات سينمائية",
    "tags": "footage,cinematic"
  },
  {
    "name": "Pond5",
    "url": "https://www.pond5.com",
    "cat": "videos",
    "price": "paid",
    "desc_en": "Stock footage marketplace",
    "desc_ar": "سوق لقطات",
    "tags": "marketplace,footage"
  },
  {
    "name": "Dissolve",
    "url": "https://dissolve.com",
    "cat": "videos",
    "price": "paid",
    "desc_en": "Stock footage",
    "desc_ar": "لقطات",
    "tags": "footage,paid"
  },
  {
    "name": "Filmsupply",
    "url": "https://www.filmsupply.com",
    "cat": "videos",
    "price": "paid",
    "desc_en": "Premium footage",
    "desc_ar": "لقطات premium",
    "tags": "footage,premium"
  },
  {
    "name": "Shutterstock Video",
    "url": "https://www.shutterstock.com/video",
    "cat": "videos",
    "price": "paid",
    "desc_en": "Stock video",
    "desc_ar": "فيديو",
    "tags": "video,paid"
  },
  {
    "name": "Adobe Stock Video",
    "url": "https://stock.adobe.com/video",
    "cat": "videos",
    "price": "paid",
    "desc_en": "Stock video",
    "desc_ar": "فيديو",
    "tags": "video,paid"
  },
  {
    "name": "Beachfront B-Roll",
    "url": "https://www.beachfrontbroll.com",
    "cat": "videos",
    "price": "free",
    "desc_en": "Free B-roll",
    "desc_ar": "B-roll مجاني",
    "tags": "free,broll"
  },
  {
    "name": "NatureClip",
    "url": "https://www.natureclip.com",
    "cat": "videos",
    "price": "free",
    "desc_en": "Free nature clips",
    "desc_ar": "لقطات طبيعة مجانية",
    "tags": "free,nature"
  },
  {
    "name": "Footage Firm",
    "url": "https://www.footagefirm.com",
    "cat": "videos",
    "price": "freemium",
    "desc_en": "Stock footage",
    "desc_ar": "لقطات",
    "tags": "footage"
  },
  {
    "name": "Motion Array",
    "url": "https://motionarray.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Templates, presets, music",
    "desc_ar": "قوالب، إعدادات، موسيقى",
    "tags": "templates,motion"
  },
  {
    "name": "Envato Elements",
    "url": "https://elements.envato.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Unlimited creative assets",
    "desc_ar": " didSelect أصول إبداعية",
    "tags": "assets,subscription"
  },
  {
    "name": "VideoHive",
    "url": "https://videohive.net",
    "cat": "motion",
    "price": "paid",
    "desc_en": "After Effects templates",
    "desc_ar": "قوالب After Effects",
    "tags": "templates,ae"
  },
  {
    "name": "MotionElements",
    "url": "https://www.motionelements.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Motion graphics",
    "desc_ar": "موشن جرافيك",
    "tags": "motion"
  },
  {
    "name": "RocketStock",
    "url": "https://www.rocketstock.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AE templates",
    "desc_ar": "قوالب AE",
    "tags": "templates,ae"
  },
  {
    "name": "AEJuice (Templates)",
    "url": "https://aejuice.com/templates",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AE templates",
    "desc_ar": "قوالب AE",
    "tags": "templates"
  },
  {
    "name": "Mt. Mograph (Assets)",
    "url": "https://mtmograph.com/assets",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Motion assets",
    "desc_ar": " didSelect موشن",
    "tags": "assets"
  },
  {
    "name": "SonduckFilm",
    "url": "https://sonduckfilm.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "AE templates & tutorials",
    "desc_ar": "قوالب ودروس AE",
    "tags": "templates,tutorials"
  },
  {
    "name": "Mt. Mograph Store",
    "url": "https://store.mtmograph.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Motion tools",
    "desc_ar": "أدوات موشن",
    "tags": "tools"
  },
  {
    "name": "Motion Design School",
    "url": "https://motiondesign.school",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Courses & assets",
    "desc_ar": "دورات وأصول",
    "tags": "courses,assets"
  },
  {
    "name": "School of Motion",
    "url": "https://www.schoolofmotion.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Motion design courses",
    "desc_ar": "دورات تصميم موشن",
    "tags": "courses"
  },
  {
    "name": "Mt. Mograph YouTube",
    "url": "https://www.youtube.com/@MtMograph",
    "cat": "motion",
    "price": "free",
    "desc_en": "Free tutorials",
    "desc_ar": "دروس مجانية",
    "tags": "free,tutorials"
  },
  {
    "name": "Ben Marriott",
    "url": "https://www.youtube.com/@BenMarriott",
    "cat": "motion",
    "price": "free",
    "desc_en": "Motion design tutorials",
    "desc_ar": "دروس تصميم موشن",
    "tags": "free,tutorials"
  },
  {
    "name": "Mt. Mograph (Free)",
    "url": "https://mtmograph.com/free",
    "cat": "motion",
    "price": "free",
    "desc_en": "Free motion assets",
    "desc_ar": " didSelect موشن مجانية",
    "tags": "free,assets"
  },
  {
    "name": "MotionCrafter",
    "url": "https://motioncrafter.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AE templates",
    "desc_ar": "قوالب AE",
    "tags": "templates"
  },
  {
    "name": "FXhome (HitFilm)",
    "url": "https://fxhome.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "VFX software & assets",
    "desc_ar": "برنامج VFX وأصول",
    "tags": "vfx,software"
  },
  {
    "name": "HitFilm (FXhome)",
    "url": "https://fxhome.com/hitfilm",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Editing & VFX software",
    "desc_ar": "برنامج تحرير وVFX",
    "tags": "software"
  },
  {
    "name": "DaVinci Resolve (Blackmagic)",
    "url": "https://www.blackmagicdesign.com/products/davinciresolve",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Editing/color/VFX software",
    "desc_ar": "برنامج تحرير/لون/VFX",
    "tags": "software,davinci"
  },
  {
    "name": "Blender",
    "url": "https://www.blender.org",
    "cat": "motion",
    "price": "free",
    "desc_en": "3D creation suite",
    "desc_ar": "برنامج إنشاء 3D",
    "tags": "3d,free,software"
  },
  {
    "name": "Cinema 4D (Maxon)",
    "url": "https://www.maxon.net/en/cinema-4d",
    "cat": "motion",
    "price": "paid",
    "desc_en": "3D software",
    "desc_ar": "برنامج 3D",
    "tags": "3d,software"
  },
  {
    "name": "Houdini (SideFX)",
    "url": "https://www.sidefx.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "3D/VFX software",
    "desc_ar": "برنامج 3D/VFX",
    "tags": "3d,vfx,software"
  },
  {
    "name": "Maya (Autodesk)",
    "url": "https://www.autodesk.com/products/maya",
    "cat": "motion",
    "price": "paid",
    "desc_en": "3D software",
    "desc_ar": "برنامج 3D",
    "tags": "3d,software"
  },
  {
    "name": "3ds Max (Autodesk)",
    "url": "https://www.autodesk.com/products/3ds-max",
    "cat": "motion",
    "price": "paid",
    "desc_en": "3D software",
    "desc_ar": "برنامج 3D",
    "tags": "3d,software"
  },
  {
    "name": "Unreal Engine",
    "url": "https://www.unrealengine.com",
    "cat": "motion",
    "price": "free",
    "desc_en": "Real-time 3D engine",
    "desc_ar": "محرك 3D فوري",
    "tags": "3d,engine,free"
  },
  {
    "name": "Unity",
    "url": "https://unity.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Real-time 3D engine",
    "desc_ar": "محرك 3D فوري",
    "tags": "3d,engine"
  },
  {
    "name": "LottieFiles (Icons)",
    "url": "https://lottiefiles.com/free-animations",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Free Lottie animations",
    "desc_ar": "رسوم Lottie مجانية",
    "tags": "lottie,free"
  },
  {
    "name": "Lordicon (Animated)",
    "url": "https://lordicon.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Animated icons",
    "desc_ar": "أيقونات متحركة",
    "tags": "animated,icons"
  },
  {
    "name": "Animaticons",
    "url": "https://animaticons.co",
    "cat": "icons",
    "price": "paid",
    "desc_en": "Animated icons",
    "desc_ar": "أيقونات متحركة",
    "tags": "animated,icons"
  },
  {
    "name": "Icons8 Animated",
    "url": "https://icons8.com/animated-icons",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Animated icons",
    "desc_ar": "أيقونات متحركة",
    "tags": "animated,icons"
  },
  {
    "name": "Flaticon Animated",
    "url": "https://www.flaticon.com/animated-icons",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Animated icons",
    "desc_ar": "أيقونات متحركة",
    "tags": "animated,icons"
  },
  {
    "name": "Iconscout Animated",
    "url": "https://iconscout.com/lottie-animations",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Lottie animations",
    "desc_ar": "رسوم Lottie",
    "tags": "lottie"
  },
  {
    "name": "Motion Array Icons",
    "url": "https://motionarray.com/browse/icons",
    "cat": "icons",
    "price": "paid",
    "desc_en": "Animated icons",
    "desc_ar": "أيقونات متحركة",
    "tags": "animated,icons"
  },
  {
    "name": "Envato (Icons)",
    "url": "https://elements.envato.com/graphic-templates/icons",
    "cat": "icons",
    "price": "paid",
    "desc_en": "Icon templates",
    "desc_ar": "قوالب أيقونات",
    "tags": "icons,templates"
  },
  {
    "name": "Nucleo",
    "url": "https://nucleoapp.com",
    "cat": "icons",
    "price": "paid",
    "desc_en": "Icon library",
    "desc_ar": "مكتبة أيقونات",
    "tags": "icons"
  },
  {
    "name": "IconJar",
    "url": "https://geticonjar.com",
    "cat": "icons",
    "price": "paid",
    "desc_en": "Icon organizer",
    "desc_ar": "منظم أيقونات",
    "tags": "icons,tools"
  },
  {
    "name": "Sketchfab",
    "url": "https://sketchfab.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "3D models marketplace",
    "desc_ar": "سوق نماذج 3D",
    "tags": "3d,models"
  },
  {
    "name": "TurboSquid",
    "url": "https://www.turbosquid.com",
    "cat": "shapes",
    "price": "paid",
    "desc_en": "3D models",
    "desc_ar": "نماذج 3D",
    "tags": "3d,models"
  },
  {
    "name": "CGTrader",
    "url": "https://www.cgtrader.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "3D models",
    "desc_ar": "نماذج 3D",
    "tags": "3d,models"
  },
  {
    "name": "Poly Haven",
    "url": "https://polyhaven.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free 3D assets (HDRIs, models, textures)",
    "desc_ar": " didSelect 3D مجانية (HDRIs، نماذج، textures)",
    "tags": "3d,free,hdri"
  },
  {
    "name": "Quixel Megascans",
    "url": "https://quixel.com/megascans",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "3D scans & assets",
    "desc_ar": "مسح 3D وأصول",
    "tags": "3d,scans"
  },
  {
    "name": "BlenderKit",
    "url": "https://www.blenderkit.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Blender assets",
    "desc_ar": " didSelect Blender",
    "tags": "blender,assets"
  },
  {
    "name": "Blend Swap",
    "url": "https://www.blendswap.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free Blender models",
    "desc_ar": "نماذج Blender مجانية",
    "tags": "blender,free"
  },
  {
    "name": "Free3D",
    "url": "https://free3d.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Free & paid 3D models",
    "desc_ar": "نماذج 3D مجانية ومدفوعة",
    "tags": "3d,models"
  },
  {
    "name": "3DExport",
    "url": "https://3dexport.com",
    "cat": "shapes",
    "price": "paid",
    "desc_en": "3D models",
    "desc_ar": "نماذج 3D",
    "tags": "3d,models"
  },
  {
    "name": "RenderHub",
    "url": "https://www.renderhub.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "3D models",
    "desc_ar": "نماذج 3D",
    "tags": "3d,models"
  },
  {
    "name": "Printables (Prusa)",
    "url": "https://www.printables.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "3D printable models",
    "desc_ar": "نماذج 3D قابلة للطباعة",
    "tags": "3d,print"
  },
  {
    "name": "Thingiverse",
    "url": "https://www.thingiverse.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "3D printable models",
    "desc_ar": "نماذج 3D قابلة للطباعة",
    "tags": "3d,print"
  },
  {
    "name": "Shape (Figma)",
    "url": "https://www.figma.com/community",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Design community assets",
    "desc_ar": " didSelect Figma",
    "tags": "figma,community"
  },
  {
    "name": "Figma Community",
    "url": "https://www.figma.com/community",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Free design resources",
    "desc_ar": " didSelect مجانية",
    "tags": "figma,free"
  },
  {
    "name": "Canva",
    "url": "https://www.canva.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Design platform",
    "desc_ar": "منصة تصميم",
    "tags": "design,templates"
  },
  {
    "name": "Vecteezy (Vectors)",
    "url": "https://www.vecteezy.com/free-vector",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Free vectors",
    "desc_ar": "متجهات مجانية",
    "tags": "vectors,free"
  },
  {
    "name": "Freepik (Vectors)",
    "url": "https://www.freepik.com/vectors",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Vectors",
    "desc_ar": "متجهات",
    "tags": "vectors"
  },
  {
    "name": "Flaticon (Shapes)",
    "url": "https://www.flaticon.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Icons & shapes",
    "desc_ar": "أيقونات وأشكال",
    "tags": "icons,shapes"
  },
  {
    "name": "Shape (2D)",
    "url": "https://www.shapes.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "2D shapes library",
    "desc_ar": "مكتبة أشكال 2D",
    "tags": "2d,shapes"
  },
  {
    "name": "OpenGameArt",
    "url": "https://opengameart.org",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free game art",
    "desc_ar": "فن ألعاب مجاني",
    "tags": "free,games,art"
  },
  {
    "name": "Kenney Assets",
    "url": "https://kenney.nl/assets",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free game assets",
    "desc_ar": " didSelect ألعاب مجانية",
    "tags": "free,games,assets"
  },
  {
    "name": "CraftPix",
    "url": "https://craftpix.net",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Game assets",
    "desc_ar": " didSelect ألعاب",
    "tags": "games,assets"
  },
  {
    "name": "GameArt2D",
    "url": "https://gameart2d.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free game art",
    "desc_ar": "فن ألعاب مجاني",
    "tags": "free,games"
  },
  {
    "name": "Itch.io Assets",
    "url": "https://itch.io/game-assets",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Game assets",
    "desc_ar": " didSelect ألعاب",
    "tags": "games,assets"
  },
  {
    "name": "Unity Asset Store",
    "url": "https://assetstore.unity.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Unity assets",
    "desc_ar": " didSelect Unity",
    "tags": "unity,assets"
  },
  {
    "name": "Unreal Marketplace",
    "url": "https://www.unrealengine.com/marketplace",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Unreal assets",
    "desc_ar": " didSelect Unreal",
    "tags": "unreal,assets"
  },
  {
    "name": "Textures.com",
    "url": "https://www.textures.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Textures",
    "desc_ar": "قوام",
    "tags": "textures"
  },
  {
    "name": "AmbientCG",
    "url": "https://ambientcg.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free PBR textures",
    "desc_ar": "قوام PBR مجاني",
    "tags": "textures,free,pbr"
  },
  {
    "name": "Poly Haven (Textures)",
    "url": "https://polyhaven.com/textures",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free textures",
    "desc_ar": "قوام مجانية",
    "tags": "textures,free"
  },
  {
    "name": "CC0 Textures",
    "url": "https://cc0textures.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free CC0 textures",
    "desc_ar": "قوام CC0 مجانية",
    "tags": "textures,free"
  },
  {
    "name": "Texture Haven (now Poly Haven)",
    "url": "https://polyhaven.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free textures",
    "desc_ar": "قوام مجانية",
    "tags": "textures,free"
  },
  {
    "name": "Canva (Templates)",
    "url": "https://www.canva.com/templates",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Templates",
    "desc_ar": "قوالب",
    "tags": "templates"
  },
  {
    "name": "Adobe Express",
    "url": "https://www.adobe.com/express",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Quick create",
    "desc_ar": "إنشاء سريع",
    "tags": "templates,adobe"
  },
  {
    "name": "CapCut",
    "url": "https://www.capcut.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Video editor",
    "desc_ar": "محرر فيديو",
    "tags": "editor,video"
  },
  {
    "name": "Clipchamp",
    "url": "https://clipchamp.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Video editor",
    "desc_ar": "محرر فيديو",
    "tags": "editor,video"
  },
  {
    "name": "Kapwing",
    "url": "https://www.kapwing.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Online video editor",
    "desc_ar": "محرر فيديو online",
    "tags": "editor,online"
  },
  {
    "name": "VEED",
    "url": "https://www.veed.io",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Online video editor",
    "desc_ar": "محرر فيديو online",
    "tags": "editor,online"
  },
  {
    "name": "InVideo",
    "url": "https://invideo.io",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Video creation",
    "desc_ar": "إنشاء فيديو",
    "tags": "video,creation"
  },
  {
    "name": "Animoto",
    "url": "https://animoto.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Video slideshows",
    "desc_ar": "عرض شرائح فيديو",
    "tags": "video,slides"
  },
  {
    "name": "Renderforest",
    "url": "https://www.renderforest.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Video & logo maker",
    "desc_ar": "صانع فيديو وشعار",
    "tags": "video,logo"
  },
  {
    "name": "Moovly",
    "url": "https://www.moovly.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Animated video maker",
    "desc_ar": "صانع فيديو متحرك",
    "tags": "video,animated"
  },
  {
    "name": "Powtoon",
    "url": "https://www.powtoon.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Animated presentations",
    "desc_ar": "عروض متحركة",
    "tags": "presentation,animated"
  },
  {
    "name": "Vyond",
    "url": "https://www.vyond.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Animated video",
    "desc_ar": "فيديو متحرك",
    "tags": "video,animated"
  },
  {
    "name": "Toonly",
    "url": "https://www.toonly.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Animated explainer",
    "desc_ar": "شرح متحرك",
    "tags": "explainer,animated"
  },
  {
    "name": "Doodly",
    "url": "https://www.doodly.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Whiteboard animation",
    "desc_ar": "رسوم whiteboard",
    "tags": "whiteboard,animated"
  },
  {
    "name": "Explaindio",
    "url": "https://explaindio.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Video creator",
    "desc_ar": "صانع فيديو",
    "tags": "video,creator"
  },
  {
    "name": "VideoScribe",
    "url": "https://www.videoscribe.co",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Whiteboard animation",
    "desc_ar": "رسوم whiteboard",
    "tags": "whiteboard"
  },
  {
    "name": "Animaker",
    "url": "https://www.animaker.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Animation maker",
    "desc_ar": "صانع رسوم متحركة",
    "tags": "animation,maker"
  },
  {
    "name": "Biteable",
    "url": "https://biteable.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Video maker",
    "desc_ar": "صانع فيديو",
    "tags": "video,maker"
  },
  {
    "name": "Wave.video",
    "url": "https://wave.video",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Video marketing",
    "desc_ar": "تسويق فيديو",
    "tags": "video,marketing"
  },
  {
    "name": "Promo.com",
    "url": "https://promo.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Video marketing",
    "desc_ar": "تسويق فيديو",
    "tags": "video,marketing"
  },
  {
    "name": "Magisto",
    "url": "https://www.magisto.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AI video editor",
    "desc_ar": "محرر فيديو AI",
    "tags": "ai,editor"
  },
  {
    "name": "Lumen5",
    "url": "https://lumen5.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "AI video maker",
    "desc_ar": "صانع فيديو AI",
    "tags": "ai,video"
  },
  {
    "name": "Trapcode Suite (Maxon)",
    "url": "https://www.maxon.net/en/red-giant/trapcode-suite",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Particles & 3D effects for AE",
    "desc_ar": "جسيمات وتأثيرات 3D لـ AE",
    "tags": "particles,3d,ae"
  },
  {
    "name": "Universe (Maxon)",
    "url": "https://www.maxon.net/en/red-giant/universe",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Transitions & effects",
    "desc_ar": "انتقالات وتأثيرات",
    "tags": "transitions,effects"
  },
  {
    "name": "Shooter Suite (Maxon)",
    "url": "https://www.maxon.net/en/red-giant/shooter-suite",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Camera & footage tools",
    "desc_ar": "أدوات كاميرا ولقطات",
    "tags": "camera,footage"
  },
  {
    "name": "CrumplePop",
    "url": "https://crumplepop.com",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Audio & video repair plugins",
    "desc_ar": "إضافات إصلاح صوت وفيديو",
    "tags": "repair,audio"
  },
  {
    "name": "Dehancer",
    "url": "https://www.dehancer.com",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Film emulation plugin",
    "desc_ar": "محاكاة فلم",
    "tags": "film,color"
  },
  {
    "name": "FilmConvert Nitrate",
    "url": "https://www.filmconvert.com/nitrate",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Film grain & color",
    "desc_ar": "حبوب فلم وتدرج لون",
    "tags": "film,color"
  },
  {
    "name": "ReelSmart Motion Blur",
    "url": "https://revisionfx.com/products/rsmb",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Motion blur plugin",
    "desc_ar": "طمس حركة",
    "tags": "blur,motion"
  },
  {
    "name": "Sapphire (Boris FX)",
    "url": "https://borisfx.com/products/sapphire",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "VFX plugin suite",
    "desc_ar": "مجموعة مؤثرات VFX",
    "tags": "vfx,suite"
  },
  {
    "name": "Continuum (Boris FX)",
    "url": "https://borisfx.com/products/continuum",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "VFX & transitions",
    "desc_ar": "تأثيرات وانتقالات",
    "tags": "vfx,transitions"
  },
  {
    "name": "Mocha Pro (Boris FX)",
    "url": "https://borisfx.com/products/mocha-pro",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Planar tracking",
    "desc_ar": "تتبع مستوي",
    "tags": "tracking,vfx"
  },
  {
    "name": "Silhouette (Boris FX)",
    "url": "https://borisfx.com/products/silhouette",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Roto & paint",
    "desc_ar": "روتو ورسم",
    "tags": "roto,paint"
  },
  {
    "name": "AE (Adobe After Effects)",
    "url": "https://www.adobe.com/products/aftereffects.html",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Motion graphics software",
    "desc_ar": "برنامج موشن جرافيك",
    "tags": "software,ae"
  },
  {
    "name": "Premiere Pro (Adobe)",
    "url": "https://www.adobe.com/products/premiere.html",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Video editing software",
    "desc_ar": "برنامج تحرير فيديو",
    "tags": "software,premiere"
  },
  {
    "name": "Final Cut Pro (Apple)",
    "url": "https://www.apple.com/final-cut-pro",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Video editing (Mac)",
    "desc_ar": "تحرير فيديو (Mac)",
    "tags": "software,fcp"
  },
  {
    "name": "Avid Media Composer",
    "url": "https://www.avid.com/media-composer",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Professional NLE",
    "desc_ar": "NLE احترافي",
    "tags": "software,avid"
  },
  {
    "name": "Vegas Pro",
    "url": "https://www.vegascreativesoftware.com",
    "cat": "plugins",
    "price": "paid",
    "desc_en": "Video editing",
    "desc_ar": "تحرير فيديو",
    "tags": "software,vegas"
  },
  {
    "name": "Lightworks",
    "url": "https://www.lwks.com",
    "cat": "plugins",
    "price": "freemium",
    "desc_en": "NLE",
    "desc_ar": "NLE",
    "tags": "software,nle"
  },
  {
    "name": "Shotcut",
    "url": "https://shotcut.org",
    "cat": "plugins",
    "price": "free",
    "desc_en": "Free open-source editor",
    "desc_ar": "محرر مجاني مفتوح",
    "tags": "software,free"
  },
  {
    "name": "Kdenlive",
    "url": "https://kdenlive.org",
    "cat": "plugins",
    "price": "free",
    "desc_en": "Free open-source NLE",
    "desc_ar": "NLE مجاني مفتوح",
    "tags": "software,free"
  },
  {
    "name": "OpenShot",
    "url": "https://www.openshot.org",
    "cat": "plugins",
    "price": "free",
    "desc_en": "Free video editor",
    "desc_ar": "محرر فيديو مجاني",
    "tags": "software,free"
  },
  {
    "name": "Ignite Motion",
    "url": "https://www.ignitemotion.com",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free motion backgrounds",
    "desc_ar": "خلفيات حركة مجانية",
    "tags": "free,motion"
  },
  {
    "name": "Distill",
    "url": "https://www.wedistill.io",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free HD video",
    "desc_ar": "فيديو HD مجاني",
    "tags": "free,hd"
  },
  {
    "name": "Free Stock Video",
    "url": "https://www.freestockvideo.com",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free stock footage",
    "desc_ar": "لقطات مجانية",
    "tags": "free,footage"
  },
  {
    "name": "Stock Footage 4 Free",
    "url": "https://www.stockfootage4free.com",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free footage",
    "desc_ar": "لقطات مجانية",
    "tags": "free,footage"
  },
  {
    "name": "Motion Places",
    "url": "https://www.motionplaces.com",
    "cat": "effects",
    "price": "paid",
    "desc_en": "Cinematic footage",
    "desc_ar": "لقطات سينمائية",
    "tags": "footage,cinematic"
  },
  {
    "name": "Videvo (HD)",
    "url": "https://www.videvo.net/free-stock-video-footage",
    "cat": "effects",
    "price": "freemium",
    "desc_en": "Free HD footage",
    "desc_ar": "لقطات HD مجانية",
    "tags": "footage,hd"
  },
  {
    "name": "Pexels (4K)",
    "url": "https://www.pexels.com/search/videos/4k",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free 4K video",
    "desc_ar": "فيديو 4K مجاني",
    "tags": "free,4k"
  },
  {
    "name": "Pixabay (4K)",
    "url": "https://pixabay.com/videos/search/4k",
    "cat": "effects",
    "price": "free",
    "desc_en": "Free 4K video",
    "desc_ar": "فيديو 4K مجاني",
    "tags": "free,4k"
  },
  {
    "name": "A Sound Effect",
    "url": "https://www.asoundeffect.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "SFX marketplace",
    "desc_ar": "سوق ساوند افكت",
    "tags": "marketplace,sfx"
  },
  {
    "name": "SoundQ",
    "url": "https://www.prosoundeffects.com/soundq",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "SFX search tool",
    "desc_ar": "أداة بحث ساوند افكت",
    "tags": "sfx,tool"
  },
  {
    "name": "Hollywood Edge",
    "url": "https://www.hollywoodedge.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Pro SFX library",
    "desc_ar": "مكتبة ساوند افكت احترافية",
    "tags": "sfx,pro"
  },
  {
    "name": "Sound Storm",
    "url": "https://www.soundstorm.com",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "Sound effects",
    "desc_ar": "ساوند افكت",
    "tags": "sfx"
  },
  {
    "name": "Sound Ideas (General)",
    "url": "https://www.sound-ideas.com/sound-effects",
    "cat": "sfx",
    "price": "paid",
    "desc_en": "SFX library",
    "desc_ar": "مكتبة ساوند افكت",
    "tags": "sfx,library"
  },
  {
    "name": "Freesound (CC0)",
    "url": "https://freesound.org/search/?q=cc0",
    "cat": "sfx",
    "price": "free",
    "desc_en": "CC0 sounds",
    "desc_ar": "أصوات CC0",
    "tags": "free,cc0"
  },
  {
    "name": "SoundBible (Public Domain)",
    "url": "https://soundbible.com/free-sound-effects-1.html",
    "cat": "sfx",
    "price": "free",
    "desc_en": "PD sounds",
    "desc_ar": "أصوات public domain",
    "tags": "free,pd"
  },
  {
    "name": "99Sounds (Packs)",
    "url": "https://99sounds.org/free-sound-effects",
    "cat": "sfx",
    "price": "free",
    "desc_en": "Free packs",
    "desc_ar": "حزم مجانية",
    "tags": "free,packs"
  },
  {
    "name": "Zapsplat (Free)",
    "url": "https://www.zapsplat.com/sound-effect-categories",
    "cat": "sfx",
    "price": "freemium",
    "desc_en": "Free SFX",
    "desc_ar": "ساوند افكت مجاني",
    "tags": "sfx,free"
  },
  {
    "name": "Depositphotos",
    "url": "https://depositphotos.com",
    "cat": "images",
    "price": "paid",
    "desc_en": "Stock photos",
    "desc_ar": "صور",
    "tags": "photos,paid"
  },
  {
    "name": "123RF",
    "url": "https://www.123rf.com",
    "cat": "images",
    "price": "paid",
    "desc_en": "Stock photos",
    "desc_ar": "صور",
    "tags": "photos,paid"
  },
  {
    "name": "Dreamstime",
    "url": "https://www.dreamstime.com",
    "cat": "images",
    "price": "paid",
    "desc_en": "Stock photos",
    "desc_ar": "صور",
    "tags": "photos,paid"
  },
  {
    "name": "iStock",
    "url": "https://www.istockphoto.com",
    "cat": "images",
    "price": "paid",
    "desc_en": "Stock photos",
    "desc_ar": "صور",
    "tags": "photos,paid"
  },
  {
    "name": "Bigstock",
    "url": "https://www.bigstockphoto.com",
    "cat": "images",
    "price": "paid",
    "desc_en": "Stock photos",
    "desc_ar": "صور",
    "tags": "photos,paid"
  },
  {
    "name": "Stockvault",
    "url": "https://www.stockvault.net",
    "cat": "images",
    "price": "free",
    "desc_en": "Free stock photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Morguefile",
    "url": "https://morguefile.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Freeimages",
    "url": "https://www.freeimages.com",
    "cat": "images",
    "price": "freemium",
    "desc_en": "Free images",
    "desc_ar": "صور مجانية",
    "tags": "free,images"
  },
  {
    "name": "Picography",
    "url": "https://picography.co",
    "cat": "images",
    "price": "free",
    "desc_en": "Free photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Magdeleine",
    "url": "https://magdeleine.co",
    "cat": "images",
    "price": "free",
    "desc_en": "Free photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Startup Stock Photos",
    "url": "https://startupstockphotos.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free startup photos",
    "desc_ar": "صور شركات ناشئة",
    "tags": "free,startup"
  },
  {
    "name": "Stokpic",
    "url": "https://stokpic.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Travel Coffee Book",
    "url": "http://travelcoffeebook.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Travel photos",
    "desc_ar": "صور سفر",
    "tags": "free,travel"
  },
  {
    "name": "Jay Mantri",
    "url": "http://jaymantri.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Little Visuals",
    "url": "http://littlevisuals.co",
    "cat": "images",
    "price": "free",
    "desc_en": "Free photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Raumrot",
    "url": "http://raumrot.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "DesignersPics",
    "url": "http://www.designerspics.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Free Nature Stock",
    "url": "https://freenaturestock.com",
    "cat": "images",
    "price": "free",
    "desc_en": "Free nature photos",
    "desc_ar": "صور طبيعة مجانية",
    "tags": "free,nature"
  },
  {
    "name": "Good Stock Photos",
    "url": "https://goodstock.photos",
    "cat": "images",
    "price": "free",
    "desc_en": "Free photos",
    "desc_ar": "صور مجانية",
    "tags": "free,photos"
  },
  {
    "name": "Ignite Motion (Video)",
    "url": "https://www.ignitemotion.com/free-motion-backgrounds",
    "cat": "videos",
    "price": "free",
    "desc_en": "Free motion BG",
    "desc_ar": "خلفيات حركة مجانية",
    "tags": "free,motion"
  },
  {
    "name": "FxFactory",
    "url": "https://fxfactory.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Plugins & effects",
    "desc_ar": "إضافات وتأثيرات",
    "tags": "plugins,effects"
  },
  {
    "name": "MotionVFX",
    "url": "https://www.motionvfx.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "FCP & AE templates",
    "desc_ar": "قوالب FCP وAE",
    "tags": "templates,fcpx,ae"
  },
  {
    "name": "PremiumBeat (Templates)",
    "url": "https://www.premiumbeat.com/after-effects-templates",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AE templates",
    "desc_ar": "قوالب AE",
    "tags": "templates,ae"
  },
  {
    "name": "Motion Array (Free)",
    "url": "https://motionarray.com/free",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Free templates",
    "desc_ar": "قوالب مجانية",
    "tags": "free,templates"
  },
  {
    "name": "Mixkit (Templates)",
    "url": "https://mixkit.co/free-after-effects-templates",
    "cat": "motion",
    "price": "free",
    "desc_en": "Free AE templates",
    "desc_ar": "قوالب AE مجانية",
    "tags": "free,templates,ae"
  },
  {
    "name": "UseAnimations",
    "url": "https://useanimations.com",
    "cat": "icons",
    "price": "free",
    "desc_en": "Free animated icons",
    "desc_ar": "أيقونات متحركة مجانية",
    "tags": "free,animated"
  },
  {
    "name": "SVGator",
    "url": "https://www.svgator.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "SVG animation tool",
    "desc_ar": "أداة رسوم SVG",
    "tags": "svg,animation"
  },
  {
    "name": "Rive",
    "url": "https://rive.app",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Interactive animations",
    "desc_ar": "رسوم تفاعلية",
    "tags": "interactive,animation"
  },
  {
    "name": "Jitter",
    "url": "https://jitter.video",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Motion design tool",
    "desc_ar": "أداة تصميم حركة",
    "tags": "motion,tool"
  },
  {
    "name": "Principle",
    "url": "https://principleformac.com",
    "cat": "icons",
    "price": "paid",
    "desc_en": "Animation tool",
    "desc_ar": "أداة رسوم",
    "tags": "animation,tool"
  },
  {
    "name": "Framer",
    "url": "https://www.framer.com",
    "cat": "icons",
    "price": "freemium",
    "desc_en": "Design & animation",
    "desc_ar": "تصميم ورسوم",
    "tags": "design,animation"
  },
  {
    "name": "ProtoPie",
    "url": "https://www.protopie.io",
    "cat": "icons",
    "price": "paid",
    "desc_en": "Interactive prototyping",
    "desc_ar": "نماذج تفاعلية",
    "tags": "prototype,interactive"
  },
  {
    "name": "Lottie (Airbnb)",
    "url": "https://airbnb.io/lottie",
    "cat": "icons",
    "price": "free",
    "desc_en": "Lottie library",
    "desc_ar": "مكتبة Lottie",
    "tags": "lottie,free"
  },
  {
    "name": "Bodymovin",
    "url": "https://github.com/airbnb/lottie-web",
    "cat": "icons",
    "price": "free",
    "desc_en": "AE to Lottie",
    "desc_ar": "AE إلى Lottie",
    "tags": "lottie,free"
  },
  {
    "name": "GrabCAD",
    "url": "https://grabcad.com/library",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free CAD models",
    "desc_ar": "نماذج CAD مجانية",
    "tags": "cad,free"
  },
  {
    "name": "3D Warehouse",
    "url": "https://3dwarehouse.sketchup.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "SketchUp 3D models",
    "desc_ar": "نماذج 3D SketchUp",
    "tags": "3d,sketchup,free"
  },
  {
    "name": "Yeggi",
    "url": "https://www.yeggi.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "3D model search",
    "desc_ar": "بحث نماذج 3D",
    "tags": "3d,search"
  },
  {
    "name": "STLFinder",
    "url": "https://www.stlfinder.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "STL search",
    "desc_ar": "بحث STL",
    "tags": "stl,search"
  },
  {
    "name": "Cults3D",
    "url": "https://cults3d.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "3D models & prints",
    "desc_ar": "نماذج وطباعة 3D",
    "tags": "3d,print"
  },
  {
    "name": "MyMiniFactory",
    "url": "https://www.myminifactory.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "3D printable",
    "desc_ar": "نماذج 3D قابلة للطباعة",
    "tags": "3d,print"
  },
  {
    "name": "Pinshape",
    "url": "https://pinshape.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "3D printing",
    "desc_ar": "طباعة 3D",
    "tags": "3d,print"
  },
  {
    "name": "YouMagine",
    "url": "https://www.youmagine.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "3D printing",
    "desc_ar": "طباعة 3D",
    "tags": "3d,print,free"
  },
  {
    "name": "Repables",
    "url": "https://repables.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "3D printable",
    "desc_ar": "نماذج 3D قابلة للطباعة",
    "tags": "3d,print,free"
  },
  {
    "name": "3D ContentCentral",
    "url": "https://www.3dcontentcentral.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "CAD models",
    "desc_ar": "نماذج CAD",
    "tags": "cad,free"
  },
  {
    "name": "TraceParts",
    "url": "https://www.traceparts.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "CAD models",
    "desc_ar": "نماذج CAD",
    "tags": "cad,free"
  },
  {
    "name": "3Dfindit",
    "url": "https://www.3dfindit.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "CAD models",
    "desc_ar": "نماذج CAD",
    "tags": "cad,free"
  },
  {
    "name": "CADENAS",
    "url": "https://www.cadenas.de",
    "cat": "shapes",
    "price": "free",
    "desc_en": "CAD models",
    "desc_ar": "نماذج CAD",
    "tags": "cad,free"
  },
  {
    "name": "PartCommunity",
    "url": "https://www.partcommunity.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "CAD models",
    "desc_ar": "نماذج CAD",
    "tags": "cad,free"
  },
  {
    "name": "Fusion 360 (Autodesk)",
    "url": "https://www.autodesk.com/products/fusion-360",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "CAD software",
    "desc_ar": "برنامج CAD",
    "tags": "cad,software"
  },
  {
    "name": "Onshape",
    "url": "https://www.onshape.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Cloud CAD",
    "desc_ar": "CAD سحابي",
    "tags": "cad,cloud"
  },
  {
    "name": "Tinkercad",
    "url": "https://www.tinkercad.com",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Browser CAD",
    "desc_ar": "CAD في المتصفح",
    "tags": "cad,free,browser"
  },
  {
    "name": "Shapr3D",
    "url": "https://www.shapr3d.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "iPad CAD",
    "desc_ar": "CAD لـ iPad",
    "tags": "cad,ipad"
  },
  {
    "name": "SketchUp (Trimble)",
    "url": "https://www.sketchup.com",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "3D modeling",
    "desc_ar": "نمذجة 3D",
    "tags": "3d,modeling"
  },
  {
    "name": "Rhino (McNeel)",
    "url": "https://www.rhino3d.com",
    "cat": "shapes",
    "price": "paid",
    "desc_en": "3D modeling",
    "desc_ar": "نمذجة 3D",
    "tags": "3d,modeling"
  },
  {
    "name": "Modo (Foundry)",
    "url": "https://www.foundry.com/products/modo",
    "cat": "shapes",
    "price": "paid",
    "desc_en": "3D modeling",
    "desc_ar": "نمذجة 3D",
    "tags": "3d,modeling"
  },
  {
    "name": "ZBrush (Maxon)",
    "url": "https://www.maxon.net/en/zbrush",
    "cat": "shapes",
    "price": "paid",
    "desc_en": "Digital sculpting",
    "desc_ar": "نحت رقمي",
    "tags": "3d,sculpt"
  },
  {
    "name": "Substance 3D (Adobe)",
    "url": "https://www.adobe.com/products/substance3d.html",
    "cat": "shapes",
    "price": "paid",
    "desc_en": "3D texturing",
    "desc_ar": "قوام 3D",
    "tags": "3d,texturing"
  },
  {
    "name": "Poly Haven (HDRIs)",
    "url": "https://polyhaven.com/hdris",
    "cat": "shapes",
    "price": "free",
    "desc_en": "Free HDRIs",
    "desc_ar": "HDRIs مجانية",
    "tags": "hdris,free"
  },
  {
    "name": "Textures.com (Free)",
    "url": "https://www.textures.com/free",
    "cat": "shapes",
    "price": "freemium",
    "desc_en": "Free textures",
    "desc_ar": "قوام مجانية",
    "tags": "textures,free"
  },
  {
    "name": "Runway",
    "url": "https://runwayml.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AI video tools",
    "desc_ar": "أدوات فيديو AI",
    "tags": "ai,video"
  },
  {
    "name": "Pika",
    "url": "https://pika.art",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "AI video generation",
    "desc_ar": "توليد فيديو AI",
    "tags": "ai,video"
  },
  {
    "name": "Sora (OpenAI)",
    "url": "https://openai.com/sora",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AI video generation",
    "desc_ar": "توليد فيديو AI",
    "tags": "ai,video"
  },
  {
    "name": "Kling",
    "url": "https://klingai.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "AI video generation",
    "desc_ar": "توليد فيديو AI",
    "tags": "ai,video"
  },
  {
    "name": "Luma Dream Machine",
    "url": "https://lumalabs.ai/dream-machine",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "AI video generation",
    "desc_ar": "توليد فيديو AI",
    "tags": "ai,video"
  },
  {
    "name": "HeyGen",
    "url": "https://www.heygen.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AI avatar video",
    "desc_ar": "فيديو أفاتار AI",
    "tags": "ai,avatar"
  },
  {
    "name": "Synthesia",
    "url": "https://www.synthesia.io",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AI avatar video",
    "desc_ar": "فيديو أفاتار AI",
    "tags": "ai,avatar"
  },
  {
    "name": "D-ID",
    "url": "https://www.d-id.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AI talking heads",
    "desc_ar": "رؤوس متحدثة AI",
    "tags": "ai,avatar"
  },
  {
    "name": "Colossyan",
    "url": "https://www.colossyan.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AI video",
    "desc_ar": "فيديو AI",
    "tags": "ai,video"
  },
  {
    "name": "Elai",
    "url": "https://elai.io",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AI video",
    "desc_ar": "فيديو AI",
    "tags": "ai,video"
  },
  {
    "name": "Fliki",
    "url": "https://fliki.ai",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "AI video",
    "desc_ar": "فيديو AI",
    "tags": "ai,video"
  },
  {
    "name": "Pictory",
    "url": "https://pictory.ai",
    "cat": "motion",
    "price": "paid",
    "desc_en": "AI video",
    "desc_ar": "فيديو AI",
    "tags": "ai,video"
  },
  {
    "name": "Wisecut",
    "url": "https://www.wisecut.ai",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "AI video editing",
    "desc_ar": "تحرير فيديو AI",
    "tags": "ai,editing"
  },
  {
    "name": "Descript",
    "url": "https://www.descript.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Text-based video editor",
    "desc_ar": "محرر فيديو نصي",
    "tags": "editing,text"
  },
  {
    "name": "Riverside",
    "url": "https://riverside.fm",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Recording & editing",
    "desc_ar": "تسجيل وتحرير",
    "tags": "recording,editing"
  },
  {
    "name": "Zencastr",
    "url": "https://zencastr.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Podcast recording",
    "desc_ar": "تسجيل بودكاست",
    "tags": "podcast,recording"
  },
  {
    "name": "SquadCast",
    "url": "https://squadcast.fm",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Podcast recording",
    "desc_ar": "تسجيل بودكاست",
    "tags": "podcast,recording"
  },
  {
    "name": "Podbean",
    "url": "https://www.podbean.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Podcast hosting",
    "desc_ar": "استضافة بودكاست",
    "tags": "podcast,hosting"
  },
  {
    "name": "Anchor (Spotify)",
    "url": "https://anchor.fm",
    "cat": "motion",
    "price": "free",
    "desc_en": "Podcast creation",
    "desc_ar": "إنشاء بودكاست",
    "tags": "podcast,free"
  },
  {
    "name": "Buzzsprout",
    "url": "https://www.buzzsprout.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Podcast hosting",
    "desc_ar": "استضافة بودكاست",
    "tags": "podcast,hosting"
  },
  {
    "name": "Transistor",
    "url": "https://transistor.fm",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Podcast hosting",
    "desc_ar": "استضافة بودكاست",
    "tags": "podcast,hosting"
  },
  {
    "name": "Simplecast",
    "url": "https://www.simplecast.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Podcast hosting",
    "desc_ar": "استضافة بودكاست",
    "tags": "podcast,hosting"
  },
  {
    "name": "Castos",
    "url": "https://castos.com",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Podcast hosting",
    "desc_ar": "استضافة بودكاست",
    "tags": "podcast,hosting"
  },
  {
    "name": "Captivate",
    "url": "https://www.captivate.fm",
    "cat": "motion",
    "price": "paid",
    "desc_en": "Podcast hosting",
    "desc_ar": "استضافة بودكاست",
    "tags": "podcast,hosting"
  },
  {
    "name": "RedCircle",
    "url": "https://redcircle.com",
    "cat": "motion",
    "price": "freemium",
    "desc_en": "Podcast hosting",
    "desc_ar": "استضافة بودكاست",
    "tags": "podcast,hosting"
  }
];
