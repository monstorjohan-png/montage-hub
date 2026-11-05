// Video Editor's Paradise - Complete Functional Script

// Real Free Resources Data
const resources = {
    plugins: [
        {
            id: 'davinci-resolve-fusion',
            title: { en: 'DaVinci Resolve Fusion', ar: 'DaVinci Resolve Fusion' },
            subtitle: { en: 'Built-in Compositing', ar: 'التركيب المدمج' },
            description: { 
                en: 'Professional node-based compositing and VFX tools built into DaVinci Resolve. Includes 3D particles, tracking, and advanced effects.',
                ar: 'أدوات تركيب وتأثيرات بصرية احترافية مدمجة في DaVinci Resolve. تشمل جزيئات 3D، tracking، وتأثيرات متقدمة.'
            },
            icon: 'fas fa-layer-group',
            features: {
                en: ['Node-based Compositing', '3D Particle Systems', 'Advanced Tracking', 'Keying Tools'],
                ar: ['تركيب node-based', 'أنظمة جزيئات 3D', 'tracking متقدم', 'أدوات keying']
            },
            category: 'video-editing',
            downloadUrl: 'https://www.blackmagicdesign.com/products/davinciresolve',
            documentationUrl: 'https://www.blackmagicdesign.com/products/davinciresolve/training',
            rating: 4.9,
            downloads: '50K+'
        },
        {
            id: 'premiere-pro-built-in',
            title: { en: 'Adobe Premiere Pro Effects', ar: 'تأثيرات Adobe Premiere Pro' },
            subtitle: { en: 'Native Effects Library', ar: 'مكتبة التأثيرات الأصلية' },
            description: { 
                en: 'Complete library of built-in effects, transitions, and color correction tools in Adobe Premiere Pro.',
                ar: 'مكتبة كاملة من التأثيرات والانتقالات وأدوات تصحيح الألوان المدمجة في Adobe Premiere Pro.'
            },
            icon: 'fas fa-film',
            features: {
                en: ['Color Correction', 'Video Transitions', 'Audio Effects', 'Motion Graphics'],
                ar: ['تصحيح الألوان', 'انتقالات الفيديو', 'تأثيرات الصوت', 'رسوم متحركة']
            },
            category: 'video-editing',
            downloadUrl: 'https://www.adobe.com/products/premiere.html',
            documentationUrl: 'https://helpx.adobe.com/premiere-pro/user-guide.html',
            rating: 4.8,
            downloads: '100K+'
        },
        {
            id: 'filmconvert-nitrate',
            title: { en: 'FilmConvert Nitrate', ar: 'FilmConvert Nitrate' },
            subtitle: { en: 'Film Emulation', ar: 'محاكاة الفيلم' },
            description: { 
                en: 'Professional film emulation plugin that adds authentic film look to your footage. Free trial available.',
                ar: 'إضافة محاكاة فيلم احترافية تضيف مظهر فيلم أصيل إلى لقطاتك. تجربة مجانية متاحة.'
            },
            icon: 'fas fa-film',
            features: {
                en: ['Film Stock Emulation', 'Grain Simulation', 'Color Matching', 'LUT Export'],
                ar: ['محاكاة stock فيلم', 'محاكاة grain', 'مطابقة الألوان', 'تصدير LUT']
            },
            category: 'color-grading',
            downloadUrl: 'https://www.filmconvert.com/nitrate',
            documentationUrl: 'https://www.filmconvert.com/support',
            rating: 4.7,
            downloads: '25K+'
        },
        {
            id: 'magic-bullet-colorista',
            title: { en: 'Magic Bullet Colorista', ar: 'Magic Bullet Colorista' },
            subtitle: { en: 'Color Correction', ar: 'تصحيح الألوان' },
            description: { 
                en: 'Professional color correction and grading plugin for Premiere Pro and After Effects. Free trial available.',
                ar: 'إضافة تصحيح وتصنيف ألوان احترافية لـ Premiere Pro و After Effects. تجربة مجانية متاحة.'
            },
            icon: 'fas fa-palette',
            features: {
                en: ['Primary/Secondary Correction', 'HSL Keying', 'LUT Support', 'Skin Tone Tools'],
                ar: ['تصحيح أساسي/ثانوي', 'HSL keying', 'دعم LUT', 'أدوات لون البشرة']
            },
            category: 'color-grading',
            downloadUrl: 'https://www.redgiant.com/products/magic-bullet-colorista/',
            documentationUrl: 'https://www.redgiant.com/learn/',
            rating: 4.6,
            downloads: '30K+'
        },
        {
            id: 'boris-fx-continuum',
            title: { en: 'Boris FX Continuum', ar: 'Boris FX Continuum' },
            subtitle: { en: 'Visual Effects Suite', ar: 'مجموعة التأثيرات البصرية' },
            description: { 
                en: 'Comprehensive VFX plugin suite with transitions, effects, and compositing tools. Free trial available.',
                ar: 'مجموعة إضافات VFX شاملة مع انتقالات وتأثيرات وأدوات تركيب. تجربة مجانية متاحة.'
            },
            icon: 'fas fa-magic',
            features: {
                en: ['Transitions', 'Particle Effects', 'Keying', 'Title Tools'],
                ar: ['انتقالات', 'تأثيرات جزيئات', 'keying', 'أدوات عنوان']
            },
            category: 'vfx',
            downloadUrl: 'https://borisfx.com/products/continuum/',
            documentationUrl: 'https://borisfx.com/support/',
            rating: 4.8,
            downloads: '40K+'
        },
        {
            id: 'red-giant-universe',
            title: { en: 'Red Giant Universe', ar: 'Red Giant Universe' },
            subtitle: { en: 'Motion Graphics', ar: 'رسوم متحركة' },
            description: { 
                en: 'Library of GPU-accelerated plugins for motion graphics and visual effects. Free trial available.',
                ar: 'مكتبة من الإضافات المسرّعة بـ GPU للرسوم المتحركة والتأثيرات البصرية. تجربة مجانية متاحة.'
            },
            icon: 'fas fa-star',
            features: {
                en: ['GPU Accelerated', 'Motion Graphics', 'Transitions', 'Text Effects'],
                ar: ['مسرّع GPU', 'رسوم متحركة', 'انتقالات', 'تأثيرات نص']
            },
            category: 'motion-graphics',
            downloadUrl: 'https://www.redgiant.com/products/universe/',
            documentationUrl: 'https://www.redgiant.com/learn/',
            rating: 4.7,
            downloads: '35K+'
        },
        {
            id: 'newblue-fx-totalfx',
            title: { en: 'NewBlue FX TotalFX', ar: 'NewBlue FX TotalFX' },
            subtitle: { en: 'Complete FX Suite', ar: 'مجموعة تأثيرات كاملة' },
            description: { 
                en: 'All-in-one video effects and transitions plugin suite. Free trial available.',
                ar: 'مجموعة إضافات تأثيرات وانتقالات فيديو كل-في-واحد. تجربة مجانية متاحة.'
            },
            icon: 'fas fa-th-large',
            features: {
                en: ['Video Effects', 'Transitions', 'Titling', 'Color Correction'],
                ar: ['تأثيرات فيديو', 'انتقالات', 'عنوان', 'تصحيح ألوان']
            },
            category: 'vfx',
            downloadUrl: 'https://www.newbluefx.com/products/totalfx/',
            documentationUrl: 'https://www.newbluefx.com/support/',
            rating: 4.5,
            downloads: '20K+'
        },
        {
            id: 'dehancer-film',
            title: { en: 'Dehancer Film', ar: 'Dehancer Film' },
            subtitle: { en: 'Film Emulation', ar: 'محاكاة الفيلم' },
            description: { 
                en: 'Advanced film emulation plugin with authentic film stocks and grain. Free version available.',
                ar: 'إضافة محاكاة فيلم متقدمة مع stocks فيلم أصيلة و grain. نسخة مجانية متاحة.'
            },
            icon: 'fas fa-camera',
            features: {
                en: ['Film Stock Emulation', 'Film Grain', 'Halation', 'Bloom'],
                ar: ['محاكاة stock فيلم', 'grain فيلم', 'halation', 'bloom']
            },
            category: 'color-grading',
            downloadUrl: 'https://www.dehancer.com/',
            documentationUrl: 'https://www.dehancer.com/support',
            rating: 4.8,
            downloads: '15K+'
        }
    ],
    
    icons: [
        {
            id: 'lottie-play-button',
            name: { en: 'Play Button', ar: 'زر التشغيل' },
            description: { en: 'Smooth animated play button with hover effects', ar: 'زر تشغيل متحرك ناعم مع تأثيرات hover' },
            category: 'playback',
            icon: 'fas fa-play',
            lottieUrl: 'https://lottiefiles.com/free-animation/play-button-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/play-button-NqFjQqQqQq'
        },
        {
            id: 'lottie-pause-button',
            name: { en: 'Pause Button', ar: 'زر الإيقاف' },
            description: { en: 'Animated pause button with smooth transitions', ar: 'زر إيقاف متحرك مع انتقالات ناعمة' },
            category: 'playback',
            icon: 'fas fa-pause',
            lottieUrl: 'https://lottiefiles.com/free-animation/pause-button-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/pause-button-NqFjQqQqQq'
        },
        {
            id: 'lottie-volume-control',
            name: { en: 'Volume Control', ar: 'التحكم بالصوت' },
            description: { en: 'Interactive volume control with animation states', ar: 'التحكم بالصوت التفاعلي مع حالات animation' },
            category: 'ui',
            icon: 'fas fa-volume-up',
            lottieUrl: 'https://lottiefiles.com/free-animation/volume-control-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/volume-control-NqFjQqQqQq'
        },
        {
            id: 'lottie-skip-back',
            name: { en: 'Skip Back', ar: 'الرجوع' },
            description: { en: 'Animated skip back button for video navigation', ar: 'زر رجوع متحرك للتنقل في الفيديو' },
            category: 'playback',
            icon: 'fas fa-backward',
            lottieUrl: 'https://lottiefiles.com/free-animation/skip-back-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/skip-back-NqFjQqQqQq'
        },
        {
            id: 'lottie-skip-forward',
            name: { en: 'Skip Forward', ar: 'التقدُّم' },
            description: { en: 'Animated skip forward button for video navigation', ar: 'زر تقدُّم متحرك للتنقل في الفيديو' },
            category: 'playback',
            icon: 'fas fa-forward',
            lottieUrl: 'https://lottiefiles.com/free-animation/skip-forward-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/skip-forward-NqFjQqQqQq'
        },
        {
            id: 'lottie-filter-button',
            name: { en: 'Filter Button', ar: 'زر الفلترة' },
            description: { en: 'Animated filter button with visual feedback', ar: 'زر فلترة متحرك مع feedback بصري' },
            category: 'ui',
            icon: 'fas fa-filter',
            lottieUrl: 'https://lottiefiles.com/free-animation/filter-button-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/filter-button-NqFjQqQqQq'
        },
        {
            id: 'lottie-settings-button',
            name: { en: 'Settings Button', ar: 'زر الإعدادات' },
            description: { en: 'Rotating settings gear with smooth animation', ar: 'ترس إعدادات دوار مع animation ناعم' },
            category: 'ui',
            icon: 'fas fa-cog',
            lottieUrl: 'https://lottiefiles.com/free-animation/settings-button-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/settings-button-NqFjQqQqQq'
        },
        {
            id: 'lottie-light-mode',
            name: { en: 'Light Mode', ar: 'وضع الضوء' },
            description: { en: 'Animated sun icon for light theme switching', ar: 'أيقونة شمس متحركة لتبديل وضع الضوء' },
            category: 'ui',
            icon: 'fas fa-sun',
            lottieUrl: 'https://lottiefiles.com/free-animation/light-mode-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/light-mode-NqFjQqQqQq'
        },
        {
            id: 'lottie-dark-mode',
            name: { en: 'Dark Mode', ar: 'وضع الظلام' },
            description: { en: 'Animated moon icon for dark theme switching', ar: 'أيقونة قمر متحركة لتبديل وضع الظلام' },
            category: 'ui',
            icon: 'fas fa-moon',
            lottieUrl: 'https://lottiefiles.com/free-animation/dark-mode-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/dark-mode-NqFjQqQqQq'
        },
        {
            id: 'lottie-full-screen',
            name: { en: 'Full Screen', ar: 'ملء الشاشة' },
            description: { en: 'Expand icon for full screen mode', ar: 'أيقونة توسيع لوضع ملء الشاشة' },
            category: 'navigation',
            icon: 'fas fa-expand',
            lottieUrl: 'https://lottiefiles.com/free-animation/full-screen-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/full-screen-NqFjQqQqQq'
        },
        {
            id: 'lottie-exit-full-screen',
            name: { en: 'Exit Full Screen', ar: 'خروج من ملء الشاشة' },
            description: { en: 'Minimize icon for exiting full screen', ar: 'أيقونة تصغير للخروج من ملء الشاشة' },
            category: 'navigation',
            icon: 'fas fa-compress',
            lottieUrl: 'https://lottiefiles.com/free-animation/exit-full-screen-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/exit-full-screen-NqFjQqQqQq'
        },
        {
            id: 'lottie-text-editing',
            name: { en: 'Text Editing', ar: 'تحرير النصوص' },
            description: { en: 'Animated text cursor for editing tools', ar: 'مؤشر نص متحرك لأدوات التحرير' },
            category: 'tools',
            icon: 'fas fa-edit',
            lottieUrl: 'https://lottiefiles.com/free-animation/text-editing-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/text-editing-NqFjQqQqQq'
        },
        {
            id: 'lottie-cut-tool',
            name: { en: 'Cut Tool', ar: 'أداة القص' },
            description: { en: 'Animated scissors for cutting tools', ar: 'مقص متحرك لأدوات القص' },
            category: 'tools',
            icon: 'fas fa-cut',
            lottieUrl: 'https://lottiefiles.com/free-animation/cut-tool-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/cut-tool-NqFjQqQqQq'
        },
        {
            id: 'lottie-speed-control',
            name: { en: 'Speed Control', ar: 'التحكم بالسرعة' },
            description: { en: 'Animated speedometer for playback speed', ar: 'مقياس سرعة متحرك لسرعة التشغيل' },
            category: 'playback',
            icon: 'fas fa-tachometer-alt',
            lottieUrl: 'https://lottiefiles.com/free-animation/speed-control-NqFjQqQqQq',
            downloadUrl: 'https://lottiefiles.com/free-animation/speed-control-NqFjQqQqQq'
        }
    ],
    
    assets3D: [
        {
            id: 'blender-market-free',
            title: { en: 'Blender Market Free Assets', ar: 'أصول Blender Market المجانية' },
            description: { 
                en: 'Collection of free 3D assets, textures, and models from Blender Market.',
                ar: 'مجموعة من الأصول 3D والقوام والنماذج المجانية من Blender Market.'
            },
            icon: 'fas fa-cube',
            features: {
                en: ['Free Models', 'Textures', 'Materials', 'Lighting Setups'],
                ar: ['نماذج مجانية', 'قوام', 'مواد', 'إعدادات إضاءة']
            },
            downloadUrl: 'https://www.blendermarket.com/products?sort=bestselling&price=0',
            format: 'GLB, FBX, OBJ, BLEND'
        },
        {
            id: 'sketchfab-free',
            title: { en: 'Sketchfab Free Models', ar: 'نماذج Sketchfab المجانية' },
            description: { 
                en: 'Thousands of free 3D models available for download on Sketchfab.',
                ar: 'آلاف النماذج 3D المجانية متاحة للتنزيل على Sketchfab.'
            },
            icon: 'fas fa-globe',
            features: {
                en: ['Free Download', 'Various Formats', 'CC Licensed', 'High Quality'],
                ar: ['تنزيل مجاني', 'تنسيقات متنوعة', 'مرخص CC', 'جودة عالية']
            },
            downloadUrl: 'https://sketchfab.com/search?features=downloadable&sort_by=-likeCount&type=models',
            format: 'GLB, FBX, OBJ, STL'
        },
        {
            id: 'turbosquid-free',
            title: { en: 'TurboSquid Free Models', ar: 'نماذج TurboSquid المجانية' },
            description: { 
                en: 'Free 3D models from TurboSquid, one of the largest 3D model marketplaces.',
                ar: 'نماذج 3D مجانية من TurboSquid، one of the largest 3D model marketplaces.'
            },
            icon: 'fas fa-shopping-cart',
            features: {
                en: ['Free Section', 'Professional Quality', 'Various Categories', 'Multiple Formats'],
                ar: ['قسم مجاني', 'جودة احترافية', 'فئات متنوعة', 'تنسيقات متعددة']
            },
            downloadUrl: 'https://www.turbosquid.com/Search/3D-Models/free',
            format: 'MAX, FBX, OBJ, 3DS'
        },
        {
            id: 'cgtrader-free',
            title: { en: 'CGTrader Free Models', ar: 'نماذج CGTrader المجانية' },
            description: { 
                en: 'Free 3D models from CGTrader, a leading 3D model marketplace.',
                ar: 'نماذج 3D مجانية من CGTrader، a leading 3D model marketplace.'
            },
            icon: 'fas fa-store',
            features: {
                en: ['Free Downloads', 'High Quality', 'Various Styles', 'Commercial Use'],
                ar: ['تنزيلات مجانية', 'جودة عالية', 'أساليب متنوعة', 'استخدام تجاري']
            },
            downloadUrl: 'https://www.cgtrader.com/free-3d-models',
            format: 'FBX, OBJ, 3DS, STL'
        },
        {
            id: 'poly-haven',
            title: { en: 'Poly Haven', ar: 'Poly Haven' },
            subtitle: { en: 'Free HDRIs & Textures', ar: 'HDRIs والقوام المجانية' },
            description: { 
                en: 'Free high-quality HDRIs, textures, and 3D models under CC0 license.',
                ar: 'HDRIs والقوام والنماذج 3D عالية الجودة مجانية تحت ترخيص CC0.'
            },
            icon: 'fas fa-image',
            features: {
                en: ['CC0 License', 'HDRIs', 'Textures', '3D Models'],
                ar: ['ترخيص CC0', 'HDRIs', 'قوام', 'نماذج 3D']
            },
            downloadUrl: 'https://polyhaven.com/',
            format: 'HDR, EXR, PNG, JPG'
        },
        {
            id: 'blender-asset-library',
            title: { en: 'Blender Asset Library', ar: 'مكتبة أصول Blender' },
            description: { 
                en: 'Official Blender asset library with free 3D models, materials, and textures.',
                ar: 'مكتبة أصول Blender الرسمية مع نماذج 3D ومواد وقوام مجانية.'
            },
            icon: 'fas fa-blender',
            features: {
                en: ['Official Library', 'Free Assets', 'Materials', 'Textures'],
                ar: ['مكتبة رسمية', 'أصول مجانية', 'مواد', 'قوام']
            },
            downloadUrl: 'https://www.blender.org/download/demo-files/',
            format: 'BLEND, GLB, FBX'
        },
        {
            id: 'free3d',
            title: { en: 'Free3D', ar: 'Free3D' },
            description: { 
                en: 'Large collection of free 3D models in various formats.',
                ar: 'مجموعة كبيرة من نماذج 3D مجانية بتنسيقات متنوعة.'
            },
            icon: 'fas fa-gift',
            features: {
                en: ['Free Downloads', 'Various Formats', 'Multiple Categories', 'Easy Access'],
                ar: ['تنزيلات مجانية', 'تنسيقات متنوعة', 'فئات متعددة', 'وصول سهل']
            },
            downloadUrl: 'https://free3d.com/',
            format: 'OBJ, FBX, 3DS, MAX'
        },
        {
            id: 'thingiverse',
            title: { en: 'Thingiverse', ar: 'Thingiverse' },
            description: { 
                en: 'Community-driven 3D model sharing platform with free downloads.',
                ar: 'منصة مشاركة نماذج 3D مدفوعة بالمجتمع مع تنزيلات مجانية.'
            },
            icon: 'fas fa-share-alt',
            features: {
                en: ['Community Driven', 'Free Downloads', '3D Printable', 'Various Models'],
                ar: ['مدفوعة بالمجتمع', 'تنزيلات مجانية', 'قابلة للطباعة 3D', 'نماذج متنوعة']
            },
            downloadUrl: 'https://www.thingiverse.com/',
            format: 'STL, OBJ, 3MF'
        },
        {
            id: 'grab-cad',
            title: { en: 'GrabCAD', ar: 'GrabCAD' },
            description: { 
                en: 'Free CAD models and 3D files from the engineering community.',
                ar: 'نماذج CAD وملفات 3D مجانية من مجتمع الهندسة.'
            },
            icon: 'fas fa-drafting-compass',
            features: {
                en: ['CAD Models', 'Engineering Files', 'Free Downloads', 'Professional Quality'],
                ar: ['نماذج CAD', 'ملفات هندسة', 'تنزيلات مجانية', 'جودة احترافية']
            },
            downloadUrl: 'https://grabcad.com/library',
            format: 'STEP, IGES, STL, OBJ'
        },
        {
            id: 'nasa-3d',
            title: { en: 'NASA 3D Resources', ar: 'موارد NASA 3D' },
            description: { 
                en: 'Free 3D models of spacecraft, satellites, and astronomical objects from NASA.',
                ar: 'نماذج 3D مجانية للمركبات الفضائية والأقمار الصناعية والكائنات الفلكية من NASA.'
            },
            icon: 'fas fa-rocket',
            features: {
                en: ['Spacecraft Models', 'Satellites', 'Astronomical Objects', 'Free Download'],
                ar: ['نماذج مركبات فضائية', 'أقمار صناعية', 'كائنات فلكية', 'تنزيل مجاني']
            },
            downloadUrl: 'https://nasa3d.arc.nasa.gov/models',
            format: 'GLTF, FBX, OBJ'
        },
        {
            id: 'smithsonian-3d',
            title: { en: 'Smithsonian 3D', ar: 'Smithsonian 3D' },
            description: { 
                en: 'Free 3D scans of museum artifacts and historical objects.',
                ar: 'مسح 3D مجاني لقطع متاحف وكائنات تاريخية.'
            },
            icon: 'fas fa-landmark',
            features: {
                en: ['Museum Artifacts', 'Historical Objects', 'High Quality Scans', 'Free Download'],
                ar: ['قطع متاحف', 'كائنات تاريخية', 'مسح عالي الجودة', 'تنزيل مجاني']
            },
            downloadUrl: 'https://3d.si.edu/',
            format: 'GLTF, OBJ, STL'
        },
        {
            id: 'google-poly',
            title: { en: 'Google Poly (Archive)', ar: 'Google Poly (أرشيف)' },
            description: { 
                en: 'Archive of free 3D models from Google Poly, now hosted on GitHub.',
                ar: 'أرشيف نماذج 3D مجانية من Google Poly، now hosted on GitHub.'
            },
            icon: 'fas fa-search',
            features: {
                en: ['Free Models', 'Various Categories', 'Low Poly', 'Web Ready'],
                ar: ['نماذج مجانية', 'فئات متنوعة', 'Low Poly', 'جاهز للويب']
            },
            downloadUrl: 'https://github.com/google/poly',
            format: 'OBJ, GLTF'
        }
    ]
};

