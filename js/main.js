/**
 * プロフィールWebサイト JavaScript
 * 作成日: 2025年5月25日
 * 更新日: 2025年10月1日
 */

// DOM要素の読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function () {
  // 現在の年を取得してフッターに表示
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // テーマ切替機能
  setupThemeToggle();

  // モバイルメニュー機能
  setupMobileMenu();

  // スクロールアニメーション
  setupScrollAnimation();
});

/**
 * テーマ切替機能のセットアップ
 */
function setupThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  const themeText = themeToggle.querySelector('.theme-text');

  // システムの設定を確認
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // ローカルストレージからテーマ設定を取得
  let currentTheme = localStorage.getItem('theme');

  // 初期テーマの設定
  if (!currentTheme) {
    currentTheme = prefersDarkScheme.matches ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  }

  // テーマを適用
  applyTheme(currentTheme);

  // テーマ切替ボタンのクリックイベント
  themeToggle.addEventListener('click', function () {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    currentTheme = newTheme;
  });

  // システムのテーマ変更を検知
  prefersDarkScheme.addEventListener('change', function (e) {
    const newTheme = e.matches ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    currentTheme = newTheme;
  });
}

/**
 * テーマを適用する
 * @param {string} theme - 'dark' または 'light'
 */
function applyTheme(theme) {
  const themeIcon = document.querySelector('.theme-toggle i');
  const themeText = document.querySelector('.theme-toggle .theme-text');

  if (theme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.className = 'fas fa-sun';
    if (themeText) themeText.textContent = 'ライト';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.className = 'fas fa-moon';
    if (themeText) themeText.textContent = 'ダーク';
  }
}

/**
 * モバイルメニュー機能のセットアップ
 */
function setupMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    mobileMenuBtn.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);
  });

  // ナビゲーションリンクのクリックでメニューを閉じる
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        mobileMenuBtn.setAttribute('aria-expanded', false);
      }
    });
  });
}

/**
 * スクロールアニメーションのセットアップ
 */
function setupScrollAnimation() {
  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // スクロールによるセクション表示アニメーション
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}
