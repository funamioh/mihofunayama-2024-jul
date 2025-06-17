// Define switchLanguage function immediately at the top level
function switchLanguage(lang) {
  try {
    console.log('switchLanguage called with:', lang);
    
    // Use the global languageContent
    const languageContent = window.languageContent;
    
    const content = languageContent[lang];
    if (!content) {
      console.error('Language content not found for:', lang);
      return;
    }
    
    console.log('Switching to language:', lang);
    
    // Update header
    const headerStrong = document.querySelector('header p strong');
    if (headerStrong) {
      headerStrong.textContent = content.subtitle;
      console.log('Header updated to:', content.subtitle);
    }
    
    // Update navigation
    const navAbout = document.querySelector('nav a[href="#intro"]');
    if (navAbout) navAbout.textContent = content.navAbout;
    
    const navSkills = document.querySelector('nav a[href="#first"]');
    if (navSkills) navSkills.textContent = content.navSkills;
    
    const navTech = document.querySelector('nav a[href="#second"]');
    if (navTech) navTech.textContent = content.navTechStacks;
    
    const navProjects = document.querySelector('nav a[href="#third"]');
    if (navProjects) navProjects.textContent = content.navProjects;
    
    const navConsult = document.querySelector('nav a[href="#cta"]');
    if (navConsult) navConsult.textContent = content.navConsult;
    
    // Update about section
    const aboutTitle = document.querySelector('#intro h2');
    if (aboutTitle) aboutTitle.textContent = content.aboutTitle;
    
    const aboutDesc = document.querySelector('#intro .content p');
    if (aboutDesc) aboutDesc.textContent = content.aboutDescription;
    
    // Update buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });
    
  } catch (error) {
    console.error('Error in switchLanguage:', error);
  }
}

// Make it globally accessible
window.switchLanguage = switchLanguage;

document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM loaded, initializing...');
  typeWriter();
  
  // Add a small delay to ensure all elements are ready
  setTimeout(() => {
    initLanguageToggle();
  }, 100);
});

let i = 0;
const text = "Miho Funayama";
const space = "&nbsp;"; // to insert empty space
const speed = 300;
let isDeleting = false;

function typeWriter() {
  const nameElement = document.getElementById("nameType");

if (!isDeleting) {
  // adding characters
  if (i < text.length) {
    nameElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    isDeleting = true;
    setTimeout(typeWriter, speed);
  }
} else {
  // deleting characters
  if (i > 1) {
    // text[0]からtext[i - 1]まで表示
    nameElement.innerHTML = text.substring(0, i - 1);
    i--;
    setTimeout(typeWriter, speed);
  } else {
    nameElement.innerHTML = space;
    i--;
    isDeleting = false;
    setTimeout(typeWriter, speed);
  }
}
}