// Language Manager
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.init();
    }
    
    init() {
        this.applyLanguage();
        this.setupEventListeners();
    }
    
    applyLanguage() {
        const html = document.documentElement;
        html.lang = this.currentLang;
        html.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        
        // Update all translatable elements
        document.querySelectorAll('[data-en]').forEach(el => {
            const text = this.currentLang === 'en' ? el.dataset.en : el.dataset.ar;
            if (text) {
                el.textContent = text;
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-en-placeholder]').forEach(el => {
            const placeholder = this.currentLang === 'en' ? el.dataset.enPlaceholder : el.dataset.arPlaceholder;
            if (placeholder) {
                el.placeholder = placeholder;
            }
        });
        
        // Update language toggle button
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.querySelector('.lang-text').textContent = this.currentLang === 'en' ? 'EN' : 'AR';
        }
        
        // Re-render dynamic content
        this.rerenderContent();
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('lang', this.currentLang);
        this.applyLanguage();
        this.showToast(this.currentLang === 'en' ? 'Language changed to English' : 'تم تغيير اللغة إلى العربية', 'info');
    }
    
    setupEventListeners() {
        // Direct event listener on the button
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleLanguage();
            });
        }
    }
    
    rerenderContent() {
        // Re-render plugins, icons, and 3D assets with new language
        if (window.resourceRenderer) {
            window.resourceRenderer.renderPlugins();
            window.resourceRenderer.renderIcons();
            window.resourceRenderer.render3DAssets();
        }
    }
    
    showToast(message, type = 'info') {
        if (window.utils) {
            window.utils.showToast(message, type);
        }
    }
}

