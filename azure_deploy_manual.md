# Azure Static Web Appsデプロイマニュアル

このマニュアルでは、ポートフォリオWebサイトをAzure Static Web Appsにデプロイする方法を説明します。

## 目次

1. [Azure Static Web Appsの概要](#1-azure-static-web-appsの概要)
2. [デプロイ前の準備](#2-デプロイ前の準備)
3. [必要な設定ファイル](#3-必要な設定ファイル)
4. [GitHubリポジトリへのプッシュ](#4-githubリポジトリへのプッシュ)
5. [GitHub Actionsワークフローの設定](#5-github-actionsワークフローの設定)
6. [デプロイのトラブルシューティング](#6-デプロイのトラブルシューティング)
7. [カスタムドメインの設定（オプション）](#7-カスタムドメインの設定オプション)
8. [サイトの更新方法](#8-サイトの更新方法)

## 1. Azure Static Web Appsの概要

Azure Static Web Appsは、静的Webサイトをホスティングするためのサービスです。GitHubやAzure DevOpsと連携して、コードがリポジトリにプッシュされると自動的にビルド・デプロイを行います。

**メリット**：
- 無料プランあり（月間100GBの帯域幅、2つまでのカスタムドメイン）
- グローバルCDNによる高速配信
- 自動HTTPS対応
- GitHub Actionsによる自動デプロイ

## 2. デプロイ前の準備

### 必要なもの

- GitHubアカウント
- Azureアカウント
- 静的Webサイトのファイル（HTML、CSS、JavaScript）

### Azure Static Web Appsリソースの作成

既にAzure Static Web Appsリソースを作成済みであることを確認しました。
URL: https://gray-ocean-0c7b61810.1.azurestaticapps.net

### GitHubリポジトリの確認

既にGitHubリポジトリを作成済みであることを確認しました。
リポジトリ: https://github.com/SyamGRITio/myProfilepage

## 3. 必要な設定ファイル

### staticwebapp.config.json

Azure Static Web Appsでは、`staticwebapp.config.json`ファイルを使用してルーティングやヘッダーなどの設定を行います。このファイルはリポジトリのルートに配置する必要があります。

以下は基本的な設定例です：

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif}", "/css/*", "/js/*"]
  },
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
  "responseOverrides": {
    "404": {
      "rewrite": "/index.html",
      "statusCode": 200
    }
  },
  "globalHeaders": {
    "cache-control": "no-cache"
  }
}
```

この設定は以下のことを行います：
- 存在しないパスへのアクセスを`index.html`にリダイレクト
- 画像、CSS、JSファイルへのアクセスは通常通り処理
- キャッシュ制御の設定

### GitHub Actionsワークフロー設定

Azure Static Web Appsは、GitHubリポジトリに`.github/workflows/`ディレクトリ内にワークフロー設定ファイルを自動的に作成します。

**重要**: 静的HTMLサイトの場合、特別なビルドプロセスは必要ありません。エラーメッセージにあるように、`package.json`の`build`スクリプトが見つからないというエラーが発生している場合は、以下の対応が必要です。

## 4. GitHubリポジトリへのプッシュ

### ローカルでGitを設定

1. Gitをインストールしていない場合は、[Git公式サイト](https://git-scm.com/)からインストールします。
2. ターミナル（コマンドプロンプト）を開き、以下のコマンドを実行してGitの初期設定を行います：

```bash
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"
```

### リポジトリのクローン

1. GitHubリポジトリをローカルにクローンします：

```bash
git clone https://github.com/SyamGRITio/myProfilepage.git
cd myProfilepage
```

### ファイルの配置

1. ポートフォリオサイトのファイル（HTML、CSS、JS、画像など）をクローンしたリポジトリのディレクトリにコピーします。
2. `staticwebapp.config.json`ファイルをリポジトリのルートに配置します。

### 変更をコミットしてプッシュ

1. 以下のコマンドを実行して、変更をステージングします：

```bash
git add .
```

2. 変更をコミットします：

```bash
git commit -m "Add portfolio website files"
```

3. 変更をGitHubにプッシュします：

```bash
git push origin main
```

## 5. GitHub Actionsワークフローの設定

### ワークフローファイルの確認

GitHubリポジトリの`.github/workflows/`ディレクトリ内に、Azure Static Web Appsが自動的に作成したワークフローファイル（例：`azure-static-web-apps-gray-ocean-0c7b61810.yml`）があるはずです。

### ワークフローファイルの修正

エラーメッセージから、ビルドプロセスに問題があることがわかります。静的HTMLサイトの場合、特別なビルドプロセスは必要ありません。ワークフローファイルを以下のように修正します：

1. GitHubリポジトリのウェブインターフェースで、`.github/workflows/`ディレクトリ内のYAMLファイルを開きます。
2. 以下のように`app_location`と`api_location`、`output_location`の設定を確認・修正します：

```yaml
          ###### Repository/Build Configurations ######
          app_location: "/" # アプリのルートディレクトリ
          api_location: "" # APIがない場合は空にする
          output_location: "" # 静的HTMLサイトの場合は空にする
          ###### End of Repository/Build Configurations ######
```

3. 必要に応じて、以下のように`skip_app_build`パラメータを追加して、ビルドプロセスをスキップすることもできます：

```yaml
          ###### Repository/Build Configurations ######
          app_location: "/"
          api_location: ""
          output_location: ""
          skip_app_build: true # ビルドプロセスをスキップ
          ###### End of Repository/Build Configurations ######
```

4. 変更を保存します。

## 6. デプロイのトラブルシューティング

### 一般的なエラーと解決策

#### ビルドエラー: package.jsonが見つからない

エラーメッセージ:
```
Error: Could not find either 'build' or 'build:azure' node under 'scripts' in package.json.
```

**解決策**:
- 静的HTMLサイトの場合、`package.json`は必要ありません。
- ワークフローファイルの`output_location`を空（`""`）に設定します。
- `skip_app_build: true`を追加してビルドプロセスをスキップします。

#### 404エラー: ファイルが見つからない

**解決策**:
- `staticwebapp.config.json`ファイルでルーティング設定を確認します。
- ファイルパスが正しいか確認します。
- ディレクトリ構造が正しいか確認します。

### デプロイログの確認方法

1. GitHubリポジトリの「Actions」タブをクリックします。
2. 最新のワークフローランを選択します。
3. 「Build and Deploy Job」をクリックして詳細なログを確認します。

## 7. カスタムドメインの設定（オプション）

Azure Static Web Appsでカスタムドメインを設定する手順：

1. Azureポータルにログインします。
2. Static Web Appsリソースに移動します。
3. 左側のメニューから「カスタムドメイン」を選択します。
4. 「カスタムドメインの追加」をクリックします。
5. ドメイン名を入力し、「次へ」をクリックします。
6. 表示されるDNS検証レコードをドメインプロバイダーのDNS設定に追加します。
7. 検証が完了したら、「追加」をクリックします。

## 8. サイトの更新方法

サイトを更新するには、以下の手順を行います：

1. ローカルでファイルを編集します。
2. 変更をコミットします：
   ```bash
   git add .
   git commit -m "Update website content"
   ```
3. 変更をプッシュします：
   ```bash
   git push origin main
   ```

プッシュすると、GitHub Actionsが自動的に実行され、サイトが更新されます。

---

このマニュアルに従って操作することで、ポートフォリオWebサイトをAzure Static Web Appsに正しくデプロイすることができます。何か問題が発生した場合は、[Azure Static Web Appsのドキュメント](https://docs.microsoft.com/ja-jp/azure/static-web-apps/)も参考にしてください。