// Language content data - make it globally accessible immediately
window.languageContent = {
  en: {
    // Header
    subtitle: "Full-stack developer",
    
    // Navigation
    navAbout: "About",
    navSkills: "My Skills", 
    navTechStacks: "My Tech Stacks",
    navProjects: "My Projects",
    navConsult: "Let's Consult",
    
    // About Section
    aboutTitle: "About",
    aboutDescription: "I am a former project coordinator who transitioned to becoming a fullstack developer. After refining my skills at a software company, I took a leap to pursue intensive fullstack development training at Le Wagon Tokyo, a 6-month-long coding bootcamp. Currently, I'm seeking Fullstack/Frontend Engineer roles to apply my innovation and technical skills to new challenges.",
    hometown: "Hometown: ",
    hometownValue: "Yamagata, Japan",
    residence: "Residence: ",
    residenceValue: "Tokyo, Japan", 
    languages: "Languages: ",
    languagesValue: "Japanese & English",
    email: "Email: ",
    downloadCV: "Download CV",
    
    // Skills Section
    skillsTitle: "My Skills",
    webDevTitle: "Full-Stack Web Development",
    webDevDesc: "Build scalable and maintainable web applications with hands-on experience in both frontend (HTML, CSS, JS) and backend integrations (REST APIs, Liquid, Firebase, etc.)",
    coordinationTitle: "Technical Project Coordination", 
    coordinationDesc: "Coordinate cross-functional teams and bridge the gap between engineers and stakeholders with a strong technical foundation and bilingual communication skills.",
    adaptabilityTitle: "AI-Enhanced Problem Solving",
    adaptabilityDesc: "Utilize AI tools and prompt engineering to improve development efficiency, automate workflows, and explore the intersection of LLMs and software architecture.",
    
    // Tech Stacks Section
    techStacksTitle: "My Tech Stacks",
    frontend: "Frontend",
    backend: "Backend", 
    otherTech: "Other Technologies",
    
    // Projects Section
    projectsTitle: "Projects",
    projectsIntro: "I am passionate about continually expanding my skill set and take great pleasure in crafting innovative applications. Each project showcases my enthusiasm for learning and my commitment to developing solutions that are both functional and creative. Explore these ventures to see how I blend my growing expertise with a love for building impactful technology.",
    novacopyDesc: "Personalized copywriting assistant for seamless content generation that skyrockets your business",
    kanjiCamDesc: "A web application designed to aid learners of Japanese in preparing for the JLPT.",
    caravanaDesc: "A marketplace app connects recreational vehicle providers with customers.",
    ageCalculatorDesc: "An age calculator web application that computes the precise age in years, months, and days based on the input birth date.",
    rocketLaunchDesc: "A web application to schedule and manage rocket launches with date, aircraft name, and project name.",
    demo: "Demo",
    viewMoreGitHub: "View More on GitHub",
    
    // Contact Section
    consultTitle: "Let's Consult",
    availability: "I'm Available for Fulltime/Freelancing/Contracting",
    openToProjects: "I'm also open to working on interesting projects using the latest technologies, regardless of compensation.",
    sayHi: "Say Hi to Miho",
    
    // Footer
    contactTitle: "Contact",
    location: "Location",
    locationValue: "Tokyo, Japan"
  },
  
  jp: {
    // Header
    subtitle: "フルスタック開発者",
    
    // Navigation  
    navAbout: "私について",
    navSkills: "スキル",
    navTechStacks: "技術スタック", 
    navProjects: "プロジェクト",
    navConsult: "お問い合わせ",
    
    // About Section
    aboutTitle: "私について",
    aboutDescription: "私は元プロジェクトコーディネーターから、フルスタック開発者へと転身しました。ソフトウェア会社でスキルを磨いた後、Le Wagon東京で6ヶ月間の集中的なフルスタック開発トレーニングを受けるという大きな一歩を踏み出しました。現在、革新性と技術スキルを新しい挑戦に活かすためのフルスタック/フロントエンドエンジニアのポジションを探しています。",
    hometown: "出身地: ",
    hometownValue: "山形県、日本",
    residence: "居住地: ", 
    residenceValue: "東京、日本",
    languages: "言語: ",
    languagesValue: "日本語・英語",
    email: "メール: ",
    downloadCV: "履歴書ダウンロード",
    
    // Skills Section
    skillsTitle: "スキル",
    webDevTitle: "フルスタックウェブ開発",
    webDevDesc: "フロントエンド（HTML、CSS、JS）とバックエンド統合（REST API、Liquid、Firebase等）の実践経験により、スケーラブルで保守性の高いウェブアプリケーションを構築します。",
    coordinationTitle: "技術プロジェクト調整", 
    coordinationDesc: "強固な技術基盤とバイリンガルコミュニケーションスキルを持ち、機能横断チームを調整し、エンジニアとステークホルダー間の橋渡しを行います。",
    adaptabilityTitle: "AI活用問題解決",
    adaptabilityDesc: "AIツールとプロンプトエンジニアリングを活用し、開発効率を向上させ、ワークフローを自動化し、LLMとソフトウェアアーキテクチャの融合を探求します。"
    
    // Tech Stacks Section  
    techStacksTitle: "技術スタック",
    frontend: "フロントエンド",
    backend: "バックエンド",
    otherTech: "その他の技術",
    
    // Projects Section
    projectsTitle: "プロジェクト",
    projectsIntro: "私は継続的にスキルセットを拡張することに情熱を持ち、革新的なアプリケーションを作成することに大きな喜びを感じています。各プロジェクトは、学習への熱意と、機能的でクリエイティブなソリューションを開発することへのコミットメントを示しています。これらの取り組みを通じて、成長する専門知識と影響力のある技術構築への愛をどのように融合させているかをぜひご覧ください。",
    novacopyDesc: "ビジネスを飛躍させるシームレスなコンテンツ生成のためのパーソナライズドコピーライティングアシスタント",
    kanjiCamDesc: "JLPT受験準備を支援する日本語学習者向けのウェブアプリケーション",
    caravanaDesc: "レクリエーション車両プロバイダーと顧客を結ぶマーケットプレイスアプリ",
    ageCalculatorDesc: "入力された生年月日に基づいて正確な年齢を年、月、日で計算するウェブアプリケーション",
    rocketLaunchDesc: "日付、機体名、プロジェクト名を含むロケット打ち上げのスケジュール管理ウェブアプリケーション",
    demo: "デモ",
    viewMoreGitHub: "GitHubでもっと見る",
    
    // Contact Section
    consultTitle: "お問い合わせ",
    availability: "フルタイム・フリーランス・契約業務承ります",
    openToProjects: "また、報酬に関係なく最新技術を使った興味深いプロジェクトにも積極的に参加したいと考えています。",
    sayHi: "Mihoに挨拶する",
    
    // Footer
    contactTitle: "お問い合わせ",
    location: "所在地",
    locationValue: "東京、日本"
  }
};

