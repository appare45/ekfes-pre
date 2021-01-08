# Readme
**このリポジトリは、文化祭の公式情報ではありません。**

HTMLファイルにエクスポートした物を提出しようとしたら、ローカル環境で見るとパスが上手くつながらないという不具合を発見したので仕方なくGitHubに上げてVercelデプロイするということになりました。サーバーを立てると上手くいきます。

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
