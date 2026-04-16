# しゃまのプロフィールサイト

フリーランスエンジニアとしての**プロフィール・スキル・資格・経歴/ポートフォリオ**を公開している個人 Web サイトです。
SNS プロフィールリンクや面談時の資料として活用しています。

## このプロジェクトについて

> **Manus AI** を活用して構築した個人プロジェクト**です。AI エージェントによるサイト生成のキャッチアップを目的に、デザイン・コンテンツ構成からデプロイまでを通しで実施しました。
>
> 学習目的として、独自ドメイン（`syam-gritio.com`）を自分で取得し、Azure Static Web Apps へカスタムドメインとして紐付ける一連の流れも自前で構成しています。

### 機密情報の取り扱いについて

本サイトの「経歴/ポートフォリオ」ページに掲載しているアーキテクチャ図および案件紹介は、**実際の客先成果物ではなく、私自身が経験した案件をもとに再構成・作り直したもの**です。

- 顧客名・プロジェクト名・固有のリソース名等の機密情報はすべて除外
- 構成イメージは一般化して再描画
- 案件記述は業種レベル（例：「大手保険会社向け」「不動産業者向け」）に抽象化

機密保持義務を遵守した上で、技術的な経験や設計思想を伝えることを目的としています。

## 公開サイト

🔗 **[https://syam-gritio.com](https://syam-gritio.com)**

### サイト画面

| トップページ | プロフィール・スキル・資格 |
|:---:|:---:|
| <img width="400" alt="トップページ" src="https://github.com/user-attachments/assets/f67fe8a1-507f-49ef-b278-1aff66ea27ce" /> | <img width="400" alt="プロフィール" src="https://github.com/user-attachments/assets/c2f355e2-5065-49d3-8f6b-78fd1c9c8d9f" /> |

| 経歴/ポートフォリオページ |
|:---:|
| <img width="500" alt="ポートフォリオ" src="https://github.com/user-attachments/assets/fc64b60e-09d5-434d-beb7-b4abb1d57437" /> |

### Azure 構成

| Static Web App 概要 | カスタムドメイン設定 |
|:---:|:---:|
| <img width="500" alt="Azure Portal Overview" src="https://github.com/user-attachments/assets/2c8e27a4-7006-415a-9fbe-312b7479687c" /> | <img width="500" alt="Custom Domains" src="https://github.com/user-attachments/assets/c7a62d27-311f-4f10-93fb-9e3ec6d5fa1c" /> |

## サイト構成

- **トップページ** — プロフィール、スキルセット、所有資格を1ページに集約
- **経歴/ポートフォリオページ** — 主要プロジェクト6件をアーキテクチャ図付きで紹介
- **ライト/ダークテーマ切替** — ユーザー設定で表示を切替可能
- **SNS リンク** — Note / Zenn / GitHub / X(Twitter) への導線

## アーキテクチャ

```
独自ドメイン (syam-gritio.com)  ←── ドメインレジストラで取得
        │
        │  CNAME
        ▼
Azure Static Web Apps (Free Tier)
        │
        │  自動 SSL/TLS 証明書
        │  GitHub 連携 CD
        ▼
GitHub リポジトリ (main branch)
        │
        └── HTML / CSS / JS
```

### 学習ポイント

このプロジェクトを通じて以下を実践的に習得しました。

- **独自ドメインの取得と DNS 設定** — レジストラで `syam-gritio.com` を取得し、Azure SWA 向けに CNAME / TXT レコードを設定
- **Azure Static Web Apps のカスタムドメイン構成** — 自動生成ドメイン（`*.azurestaticapps.net`）と独自ドメインの両方を Validated 状態で運用
- **無料 SSL/TLS 証明書の自動プロビジョニング** — Azure SWA による証明書管理（自動更新）
- **GitHub 連携による継続的デプロイ** — `main` ブランチへの push で自動デプロイ
- **SPA fallback 設定** — `staticwebapp.config.json` でルーティング制御

## 技術スタック

| レイヤー | 技術 |
|---|---|
| Frontend | HTML / CSS / JavaScript（フレームワークなし） |
| ホスティング | Azure Static Web Apps (Free) |
| ドメイン | 独自取得（カスタムドメイン構成） |
| SSL/TLS | Azure SWA 自動プロビジョニング |
| CI/CD | GitHub Actions（Azure SWA 標準ワークフロー） |
| サイト生成 | Manus AI |

## ファイル構成

```
.
├── index.html                                    # トップページ
├── portfolio.html                                # 経歴/ポートフォリオページ
├── css/                                          # スタイルシート
├── js/                                           # JavaScript
├── images/                                       # 画像アセット（プロフィール写真、アーキ図等）
├── staticwebapp.config.json                      # Azure SWA 設定（SPA fallback 等）
├── .github/workflows/                            # GitHub Actions（CI/CD）
├── Azure Static Web Appsデプロイマニュアル.md      # デプロイ手順書
└── プロフィールWebサイト 編集ガイド（更新版）.md     # コンテンツ編集ガイド
```