// Make functions globally accessible
window.switchLanguage = function(lang) {
  try {
    console.log('Global switchLanguage called with:', lang);
    
    if (typeof languageContent === 'undefined') {
      console.error('languageContent is not defined');
      return;
    }
    
    const content = languageContent[lang];
    if (!content) {
      console.error('Language content not found for:', lang);
      console.log('Available languages:', Object.keys(languageContent));
      return;
    }
    
    console.log('Language content found:', content);
    
    // Update header
    const headerStrong = document.querySelector('header p strong');
    if (headerStrong) {
      headerStrong.textContent = content.subtitle;
      console.log('Header updated to:', content.subtitle);
    } else {
      console.error('Header strong element not found');
    }
  } catch (error) {
    console.error('Error in switchLanguage:', error);
    console.error('Error stack:', error.stack);
  }
  
  // Update navigation
  const navAbout = document.querySelector('nav a[href="#intro"]');
  if (navAbout) navAbout.textContent = content.navAbout;
  
  const navSkills = document.querySelector('nav a[href="#first"]');  
  if (navSkills) navSkills.textContent = content.navSkills;
  
  const navTech = document.querySelector('nav a[href="#second"]');
  if (navTech) navTech.textContent = content.navTechStacks;
  
  const navProjects = document.querySelector('nav a[href="#third"]');
  if (navProjects) navProjects.textContent = content.navProjects;
  
  const navConsult = document.querySelector('nav a[href="#cta"]');
  if (navConsult) navConsult.textContent = content.navConsult;
  
  // Update about section
  const aboutTitle = document.querySelector('#intro h2');
  if (aboutTitle) aboutTitle.textContent = content.aboutTitle;
  
  const aboutDesc = document.querySelector('#intro .content p');
  if (aboutDesc) aboutDesc.textContent = content.aboutDescription;
  
  // Update buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
};

// Language Toggle functionality
function initLanguageToggle() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  console.log('Language buttons found:', langButtons.length);
  langButtons.forEach((btn, i) => {
    console.log(`Button ${i}:`, btn.getAttribute('data-lang'), btn.classList.contains('active'));
  });
  
  if (langButtons.length === 0) {
    console.error('No language buttons found!');
    return;
  }
  
  // Set default language to EN
  switchLanguage('en');
  
  langButtons.forEach((button, index) => {
    console.log(`Adding event listener to button ${index}:`, button.getAttribute('data-lang'));
    
    // Use both click and mousedown for better compatibility
    ['click', 'mousedown'].forEach(eventType => {
      button.addEventListener(eventType, function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log(`${eventType} event on button:`, this.getAttribute('data-lang'));
        
        // Remove active class from all buttons
        langButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get selected language
        const selectedLang = this.getAttribute('data-lang');
        
        // Switch language content
        switchLanguage(selectedLang);
        
        return false;
      });
    });
  });
}

