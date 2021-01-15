# Readme
**このリポジトリは、実在の組織・学校とは一切関係ありません**
**当サイトの著作権は制作者である@appare45に帰属します**

HTMLファイルにエクスポートした物を提出しようとしたら、ローカル環境で見るとパスが上手くつながらないという不具合を発見したので仕方なくGitHubに上げてVercelデプロイするということになりました。サーバーを立てると上手くいきます。

![](https://img.shields.io/github/checks-status/appare45/ekfes-pre/main)

## Usage
Setup
```bash
git clone https://github.com/appare45/ekfes-pre.git
npm install
npm run build
```

静的データの出力
```bash
npm run export
```

静的データのテスト（ローカルサーバーを立ててプレビューする）
```bash
npm run serve
```

開発環境
```bash
npm run dev
```
