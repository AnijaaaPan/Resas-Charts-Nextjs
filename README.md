# 都道府県別人口推移グラフ生成アプリケーション

このプロジェクトは、都道府県別の人口推移グラフを動的に生成するReactおよびNext.jsアプリケーションです。ユーザーは都道府県を選択し、人口の種類（総人口、年少人口、生産年齢人口、老年人口）を選択することで、人口推移グラフを確認することができます。

## プロジェクト構成

```
├─app
│  │  layout.tsx
│  │  page.tsx
│  │
│  ├─components
│  │  ├─common
│  │  │  PrefectureCheckBoxInput.tsx
│  │  │  PopulationTypeRadioInput.tsx
│  │  │
│  │  ├─graph
│  │  │  Chart.tsx
│  │  │  PopulationGraph.tsx
│  │  │
│  │  └─population
│  │     PopulationTypeRadioGroup.tsx
│  │     PrefectureCheckBoxGroup.tsx
│  │
│  └─hooks
│     useFetchPrefecturesData.ts
│     useFetchPrefPopulationData.ts
│     usePageLogic.ts
│
├─styles
│  CheckBox.module.css
│  globals.css
│  Graph.module.css
│
└─types
   IProps.ts
   IResas.ts
```

## インストールとセットアップ

1. リポジトリをクローンします:
   ```bash
   git clone https://github.com/AnijaaaPan/Resas-Charts-Nextjs.git
   cd Resas-Charts-Nextjs
   ```

2. 必要なパッケージをインストールします:
   ```bash
   npm install
   ```

3. 環境変数を設定します:
   - プロジェクトルートに`.env`ファイルを作成し、以下の内容を追加します:
     ```
     NEXT_PUBLIC_RESAS_API_KEY=your_resas_api_key
     ```

4. 開発サーバーを起動します:
   ```bash
   npm run dev
   ```

## 使用技術

- React
- Next.js
- TypeScript
- Highcharts
- Axios

## ディレクトリ構成とコンポーネントの説明

### app

#### layout.tsx
> アプリケーション全体のレイアウトを定義します。メタデータやフォントの設定を行います。

#### page.tsx
> ホームページのメインコンポーネントです。チェックボックスグループ、ラジオボタングループ、人口推移グラフを表示します。

### components/common

#### PrefectureCheckBoxInput.tsx
> 都道府県選択用のチェックボックスコンポーネントです。選択状態を管理します。

#### PopulationTypeRadioInput.tsx
> 人口タイプ選択用のラジオボタンコンポーネントです。選択状態を管理します。

### components/graph

#### Chart.tsx
> Highchartsを使用して人口推移グラフを描画するコンポーネントです。人口データを基に折れ線グラフを表示します。

#### PopulationGraph.tsx
> グラフのラッパーコンポーネントで、スタイルを適用し、`Chart.tsx`を内包します。

### components/population

#### PopulationTypeRadioGroup.tsx
> 複数の人口タイプ選択用のラジオボタンをまとめるコンポーネントです。

#### PrefectureCheckBoxGroup.tsx
> 複数の都道府県選択用のチェックボックスをまとめるコンポーネントです。

### hooks

#### useFetchPrefecturesData.ts
> 都道府県データを取得するカスタムフックです。

#### useFetchPrefPopulationData.ts
> 各都道府県の人口データを取得し、管理するカスタムフックです。

#### usePageLogic.ts
> ページ全体のロジックを管理するカスタムフックです。都道府県データや人口データ、選択された人口タイプをまとめて管理します。

### styles

#### CheckBox.module.css
> チェックボックスおよびラジオボタンのスタイルを定義します。

#### globals.css
> グローバルなスタイルを定義します。

#### Graph.module.css
> グラフのスタイルを定義します。

### types

#### IProps.ts
> 各コンポーネントのプロパティの型を定義します。

#### IResas.ts
> RESAS APIから取得するデータの型を定義します。

## ライセンス
> このプロジェクトはMITライセンスのもとで公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。