// Language switching implementation
function switchLanguage(lang) {
  const content = languageContent[lang];
  
  if (!content) {
    console.error('Language content not found for:', lang);
    return;
  }
  
  console.log('Switching to language:', lang, 'with content:', content.subtitle);
  
  // Header - Test with a simpler approach
  try {
    const headerStrong = document.querySelector('header p strong');
    if (headerStrong) {
      headerStrong.textContent = content.subtitle;
      console.log('Header updated to:', content.subtitle);
    } else {
      console.error('Header strong element not found');
    }
  } catch (error) {
    console.error('Error updating header:', error);
  }
  
  // Navigation
  const navElements = [
    { selector: 'nav a[href="#intro"]', content: content.navAbout },
    { selector: 'nav a[href="#first"]', content: content.navSkills },
    { selector: 'nav a[href="#second"]', content: content.navTechStacks },
    { selector: 'nav a[href="#third"]', content: content.navProjects },
    { selector: 'nav a[href="#cta"]', content: content.navConsult }
  ];
  
  navElements.forEach(({ selector, content: text }) => {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = text;
    } else {
      console.error('Nav element not found:', selector);
    }
  });
  
  // About Section
  try {
    const aboutTitle = document.querySelector('#intro h2');
    if (aboutTitle) {
      aboutTitle.textContent = content.aboutTitle;
    }
    
    const aboutDesc = document.querySelector('#intro .content p');
    if (aboutDesc) {
      aboutDesc.textContent = content.aboutDescription;
    }
  } catch (error) {
    console.error('Error updating about section:', error);
  }
  
  // Info labels and values
  const infoLabels = document.querySelectorAll('.info .list label');
  const infoParagraphs = document.querySelectorAll('.info .list p');
  
  if (infoLabels.length >= 4 && infoParagraphs.length >= 4) {
    infoLabels[0].textContent = content.hometown;
    infoParagraphs[0].textContent = content.hometownValue;
    infoLabels[1].textContent = content.residence;
    infoParagraphs[1].textContent = content.residenceValue;
    infoLabels[2].textContent = content.languages;
    infoParagraphs[2].textContent = content.languagesValue;
    infoLabels[3].textContent = content.email;
  }
  
  document.querySelector('.actions .button[download]').textContent = content.downloadCV;
  
  // Skills Section
  document.querySelector('#first h2').textContent = content.skillsTitle;
  const skillFeatures = document.querySelectorAll('#first .features li');
  
  if (skillFeatures.length >= 3) {
    skillFeatures[0].querySelector('h3').textContent = content.webDevTitle;
    skillFeatures[0].querySelector('p').textContent = content.webDevDesc;
    skillFeatures[1].querySelector('h3').textContent = content.coordinationTitle;
    skillFeatures[1].querySelector('p').textContent = content.coordinationDesc;
    skillFeatures[2].querySelector('h3').textContent = content.adaptabilityTitle;
    skillFeatures[2].querySelector('p').textContent = content.adaptabilityDesc;
  }
  
  // Tech Stacks Section
  document.querySelector('#second h2').textContent = content.techStacksTitle;
  const techContainers = document.querySelectorAll('.tech-container h3');
  
  if (techContainers.length >= 3) {
    techContainers[0].textContent = content.frontend;
    techContainers[1].textContent = content.backend;
    techContainers[2].textContent = content.otherTech;
  }
  
  // Projects Section
  document.querySelector('#third h2').textContent = content.projectsTitle;
  document.querySelector('#third .content').textContent = content.projectsIntro;
  
  // Project descriptions
  const projectOverlays = document.querySelectorAll('.overlay .inner-content');
  if (projectOverlays.length >= 5) {
    // NovaCopy AI
    projectOverlays[0].querySelector('p').textContent = content.novacopyDesc;
    // Kanji Cam
    projectOverlays[1].querySelector('p').textContent = content.kanjiCamDesc;
    // Caravana
    projectOverlays[2].querySelector('p').textContent = content.caravanaDesc;
    // Age Calculator
    projectOverlays[3].querySelector('p').textContent = content.ageCalculatorDesc;
    // Rocket Launch Control
    projectOverlays[4].querySelector('p').textContent = content.rocketLaunchDesc;
  }
  
  // Demo buttons
  document.querySelectorAll('.project-btn .label').forEach(label => {
    label.textContent = content.demo;
  });
  
  document.querySelector('.shake-btn').textContent = content.viewMoreGitHub;
  
  // Contact Section
  document.querySelector('#cta h2').textContent = content.consultTitle;
  const ctaParagraphs = document.querySelectorAll('#cta p');
  if (ctaParagraphs.length >= 2) {
    ctaParagraphs[0].textContent = content.availability;
    ctaParagraphs[1].textContent = content.openToProjects;
  }
  
  document.querySelector('#cta .button.primary').textContent = content.sayHi;
  
  // Footer
  document.querySelector('#footer h2').textContent = content.contactTitle;
  document.querySelector('#footer dt').textContent = content.location;
  document.querySelector('#footer dd').textContent = content.locationValue;
}

// Test function to verify language switching works
function testLanguageSwitch() {
  console.log('Testing language switch...');
  console.log('Available languages:', Object.keys(languageContent));
  
  // Test Japanese
  switchLanguage('jp');
  
  setTimeout(() => {
    // Test English  
    switchLanguage('en');
  }, 2000);
}

// Make functions globally accessible for debugging
window.testLanguageSwitch = testLanguageSwitch;
window.switchLanguage = switchLanguage;
