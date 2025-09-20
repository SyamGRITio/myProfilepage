# プロフィールWebサイト 編集ガイド

このガイドでは、プロフィールWebサイトの内容を簡単に変更・カスタマイズする方法を説明します。

## 目次

1. [基本情報の変更](#1-基本情報の変更)
2. [プロフィール画像の変更](#2-プロフィール画像の変更)
3. [SNSリンクの変更](#3-snsリンクの変更)
4. [スキルセットの編集](#4-スキルセットの編集)
5. [資格リストの編集](#5-資格リストの編集)
6. [デザインのカスタマイズ](#6-デザインのカスタマイズ)
7. [その他の機能調整](#7-その他の機能調整)

## 1. 基本情報の変更

### 名前とタイトルの変更

`index.html`ファイルを開き、以下の箇所を編集します：

```html
<!-- ヘッダーのロゴ部分 -->
<div class="logo">しゃま</div>

<!-- メインビジュアル部分 -->
<h1 class="hero-name">しゃま</h1>
<p class="hero-tagline">フリーランスエンジニア | クラウド・インフラ・Python</p>
```

### プロフィール文の変更

`index.html`ファイルの以下の部分を編集します：

```html
<!-- プロフィール部分 -->
<div class="bio">
  <p>旅行業界での経験を活かし、2021年にITエンジニアへとキャリアチェンジ。エンジニア無料スクールでの学習を経て、SES企業でのキャリアを積み、2025年からフリーランスエンジニアとして活動を開始。</p>
  <p>クラウド環境（Azure、AWS）の構築・運用、インフラ管理、Pythonを用いたバックエンド開発など、幅広いスキルを持ち、特にRAG基盤の開発に強みを持っています。常に新しい技術に挑戦し、効率的なシステム構築を目指しています。</p>
</div>
```

### ページタイトルとメタ情報の変更

`index.html`の`<head>`セクション内：

```html
<title>しゃま - フリーランスエンジニア</title>
<meta name="description" content="しゃま - フリーランスエンジニアのプロフィールサイト。クラウド、インフラ、Pythonなどのスキルを持つエンジニアです。">
```

## 2. プロフィール画像の変更

1. 新しいプロフィール画像を`images`フォルダに配置します（推奨サイズ：正方形、最低500x500px）
2. `index.html`ファイル内の以下の部分を編集します：

```html
<img src="images/profile.jpg" alt="しゃまのプロフィール画像" class="profile-img">
```

画像のファイル名を新しいファイル名に変更し、`alt`属性も適宜更新してください。

## 3. SNSリンクの変更

`index.html`ファイル内のSNSリンク部分を編集します。以下の2箇所に同じSNSリンクがあります：

### メインビジュアル部分

```html
<div class="social-links">
  <a href="https://note.com/syam_grit" target="_blank" aria-label="Note"><i class="fas fa-book"></i></a>
  <a href="https://zenn.dev/gritio28tech" target="_blank" aria-label="Zenn"><i class="fas fa-code"></i></a>
  <a href="https://github.com/SyamGRITio" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
  <a href="https://x.com/syam_nihick" target="_blank" aria-label="X"><i class="fab fa-x-twitter"></i></a>
</div>
```

### フッター部分

```html
<div class="social-links">
  <a href="https://note.com/syam_grit" target="_blank" aria-label="Note"><i class="fas fa-book"></i></a>
  <a href="https://zenn.dev/gritio28tech" target="_blank" aria-label="Zenn"><i class="fas fa-code"></i></a>
  <a href="https://github.com/SyamGRITio" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
  <a href="https://x.com/syam_nihick" target="_blank" aria-label="X"><i class="fab fa-x-twitter"></i></a>
</div>
```

各リンクの`href`属性を自分のSNSアカウントのURLに変更します。

### SNSアイコンの変更・追加

現在使用しているアイコンはFont Awesomeのものです。別のSNSを追加したい場合は、以下のような形式で追加できます：

```html
<a href="あなたのSNSのURL" target="_blank" aria-label="SNS名"><i class="fab fa-アイコン名"></i></a>
```

Font Awesomeで利用可能なアイコン一覧は[こちら](https://fontawesome.com/icons)で確認できます。

## 4. スキルセットの編集

`index.html`ファイル内のスキルセクションを編集します：

```html
<div class="skills-container">
  <div class="skill-item">
    <div class="skill-name">クラウド</div>
    <p>Azure、AWS環境の設計・構築・運用、クラウドリソース最適化</p>
  </div>
  <div class="skill-item">
    <div class="skill-name">インフラ</div>
    <p>Windows Server、Active Directory、M365管理、IaC（Infrastructure as Code）</p>
  </div>
  <div class="skill-item">
    <div class="skill-name">開発</div>
    <p>Python（FastAPI）、RAG基盤開発、バックエンド開発</p>
  </div>
  <div class="skill-item">
    <div class="skill-name">セキュリティ</div>
    <p>クラウドセキュリティ設計、ネットワークセキュリティ</p>
  </div>
</div>
```

スキルを追加する場合は、以下のテンプレートを使用して新しい`skill-item`を追加します：

```html
<div class="skill-item">
  <div class="skill-name">スキル名</div>
  <p>スキルの詳細説明</p>
</div>
```

## 5. 資格リストの編集

`index.html`ファイル内の資格セクションを編集します：

```html
<div class="certifications-container">
  <div class="cert-category">
    <h3>Microsoft認定資格</h3>
    <ul class="cert-list">
      <li>AZ-900: Microsoft Azure Fundamentals</li>
      <!-- 他の資格 -->
    </ul>
  </div>
  <div class="cert-category">
    <h3>AWS認定資格</h3>
    <ul class="cert-list">
      <li>AWS Certified Cloud Practitioner (CLF)</li>
      <!-- 他の資格 -->
    </ul>
  </div>
  <div class="cert-category">
    <h3>その他の資格</h3>
    <ul class="cert-list">
      <li>JP1認定エンジニア(V12)</li>
      <!-- 他の資格 -->
    </ul>
  </div>
</div>
```

### 資格の追加・削除

資格を追加するには、該当するカテゴリの`<ul class="cert-list">`内に`<li>`要素を追加します：

```html
<li>新しい資格名</li>
```

### 資格カテゴリの追加

新しいカテゴリを追加するには、以下のテンプレートを使用します：

```html
<div class="cert-category">
  <h3>新しいカテゴリ名</h3>
  <ul class="cert-list">
    <li>資格1</li>
    <li>資格2</li>
    <!-- 他の資格 -->
  </ul>
</div>
```

## 6. デザインのカスタマイズ

### カラーテーマの変更

`css/style.css`ファイルの先頭にあるCSS変数を編集することで、サイト全体のカラーテーマを簡単に変更できます：

```css
:root {
  /* ダークモード（デフォルト） */
  --bg-color: #222222;
  --text-color: #EEEEEE;
  --accent-color: #4A89DC;
  --secondary-color: #666666;
  --border-color: #444444;
  --card-bg-color: #333333;
  --hover-color: #555555;
  
  /* アニメーション */
  --transition-speed: 0.3s;
}

/* ライトモード */
[data-theme="light"] {
  --bg-color: #F5F5F5;
  --text-color: #333333;
  --accent-color: #3A6BC5;
  --secondary-color: #888888;
  --border-color: #DDDDDD;
  --card-bg-color: #FFFFFF;
  --hover-color: #EEEEEE;
}
```

各変数の役割：
- `--bg-color`: 背景色
- `--text-color`: 文字色
- `--accent-color`: アクセントカラー（見出しやリンク）
- `--secondary-color`: 補助色
- `--border-color`: 境界線の色
- `--card-bg-color`: カード背景色
- `--hover-color`: ホバー時の色

### フォントの変更

フォントを変更するには、`index.html`の`<head>`セクション内のGoogle Fontsリンクと、`css/style.css`のフォント指定を変更します：

1. `index.html`内のGoogle Fontsリンク：

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

2. `css/style.css`内のフォント指定：

```css
body {
  font-family: 'Roboto', sans-serif;
  /* 他のスタイル */
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
  /* 他のスタイル */
}
```

## 7. その他の機能調整

### ダークモードのデフォルト設定

`js/main.js`ファイル内の以下の部分を編集することで、デフォルトのテーマを変更できます：

```javascript
// 初期テーマの設定
if (!currentTheme) {
  currentTheme = prefersDarkScheme.matches ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
}
```

ダークモードを常にデフォルトにしたい場合は、以下のように変更します：

```javascript
// 初期テーマの設定
if (!currentTheme) {
  currentTheme = 'dark'; // 常にダークモードをデフォルトに
  localStorage.setItem('theme', currentTheme);
}
```

### アニメーション速度の調整

`css/style.css`ファイル内の変数を編集することで、アニメーション速度を調整できます：

```css
:root {
  /* 他の変数 */
  --transition-speed: 0.3s; /* アニメーション速度 */
}
```

値を大きくするとアニメーションが遅くなり、小さくすると速くなります。

### フッターの著作権表示の変更

`index.html`ファイル内のフッター部分を編集します：

```html
<p class="copyright">&copy; <span id="current-year"></span> しゃま. All Rights Reserved.</p>
```

「しゃま」の部分を自分の名前や組織名に変更してください。

---

このガイドで説明していない変更や、より複雑なカスタマイズが必要な場合は、HTML、CSS、JavaScriptの基本的な知識が必要になります。