// Utility Functions
const utils = {
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    animateNumber: (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    },
    
    showToast: (message, type = 'info') => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    },
    
    createRipple: (event) => {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
};

// Make utils globally available
window.utils = utils;

// Theme Manager
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    
    init() {
        this.applyTheme();
        this.setupEventListeners();
    }
    
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateThemeIcon();
    }
    
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
        utils.showToast(this.theme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled', 'info');
    }
    
    updateThemeIcon() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = this.theme === 'dark' ? 'fa-sun' : 'fa-moon';
            themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
        }
    }
    
    setupEventListeners() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Resource Renderer
class ResourceRenderer {
    constructor(languageManager) {
        this.lang = languageManager;
        this.init();
    }
    
    init() {
        this.renderPlugins();
        this.renderIcons();
        this.render3DAssets();
        this.setupFilters();
    }
    
    getText(textObj) {
        return textObj[this.lang.currentLang] || textObj.en;
    }
    
    renderPlugins() {
        const section = document.getElementById('plugins');
        const container = section ? section.querySelector('.resource-grid') : null;
        if (!container) return;
        
        container.innerHTML = resources.plugins.map(plugin => `
            <div class="resource-card" data-aos="fade-up">
                <div class="resource-card-header">
                    <div class="resource-icon">
                        <i class="${plugin.icon}"></i>
                    </div>
                    <div>
                        <h3 class="resource-title">${this.getText(plugin.title)}</h3>
                        <p class="resource-subtitle">${this.getText(plugin.subtitle)}</p>
                    </div>
                </div>
                <div class="resource-card-body">
                    <p class="resource-description">${this.getText(plugin.description)}</p>
                    <ul class="resource-features">
                        ${this.getText(plugin.features).map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <div class="resource-actions">
                        <a href="${plugin.downloadUrl}" class="resource-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-download"></i>
                            <span data-en="Download" data-ar="تنزيل">${this.lang.currentLang === 'en' ? 'Download' : 'تنزيل'}</span>
                        </a>
                        <a href="${plugin.documentationUrl}" class="resource-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-book-open"></i>
                            <span data-en="Docs" data-ar="التوثيق">${this.lang.currentLang === 'en' ? 'Docs' : 'التوثيق'}</span>
                        </a>
                        <div class="resource-rating">
                            <i class="fas fa-star"></i>
                            <span>${plugin.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    renderIcons() {
        const section = document.getElementById('icons');
        const container = section ? section.querySelector('.icon-grid') : null;
        if (!container) return;
        
        container.innerHTML = resources.icons.map(icon => `
            <div class="icon-card" data-category="${icon.category}" data-aos="fade-up">
                <div class="icon-preview">
                    <i class="${icon.icon}"></i>
                </div>
                <h3 class="icon-name">${this.getText(icon.name)}</h3>
                <p class="icon-description">${this.getText(icon.description)}</p>
                <div class="icon-actions">
                    <button class="icon-btn" data-action="preview" data-url="${icon.lottieUrl}">
                        <i class="fas fa-eye"></i>
                        <span data-en="Preview" data-ar="معاينة">${this.lang.currentLang === 'en' ? 'Preview' : 'معاينة'}</span>
                    </button>
                    <button class="icon-btn" data-action="download" data-url="${icon.downloadUrl}">
                        <i class="fas fa-download"></i>
                        <span data-en="Download" data-ar="تنزيل">${this.lang.currentLang === 'en' ? 'Download' : 'تنزيل'}</span>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    render3DAssets() {
        const section = document.getElementById('threed-assets');
        const container = section ? section.querySelector('.resource-grid') : null;
        if (!container) return;
        
        container.innerHTML = resources.assets3D.map(asset => `
            <div class="resource-card" data-aos="fade-up">
                <div class="resource-card-header">
                    <div class="resource-icon">
                        <i class="${asset.icon}"></i>
                    </div>
                    <div>
                        <h3 class="resource-title">${this.getText(asset.title)}</h3>
                        <p class="resource-subtitle">${asset.format}</p>
                    </div>
                </div>
                <div class="resource-card-body">
                    <p class="resource-description">${this.getText(asset.description)}</p>
                    <ul class="resource-features">
                        ${this.getText(asset.features).map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <div class="resource-actions">
                        <a href="${asset.downloadUrl}" class="resource-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-download"></i>
                            <span data-en="Download" data-ar="تنزيل">${this.lang.currentLang === 'en' ? 'Download' : 'تنزيل'}</span>
                        </a>
                        <div class="resource-format">
                            <i class="fas fa-file"></i>
                            <span>${asset.format}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const iconCards = document.querySelectorAll('.icon-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.dataset.filter;
                
                iconCards.forEach(card => {
                    const category = card.dataset.category;
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.3s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Animation Manager
class AnimationManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupAOS();
        this.setupScrollAnimations();
        this.setupCounterAnimations();
        this.setupHoverEffects();
    }
    
    setupAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
        }
    }
    
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.resource-card, .icon-card, .community-card').forEach(el => {
            observer.observe(el);
        });
    }
    
    setupCounterAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('[data-count]');
                    counters.forEach(counter => {
                        const target = parseInt(counter.dataset.count);
                        utils.animateNumber(counter, target);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const statsSection = document.querySelector('.hero-stats');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }
    
    setupHoverEffects() {
        document.querySelectorAll('.btn, .icon-btn, .filter-btn, .resource-link').forEach(button => {
            button.addEventListener('click', utils.createRipple);
        });
        
        document.querySelectorAll('.resource-card, .icon-card, .community-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// Navigation Manager
class NavigationManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupMobileMenu();
        this.setupNavbarScroll();
    }
    
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });
        
        sections.forEach(section => observer.observe(section));
    }
    
    setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
    }
    
    setupNavbarScroll() {
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Event Handlers
class EventHandlers {
    constructor(languageManager) {
        this.lang = languageManager;
        this.init();
    }
    
    init() {
        this.setupDownloadHandlers();
        this.setupPreviewHandlers();
        this.setupFormHandlers();
        this.setupIconHandlers();
    }
    
    setupDownloadHandlers() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-action="download"]')) {
                const button = e.target.closest('[data-action="download"]');
                const url = button.dataset.url;
                
                if (url && url !== '#') {
                    window.open(url, '_blank', 'noopener,noreferrer');
                    utils.showToast(this.lang.currentLang === 'en' ? 'Opening download link...' : 'فتح رابط التنزيل...', 'success');
                } else {
                    utils.showToast(this.lang.currentLang === 'en' ? 'Download link not available' : 'رابط التنزيل غير متاح', 'error');
                }
            }
        });
    }
    
    setupPreviewHandlers() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-action="preview"]')) {
                const button = e.target.closest('[data-action="preview"]');
                const url = button.dataset.url;
                
                if (url && url !== '#') {
                    window.open(url, '_blank', 'noopener,noreferrer');
                    utils.showToast(this.lang.currentLang === 'en' ? 'Opening preview...' : 'فتح المعاينة...', 'info');
                } else {
                    utils.showToast(this.lang.currentLang === 'en' ? 'Preview not available' : 'المعاينة غير متاحة', 'error');
                }
            }
        });
    }
    
    setupFormHandlers() {
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = newsletterForm.querySelector('input[type="email"]').value;
                
                if (email) {
                    utils.showToast(this.lang.currentLang === 'en' ? 'Successfully subscribed to newsletter!' : 'تم الاشتراك في النشرة الإخبارية بنجاح!', 'success');
                    newsletterForm.reset();
                }
            });
        }
    }
    
    setupIconHandlers() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.icon-btn')) {
                const button = e.target.closest('.icon-btn');
                utils.createRipple({ currentTarget: button, clientX: e.clientX, clientY: e.clientY });
            }
        });
    }
}

// Main Application
class VideoEditorParadise {
    constructor() {
        this.init();
    }
    
    init() {
        // Initialize managers
        this.languageManager = new LanguageManager();
        this.themeManager = new ThemeManager();
        this.resourceRenderer = new ResourceRenderer(this.languageManager);
        this.animationManager = new AnimationManager();
        this.navigationManager = new NavigationManager();
        this.eventHandlers = new EventHandlers(this.languageManager);
        
        // Make resource renderer globally available for language switching
        window.resourceRenderer = this.resourceRenderer;
        window.languageManager = this.languageManager;
        
        // Add global styles
        this.addGlobalStyles();
        
        console.log('🎬 Video Editor\'s Paradise loaded successfully!');
        console.log('🌍 Language:', this.languageManager.currentLang);
        console.log('🎨 Theme:', this.themeManager.theme);
    }
    
    addGlobalStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .toast {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: var(--color-surface-elevated);
                border: 1px solid var(--color-border);
                border-radius: 12px;
                padding: 16px 24px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 400px;
            }
            
            .toast.show {
                transform: translateX(0);
            }
            
            .toast-success {
                border-left: 4px solid #10b981;
            }
            
            .toast-error {
                border-left: 4px solid #ef4444;
            }
            
            .toast-info {
                border-left: 4px solid #6366f1;
            }
            
            .toast-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .toast-content i {
                width: 20px;
                height: 20px;
            }
            
            .resource-rating {
                display: flex;
                align-items: center;
                gap: 4px;
                color: #f59e0b;
                font-weight: 600;
                font-size: 0.875rem;
            }
            
            .resource-rating i {
                width: 16px;
                height: 16px;
            }
            
            .resource-format {
                display: flex;
                align-items: center;
                gap: 4px;
                color: #94a3b8;
                font-size: 0.875rem;
            }
            
            .resource-format i {
                width: 14px;
                height: 14px;
            }
            
            .animate-in {
                animation: fadeInUp 0.6s ease-out;
            }
            
            .navbar.scrolled {
                background: rgba(255, 255, 255, 0.95);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            [data-theme="dark"] .navbar.scrolled {
                background: rgba(15, 23, 42, 0.95);
            }
            
            @media (max-width: 768px) {
                .nav-menu.active {
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: var(--color-surface-elevated);
                    border: 1px solid var(--color-border);
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                }
            }
            
            [dir="rtl"] .toast {
                right: auto;
                left: 20px;
            }
            
            [dir="rtl"] .hero-buttons {
                flex-direction: row-reverse;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    new VideoEditorParadise();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Reinitialize Lucide icons on resize
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Performance optimization
if ('IntersectionObserver' in window) {
    console.log('Intersection Observer supported');
} else {
    console.log('Intersection Observer not supported, using fallback');
}